import { useState, useEffect } from 'react';
import { FamilyProfile, CompletedState, FamilyRuleHabit } from '../types';
import { INITIAL_FAMILY_HABITS, DEFAULT_PARISH } from '../data/catecheticalData';

const STORAGE_KEY_PROFILE = 'baptism_guide_profile_v1';
const STORAGE_KEY_STATE = 'baptism_guide_state_v1';
const STORAGE_KEY_HABITS = 'baptism_guide_habits_v1';

export function useBaptismState() {
  const [profile, setProfile] = useState<FamilyProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      childName: '',
      baptismDate: '',
      parishName: DEFAULT_PARISH,
      parentsNames: '',
      godparentsNames: '',
      ministerName: ''
    };
  });

  const [habits, setHabits] = useState<FamilyRuleHabit[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_HABITS);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_FAMILY_HABITS;
  });

  const [state, setState] = useState<CompletedState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATE);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      conversations: {
        1: { completedSteps: [1], reflectionNote: '', masteredEssentials: [], actChecked: false },
        2: { completedSteps: [1], reflectionNote: '', masteredEssentials: [], actChecked: false },
        3: { completedSteps: [1], reflectionNote: '', masteredEssentials: [], actChecked: false }
      },
      readinessChecks: [],
      priestQuestions: [],
      selectedHabits: INITIAL_FAMILY_HABITS.filter(h => h.selected).map(h => h.id),
      dayChecklist: [],
      anniversaryRemindersEnabled: false
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_HABITS, JSON.stringify(habits));
    } catch {
      // ignore
    }
  }, [habits]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const updateProfile = (updates: Partial<FamilyProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const markStepComplete = (convoId: number, stepNumber: number) => {
    setState(prev => {
      const currentConvo = prev.conversations[convoId] || {
        completedSteps: [],
        reflectionNote: '',
        masteredEssentials: [],
        actChecked: false
      };
      const steps = new Set(currentConvo.completedSteps);
      steps.add(stepNumber);
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [convoId]: {
            ...currentConvo,
            completedSteps: Array.from(steps)
          }
        }
      };
    });
  };

  const saveReflectionNote = (convoId: number, note: string) => {
    setState(prev => {
      const currentConvo = prev.conversations[convoId] || {
        completedSteps: [],
        reflectionNote: '',
        masteredEssentials: [],
        actChecked: false
      };
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [convoId]: {
            ...currentConvo,
            reflectionNote: note
          }
        }
      };
    });
  };

  const toggleMasteredEssential = (convoId: number, essentialId: number) => {
    setState(prev => {
      const currentConvo = prev.conversations[convoId] || {
        completedSteps: [],
        reflectionNote: '',
        masteredEssentials: [],
        actChecked: false
      };
      const current = new Set(currentConvo.masteredEssentials);
      if (current.has(essentialId)) {
        current.delete(essentialId);
      } else {
        current.add(essentialId);
      }
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [convoId]: {
            ...currentConvo,
            masteredEssentials: Array.from(current)
          }
        }
      };
    });
  };

  const toggleActChecked = (convoId: number) => {
    setState(prev => {
      const currentConvo = prev.conversations[convoId] || {
        completedSteps: [],
        reflectionNote: '',
        masteredEssentials: [],
        actChecked: false
      };
      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [convoId]: {
            ...currentConvo,
            actChecked: !currentConvo.actChecked
          }
        }
      };
    });
  };

  const toggleReadinessCheck = (id: string) => {
    setState(prev => {
      const current = new Set(prev.readinessChecks);
      if (current.has(id)) {
        current.delete(id);
      } else {
        current.add(id);
      }
      return { ...prev, readinessChecks: Array.from(current) };
    });
  };

  const addPriestQuestion = (question: string) => {
    if (!question.trim()) return;
    setState(prev => ({
      ...prev,
      priestQuestions: [...prev.priestQuestions, question.trim()]
    }));
  };

  const removePriestQuestion = (index: number) => {
    setState(prev => ({
      ...prev,
      priestQuestions: prev.priestQuestions.filter((_, i) => i !== index)
    }));
  };

  const toggleHabit = (id: string) => {
    setHabits(prev =>
      prev.map(h => (h.id === id ? { ...h, selected: !h.selected } : h))
    );
  };

  const addCustomHabit = (rhythm: string, title: string, description: string) => {
    const newHabit: FamilyRuleHabit = {
      id: `custom-${Date.now()}`,
      rhythm,
      title,
      description,
      selected: true,
      isCustom: true
    };
    setHabits(prev => [...prev, newHabit]);
  };

  const removeCustomHabit = (id: string) => {
    setHabits(prev => prev.filter(h => h.id !== id));
  };

  const toggleDayChecklist = (id: string) => {
    setState(prev => {
      const current = new Set(prev.dayChecklist);
      if (current.has(id)) {
        current.delete(id);
      } else {
        current.add(id);
      }
      return { ...prev, dayChecklist: Array.from(current) };
    });
  };

  // Overall calculation
  const convo1Complete = (state.conversations[1]?.completedSteps?.length || 0) >= 6;
  const convo2Complete = (state.conversations[2]?.completedSteps?.length || 0) >= 6;
  const convo3Complete = (state.conversations[3]?.completedSteps?.length || 0) >= 6;
  const allConversationsComplete = convo1Complete && convo2Complete && convo3Complete;

  const totalStepsCompleted =
    (state.conversations[1]?.completedSteps?.length || 0) +
    (state.conversations[2]?.completedSteps?.length || 0) +
    (state.conversations[3]?.completedSteps?.length || 0);
  const totalStepsTarget = 18; // 3 x 6
  const overallProgressPercentage = Math.round((totalStepsCompleted / totalStepsTarget) * 100);

  return {
    profile,
    updateProfile,
    habits,
    toggleHabit,
    addCustomHabit,
    removeCustomHabit,
    state,
    markStepComplete,
    saveReflectionNote,
    toggleMasteredEssential,
    toggleActChecked,
    toggleReadinessCheck,
    addPriestQuestion,
    removePriestQuestion,
    toggleDayChecklist,
    convo1Complete,
    convo2Complete,
    convo3Complete,
    allConversationsComplete,
    overallProgressPercentage
  };
}
