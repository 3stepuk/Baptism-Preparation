import { useState, useEffect } from 'react';
import { ConversationData, FamilyProfile } from '../types';
import {
  Cross,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Heart,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  Sparkles,
  Check,
  RotateCcw,
  Quote,
  Flame,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSacredChime } from '../utils/audio';

interface ConversationViewProps {
  conversation: ConversationData;
  profile: FamilyProfile;
  completedSteps: number[];
  reflectionNote: string;
  masteredEssentials: number[];
  actChecked: boolean;
  onMarkStepComplete: (convoId: number, stepNum: number) => void;
  onSaveReflectionNote: (convoId: number, note: string) => void;
  onToggleMasteredEssential: (convoId: number, essentialId: number) => void;
  onToggleActChecked: (convoId: number) => void;
  onNextConversation?: () => void;
}

export function ConversationView({
  conversation,
  profile,
  completedSteps,
  reflectionNote,
  masteredEssentials,
  actChecked,
  onMarkStepComplete,
  onSaveReflectionNote,
  onToggleMasteredEssential,
  onToggleActChecked,
  onNextConversation
}: ConversationViewProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [localNote, setLocalNote] = useState<string>(reflectionNote);
  const [revealedEssentials, setRevealedEssentials] = useState<number[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [crossAnimated, setCrossAnimated] = useState<boolean>(false);

  useEffect(() => {
    setLocalNote(reflectionNote);
  }, [reflectionNote]);

  const stepMeta = [
    { num: 1, label: "Begin", icon: Cross, desc: "Sign of Cross & Remember" },
    { num: 2, label: "Read", icon: BookOpen, desc: "Catechetical Teaching" },
    { num: 3, label: "Talk", icon: MessageCircle, desc: "Discussion & Reflection" },
    { num: 4, label: "Understand", icon: HelpCircle, desc: "The Essentials" },
    { num: 5, label: "Pray", icon: Heart, desc: "Prayer Together" },
    { num: 6, label: "Act", icon: CheckCircle2, desc: "This Week's Step" }
  ];

  const handleStepClick = (num: number) => {
    setActiveStep(num);
    onMarkStepComplete(conversation.id, num);
  };

  const handleSignOfCross = () => {
    setCrossAnimated(true);
    playSacredChime();
    setTimeout(() => setCrossAnimated(false), 2000);
    onMarkStepComplete(conversation.id, 1);
  };

  const handleToggleReveal = (id: number) => {
    setRevealedEssentials(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSpeechToggle = (textToRead: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleFinishConversation = () => {
    onMarkStepComplete(conversation.id, 6);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    playSacredChime();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header Banner */}
      <div 
        id={`convo-${conversation.id}-header`}
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="px-3.5 py-1 bg-[#F0EDE6] text-[#5A5A40] rounded-full text-xs font-bold uppercase tracking-wider border border-[#E2DDD4]">
            Conversation {conversation.number} of 3
          </span>
          <span className="text-xs text-[#7A7468] font-medium">
            Theme: <strong className="text-[#2C2C1E]">{conversation.theme}</strong>
          </span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E] mt-1">
          {conversation.title}
        </h1>
        <p className="text-sm text-[#5A5A40] mt-1 italic font-medium">
          {conversation.subtitle}
        </p>

        {/* Step Progression Tabs */}
        <div className="mt-6 pt-5 border-t border-[#F0EDE6] grid grid-cols-3 sm:grid-cols-6 gap-2">
          {stepMeta.map((s) => {
            const Icon = s.icon;
            const isCompleted = completedSteps.includes(s.num);
            const isCurrent = activeStep === s.num;
            return (
              <button
                key={s.num}
                id={`convo-${conversation.id}-step-btn-${s.num}`}
                onClick={() => handleStepClick(s.num)}
                className={`px-3 py-2.5 rounded-[14px] text-left transition-all border flex flex-col justify-between gap-1.5 ${
                  isCurrent
                    ? 'bg-[#5A5A40] text-white border-[#5A5A40] shadow-xs'
                    : isCompleted
                    ? 'bg-[#F0EDE6] text-[#2C2C1E] border-[#E2DDD4] hover:bg-[#E5E0D6]'
                    : 'bg-white text-[#6B6658] border-[#E2DDD4] hover:bg-[#F8F5F0]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 font-bold text-xs">
                    <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#F0EDE6]' : 'text-[#5A5A40]'}`} />
                    <span>{s.num}. {s.label}</span>
                  </div>
                  {isCompleted && !isCurrent && (
                    <Check className="w-3 h-3 text-emerald-700" />
                  )}
                </div>
                <span className={`text-[10px] truncate ${isCurrent ? 'text-[#E2DDD4]' : 'text-[#7A7468]'}`}>
                  {s.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Content Card */}
      <div 
        id={`convo-${conversation.id}-step-body`}
        className="bg-white border border-[#E2DDD4] rounded-[28px] p-6 sm:p-10 shadow-xs space-y-8"
      >
        {/* STEP 1: BEGIN */}
        {activeStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#EFEBE3]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
                  <Cross className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">Step 1: Begin</h2>
                  <p className="text-xs text-[#7A7468]">Make the Sign of the Cross & read the REMEMBER sentence</p>
                </div>
              </div>

              <button
                id="btn-listen-remember"
                onClick={() => handleSpeechToggle(conversation.rememberPoints.join(' '))}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#5A5A40] hover:bg-[#F0EDE6] px-3 py-1.5 rounded-full border border-[#E2DDD4] transition-colors"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-[#5A5A40]" />}
                <span>{isSpeaking ? "Pause" : "Read Aloud"}</span>
              </button>
            </div>

            {/* Interactive Sign of the Cross Button */}
            <div className="text-center py-6 px-4 bg-[#F8F5F0] border border-[#E2DDD4] rounded-[20px] space-y-3">
              <p className="text-xs uppercase font-semibold tracking-wider text-[#5A5A40]">
                Opening Gesture of Faith
              </p>
              
              <button
                id="btn-sign-of-cross"
                onClick={handleSignOfCross}
                className={`mx-auto px-6 py-3 rounded-full font-serif text-base font-semibold transition-all flex items-center justify-center gap-2.5 shadow-xs ${
                  crossAnimated 
                    ? 'bg-[#2C2C1E] text-white scale-105 ring-4 ring-[#5A5A40]/30' 
                    : 'bg-[#5A5A40] hover:bg-[#474732] text-white'
                }`}
              >
                <Cross className={`w-4 h-4 ${crossAnimated ? 'rotate-12 transition-transform' : ''}`} />
                <span>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</span>
              </button>

              <p className="text-xs text-[#7A7468]">
                Click or recite together as parents and godparents before reading.
              </p>
            </div>

            {/* REMEMBER Box */}
            <div className="bg-[#F0EDE6] border-l-4 border-[#5A5A40] p-6 rounded-r-[20px] space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#5A5A40]" />
                <h3 className="font-cinzel text-sm font-bold tracking-wider uppercase text-[#2C2C1E]">
                  Remember
                </h3>
              </div>

              <div className="space-y-3 text-sm sm:text-base leading-relaxed text-[#3D3D2D]">
                {conversation.rememberPoints.map((point, idx) => (
                  <p key={idx}>{point}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: READ */}
        {activeStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#EFEBE3]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">Step 2: Read</h2>
                  <p className="text-xs text-[#7A7468]">Read the catechetical teaching slowly together</p>
                </div>
              </div>

              <button
                id="btn-listen-read-section"
                onClick={() =>
                  handleSpeechToggle(
                    conversation.readSections
                      .map(s => `${s.heading}. ${s.content.join(' ')}`)
                      .join(' ')
                  )
                }
                className="flex items-center gap-1.5 text-xs font-semibold text-[#5A5A40] hover:bg-[#F0EDE6] px-3 py-1.5 rounded-full border border-[#E2DDD4] transition-colors"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-[#5A5A40]" />}
                <span>{isSpeaking ? "Pause" : "Read Aloud"}</span>
              </button>
            </div>

            <div className="space-y-6">
              {conversation.readSections.map((sec, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F8F5F0] border border-[#E2DDD4] rounded-[20px] p-6 space-y-3"
                >
                  <h3 className="font-serif text-lg font-bold text-[#2C2C1E]">
                    {sec.heading}
                  </h3>

                  <div className="space-y-2 text-sm sm:text-base leading-relaxed text-[#3D3D2D]">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {sec.scriptureQuote && (
                    <div className="mt-4 pt-3 border-t border-[#E2DDD4] bg-white p-4 rounded-[14px] flex items-start gap-3">
                      <Quote className="w-5 h-5 text-[#5A5A40] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="font-serif italic text-sm text-[#2C2C1E]">
                          "{sec.scriptureQuote.text}"
                        </p>
                        <span className="text-xs font-bold text-[#5A5A40]">
                          — {sec.scriptureQuote.reference}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: TALK */}
        {activeStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-[#EFEBE3]">
              <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">Step 3: Talk</h2>
                <p className="text-xs text-[#7A7468]">Use the question below. There is no need for a polished answer.</p>
              </div>
            </div>

            <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[20px] p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#5A5A40]">
                Talk About It
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2C1E] leading-snug">
                "{conversation.talkPrompt.mainQuestion}"
              </h3>

              <div className="space-y-2 pt-2 border-t border-[#E2DDD4]">
                {conversation.talkPrompt.subPrompts.map((sub, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[#3D3D2D]">
                    <span className="text-[#5A5A40] font-bold">•</span>
                    <p>{sub}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs italic text-[#5A5A40] bg-white p-3.5 rounded-xl border border-[#E2DDD4]">
                💡 Guidance: {conversation.talkPrompt.guidanceNotes}
              </p>
            </div>

            {/* Reflection Note Pad */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5A40] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#5A5A40]" /> Our Family & Godparent Reflection Notes (Saved Privately)
              </label>
              <textarea
                id={`textarea-reflection-convo-${conversation.id}`}
                rows={4}
                value={localNote}
                onChange={e => {
                  setLocalNote(e.target.value);
                  onSaveReflectionNote(conversation.id, e.target.value);
                }}
                placeholder="Write down what you discussed, any thoughts, or questions to ask the parish priest..."
                className="w-full p-4 bg-[#F8F5F0] border border-[#E2DDD4] rounded-[18px] text-sm text-[#2C2C1E] placeholder:text-[#A49E92] focus:outline-hidden focus:ring-2 focus:ring-[#5A5A40]"
              />
              <p className="text-[11px] text-[#7A7468]">
                These notes will be saved and can be included in your printed booklet or parish meeting review.
              </p>
            </div>
          </div>
        )}

        {/* STEP 4: UNDERSTAND */}
        {activeStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-[#EFEBE3]">
              <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">Step 4: Understand (The Essentials)</h2>
                <p className="text-xs text-[#7A7468]">
                  Try answering in your own words first, then reveal the concise Catholic answer.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {conversation.essentials.map((item) => {
                const isRevealed = revealedEssentials.includes(item.id);
                const isMastered = masteredEssentials.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className="bg-[#F8F5F0] border border-[#E2DDD4] rounded-[20px] p-5 space-y-3 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-bold text-base text-[#2C2C1E]">
                        {item.question}
                      </h3>

                      <button
                        id={`btn-toggle-mastered-${item.id}`}
                        onClick={() => onToggleMasteredEssential(conversation.id, item.id)}
                        className={`text-xs px-3 py-1 rounded-full border font-semibold flex items-center gap-1 transition-colors ${
                          isMastered
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-white text-[#5A5A40] border-[#E2DDD4] hover:bg-[#F0EDE6]'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>{isMastered ? "Understood" : "Mark Understood"}</span>
                      </button>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        id={`btn-reveal-answer-${item.id}`}
                        onClick={() => handleToggleReveal(item.id)}
                        className="text-xs font-semibold text-[#5A5A40] hover:text-[#2C2C1E] flex items-center gap-1 w-fit"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span>{isRevealed ? "Hide Answer" : "Reveal Concise Catholic Answer"}</span>
                      </button>

                      {isRevealed && (
                        <div className="bg-white border border-[#E2DDD4] p-4 rounded-[14px] space-y-2 animate-in fade-in duration-150">
                          <p className="text-sm font-medium text-[#2C2C1E] leading-relaxed">
                            {item.conciseAnswer}
                          </p>
                          {item.catechismRef && (
                            <span className="text-[11px] font-semibold text-[#5A5A40] block">
                              Catechism Reference: {item.catechismRef}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: PRAY */}
        {activeStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#EFEBE3]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">Step 5: Pray</h2>
                  <p className="text-xs text-[#7A7468]">Pray the short prayer together</p>
                </div>
              </div>

              <button
                id="btn-listen-prayer"
                onClick={() => handleSpeechToggle(conversation.prayer.text)}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#5A5A40] hover:bg-[#F0EDE6] px-3 py-1.5 rounded-full border border-[#E2DDD4] transition-colors"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-[#5A5A40]" />}
                <span>{isSpeaking ? "Pause" : "Listen / Read Along"}</span>
              </button>
            </div>

            {/* Liturgical Prayer Display Card */}
            <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[28px] p-8 sm:p-12 text-center max-w-xl mx-auto space-y-6 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#E2DDD4] flex items-center justify-center mx-auto text-[#5A5A40]">
                <Cross className="w-6 h-6" />
              </div>

              <h3 className="font-cinzel text-xl font-bold text-[#2C2C1E]">
                {conversation.prayer.title}
              </h3>

              <p className="font-serif text-lg sm:text-xl text-[#3D3D2D] leading-relaxed italic">
                "{conversation.prayer.text}"
              </p>

              <div className="pt-4">
                <button
                  id="btn-amen-prayer"
                  onClick={() => {
                    playSacredChime();
                    onMarkStepComplete(conversation.id, 5);
                  }}
                  className="px-8 py-2.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] rounded-full font-serif text-sm font-semibold shadow-xs transition-transform active:scale-95"
                >
                  Amen 🙏
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: ACT */}
        {activeStep === 6 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-[#EFEBE3]">
              <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">Step 6: Act</h2>
                <p className="text-xs text-[#7A7468]">Do the THIS WEEK action. One small faithful step is enough.</p>
              </div>
            </div>

            <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-5">
              <span className="text-xs uppercase font-bold tracking-wider text-[#5A5A40]">
                This Week's Action
              </span>

              <p className="font-serif text-lg sm:text-xl font-bold text-[#2C2C1E] leading-relaxed">
                {conversation.thisWeek.mainAction}
              </p>

              <div className="space-y-3 pt-3 border-t border-[#E2DDD4]">
                <span className="text-xs font-bold text-[#5A5A40] uppercase tracking-wider block">
                  Practical Steps to Try:
                </span>
                {conversation.thisWeek.suggestions.map((sug, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#3D3D2D]">
                    <div className="w-5 h-5 rounded-full bg-[#E2DDD4] flex items-center justify-center text-[#5A5A40] text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p>{sug}</p>
                  </div>
                ))}
              </div>

              {/* Commitment Checkbox */}
              <div className="pt-4 flex items-center gap-3 bg-white p-4 rounded-[16px] border border-[#E2DDD4]">
                <input
                  id={`checkbox-act-convo-${conversation.id}`}
                  type="checkbox"
                  checked={actChecked}
                  onChange={() => onToggleActChecked(conversation.id)}
                  className="w-5 h-5 text-[#5A5A40] rounded-md border-[#D1CCBF] focus:ring-[#5A5A40]"
                />
                <label 
                  htmlFor={`checkbox-act-convo-${conversation.id}`}
                  className="text-sm font-semibold text-[#2C2C1E] cursor-pointer"
                >
                  We commit to taking this faithful step this week as a family.
                </label>
              </div>
            </div>

            {/* Conversation Completion Celebration */}
            <div className="pt-6 border-t border-[#E2DDD4] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-[#2C2C1E]">
                  Conversation {conversation.number} Completed!
                </h4>
                <p className="text-xs text-[#7A7468]">
                  Well done. Take time to let this teaching bear fruit in your home.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  id={`btn-complete-convo-${conversation.id}`}
                  onClick={handleFinishConversation}
                  className="px-6 py-2.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] rounded-full text-xs font-semibold shadow-xs flex items-center gap-2 transition-transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Mark Conversation Complete</span>
                </button>

                {onNextConversation && (
                  <button
                    id={`btn-next-convo-${conversation.id}`}
                    onClick={onNextConversation}
                    className="px-5 py-2.5 bg-[#F0EDE6] hover:bg-[#E5E0D6] text-[#2C2C1E] border border-[#E2DDD4] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Next Conversation</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Footer */}
        <div className="pt-6 border-t border-[#E2DDD4] flex items-center justify-between">
          <button
            id={`btn-prev-step-convo-${conversation.id}`}
            disabled={activeStep <= 1}
            onClick={() => handleStepClick(activeStep - 1)}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              activeStep <= 1
                ? 'opacity-40 cursor-not-allowed text-[#A49E92]'
                : 'text-[#5A5A40] hover:bg-[#F0EDE6]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous: {activeStep > 1 ? stepMeta[activeStep - 2].label : ''}</span>
          </button>

          <span className="text-xs font-bold text-[#5A5A40]">
            Step {activeStep} of 6
          </span>

          <button
            id={`btn-next-step-convo-${conversation.id}`}
            disabled={activeStep >= 6}
            onClick={() => handleStepClick(activeStep + 1)}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              activeStep >= 6
                ? 'opacity-40 cursor-not-allowed text-[#A49E92]'
                : 'bg-[#5A5A40] hover:bg-[#474732] text-white shadow-xs'
            }`}
          >
            <span>Next: {activeStep < 6 ? stepMeta[activeStep].label : ''}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
