import { useState } from 'react';
import {
  EMERGENCY_BAPTISM_GUIDE,
  SCRIPTURE_AND_DOCTRINAL_REFERENCES
} from '../data/catecheticalData';
import {
  AlertTriangle,
  BookOpen,
  HelpCircle,
  PhoneCall,
  Droplets,
  Scroll,
  Heart,
  ExternalLink,
  Church
} from 'lucide-react';

export function EmergencyAndDoctrinalSources() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="sources-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
              Appendix G
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
              Emergency Baptism & Catholic Sources
            </h1>
          </div>
        </div>
        <p className="text-sm text-[#6B6658] leading-relaxed mt-2">
          Clear rubrics for emergencies (danger of death) and the full corpus of scriptural, canonical, and catechetical foundations.
        </p>
      </div>

      {/* Emergency Baptism Rubrics */}
      <div 
        id="emergency-baptism-card"
        className="bg-white border-2 border-[#5A5A40]/40 rounded-[28px] p-6 sm:p-8 space-y-6 shadow-xs"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40] shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-cinzel text-xl font-bold text-[#2C2C1E]">
              {EMERGENCY_BAPTISM_GUIDE.title}
            </h2>
            <p className="text-xs text-[#7A7468]">
              Canonical and Liturgical Norms in Extreme Circumstances
            </p>
          </div>
        </div>

        <p className="text-sm text-[#2C2C1E] bg-[#F8F5F0] p-4 rounded-[18px] border border-[#E2DDD4] leading-relaxed font-medium">
          {EMERGENCY_BAPTISM_GUIDE.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EMERGENCY_BAPTISM_GUIDE.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8F5F0] border border-[#E2DDD4] rounded-[20px] p-5 space-y-2 shadow-xs"
            >
              <h3 className="font-bold text-sm text-[#2C2C1E] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#F0EDE6] text-[#5A5A40] text-xs flex items-center justify-center font-bold">
                  {idx + 1}
                </span>
                {step.title.replace(/^\d+\.\s*/, '')}
              </h3>
              <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed whitespace-pre-line">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Catholic Doctrinal Sources & Citations */}
      <div className="bg-white border border-[#E2DDD4] rounded-[28px] p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-2">
          <Scroll className="w-5 h-5 text-[#5A5A40]" />
          <h2 className="font-serif text-xl font-bold text-[#2C2C1E]">
            Sources and Doctrinal References
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCRIPTURE_AND_DOCTRINAL_REFERENCES.map((cat, i) => (
            <div
              key={i}
              className="bg-[#F8F5F0] border border-[#E2DDD4] rounded-[20px] p-5 space-y-3"
            >
              <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#5A5A40] pb-2 border-b border-[#E2DDD4]">
                {cat.source}
              </h3>

              <div className="space-y-3">
                {cat.citations.map((c, cIdx) => (
                  <div key={cIdx} className="space-y-0.5 text-xs sm:text-sm">
                    <span className="font-bold text-[#5A5A40] block text-xs">
                      {c.ref}
                    </span>
                    <p className="text-[#3D3D2D] leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* A Final Word Card */}
      <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[28px] p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-[#E2DDD4] flex items-center justify-center mx-auto text-[#5A5A40]">
          <Church className="w-5 h-5" />
        </div>

        <h3 className="font-cinzel text-lg font-bold text-[#2C2C1E]">
          A Final Word from Father John Owen
        </h3>

        <p className="text-sm sm:text-base text-[#3D3D2D] leading-relaxed">
          Baptism, Confirmation and the Eucharist form one Christian initiation. This preparation guide prepares parents and godparents for the beginning of that sacramental life; it does not replace Sunday Mass, family prayer, ongoing catechesis or the later sacraments.
        </p>

        <p className="font-serif text-base font-bold text-[#5A5A40] italic pt-2">
          "May God bless your child, your family and your godparents as you prepare for Baptism."
        </p>
      </div>
    </div>
  );
}
