import { useState } from 'react';
import { useBaptismState } from './hooks/useBaptismState';
import { Navbar, ActiveTab } from './components/Navbar';
import { WelcomeView } from './components/WelcomeView';
import { ConversationView } from './components/ConversationView';
import { RiteGuide } from './components/RiteGuide';
import { GodparentSponsors } from './components/GodparentSponsors';
import { TwelveEssentials } from './components/TwelveEssentials';
import { ReadinessAssessment } from './components/ReadinessAssessment';
import { FamilyRuleOfLife } from './components/FamilyRuleOfLife';
import { DayOfBaptismGuide } from './components/DayOfBaptismGuide';
import { EmergencyAndDoctrinalSources } from './components/EmergencyAndDoctrinalSources';
import { CatechismQA } from './components/CatechismQA';
import { PersonalizeModal } from './components/PersonalizeModal';
import { PrintableBooklet } from './components/PrintableBooklet';
import { CelebrationModal } from './components/CelebrationModal';
import { CONVERSATIONS } from './data/catecheticalData';
import { Heart, Church, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('welcome');
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);

  const {
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
  } = useBaptismState();

  const handlePrint = () => {
    setIsPrintMode(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F0] text-[#3D3D2D] selection:bg-[#E2DDD4] selection:text-[#2C2C1E]">
      {/* If Print Mode is active, render the dedicated Printable Booklet view */}
      {isPrintMode ? (
        <PrintableBooklet
          profile={profile}
          state={state}
          habits={habits}
          onClosePrint={() => setIsPrintMode(false)}
        />
      ) : (
        <>
          {/* Main Top Navigation */}
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            profile={profile}
            onOpenPersonalize={() => setIsPersonalizeOpen(true)}
            overallProgressPercentage={overallProgressPercentage}
            allConversationsComplete={allConversationsComplete}
            onPrint={handlePrint}
          />

          {/* Main Body Content Switcher */}
          <main className="flex-1 pb-16">
            {activeTab === 'welcome' && (
              <WelcomeView
                profile={profile}
                onOpenPersonalize={() => setIsPersonalizeOpen(true)}
                onNavigate={(tab) => setActiveTab(tab)}
                convo1Complete={convo1Complete}
                convo2Complete={convo2Complete}
                convo3Complete={convo3Complete}
              />
            )}

            {activeTab === 'convo-1' && (
              <ConversationView
                conversation={CONVERSATIONS[0]}
                profile={profile}
                completedSteps={state.conversations[1]?.completedSteps || []}
                reflectionNote={state.conversations[1]?.reflectionNote || ''}
                masteredEssentials={state.conversations[1]?.masteredEssentials || []}
                actChecked={state.conversations[1]?.actChecked || false}
                onMarkStepComplete={markStepComplete}
                onSaveReflectionNote={saveReflectionNote}
                onToggleMasteredEssential={toggleMasteredEssential}
                onToggleActChecked={toggleActChecked}
                onNextConversation={() => setActiveTab('convo-2')}
              />
            )}

            {activeTab === 'convo-2' && (
              <ConversationView
                conversation={CONVERSATIONS[1]}
                profile={profile}
                completedSteps={state.conversations[2]?.completedSteps || []}
                reflectionNote={state.conversations[2]?.reflectionNote || ''}
                masteredEssentials={state.conversations[2]?.masteredEssentials || []}
                actChecked={state.conversations[2]?.actChecked || false}
                onMarkStepComplete={markStepComplete}
                onSaveReflectionNote={saveReflectionNote}
                onToggleMasteredEssential={toggleMasteredEssential}
                onToggleActChecked={toggleActChecked}
                onNextConversation={() => setActiveTab('convo-3')}
              />
            )}

            {activeTab === 'convo-3' && (
              <ConversationView
                conversation={CONVERSATIONS[2]}
                profile={profile}
                completedSteps={state.conversations[3]?.completedSteps || []}
                reflectionNote={state.conversations[3]?.reflectionNote || ''}
                masteredEssentials={state.conversations[3]?.masteredEssentials || []}
                actChecked={state.conversations[3]?.actChecked || false}
                onMarkStepComplete={markStepComplete}
                onSaveReflectionNote={saveReflectionNote}
                onToggleMasteredEssential={toggleMasteredEssential}
                onToggleActChecked={toggleActChecked}
                onNextConversation={() => {
                  setIsCelebrationOpen(true);
                  setActiveTab('readiness');
                }}
              />
            )}

            {activeTab === 'rite' && <RiteGuide />}

            {activeTab === 'godparents' && <GodparentSponsors profile={profile} />}

            {activeTab === 'essentials' && <TwelveEssentials />}

            {activeTab === 'readiness' && (
              <ReadinessAssessment
                checkedItems={state.readinessChecks}
                onToggleCheck={toggleReadinessCheck}
                priestQuestions={state.priestQuestions}
                onAddQuestion={addPriestQuestion}
                onRemoveQuestion={removePriestQuestion}
              />
            )}

            {activeTab === 'family-rule' && (
              <FamilyRuleOfLife
                habits={habits}
                onToggleHabit={toggleHabit}
                onAddCustomHabit={addCustomHabit}
                onRemoveCustomHabit={removeCustomHabit}
                profile={profile}
              />
            )}

            {activeTab === 'day-of' && (
              <DayOfBaptismGuide
                profile={profile}
                checklist={state.dayChecklist}
                onToggleChecklist={toggleDayChecklist}
              />
            )}

            {activeTab === 'emergency-sources' && <EmergencyAndDoctrinalSources />}

            {activeTab === 'qa' && <CatechismQA />}
          </main>

          {/* Footer */}
          <footer className="no-print bg-[#F0EDE6] border-t border-[#E2DDD4] py-8 text-center text-xs text-[#7A7468] space-y-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-[#5A5A40] flex items-center justify-center">
                  <div className="w-0.5 h-3 bg-[#5A5A40] rounded-full"></div>
                </div>
                <span className="font-serif italic font-semibold text-sm text-[#2C2C1E]">
                  {profile.parishName || "The Gateway of Grace"}
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-[#6B6658]">
                Father John Owen's Catechetical Preparation • Parish Edition
              </p>
              <div className="flex items-center gap-1.5 text-[#5A5A40] font-medium text-xs">
                <Heart className="w-3.5 h-3.5 fill-[#5A5A40]/20" />
                <span>"New life in Christ begins here"</span>
              </div>
            </div>
          </footer>

          {/* Modals */}
          <PersonalizeModal
            isOpen={isPersonalizeOpen}
            onClose={() => setIsPersonalizeOpen(false)}
            profile={profile}
            onSave={updateProfile}
          />

          <CelebrationModal
            isOpen={isCelebrationOpen}
            onClose={() => setIsCelebrationOpen(false)}
            profile={profile}
            onPrint={handlePrint}
          />
        </>
      )}
    </div>
  );
}
