import { useState, type FormEvent } from 'react';
import { FamilyRuleHabit, FamilyProfile } from '../types';
import {
  ShieldCheck,
  Plus,
  Check,
  Trash2,
  Heart,
  Clock,
  Home,
  Utensils,
  Calendar,
  Sparkles,
  Printer,
  Cross
} from 'lucide-react';
import { playSacredChime } from '../utils/audio';

interface FamilyRuleOfLifeProps {
  habits: FamilyRuleHabit[];
  onToggleHabit: (id: string) => void;
  onAddCustomHabit: (rhythm: string, title: string, description: string) => void;
  onRemoveCustomHabit: (id: string) => void;
  profile: FamilyProfile;
}

export function FamilyRuleOfLife({
  habits,
  onToggleHabit,
  onAddCustomHabit,
  onRemoveCustomHabit,
  profile
}: FamilyRuleOfLifeProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [rhythmInput, setRhythmInput] = useState('Daily');
  const [titleInput, setTitleInput] = useState('');
  const [descInput, setDescInput] = useState('');

  const handleAddSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!titleInput.trim()) return;
    onAddCustomHabit(rhythmInput, titleInput.trim(), descInput.trim());
    setTitleInput('');
    setDescInput('');
    setShowAddForm(false);
    playSacredChime();
  };

  const getRhythmIcon = (rhythm: string) => {
    const r = rhythm.toLowerCase();
    if (r.includes('daily')) return Clock;
    if (r.includes('meal')) return Utensils;
    if (r.includes('weekly')) return Calendar;
    if (r.includes('home')) return Home;
    return Sparkles;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header */}
      <div 
        id="family-rule-header"
        className="bg-white border border-[#E2DDD4] rounded-[24px] p-6 sm:p-8 shadow-xs"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#5A5A40]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#5A5A40] tracking-wider">
                Appendix E
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C1E]">
                A Simple Family Rule of Life
              </h1>
            </div>
          </div>

          <button
            id="btn-toggle-add-custom-habit"
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-[#F0EDE6] hover:bg-[#E5E0D6] border border-[#E2DDD4] text-[#2C2C1E] rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{showAddForm ? 'Close Form' : '+ Add Custom Habit'}</span>
          </button>
        </div>

        <p className="text-sm text-[#6B6658] leading-relaxed mt-2">
          The aim is not a burdensome programme. Choose small practices that can become natural, ordinary family life in your domestic church.
        </p>
      </div>

      {/* Custom Add Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddSubmit}
          className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[24px] p-6 space-y-4 animate-in fade-in duration-150"
        >
          <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#2C2C1E]">
            Add a New Custom Practice to Your Family Rule
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Rhythm / Frequency</label>
              <select
                value={rhythmInput}
                onChange={e => setRhythmInput(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD4] rounded-full text-xs text-[#2C2C1E] focus:ring-2 focus:ring-[#5A5A40]"
              >
                <option value="Daily">Daily</option>
                <option value="At meals">At meals</option>
                <option value="Weekly">Weekly</option>
                <option value="At home">At home</option>
                <option value="Regularly">Regularly</option>
                <option value="As the child grows">As the child grows</option>
                <option value="With godparents">With godparents</option>
                <option value="When things go wrong">When things go wrong</option>
                <option value="Family tradition">Family tradition</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Habit Title</label>
              <input
                type="text"
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
                placeholder="e.g. Sunday Family Dinner & Gospel Reflection"
                className="w-full px-4 py-2.5 bg-white border border-[#E2DDD4] rounded-full text-xs text-[#2C2C1E] focus:ring-2 focus:ring-[#5A5A40]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Description / Practice Note</label>
            <input
              type="text"
              value={descInput}
              onChange={e => setDescInput(e.target.value)}
              placeholder="e.g. Light a candle, thank God for three blessings, and read Sunday's Gospel..."
              className="w-full px-4 py-2.5 bg-white border border-[#E2DDD4] rounded-full text-xs text-[#2C2C1E] focus:ring-2 focus:ring-[#5A5A40]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-xs text-[#5A5A40] hover:bg-[#E2DDD4] rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#2C2C1E] hover:bg-[#1C1C13] text-[#F8F5F0] text-xs font-semibold rounded-full"
            >
              Add to Rule
            </button>
          </div>
        </form>
      )}

      {/* Grid of Habits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {habits.map((habit) => {
          const Icon = getRhythmIcon(habit.rhythm);
          return (
            <div
              key={habit.id}
              id={`habit-card-${habit.id}`}
              onClick={() => onToggleHabit(habit.id)}
              className={`cursor-pointer rounded-[20px] border p-5 transition-all shadow-xs flex flex-col justify-between ${
                habit.selected
                  ? 'bg-white border-[#5A5A40] ring-1 ring-[#5A5A40]/30'
                  : 'bg-[#F8F5F0] border-[#E2DDD4] opacity-60 hover:opacity-100'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#F0EDE6] text-[#5A5A40] rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-[#E2DDD4]">
                    <Icon className="w-3 h-3 text-[#5A5A40]" />
                    {habit.rhythm}
                  </span>

                  <div className="flex items-center gap-2">
                    {habit.isCustom && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveCustomHabit(habit.id);
                        }}
                        className="text-[#7A7468] hover:text-red-600 p-1"
                        aria-label="Delete custom habit"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                      habit.selected
                        ? 'bg-[#5A5A40] text-white'
                        : 'border border-[#C5BFA3] bg-white'
                    }`}>
                      {habit.selected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-[#2C2C1E]">
                  {habit.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#3D3D2D] leading-relaxed">
                  {habit.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#F0EDE6] flex items-center justify-between text-[11px] text-[#7A7468]">
                <span>{habit.selected ? '✓ Active Family Practice' : 'Click to add to your rule'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* A Prayer For Your Child Card */}
      <div className="bg-[#F0EDE6] border border-[#E2DDD4] rounded-[28px] p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-[#E2DDD4] flex items-center justify-center mx-auto text-[#5A5A40]">
          <Cross className="w-5 h-5" />
        </div>

        <h3 className="font-cinzel text-lg font-bold text-[#2C2C1E]">
          A Prayer for Your Child
        </h3>

        <p className="font-serif text-base sm:text-lg text-[#3D3D2D] leading-relaxed italic">
          "Lord Jesus, keep this child close to you. Help our home grow in faith, prayer, peace and love, and lead us together towards eternal life. Amen."
        </p>
      </div>
    </div>
  );
}
