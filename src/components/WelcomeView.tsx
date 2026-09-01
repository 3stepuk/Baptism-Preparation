import {
  Sparkles,
  ArrowRight,
  Cross,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Heart,
  CheckCircle2,
  Calendar,
  Church,
  Users,
  ShieldAlert,
  Clock,
  Compass
} from 'lucide-react';
import { FamilyProfile } from '../types';
import { ActiveTab } from './Navbar';
import { playSacredChime } from '../utils/audio';

interface WelcomeViewProps {
  profile: FamilyProfile;
  onOpenPersonalize: () => void;
  onNavigate: (tab: ActiveTab) => void;
  convo1Complete: boolean;
  convo2Complete: boolean;
  convo3Complete: boolean;
}

export function WelcomeView({
  profile,
  onOpenPersonalize,
  onNavigate,
  convo1Complete,
  convo2Complete,
  convo3Complete
}: WelcomeViewProps) {
  const steps = [
    { num: 1, name: "Begin", desc: "Make the Sign of the Cross and read the REMEMBER sentence aloud.", icon: Cross },
    { num: 2, name: "Read", desc: "Read the short teaching slowly. Stop where something needs talking through.", icon: BookOpen },
    { num: 3, name: "Talk", desc: "Use the TALK ABOUT IT question. There is no need for a polished answer.", icon: MessageCircle },
    { num: 4, name: "Understand", desc: "Try THE ESSENTIALS in your own words, then read the concise Catholic answer.", icon: HelpCircle },
    { num: 5, name: "Pray", desc: "Pray the short prayer together as parents and godparents.", icon: Heart },
    { num: 6, name: "Act", desc: "Do the THIS WEEK action. One small faithful step is enough.", icon: CheckCircle2 }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Title & Parish Cover Card */}
      <div 
        id="welcome-hero-card"
        className="bg-radial from-[#FFFFFF] via-[#F8F5F0] to-[#F0EDE6] border border-[#E2DDD4] rounded-[28px] p-8 sm:p-12 shadow-xs relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#5A5A40]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0EDE6] border border-[#E2DDD4] text-xs font-semibold text-[#5A5A40] uppercase tracking-wider">
            <Church className="w-3.5 h-3.5 text-[#5A5A40]" />
            {profile.parishName || "St Mary's | St John Bosco | St Edward's Parish"}
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#2C2C1E] tracking-tight leading-tight">
            MY CHILD'S BAPTISM
          </h1>
          
          <p className="font-serif text-lg sm:text-xl text-[#5A5A40] italic font-medium">
            A simple preparation book for parents and godparents
          </p>

          <p className="text-xs font-bold text-[#7A7468] tracking-[0.2em] uppercase">
            New life in Christ begins here
          </p>

          {/* Child & Family Plaque */}
          <div className="mt-8 bg-white/95 backdrop-blur-xs border border-[#E2DDD4] rounded-[20px] p-6 text-left shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#EFEBE3]">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#5A5A40]">
                Preparation Record
              </span>
              <button
                id="btn-edit-family-details-welcome"
                onClick={onOpenPersonalize}
                className="text-xs font-semibold text-[#5A5A40] hover:text-[#2C2C1E] underline transition-colors"
              >
                {profile.childName ? "Edit details" : "+ Enter Child & Family details"}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="block text-xs font-medium text-[#7A7468]">Child's Name</span>
                <span className="font-semibold text-[#2C2C1E] text-base">
                  {profile.childName || "— (Click to personalize) —"}
                </span>
              </div>

              <div>
                <span className="block text-xs font-medium text-[#7A7468]">Date of Baptism</span>
                <span className="font-semibold text-[#2C2C1E]">
                  {profile.baptismDate || "— To be scheduled —"}
                </span>
              </div>

              <div>
                <span className="block text-xs font-medium text-[#7A7468]">Parish</span>
                <span className="font-semibold text-[#2C2C1E] truncate block">
                  {profile.parishName || "Parish Church"}
                </span>
              </div>
            </div>

            {(profile.parentsNames || profile.godparentsNames) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 pt-3 border-t border-[#F0EDE6] text-xs">
                {profile.parentsNames && (
                  <div>
                    <span className="text-[#7A7468]">Parents: </span>
                    <span className="font-medium text-[#2C2C1E]">{profile.parentsNames}</span>
                  </div>
                )}
                {profile.godparentsNames && (
                  <div>
                    <span className="text-[#7A7468]">Godparents / Sponsors: </span>
                    <span className="font-medium text-[#2C2C1E]">{profile.godparentsNames}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              id="btn-start-conversation-1"
              onClick={() => {
                playSacredChime();
                onNavigate('convo-1');
              }}
              className="px-6 py-3.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] rounded-full font-semibold shadow-sm hover:shadow-md flex items-center gap-2.5 transition-all text-sm group"
            >
              <span>Begin Conversation 1: New Life in Christ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="btn-explore-rite-guide"
              onClick={() => onNavigate('rite')}
              className="px-5 py-3.5 bg-[#F0EDE6] hover:bg-[#E5E0D6] text-[#2C2C1E] border border-[#E2DDD4] rounded-full font-semibold transition-all text-sm"
            >
              Explore Rite Step-by-Step
            </button>
          </div>
        </div>
      </div>

      {/* Pastoral Welcome Message */}
      <div 
        id="pastoral-reassurance-card"
        className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E2DDD4] flex items-center justify-center text-[#5A5A40]">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-[#2C2C1E]">
              You do not have to pretend to be a perfect Catholic family
            </h2>
            <p className="text-xs text-[#7A7468]">Father John Owen's Catechetical Welcome</p>
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-[#3D3D2D]">
          Thank you for asking the Church to baptise your child. Baptism is not simply a family custom or a beautiful day. In this sacrament Christ gives new life, frees from sin, joins the baptised to himself and his Church, and begins a lifelong Christian vocation.
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-[#3D3D2D] bg-[#F8F5F0] p-4 rounded-xl border border-[#E2DDD4]">
          <strong className="text-[#2C2C1E]">Preparation is a chance to understand what you are asking for</strong>, what the Church will celebrate, and what it means to help a child grow in the faith afterwards. If prayer or Sunday Mass is not yet part of your routine, begin honestly from where you are and take a real next step.
        </p>
      </div>

      {/* The Three Conversations Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">The Three Conversations</h2>
            <p className="text-xs text-[#7A7468]">Set aside 15–20 minutes for each conversation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div 
            id="welcome-card-convo-1"
            onClick={() => onNavigate('convo-1')}
            className="group cursor-pointer bg-white border border-[#E2DDD4] hover:border-[#5A5A40] rounded-[24px] p-6 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center border border-[#E2DDD4]">
                  1
                </span>
                {convo1Complete ? (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                  </span>
                ) : (
                  <span className="text-xs text-[#7A7468] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 15-20 min
                  </span>
                )}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2C2C1E] group-hover:text-[#5A5A40] transition-colors">
                Baptism: New Life in Christ
              </h3>
              <p className="text-xs leading-relaxed text-[#6B6658]">
                What Baptism is, what grace it gives, divine filiation, and why the Church baptises infants.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#F0EDE6] flex items-center justify-between text-xs font-semibold text-[#5A5A40]">
              <span>Begin Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            id="welcome-card-convo-2"
            onClick={() => onNavigate('convo-2')}
            className="group cursor-pointer bg-white border border-[#E2DDD4] hover:border-[#5A5A40] rounded-[24px] p-6 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center border border-[#E2DDD4]">
                  2
                </span>
                {convo2Complete ? (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                  </span>
                ) : (
                  <span className="text-xs text-[#7A7468] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 15-20 min
                  </span>
                )}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2C2C1E] group-hover:text-[#5A5A40] transition-colors">
                The Rite: Water, Faith and Signs
              </h3>
              <p className="text-xs leading-relaxed text-[#6B6658]">
                What happens in the celebration, the sacred symbols (water, chrism, candle, garment), and what your "I do" means.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#F0EDE6] flex items-center justify-between text-xs font-semibold text-[#5A5A40]">
              <span>Explore The Rite</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            id="welcome-card-convo-3"
            onClick={() => onNavigate('convo-3')}
            className="group cursor-pointer bg-white border border-[#E2DDD4] hover:border-[#5A5A40] rounded-[24px] p-6 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center border border-[#E2DDD4]">
                  3
                </span>
                {convo3Complete ? (
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                  </span>
                ) : (
                  <span className="text-xs text-[#7A7468] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 15-20 min
                  </span>
                )}
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2C2C1E] group-hover:text-[#5A5A40] transition-colors">
                Living Baptism: Raising a Child in Faith
              </h3>
              <p className="text-xs leading-relaxed text-[#6B6658]">
                How parents, godparents and parish help the life of grace grow afterwards in the domestic church.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#F0EDE6] flex items-center justify-between text-xs font-semibold text-[#5A5A40]">
              <span>View Practical Living</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* How to Use the 6 Steps */}
      <div 
        id="six-steps-guide"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-6 shadow-xs"
      >
        <div className="space-y-1">
          <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#2C2C1E]">
            How to Use the 6-Step Method
          </h2>
          <p className="text-xs text-[#7A7468]">
            Parents work through all three conversations. Godparents join where possible or read along.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-[#F8F5F0] border border-[#E2DDD4] rounded-[16px] p-4 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-full bg-[#E5E0D6] flex items-center justify-center text-[#5A5A40] font-bold text-xs shrink-0">
                  {s.num}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-[#2C2C1E]">
                    <Icon className="w-4 h-4 text-[#5A5A40]" />
                    <span>{s.name}</span>
                  </div>
                  <p className="text-xs text-[#6B6658] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* A Simple Rule & Priest Note */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[20px] p-5 space-y-2">
          <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-sm">
            <Compass className="w-4 h-4" />
            <span>A Simple Rule</span>
          </div>
          <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
            Do not rush simply to finish pages. If one conversation raises an important question, stay with it. <strong>Understanding and sincerity matter more than speed.</strong>
          </p>
        </div>

        <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[20px] p-5 space-y-2">
          <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-sm">
            <ShieldAlert className="w-4 h-4" />
            <span>When You Have a Question</span>
          </div>
          <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
            Make a note and ask the parish priest. You are not expected to solve every theological, family or canonical question yourselves.
          </p>
        </div>
      </div>
    </div>
  );
}
