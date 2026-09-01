import { useState, type FormEvent } from 'react';
import { COMMON_QUESTIONS } from '../data/catecheticalData';
import {
  HelpCircle,
  Search,
  BookOpen,
  Send,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  MessageCircle
} from 'lucide-react';
import { playSacredChime } from '../utils/audio';

export function CatechismQA() {
  const [search, setSearch] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const filteredQuestions = COMMON_QUESTIONS.filter(
    item =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  const handleAskQuestion = (e: FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsSearching(true);
    playSacredChime();

    // Doctrinal matching heuristic grounded in Father John Owen's text and Catholic Catechism
    const qLower = customQuestion.toLowerCase();
    setTimeout(() => {
      let answer = "";
      if (qLower.includes('name') || qLower.includes('christian name') || qLower.includes('saint')) {
        answer = "In the Catholic Church, parents are encouraged to choose a Christian name or the name of a Saint (Canon 855) whose life offers an example of Christian virtue and who will intercede as a heavenly patron for the child.";
      } else if (qLower.includes('unmarried') || qLower.includes('single') || qLower.includes('civil') || qLower.includes('divorce')) {
        answer = "The Church warmly welcomes children for Baptism regardless of the marital situation of the parents. As Father John Owen stresses: 'You do not have to pretend to be a perfect Catholic family.' What is required is at least one parent's consent and a sincere intention to nurture the child's faith.";
      } else if (qLower.includes('dress') || qLower.includes('gown') || qLower.includes('wear') || qLower.includes('white')) {
        answer = "The child ordinarily wears a white garment or christening gown, which signifies the new creation and the dignity of being 'clothed in Christ' (Galatians 3:27). If your family has an heirloom gown, bring it; otherwise the parish can provide a white garment during the rite.";
      } else if (qLower.includes('godparent') || qLower.includes('sponsor') || qLower.includes('non catholic') || qLower.includes('orthodox') || qLower.includes('protestant')) {
        answer = "Under Canon 874, you must have at least one confirmed, practicing Catholic sponsor (ordinarily 16+ years old). A baptised Christian of another denomination may participate alongside the Catholic sponsor as an official 'Christian Witness'.";
      } else if (qLower.includes('fee') || qLower.includes('cost') || qLower.includes('pay') || qLower.includes('stipend')) {
        answer = "Sacraments are free gifts of God's grace and can never be bought or sold. While families often make a customary voluntary offering (stipend) to the parish or church to support parish ministry, no family is ever turned away for financial reasons.";
      } else if (qLower.includes('candle') || qLower.includes('easter') || qLower.includes('paschal')) {
        answer = "The baptismal candle is lit directly from the Paschal (Easter) Candle, representing the Light of the Risen Christ. Entrusted to the family and godparents, it is kept to be lit on baptismal anniversaries and First Holy Communion.";
      } else {
        answer = `Father John Owen's catechetical material reminds us: "Baptism is the gateway to Christian life. God frees the baptised from sin, gives new life in Christ, makes them an adopted child of God, and marks them permanently." For specific pastoral arrangements, please note this question in your "Are We Ready?" assessment to discuss with your parish priest.`;
      }

      setCustomAnswer(answer);
      setIsSearching(false);
    }, 300);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="qa-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
              Catechetical Assistance
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
              Frequently Asked Questions & Inquiries
            </h1>
          </div>
        </div>
        <p className="text-sm text-[#6B6658] leading-relaxed mt-2">
          Clear answers grounded directly in Father John Owen's catechetical material, the Catechism of the Catholic Church, and Canon Law.
        </p>

        {/* Search Input */}
        <div className="mt-5 relative">
          <Search className="w-4 h-4 text-[#8C7B65] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="input-search-qa"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search FAQs by topic (e.g. godparents, infant baptism, candle, family)..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8F5F0] border border-[#E2DDD4] rounded-full text-xs sm:text-sm text-[#2C2C1E] placeholder:text-[#A49E92] focus:outline-hidden focus:ring-2 focus:ring-[#5A5A40]"
          />
        </div>
      </div>

      {/* Ask a Question Box */}
      <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[28px] p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#5A5A40]" />
          <h2 className="font-cinzel text-base font-bold text-[#2C2C1E]">
            Ask a Question on Baptismal Practice or Doctrine
          </h2>
        </div>

        <form onSubmit={handleAskQuestion} className="flex flex-col sm:flex-row gap-2">
          <input
            id="input-ask-question"
            type="text"
            value={customQuestion}
            onChange={e => setCustomQuestion(e.target.value)}
            placeholder="e.g. Can we have two godmothers? What should the baby wear?"
            className="flex-1 px-4 py-2.5 bg-white border border-[#E2DDD4] rounded-full text-xs sm:text-sm text-[#2C2C1E] placeholder:text-[#A49E92] focus:ring-2 focus:ring-[#5A5A40]"
          />
          <button
            id="btn-submit-question"
            type="submit"
            disabled={isSearching}
            className="px-6 py-2.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSearching ? "Searching..." : "Get Catechetical Answer"}</span>
          </button>
        </form>

        {customAnswer && (
          <div className="bg-white border border-[#E2DDD4] p-5 rounded-[20px] space-y-2 animate-in fade-in duration-200 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Father John Owen Catechetical Guidance:
            </span>
            <p className="text-sm sm:text-base text-[#2C2C1E] leading-relaxed">
              {customAnswer}
            </p>
          </div>
        )}
      </div>

      {/* Accordion of Standard FAQs */}
      <div className="space-y-3">
        {filteredQuestions.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-[#E2DDD4] rounded-[20px] overflow-hidden shadow-xs transition-all"
            >
              <button
                id={`faq-btn-${idx}`}
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#F8F5F0] transition-colors"
              >
                <span className="font-bold text-sm sm:text-base text-[#2C2C1E]">
                  {item.q}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#5A5A40] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#5A5A40] shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 pt-1 space-y-3 border-t border-[#E2DDD4] bg-[#F8F5F0] animate-in fade-in duration-150">
                  <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
                    {item.a}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-white text-[#5A5A40] rounded-full text-[10px] font-semibold border border-[#E2DDD4] flex items-center gap-1"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#5A5A40]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
