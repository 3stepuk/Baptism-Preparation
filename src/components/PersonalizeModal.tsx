import { useState, type FormEvent } from 'react';
import { FamilyProfile } from '../types';
import { DEFAULT_PARISH } from '../data/catecheticalData';
import { Heart, Calendar, Church, User, X, Check } from 'lucide-react';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: FamilyProfile;
  onSave: (profile: Partial<FamilyProfile>) => void;
}

export function PersonalizeModal({ isOpen, onClose, profile, onSave }: PersonalizeModalProps) {
  const [formData, setFormData] = useState<FamilyProfile>({ ...profile });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div id="personalize-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        id="personalize-modal-content"
        className="bg-[#FCFAF7] border border-[#E3DACD] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="bg-[#2E241E] text-[#F7F2EA] px-6 py-5 flex items-center justify-between border-b border-[#43352C]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4A3B30] flex items-center justify-center text-[#E5D7C5]">
              <Church className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold tracking-wide">Family & Baptism Details</h3>
              <p className="text-xs text-[#D1C2AF]">Personalize your preparation booklet</p>
            </div>
          </div>
          <button
            id="close-personalize-modal"
            onClick={onClose}
            className="text-[#D1C2AF] hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5749] mb-1.5 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#A34E36]" /> Child's Full Name (or Christian Name)
            </label>
            <input
              id="input-child-name"
              type="text"
              value={formData.childName}
              onChange={e => setFormData({ ...formData, childName: e.target.value })}
              placeholder="e.g. Thomas John"
              className="w-full px-3.5 py-2.5 bg-white border border-[#D5C7B5] rounded-xl text-[#2E241E] placeholder:text-[#A89886] focus:outline-hidden focus:ring-2 focus:ring-[#8C6D53]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5749] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#8C6D53]" /> Date of Baptism
              </label>
              <input
                id="input-baptism-date"
                type="text"
                value={formData.baptismDate}
                onChange={e => setFormData({ ...formData, baptismDate: e.target.value })}
                placeholder="e.g. Sunday, 15 October 2026"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D5C7B5] rounded-xl text-[#2E241E] placeholder:text-[#A89886] focus:outline-hidden focus:ring-2 focus:ring-[#8C6D53]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5749] mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#8C6D53]" /> Parish Priest / Deacon
              </label>
              <input
                id="input-minister-name"
                type="text"
                value={formData.ministerName}
                onChange={e => setFormData({ ...formData, ministerName: e.target.value })}
                placeholder="e.g. Fr. John Owen"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D5C7B5] rounded-xl text-[#2E241E] placeholder:text-[#A89886] focus:outline-hidden focus:ring-2 focus:ring-[#8C6D53]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5749] mb-1.5 flex items-center gap-1.5">
              <Church className="w-3.5 h-3.5 text-[#8C6D53]" /> Church / Parish
            </label>
            <input
              id="input-parish-name"
              type="text"
              value={formData.parishName}
              onChange={e => setFormData({ ...formData, parishName: e.target.value })}
              placeholder={DEFAULT_PARISH}
              className="w-full px-3.5 py-2.5 bg-white border border-[#D5C7B5] rounded-xl text-[#2E241E] placeholder:text-[#A89886] focus:outline-hidden focus:ring-2 focus:ring-[#8C6D53]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5749] mb-1.5">
                Parents' Names
              </label>
              <input
                id="input-parents-names"
                type="text"
                value={formData.parentsNames}
                onChange={e => setFormData({ ...formData, parentsNames: e.target.value })}
                placeholder="e.g. Michael & Sarah"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D5C7B5] rounded-xl text-[#2E241E] placeholder:text-[#A89886] focus:outline-hidden focus:ring-2 focus:ring-[#8C6D53]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5749] mb-1.5">
                Godparents / Sponsors
              </label>
              <input
                id="input-godparents-names"
                type="text"
                value={formData.godparentsNames}
                onChange={e => setFormData({ ...formData, godparentsNames: e.target.value })}
                placeholder="e.g. David & Clare"
                className="w-full px-3.5 py-2.5 bg-white border border-[#D5C7B5] rounded-xl text-[#2E241E] placeholder:text-[#A89886] focus:outline-hidden focus:ring-2 focus:ring-[#8C6D53]"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E8DFC8]">
            <button
              id="btn-cancel-personalize"
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[#6B5749] hover:bg-[#EBE2D5] rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              id="btn-save-personalize"
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#6A4B35] hover:bg-[#563B29] rounded-xl shadow-xs flex items-center gap-2 transition-colors"
            >
              <Check className="w-4 h-4" /> Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
