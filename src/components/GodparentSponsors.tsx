import { useState } from 'react';
import { GODPARENT_REQUIREMENTS } from '../data/catecheticalData';
import { FamilyProfile } from '../types';
import {
  Users,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Share2,
  Copy,
  Check,
  HeartHandshake,
  BookOpen,
  Award
} from 'lucide-react';

interface GodparentSponsorsProps {
  profile: FamilyProfile;
}

export function GodparentSponsors({ profile }: GodparentSponsorsProps) {
  const [copied, setCopied] = useState(false);
  const [selectedReqId, setSelectedReqId] = useState<string>('catholic-life');

  const godparentLetter = `Dear Godparent,

As we prepare for ${profile.childName || "our child"}'s Holy Baptism at ${profile.parishName || "our parish"}, we are blessed to have you as a sponsor.

In the Catholic Church, a godparent is not an honorary title. You stand alongside us to pray for ${profile.childName || "our child"}, give a recognisable Christian example of forgiveness and faith, and encourage their sacramental life as they grow.

We invite you to read through the three short conversations in our baptism preparation guide:
1. Baptism: New Life in Christ (Grace & Divine Filiation)
2. The Rite: Water, Faith and the Signs (Our sincere "I do")
3. Living Baptism: Raising a Child in Faith (The Domestic Church)

May God bless you for undertaking this holy role.
With love and prayers,
${profile.parentsNames || "The Family"}`;

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(godparentLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="godparents-guide-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
              Appendix B
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
              Parents and Godparents
            </h1>
          </div>
        </div>
        <p className="text-sm text-[#6B6658] leading-relaxed mt-2">
          Guidelines on parental responsibility, sponsor canonical qualifications, and choosing faithful witnesses.
        </p>
      </div>

      {/* Parents Section */}
      <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-[#5A5A40]" />
          <h2 className="font-serif text-xl font-bold text-[#2C2C1E]">
            Parents' Sacred Responsibility
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#3D3D2D] leading-relaxed">
          By asking for Baptism, parents accept a real responsibility for the child’s Christian upbringing. The parish priest also confirms that the canonical conditions are met, including the necessary parental consent and a founded hope that the child will be brought up in the Catholic religion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bg-white p-3.5 rounded-[14px] border border-[#E2DDD4] flex items-start gap-2.5 text-xs text-[#3D3D2D]">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
            <span>Keep Sunday Mass at the centre of family life.</span>
          </div>

          <div className="bg-white p-3.5 rounded-[14px] border border-[#E2DDD4] flex items-start gap-2.5 text-xs text-[#3D3D2D]">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
            <span>Pray with and for the child from the beginning.</span>
          </div>

          <div className="bg-white p-3.5 rounded-[14px] border border-[#E2DDD4] flex items-start gap-2.5 text-xs text-[#3D3D2D]">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
            <span>Teach the Sign of the Cross, the Lord’s Prayer and the basic truths of faith.</span>
          </div>

          <div className="bg-white p-3.5 rounded-[14px] border border-[#E2DDD4] flex items-start gap-2.5 text-xs text-[#3D3D2D]">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
            <span>Prepare the child for Confession, Holy Communion and Confirmation.</span>
          </div>

          <div className="bg-white p-3.5 rounded-[14px] border border-[#E2DDD4] flex items-start gap-2.5 text-xs text-[#3D3D2D]">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
            <span>Give a recognisable Christian example of forgiveness, truthfulness, and charity.</span>
          </div>

          <div className="bg-white p-3.5 rounded-[14px] border border-[#E2DDD4] flex items-start gap-2.5 text-xs text-[#3D3D2D]">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
            <span>Ask the parish for help early when faith or circumstances become difficult.</span>
          </div>
        </div>
      </div>

      {/* Godparent Canonical Requirements Table & Explorer */}
      <div className="space-y-4">
        <div className="bg-[#F0EDE6] border-l-4 border-[#5A5A40] p-5 rounded-r-[20px] space-y-1">
          <h3 className="font-cinzel text-base font-bold text-[#2C2C1E]">
            A Godparent is Not an Honorary Title
          </h3>
          <p className="text-xs sm:text-sm text-[#5A5A40] leading-relaxed">
            The sponsor helps the baptised person live a Christian life faithful to the grace and obligations of Baptism, supporting the parents and remaining a recognisable Catholic witness as the child grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GODPARENT_REQUIREMENTS.map((req) => (
            <div
              key={req.id}
              className="bg-white border border-[#E2DDD4] rounded-[20px] p-5 space-y-2 shadow-xs hover:border-[#5A5A40] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#2C2C1E] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#5A5A40]" />
                  {req.requirement}
                </span>
                <span className="text-[10px] font-semibold text-[#5A5A40] bg-[#F0EDE6] px-2.5 py-0.5 rounded-full border border-[#E2DDD4]">
                  {req.canonicalReference}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#3D3D2D] leading-relaxed">
                {req.whatItMeans}
              </p>

              <p className="text-xs text-[#6B6658] italic bg-[#F8F5F0] p-2.5 rounded-[12px] border border-[#E2DDD4]">
                💡 {req.practicalTip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* A Good Choice Discernment Box */}
      <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-[#5A5A40]" />
          <h3 className="font-cinzel text-lg font-bold text-[#2C2C1E]">A Good Choice</h3>
        </div>
        <p className="text-sm sm:text-base text-[#3D3D2D] leading-relaxed">
          <strong>Choose a godparent for the Christian life you hope the child will see</strong>, not simply for closeness, social prestige, honour, or family expectation.
        </p>
      </div>

      {/* Shareable Godparent Letter Generator */}
      <div className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-cinzel text-base font-bold text-[#2C2C1E]">
              Share Preparation Guide with Godparents
            </h3>
            <p className="text-xs text-[#7A7468]">
              Send this message to your chosen godparents so they can prepare and pray with you.
            </p>
          </div>

          <button
            id="btn-copy-godparent-letter"
            onClick={handleCopyLetter}
            className="px-5 py-2.5 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] rounded-full text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied!" : "Copy Letter"}</span>
          </button>
        </div>

        <div className="bg-[#F8F5F0] p-4 rounded-[16px] border border-[#E2DDD4] font-mono text-xs text-[#3D3D2D] whitespace-pre-line leading-relaxed">
          {godparentLetter}
        </div>
      </div>
    </div>
  );
}
