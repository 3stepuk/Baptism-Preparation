import { useState, type FormEvent } from 'react';
import { READINESS_ITEMS } from '../data/catecheticalData';
import {
  CheckSquare,
  Square,
  AlertCircle,
  HelpCircle,
  Plus,
  Trash2,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  FileText
} from 'lucide-react';
import { playSacredChime } from '../utils/audio';

interface ReadinessAssessmentProps {
  checkedItems: string[];
  onToggleCheck: (id: string) => void;
  priestQuestions: string[];
  onAddQuestion: (q: string) => void;
  onRemoveQuestion: (idx: number) => void;
}

export function ReadinessAssessment({
  checkedItems,
  onToggleCheck,
  priestQuestions,
  onAddQuestion,
  onRemoveQuestion
}: ReadinessAssessmentProps) {
  const [newQuestion, setNewQuestion] = useState('');

  const handleAddQ = (e: FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    onAddQuestion(newQuestion);
    setNewQuestion('');
  };

  const handleCheck = (id: string) => {
    onToggleCheck(id);
    if (!checkedItems.includes(id)) {
      playSacredChime();
    }
  };

  const progressCount = checkedItems.length;
  const isFullyChecked = progressCount === READINESS_ITEMS.length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="readiness-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
                Appendix D
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
                Before the Baptism: Are We Ready?
              </h1>
            </div>
          </div>

          <span className="text-xs font-semibold px-3.5 py-1.5 bg-[#F0EDE6] border border-[#E2DDD4] text-[#2C2C1E] rounded-full">
            {progressCount} of {READINESS_ITEMS.length} Confirmed
          </span>
        </div>

        <p className="text-sm text-[#6B6658] leading-relaxed mt-2">
          Use this as an honest family review before your final parish conversation. <strong>It is not a pass/fail test.</strong> Tick only what is genuinely true. If something is not yet clear, bring it to the conversation rather than ticking it simply to finish the page.
        </p>
      </div>

      {/* Checklist Items */}
      <div className="bg-white border border-[#E2DDD4] rounded-[28px] p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="font-cinzel text-base font-bold text-[#2C2C1E] pb-2 border-b border-[#EFEBE3]">
          Honest Family Review Items
        </h2>

        <div className="space-y-3">
          {READINESS_ITEMS.map((item) => {
            const isChecked = checkedItems.includes(item.id);
            return (
              <div
                key={item.id}
                id={`readiness-item-${item.id}`}
                onClick={() => handleCheck(item.id)}
                className={`cursor-pointer p-4 rounded-[20px] border transition-all flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-[#F0EDE6] border-[#5A5A40]/60 shadow-xs'
                    : 'bg-[#F8F5F0] border-[#E2DDD4] hover:border-[#5A5A40]/50'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <div className="w-5 h-5 rounded-md bg-[#5A5A40] text-white flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-md border border-[#C5BFA3] bg-white" />
                  )}
                </div>

                <div className="space-y-1 text-left">
                  <p className={`text-sm font-semibold leading-snug ${
                    isChecked ? 'text-[#2C2C1E]' : 'text-[#3D3D2D]'
                  }`}>
                    {item.statement}
                  </p>
                  <p className="text-xs text-[#7A7468]">
                    {item.clarification}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Encouragement & Pastoral Policy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 space-y-2">
          <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <h3 className="font-cinzel">You Do Not Need</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
            • Perfect theological vocabulary<br />
            • An idealised family situation<br />
            • A promise that family life will never be difficult<br />
            • A polished testimony<br />
            • Memorisation of the whole ceremony
          </p>
        </div>

        <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 space-y-2">
          <div className="flex items-center gap-2 text-[#5A5A40] font-bold text-sm">
            <AlertCircle className="w-4 h-4" />
            <h3 className="font-cinzel">If Hope of Catholic Upbringing is Unclear</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
            The response is a <strong>pastoral conversation, not pretending</strong>. The parish priest makes the pastoral and canonical judgement and follows the law of the Church, explaining any difficulty and working with the family towards a genuine way forward.
          </p>
        </div>
      </div>

      {/* Questions for Parish Priest Note Board */}
      <div className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 text-[#5A5A40]" />
            <div>
              <h3 className="font-cinzel text-base font-bold text-[#2C2C1E]">
                Questions for the Parish Priest
              </h3>
              <p className="text-xs text-[#7A7468]">
                Note any canonical, family, or spiritual questions to bring to your final meeting.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleAddQ} className="flex gap-2">
          <input
            id="input-priest-question"
            type="text"
            value={newQuestion}
            onChange={e => setNewQuestion(e.target.value)}
            placeholder="e.g. Can my brother who lives overseas participate over video call? or godparent paperwork question..."
            className="flex-1 px-4 py-2.5 bg-[#F8F5F0] border border-[#E2DDD4] rounded-full text-xs sm:text-sm text-[#2C2C1E] placeholder:text-[#A49E92] focus:outline-hidden focus:ring-2 focus:ring-[#5A5A40]"
          />
          <button
            id="btn-add-priest-question"
            type="submit"
            className="px-5 py-2.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs shrink-0"
          >
            <Plus className="w-4 h-4" /> Add Note
          </button>
        </form>

        {priestQuestions.length > 0 ? (
          <div className="space-y-2 pt-2">
            {priestQuestions.map((q, idx) => (
              <div
                key={idx}
                className="bg-[#F8F5F0] border border-[#E2DDD4] p-3.5 rounded-[16px] flex items-center justify-between gap-3 text-xs sm:text-sm text-[#2C2C1E]"
              >
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#5A5A40]">{idx + 1}.</span>
                  <span>{q}</span>
                </div>
                <button
                  onClick={() => onRemoveQuestion(idx)}
                  className="text-[#7A7468] hover:text-red-600 p-1 transition-colors"
                  aria-label="Remove question"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-[#7A7468] italic bg-[#F8F5F0] p-3.5 rounded-[16px] border border-[#E2DDD4]">
            No questions noted yet. You can write any honest concern or inquiry here.
          </p>
        )}
      </div>
    </div>
  );
}
