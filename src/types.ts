export interface FamilyProfile {
  childName: string;
  baptismDate: string;
  parishName: string;
  parentsNames: string;
  godparentsNames: string;
  ministerName: string;
}

export interface ConversationStep {
  id: number;
  title: string;
  subtitle: string;
  type: 'begin' | 'read' | 'talk' | 'understand' | 'pray' | 'act';
}

export interface EssentialItem {
  id: number;
  question: string;
  conciseAnswer: string;
  theologicalContext?: string;
  scriptureRef?: string;
  catechismRef?: string;
}

export interface ConversationData {
  id: number;
  number: number;
  title: string;
  subtitle: string;
  theme: string;
  rememberPoints: string[];
  readSections: {
    heading: string;
    content: string[];
    scriptureQuote?: { text: string; reference: string };
  }[];
  talkPrompt: {
    mainQuestion: string;
    subPrompts: string[];
    guidanceNotes: string;
  };
  essentials: EssentialItem[];
  prayer: {
    title: string;
    text: string;
  };
  thisWeek: {
    mainAction: string;
    suggestions: string[];
  };
}

export interface RiteStep {
  stepNumber: number;
  partName: string;
  whatItMeans: string;
  liturgicalDetails: string;
  keyAction: string;
  familyRole: string;
  wordsSpoken?: string;
  liturgicalSign?: string;
}

export interface GodparentRequirement {
  id: string;
  requirement: string;
  whatItMeans: string;
  canonicalReference: string;
  practicalTip: string;
}

export interface ReadinessCheckItem {
  id: string;
  statement: string;
  clarification: string;
  relatedConversation: number;
}

export interface FamilyRuleHabit {
  id: string;
  rhythm: string;
  title: string;
  description: string;
  selected: boolean;
  isCustom?: boolean;
}

export interface CompletedState {
  conversations: {
    [key: number]: {
      completedSteps: number[];
      reflectionNote: string;
      masteredEssentials: number[];
      actChecked: boolean;
      completedDate?: string;
    };
  };
  readinessChecks: string[];
  priestQuestions: string[];
  selectedHabits: string[];
  dayChecklist: string[];
  anniversaryRemindersEnabled: boolean;
}
