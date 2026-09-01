import type { ComponentType } from 'react';
import {
  Church,
  BookOpen,
  ScrollText,
  Users,
  CheckSquare,
  Sparkles,
  Printer,
  Edit3,
  Flame,
  HelpCircle,
  ShieldCheck,
  Award
} from 'lucide-react';
import { FamilyProfile } from '../types';

export type ActiveTab =
  | 'welcome'
  | 'convo-1'
  | 'convo-2'
  | 'convo-3'
  | 'rite'
  | 'godparents'
  | 'essentials'
  | 'readiness'
  | 'family-rule'
  | 'day-of'
  | 'emergency-sources'
  | 'qa';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  profile: FamilyProfile;
  onOpenPersonalize: () => void;
  overallProgressPercentage: number;
  allConversationsComplete: boolean;
  onPrint: () => void;
}

export function Navbar({
  activeTab,
  setActiveTab,
  profile,
  onOpenPersonalize,
  overallProgressPercentage,
  allConversationsComplete,
  onPrint
}: NavbarProps) {
  const tabs: { id: ActiveTab; label: string; icon: ComponentType<{ className?: string }>; category?: string }[] = [
    { id: 'welcome', label: 'Welcome', icon: BookOpen },
    { id: 'convo-1', label: '1. New Life', icon: Sparkles },
    { id: 'convo-2', label: '2. The Rite', icon: Flame },
    { id: 'convo-3', label: '3. Living Faith', icon: Users },
    { id: 'rite', label: 'Rite Step-by-Step', icon: ScrollText },
    { id: 'godparents', label: 'Godparents', icon: Users },
    { id: 'essentials', label: '12 Essentials', icon: Award },
    { id: 'readiness', label: 'Are We Ready?', icon: CheckSquare },
    { id: 'family-rule', label: 'Rule of Life', icon: ShieldCheck },
    { id: 'day-of', label: 'The Day of Baptism', icon: Church },
    { id: 'emergency-sources', label: 'Sources & Emergency', icon: HelpCircle },
    { id: 'qa', label: 'Catechism Q&A', icon: HelpCircle }
  ];

  return (
    <header className="no-print sticky top-0 z-40 bg-[#F8F5F0]/95 backdrop-blur-md border-b border-[#E2DDD4] shadow-xs">
      {/* Top Parish Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#EBE6DC] text-xs">
        <div className="flex items-center gap-2.5 text-[#5A5A40]">
          <div className="w-5 h-5 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
            <Church className="w-3.5 h-3.5" />
          </div>
          <span className="font-serif italic font-semibold text-sm text-[#2C2C1E]">
            {profile.parishName || "St Mary's | St John Bosco | St Edward's Parish"}
          </span>
          <span className="hidden md:inline-block text-[#C4BEB2]">•</span>
          <span className="hidden md:inline-block text-[#7A7468] font-medium tracking-wide">Parent & Godparent Edition (2026)</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Progress Pill */}
          <div 
            id="preparation-progress-pill"
            className="flex items-center gap-2.5 bg-[#F0EDE6] px-3.5 py-1 rounded-full border border-[#E2DDD4]"
            title={`${overallProgressPercentage}% completed`}
          >
            <div className="w-16 bg-[#D8D2C5] rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#5A5A40] h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${overallProgressPercentage}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-[#3D3D2D]">
              {overallProgressPercentage}% Ready
            </span>
          </div>

          {/* Personalize Profile Button */}
          <button
            id="btn-open-personalize-header"
            onClick={onOpenPersonalize}
            className="flex items-center gap-1.5 text-[#3D3D2D] hover:text-[#2C2C1E] bg-[#F0EDE6] hover:bg-[#E5E0D6] border border-[#E2DDD4] px-3 py-1 rounded-full transition-colors font-medium text-xs"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#5A5A40]" />
            {profile.childName ? (
              <span className="truncate max-w-[120px] font-semibold">{profile.childName}</span>
            ) : (
              <span>Personalize</span>
            )}
          </button>

          {/* Print Booklet Button */}
          <button
            id="btn-trigger-print"
            onClick={onPrint}
            className="flex items-center gap-1.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] px-3.5 py-1 rounded-full transition-colors text-xs font-semibold shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / Export Booklet</span>
            <span className="sm:hidden">Print</span>
          </button>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto scrollbar-none py-2">
        <nav className="flex items-center gap-1.5 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#5A5A40] text-white shadow-xs font-semibold'
                    : 'text-[#6B6658] hover:bg-[#F0EDE6] hover:text-[#2C2C1E]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F0EDE6]' : 'text-[#8C7B65]'}`} />
                {tab.label}
                {tab.id.startsWith('convo-') && (
                  <span className={`ml-0.5 text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#E5E0D6] text-[#5A5A40]'
                  }`}>
                    {tab.id === 'convo-1' ? 'C1' : tab.id === 'convo-2' ? 'C2' : 'C3'}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
