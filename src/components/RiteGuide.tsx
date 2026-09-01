import { useState } from 'react';
import { RITE_STEPS } from '../data/catecheticalData';
import {
  ScrollText,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Volume2,
  CheckCircle2,
  Users,
  Info,
  Droplets,
  Flame,
  Shirt,
  Cross
} from 'lucide-react';
import { playSacredChime } from '../utils/audio';

export function RiteGuide() {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [practicedResponses, setPracticedResponses] = useState<string[]>([]);

  const currentStep = RITE_STEPS.find(s => s.stepNumber === selectedStep) || RITE_STEPS[0];

  const getIconForSign = (sign?: string) => {
    if (!sign) return Cross;
    if (sign.toLowerCase().includes('water')) return Droplets;
    if (sign.toLowerCase().includes('candle') || sign.toLowerCase().includes('flame')) return Flame;
    if (sign.toLowerCase().includes('garment') || sign.toLowerCase().includes('robe')) return Shirt;
    return Cross;
  };

  const handlePracticeResponse = (respKey: string) => {
    playSacredChime();
    setPracticedResponses(prev =>
      prev.includes(respKey) ? prev : [...prev, respKey]
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="rite-guide-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
            <ScrollText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
              Appendix A
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
              The Baptism Rite: Step by Step
            </h1>
          </div>
        </div>
        <p className="text-sm text-[#6B6658] leading-relaxed mt-2">
          A practical guide for the family. The priest or deacon will guide you; the approved liturgical book governs the celebration. Familiarity with the rite helps the day feel prayerful rather than confusing.
        </p>
      </div>

      {/* Key Responses Practice Card */}
      <div 
        id="rite-key-responses"
        className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 space-y-4"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#5A5A40]" />
          <h2 className="font-cinzel text-sm font-bold tracking-wider uppercase text-[#2C2C1E]">
            Key Responses for Parents & Godparents
          </h2>
        </div>
        <p className="text-xs text-[#7A7468]">
          You do not need to memorize the entire liturgy. The priest or deacon will lead you. These are the three essential responses to say from the heart:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-[#E2DDD4] rounded-[18px] p-4 space-y-2 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A5A40] block">
                1. The Request
              </span>
              <p className="text-xs text-[#6B6658]">"What do you ask of God's Church for your child?"</p>
              <p className="font-serif text-base font-bold text-[#2C2C1E] mt-1">"Baptism."</p>
            </div>
            <button
              onClick={() => handlePracticeResponse('req')}
              className={`text-xs px-3 py-1.5 rounded-full border font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                practicedResponses.includes('req')
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-[#F8F5F0] text-[#5A5A40] border-[#E2DDD4] hover:bg-[#F0EDE6]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{practicedResponses.includes('req') ? 'Practiced' : 'Practice Response'}</span>
            </button>
          </div>

          <div className="bg-white border border-[#E2DDD4] rounded-[18px] p-4 space-y-2 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A5A40] block">
                2. Renunciation & Creed
              </span>
              <p className="text-xs text-[#6B6658]">"Do you reject Satan?... Do you believe in God?..."</p>
              <p className="font-serif text-base font-bold text-[#2C2C1E] mt-1">"I do."</p>
            </div>
            <button
              onClick={() => handlePracticeResponse('ido')}
              className={`text-xs px-3 py-1.5 rounded-full border font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                practicedResponses.includes('ido')
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-[#F8F5F0] text-[#5A5A40] border-[#E2DDD4] hover:bg-[#F0EDE6]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{practicedResponses.includes('ido') ? 'Practiced' : 'Practice Response'}</span>
            </button>
          </div>

          <div className="bg-white border border-[#E2DDD4] rounded-[18px] p-4 space-y-2 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A5A40] block">
                3. The Prayers
              </span>
              <p className="text-xs text-[#6B6658]">At the conclusion of the prayers and blessings:</p>
              <p className="font-serif text-base font-bold text-[#2C2C1E] mt-1">"Amen."</p>
            </div>
            <button
              onClick={() => handlePracticeResponse('amen')}
              className={`text-xs px-3 py-1.5 rounded-full border font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                practicedResponses.includes('amen')
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-[#F8F5F0] text-[#5A5A40] border-[#E2DDD4] hover:bg-[#F0EDE6]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{practicedResponses.includes('amen') ? 'Practiced' : 'Practice Response'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left List of 11 steps */}
        <div className="space-y-2 lg:max-h-[600px] lg:overflow-y-auto pr-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] block mb-2">
            The 11 Liturgical Parts
          </span>
          {RITE_STEPS.map((step) => {
            const isSelected = selectedStep === step.stepNumber;
            const Icon = getIconForSign(step.liturgicalSign);
            return (
              <button
                key={step.stepNumber}
                id={`rite-step-btn-${step.stepNumber}`}
                onClick={() => setSelectedStep(step.stepNumber)}
                className={`w-full text-left p-3.5 rounded-[16px] border transition-all flex items-center justify-between gap-2 ${
                  isSelected
                    ? 'bg-[#5A5A40] text-white border-[#5A5A40] shadow-xs'
                    : 'bg-white text-[#3D3D2D] border-[#E2DDD4] hover:bg-[#F0EDE6]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#F0EDE6] text-[#5A5A40]'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className="font-medium text-xs truncate">
                    {step.partName.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#F0EDE6]' : 'text-[#8C7B65]'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Active Step Detail View */}
        <div 
          id="active-rite-step-card"
          className="lg:col-span-2 bg-white border border-[#E2DDD4] rounded-[28px] p-6 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFEBE3]">
              <span className="px-3.5 py-1 bg-[#F0EDE6] text-[#5A5A40] rounded-full text-xs font-bold uppercase tracking-wider border border-[#E2DDD4]">
                Part {currentStep.stepNumber} of 11
              </span>
              {currentStep.liturgicalSign && (
                <span className="text-xs font-semibold text-[#5A5A40] bg-[#F8F5F0] px-3 py-1 rounded-full border border-[#E2DDD4]">
                  Sign: {currentStep.liturgicalSign}
                </span>
              )}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[#2C2C1E]">
              {currentStep.partName}
            </h2>

            <div className="bg-[#F0EDE6] p-5 rounded-[20px] border border-[#E2DDD4] space-y-2">
              <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider block">
                What It Means
              </span>
              <p className="text-sm sm:text-base text-[#3D3D2D] leading-relaxed">
                {currentStep.whatItMeans}
              </p>
            </div>

            <div className="space-y-3 text-sm text-[#3D3D2D]">
              <div>
                <strong className="text-[#2C2C1E] block text-xs uppercase tracking-wider font-semibold mb-1">
                  Liturgical Details
                </strong>
                <p className="leading-relaxed bg-[#F8F5F0] p-3.5 rounded-[14px] border border-[#E2DDD4]">
                  {currentStep.liturgicalDetails}
                </p>
              </div>

              {currentStep.wordsSpoken && (
                <div>
                  <strong className="text-[#2C2C1E] block text-xs uppercase tracking-wider font-semibold mb-1">
                    Words Spoken in the Rite
                  </strong>
                  <p className="font-serif italic text-sm text-[#2C2C1E] leading-relaxed bg-[#F0EDE6] p-3.5 rounded-[14px] border border-[#E2DDD4]">
                    "{currentStep.wordsSpoken}"
                  </p>
                </div>
              )}

              <div>
                <strong className="text-[#2C2C1E] block text-xs uppercase tracking-wider font-semibold mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#5A5A40]" /> Role of Parents & Godparents
                </strong>
                <p className="leading-relaxed text-xs text-[#6B6658] bg-[#F8F5F0] p-3.5 rounded-[14px] border border-[#E2DDD4]">
                  {currentStep.familyRole}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-[#EFEBE3] flex items-center justify-between">
            <button
              id="btn-prev-rite-step"
              disabled={selectedStep <= 1}
              onClick={() => setSelectedStep(s => Math.max(1, s - 1))}
              className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                selectedStep <= 1 ? 'opacity-40 cursor-not-allowed text-[#A49E92]' : 'text-[#5A5A40] hover:bg-[#F0EDE6]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <span className="text-xs font-bold text-[#5A5A40]">
              {selectedStep} / 11
            </span>

            <button
              id="btn-next-rite-step"
              disabled={selectedStep >= 11}
              onClick={() => setSelectedStep(s => Math.min(11, s + 1))}
              className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                selectedStep >= 11 ? 'opacity-40 cursor-not-allowed text-[#A49E92]' : 'bg-[#5A5A40] text-white hover:bg-[#474732]'
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
