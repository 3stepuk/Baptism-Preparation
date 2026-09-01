import { FamilyProfile, CompletedState, FamilyRuleHabit } from '../types';
import {
  CONVERSATIONS,
  RITE_STEPS,
  GODPARENT_REQUIREMENTS,
  TWELVE_ESSENTIALS,
  READINESS_ITEMS,
  EMERGENCY_BAPTISM_GUIDE,
  SCRIPTURE_AND_DOCTRINAL_REFERENCES
} from '../data/catecheticalData';
import { Cross, Church, Check, Award } from 'lucide-react';

interface PrintableBookletProps {
  profile: FamilyProfile;
  state: CompletedState;
  habits: FamilyRuleHabit[];
  onClosePrint: () => void;
}

export function PrintableBooklet({ profile, state, habits, onClosePrint }: PrintableBookletProps) {
  return (
    <div className="bg-white text-black min-h-screen p-6 sm:p-12 space-y-12 max-w-4xl mx-auto font-serif">
      {/* Top Floating Close Bar for screen preview */}
      <div className="no-print sticky top-4 z-50 bg-[#2C2C1E] text-[#F8F5F0] px-6 py-3 rounded-full shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          <Church className="w-4 h-4 text-[#D8D4C8]" />
          <span>Printable Parish Edition Booklet Preview</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-1.5 bg-[#F8F5F0] text-[#2C2C1E] font-bold text-xs rounded-full shadow-xs hover:bg-white transition-colors"
          >
            🖨️ Send to Printer / Save PDF
          </button>
          <button
            onClick={onClosePrint}
            className="text-xs text-[#D8D4C8] hover:text-white transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>

      {/* COVER PAGE (Page 1) */}
      <div className="text-center border-4 border-double border-[#5A5A40] p-8 sm:p-14 space-y-8 print-break-inside-avoid">
        <div className="text-xs uppercase tracking-widest text-[#7A7468] font-sans">
          {profile.parishName || "St Mary's | St John Bosco | St Edward's Parish"} • 1
        </div>

        <div className="py-6 space-y-3">
          <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2C2C1E]">
            MY CHILD'S BAPTISM
          </h1>
          <p className="text-base sm:text-lg italic text-[#3D3D2D] font-serif">
            A simple preparation book for parents and godparents
          </p>
          <p className="text-xs uppercase tracking-widest text-[#7A7468] font-sans">
            New life in Christ begins here
          </p>
        </div>

        <div className="bg-[#F8F5F0] border border-[#E2DDD4] p-6 text-left space-y-3 font-sans text-xs sm:text-sm rounded-[16px]">
          <strong className="block text-[#2C2C1E] font-bold uppercase tracking-wider">
            THIS BOOK IS FOR YOU
          </strong>
          <p className="text-[#3D3D2D] leading-relaxed">
            Work through three short conversations before the Baptism. You do not need to prepare a lesson or know all the answers beforehand. Read, talk honestly, learn the essentials, pray together and take one small next step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 text-left font-sans text-xs sm:text-sm border-t border-b border-[#E2DDD4] py-4">
          <div className="flex justify-between py-1 border-b border-[#E2DDD4]/60">
            <span className="text-[#7A7468]">Child's Name:</span>
            <span className="font-bold text-[#2C2C1E]">{profile.childName || "________________________"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#E2DDD4]/60">
            <span className="text-[#7A7468]">Date of Baptism:</span>
            <span className="font-bold text-[#2C2C1E]">{profile.baptismDate || "________________________"}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#E2DDD4]/60">
            <span className="text-[#7A7468]">Church / Parish:</span>
            <span className="font-bold text-[#2C2C1E]">{profile.parishName || "________________________"}</span>
          </div>
          {profile.parentsNames && (
            <div className="flex justify-between py-1 border-b border-[#E2DDD4]/60">
              <span className="text-[#7A7468]">Parents:</span>
              <span className="font-bold text-[#2C2C1E]">{profile.parentsNames}</span>
            </div>
          )}
          {profile.godparentsNames && (
            <div className="flex justify-between py-1">
              <span className="text-[#7A7468]">Godparents / Sponsors:</span>
              <span className="font-bold text-[#2C2C1E]">{profile.godparentsNames}</span>
            </div>
          )}
        </div>

        <div className="text-xs text-[#7A7468] font-sans">
          Parent and Godparent Parish Edition | 2026
        </div>
      </div>

      {/* CONVERSATION 1 (Page 4) */}
      <div className="space-y-6 pt-8 border-t-2 border-neutral-300 print-break-inside-avoid">
        <div className="flex justify-between items-center text-xs font-sans text-neutral-500">
          <span>{profile.parishName}</span>
          <span>CONVERSATION 1</span>
        </div>

        <h2 className="font-cinzel text-2xl font-bold text-neutral-900">
          Conversation 1: Baptism: New Life in Christ
        </h2>

        <div className="bg-neutral-50 border-l-4 border-neutral-800 p-4 space-y-2 text-xs sm:text-sm">
          <strong className="block font-sans font-bold uppercase tracking-wider text-neutral-800">REMEMBER</strong>
          {CONVERSATIONS[0].rememberPoints.map((pt, i) => (
            <p key={i} className="text-neutral-700">{pt}</p>
          ))}
        </div>

        <div className="space-y-2">
          <strong className="block font-sans text-xs uppercase tracking-wider text-neutral-800">
            TALK ABOUT IT & FAMILY REFLECTION
          </strong>
          <p className="italic text-sm text-neutral-800">
            "{CONVERSATIONS[0].talkPrompt.mainQuestion}"
          </p>
          {state.conversations[1]?.reflectionNote && (
            <div className="bg-neutral-50 border border-neutral-200 p-3 rounded text-xs text-neutral-700">
              <strong>Our Reflection Note:</strong> {state.conversations[1].reflectionNote}
            </div>
          )}
        </div>

        <div className="space-y-2 text-xs">
          <strong className="block font-sans uppercase tracking-wider text-neutral-800">THE ESSENTIALS</strong>
          {CONVERSATIONS[0].essentials.map(e => (
            <div key={e.id} className="pb-1 border-b border-neutral-100">
              <span className="font-bold">{e.question}</span> {e.conciseAnswer}
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 p-4 border border-neutral-200 rounded text-center space-y-1">
          <strong className="block font-sans text-xs uppercase text-neutral-700">PRAYER</strong>
          <p className="italic text-xs sm:text-sm font-serif">"{CONVERSATIONS[0].prayer.text}"</p>
        </div>
      </div>

      {/* CONVERSATION 2 (Page 5) */}
      <div className="space-y-6 pt-8 border-t-2 border-neutral-300 print-break-inside-avoid">
        <div className="flex justify-between items-center text-xs font-sans text-neutral-500">
          <span>{profile.parishName}</span>
          <span>CONVERSATION 2</span>
        </div>

        <h2 className="font-cinzel text-2xl font-bold text-neutral-900">
          Conversation 2: The Rite: Water, Faith and the Signs
        </h2>

        <div className="bg-neutral-50 border-l-4 border-neutral-800 p-4 space-y-2 text-xs sm:text-sm">
          <strong className="block font-sans font-bold uppercase tracking-wider text-neutral-800">REMEMBER</strong>
          {CONVERSATIONS[1].rememberPoints.map((pt, i) => (
            <p key={i} className="text-neutral-700">{pt}</p>
          ))}
        </div>

        <div className="space-y-2">
          <strong className="block font-sans text-xs uppercase tracking-wider text-neutral-800">
            TALK ABOUT IT & FAMILY REFLECTION
          </strong>
          <p className="italic text-sm text-neutral-800">
            "{CONVERSATIONS[1].talkPrompt.mainQuestion}"
          </p>
          {state.conversations[2]?.reflectionNote && (
            <div className="bg-neutral-50 border border-neutral-200 p-3 rounded text-xs text-neutral-700">
              <strong>Our Reflection Note:</strong> {state.conversations[2].reflectionNote}
            </div>
          )}
        </div>

        <div className="space-y-2 text-xs">
          <strong className="block font-sans uppercase tracking-wider text-neutral-800">THE ESSENTIALS</strong>
          {CONVERSATIONS[1].essentials.map(e => (
            <div key={e.id} className="pb-1 border-b border-neutral-100">
              <span className="font-bold">{e.question}</span> {e.conciseAnswer}
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 p-4 border border-neutral-200 rounded text-center space-y-1">
          <strong className="block font-sans text-xs uppercase text-neutral-700">PRAYER</strong>
          <p className="italic text-xs sm:text-sm font-serif">"{CONVERSATIONS[1].prayer.text}"</p>
        </div>
      </div>

      {/* CONVERSATION 3 (Page 6) */}
      <div className="space-y-6 pt-8 border-t-2 border-neutral-300 print-break-inside-avoid">
        <div className="flex justify-between items-center text-xs font-sans text-neutral-500">
          <span>{profile.parishName}</span>
          <span>CONVERSATION 3</span>
        </div>

        <h2 className="font-cinzel text-2xl font-bold text-neutral-900">
          Conversation 3: Living Baptism: Raising a Child in Faith
        </h2>

        <div className="bg-neutral-50 border-l-4 border-neutral-800 p-4 space-y-2 text-xs sm:text-sm">
          <strong className="block font-sans font-bold uppercase tracking-wider text-neutral-800">REMEMBER</strong>
          {CONVERSATIONS[2].rememberPoints.map((pt, i) => (
            <p key={i} className="text-neutral-700">{pt}</p>
          ))}
        </div>

        <div className="space-y-2">
          <strong className="block font-sans text-xs uppercase tracking-wider text-neutral-800">
            TALK ABOUT IT & FAMILY REFLECTION
          </strong>
          <p className="italic text-sm text-neutral-800">
            "{CONVERSATIONS[2].talkPrompt.mainQuestion}"
          </p>
          {state.conversations[3]?.reflectionNote && (
            <div className="bg-neutral-50 border border-neutral-200 p-3 rounded text-xs text-neutral-700">
              <strong>Our Reflection Note:</strong> {state.conversations[3].reflectionNote}
            </div>
          )}
        </div>

        <div className="space-y-2 text-xs">
          <strong className="block font-sans uppercase tracking-wider text-neutral-800">THE ESSENTIALS</strong>
          {CONVERSATIONS[2].essentials.map(e => (
            <div key={e.id} className="pb-1 border-b border-neutral-100">
              <span className="font-bold">{e.question}</span> {e.conciseAnswer}
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 p-4 border border-neutral-200 rounded text-center space-y-1">
          <strong className="block font-sans text-xs uppercase text-neutral-700">PRAYER</strong>
          <p className="italic text-xs sm:text-sm font-serif">"{CONVERSATIONS[2].prayer.text}"</p>
        </div>
      </div>

      {/* APPENDIX A: RITE SUMMARY */}
      <div className="space-y-4 pt-8 border-t-2 border-neutral-300 print-break-inside-avoid">
        <h3 className="font-cinzel text-lg font-bold text-neutral-900">
          Appendix A: The Baptism Rite Step by Step
        </h3>
        <table className="w-full text-xs font-sans border-collapse border border-neutral-300">
          <thead>
            <tr className="bg-neutral-100 text-neutral-800">
              <th className="border border-neutral-300 p-2 text-left w-1/3">Part</th>
              <th className="border border-neutral-300 p-2 text-left">Liturgical Meaning</th>
            </tr>
          </thead>
          <tbody>
            {RITE_STEPS.map(s => (
              <tr key={s.stepNumber}>
                <td className="border border-neutral-300 p-2 font-bold">{s.partName}</td>
                <td className="border border-neutral-300 p-2">{s.whatItMeans}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* APPENDIX E: FAMILY RULE OF LIFE CHARTER */}
      <div className="space-y-4 pt-8 border-t-2 border-neutral-300 print-break-inside-avoid">
        <h3 className="font-cinzel text-lg font-bold text-neutral-900 text-center">
          Our Family Rule of Life
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
          {habits.filter(h => h.selected).map(h => (
            <div key={h.id} className="border border-neutral-300 p-3 rounded bg-neutral-50">
              <span className="font-bold uppercase text-neutral-700 block text-[10px]">{h.rhythm}</span>
              <strong className="text-neutral-900 block">{h.title}</strong>
              <p className="text-neutral-600 mt-1">{h.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* APPENDIX D: NOTES FOR PARISH PRIEST */}
      {state.priestQuestions.length > 0 && (
        <div className="space-y-3 pt-6 border-t-2 border-neutral-300 print-break-inside-avoid font-sans text-xs">
          <strong className="block font-bold text-neutral-900 uppercase">
            Questions & Notes to Discuss with the Parish Priest:
          </strong>
          <ul className="list-disc pl-5 space-y-1 text-neutral-800">
            {state.priestQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      )}

      {/* FINAL BLESSING */}
      <div className="text-center pt-8 border-t border-neutral-200 font-sans text-xs text-neutral-500">
        <p>May God bless your child, your family and your godparents as you prepare for Baptism.</p>
        <p className="mt-1">St Mary's | St John Bosco | St Edward's Parish • Catholic Diocese</p>
      </div>
    </div>
  );
}
