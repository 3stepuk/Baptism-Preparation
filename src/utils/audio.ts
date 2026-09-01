// Gentle sacred chime synthesizer using Web Audio API
export function playSacredChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Play warm peaceful bell chord (F4, A4, C5, E5)
    const notes = [349.23, 440.0, 523.25, 659.25];
    const now = ctx.currentTime;

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.12 / (i + 1), now + i * 0.08 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 2.6);
    });
  } catch {
    // Graceful fallback if audio context is blocked
  }
}
