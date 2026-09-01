import { useState } from 'react';
import { FamilyProfile } from '../types';
import {
  Church,
  CheckCircle2,
  Calendar,
  Clock,
  Flame,
  Shirt,
  Sparkles,
  Heart,
  Droplets,
  Camera,
  Cross
} from 'lucide-react';
import { playSacredChime } from '../utils/audio';

interface DayOfBaptismGuideProps {
  profile: FamilyProfile;
  checklist: string[];
  onToggleChecklist: (id: string) => void;
}

export function DayOfBaptismGuide({ profile, checklist, onToggleChecklist }: DayOfBaptismGuideProps) {
  const homeChecklistItems = [
    { id: "c1", text: "Pray briefly at home for the child and family before departing." },
    { id: "c2", text: "Pack the baptismal candle and/or white christening garment (if provided by family)." },
    { id: "c3", text: "Confirm arrival time and directions with godparents and immediate family." },
    { id: "c4", text: "Arrive at the church 15–20 minutes early so the baby and family can settle calmly." }
  ];

  const handleCheck = (id: string) => {
    onToggleChecklist(id);
    if (!checklist.includes(id)) {
      playSacredChime();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="day-of-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
            <Church className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
              Appendix F
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
              The Day of Baptism
            </h1>
          </div>
        </div>
        <p className="text-sm text-[#6B6658] leading-relaxed mt-2">
          The priest or deacon will guide you. <strong>The aim is prayerful participation, not perfect performance.</strong>
        </p>
      </div>

      {/* Before You Leave Home Checklist */}
      <div className="bg-white border border-[#E2DDD4] rounded-[28px] p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#5A5A40]" />
          <h2 className="font-serif text-xl font-bold text-[#2C2C1E]">
            Before You Leave Home
          </h2>
        </div>

        <div className="space-y-3">
          {homeChecklistItems.map((item) => {
            const isChecked = checklist.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => handleCheck(item.id)}
                className={`cursor-pointer p-4 rounded-[18px] border flex items-center gap-3.5 transition-colors ${
                  isChecked
                    ? 'bg-[#F0EDE6] border-[#5A5A40]/60'
                    : 'bg-[#F8F5F0] border-[#E2DDD4] hover:border-[#5A5A40]/50'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                  isChecked ? 'bg-[#5A5A40] text-white' : 'border border-[#C5BFA3] bg-white'
                }`}>
                  {isChecked && <CheckCircle2 className="w-4 h-4" />}
                </div>
                <span className={`text-xs sm:text-sm font-medium ${
                  isChecked ? 'text-[#2C2C1E]' : 'text-[#3D3D2D]'
                }`}>
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* During the Celebration Guide */}
      <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#5A5A40]" />
          <h2 className="font-serif text-xl font-bold text-[#2C2C1E]">
            During the Celebration
          </h2>
        </div>

        <div className="space-y-3 text-sm text-[#3D3D2D]">
          <div className="bg-white p-4 rounded-[18px] border border-[#E2DDD4] flex items-start gap-3.5">
            <span className="w-6 h-6 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center shrink-0">1</span>
            <div>
              <strong className="text-[#2C2C1E] block mb-0.5 font-serif">Listen to the Word of God & Join the Prayers</strong>
              <p className="text-xs text-[#6B6658]">Sacred Scripture prepares the hearts of all assembled. Join in the Lord's Prayer and litanies.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[18px] border border-[#E2DDD4] flex items-start gap-3.5">
            <span className="w-6 h-6 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center shrink-0">2</span>
            <div>
              <strong className="text-[#2C2C1E] block mb-0.5 font-serif">Answer the Renunciations and Profession of Faith Sincerely</strong>
              <p className="text-xs text-[#6B6658]">When the minister asks, respond with conviction and peace: "I do."</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[18px] border border-[#E2DDD4] flex items-start gap-3.5">
            <span className="w-6 h-6 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center shrink-0">3</span>
            <div>
              <strong className="text-[#2C2C1E] block mb-0.5 font-serif">Watch and Pray During the Baptismal Washing</strong>
              <p className="text-xs text-[#6B6658]">This is the central moment when Christ gives new birth and sanctifying grace.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[18px] border border-[#E2DDD4] flex items-start gap-3.5">
            <span className="w-6 h-6 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center shrink-0">4</span>
            <div>
              <strong className="text-[#2C2C1E] block mb-0.5 font-serif">Receive the Signs of Chrism, Garment and Candle</strong>
              <p className="text-xs text-[#6B6658]">Tangible reminders of the dignity, priesthood, and light of Christ now given to your child.</p>
            </div>
          </div>
        </div>

        {/* Do Not Worry Card */}
        <div className="bg-white border-l-4 border-[#5A5A40] p-4 rounded-r-[18px] border border-[#E2DDD4] space-y-1">
          <strong className="font-cinzel text-xs uppercase tracking-wider text-[#2C2C1E] block">
            Do Not Worry About Remembering Every Word
          </strong>
          <p className="text-xs text-[#6B6658] leading-relaxed">
            The minister will lead the rite. What matters most is that you understand what you are asking for and make the profession of faith sincerely.
          </p>
        </div>
      </div>

      {/* Afterwards & On the Baptismal Anniversary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-sm">
            <Heart className="w-4 h-4" />
            <h3 className="font-cinzel">Afterwards</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
            Celebrate joyfully, then keep going. The lasting fruit of Baptism is not measured by the photographs or the reception afterwards, but by <strong>a child growing within the life of Christ and his Church through the ordinary faithfulness of family and parish life.</strong>
          </p>
        </div>

        <div className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-sm">
            <Flame className="w-4 h-4" />
            <h3 className="font-cinzel">On the Baptismal Anniversary</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
            Each year on the date of baptism: Light the baptismal candle if you still have it, pray for the child, make the Sign of the Cross with holy water and thank God for the grace of Baptism.
          </p>
        </div>
      </div>
    </div>
  );
}
