import { FamilyProfile } from '../types';
import { Award, Church, Check, X, Printer, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: FamilyProfile;
  onPrint: () => void;
}

export function CelebrationModal({ isOpen, onClose, profile, onPrint }: CelebrationModalProps) {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div id="celebration-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-[#F8F5F0] border border-[#E2DDD4] rounded-[28px] w-full max-w-lg shadow-2xl overflow-hidden p-6 sm:p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-[#F0EDE6] flex items-center justify-center mx-auto text-[#5A5A40]">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#5A5A40]">
            Parish Certificate of Completion
          </span>
          <h2 className="font-cinzel text-2xl font-bold text-[#2C2C1E]">
            Baptism Preparation Completed
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6658] max-w-md mx-auto">
            You have worked through the three catechetical conversations on Sacramental Grace, Divine Filiation, the Liturgical Rite, and Living Faith in the domestic church.
          </p>
        </div>

        <div className="bg-white border border-[#E2DDD4] rounded-[20px] p-5 text-left space-y-2 text-xs text-[#3D3D2D]">
          <div className="flex justify-between py-1 border-b border-[#E2DDD4]/60">
            <span className="text-[#7A7468]">Child:</span>
            <span className="font-bold text-[#2C2C1E]">{profile.childName || "Our Beloved Child"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#E2DDD4]/60">
            <span className="text-[#7A7468]">Parish:</span>
            <span className="font-bold text-[#2C2C1E]">{profile.parishName}</span>
          </div>
          {profile.baptismDate && (
            <div className="flex justify-between py-1">
              <span className="text-[#7A7468]">Date of Baptism:</span>
              <span className="font-bold text-[#2C2C1E]">{profile.baptismDate}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onPrint();
            }}
            className="px-6 py-2.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] text-xs font-semibold rounded-full flex items-center gap-2 shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" /> Print Family Booklet
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#F0EDE6] text-[#2C2C1E] border border-[#E2DDD4] text-xs font-semibold rounded-full hover:bg-[#E5E0D6] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
