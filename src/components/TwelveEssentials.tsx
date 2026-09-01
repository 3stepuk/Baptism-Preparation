import { useState, type MouseEvent } from 'react';
import { TWELVE_ESSENTIALS } from '../data/catecheticalData';
import {
  Award,
  Search,
  Sparkles,
  BookOpen,
  CheckCircle2,
  RotateCw,
  HelpCircle,
  Check
} from 'lucide-react';
import { playSacredChime } from '../utils/audio';

export function TwelveEssentials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [understoodIds, setUnderstoodIds] = useState<number[]>([]);

  const filteredItems = TWELVE_ESSENTIALS.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.conciseAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.theologicalContext && item.theologicalContext.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFlip = (id: number) => {
    setFlippedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleUnderstood = (id: number, e: MouseEvent) => {
    e.stopPropagation();
    setUnderstoodIds(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      if (next.includes(id)) {
        playSacredChime();
      }
      return next;
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="essentials-12-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
                Appendix C
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
                Twelve Things to Understand
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#F0EDE6] px-3.5 py-1.5 rounded-full border border-[#E2DDD4] text-xs font-semibold text-[#2C2C1E]">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40]" />
            <span>{understoodIds.length} of 12 Mastered</span>
          </div>
        </div>

        <p className="text-sm text-[#6B6658] leading-relaxed mt-3">
          You do not need to memorise a theological script. Try to explain each point in ordinary words; click any card to reveal the concise Catholic answer and doctrinal depth.
        </p>

        {/* Search Bar */}
        <div className="mt-5 relative">
          <Search className="w-4 h-4 text-[#8C7B65] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-essentials"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search doctrines (e.g. grace, original sin, godparent, indelible mark)..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8F5F0] border border-[#E2DDD4] rounded-full text-xs sm:text-sm text-[#2C2C1E] placeholder:text-[#A49E92] focus:outline-hidden focus:ring-2 focus:ring-[#5A5A40]"
          />
        </div>
      </div>

      {/* Grid of 12 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const isFlipped = flippedIds.includes(item.id);
          const isUnderstood = understoodIds.includes(item.id);

          return (
            <div
              key={item.id}
              id={`essential-card-${item.id}`}
              onClick={() => toggleFlip(item.id)}
              className={`cursor-pointer border rounded-[20px] p-5 transition-all shadow-xs flex flex-col justify-between min-h-[190px] ${
                isFlipped
                  ? 'bg-[#F0EDE6] border-[#5A5A40] ring-1 ring-[#5A5A40]/30'
                  : 'bg-white border-[#E2DDD4] hover:border-[#5A5A40]/60'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#F0EDE6] text-[#5A5A40] font-bold text-xs flex items-center justify-center shrink-0">
                    {item.id}
                  </span>

                  <button
                    onClick={(e) => toggleUnderstood(item.id, e)}
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1 transition-colors ${
                      isUnderstood
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        : 'bg-[#F8F5F0] text-[#5A5A40] border-[#E2DDD4] hover:bg-[#F0EDE6]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{isUnderstood ? "Mastered" : "Mark Mastered"}</span>
                  </button>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-[#2C2C1E]">
                  {item.question}
                </h3>

                {isFlipped ? (
                  <div className="space-y-2 pt-2 border-t border-[#E2DDD4] animate-in fade-in duration-150">
                    <p className="text-xs sm:text-sm font-medium text-[#2C2C1E] leading-relaxed">
                      {item.conciseAnswer}
                    </p>
                    {item.theologicalContext && (
                      <p className="text-xs text-[#5A5A40] bg-white p-2.5 rounded-[12px] border border-[#E2DDD4]">
                        {item.theologicalContext}
                      </p>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-[#7A7468] italic pt-1">
                    Try explaining in your own words... click to reveal concise Catholic answer.
                  </p>
                )}
              </div>

              <div className="pt-3 mt-3 border-t border-[#F0EDE6] flex items-center justify-between text-[11px]">
                <span className="font-semibold text-[#5A5A40]">
                  {item.catechismRef || item.scriptureRef || "Catholic Doctrine"}
                </span>

                <span className="text-[#7A7468] flex items-center gap-1 font-medium">
                  <RotateCw className="w-3 h-3" />
                  {isFlipped ? "Flip to question" : "Flip for answer"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
