import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Radio } from 'lucide-react';

export const AudioEngine: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Warm Sub Drone (55Hz - A1 fundamental)
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(55, ctx.currentTime);

      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.6, ctx.currentTime);
      subOsc.connect(subGain);
      subGain.connect(masterGain);
      subOsc.start();

      // 2. Kiln Resonance (110Hz + slow LFO filter)
      const midOsc = ctx.createOscillator();
      midOsc.type = 'triangle';
      midOsc.frequency.setValueAtTime(110, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, ctx.currentTime);

      // Slow LFO for organic breath
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.15, ctx.currentTime); // 6.6 second cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(80, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();

      const midGain = ctx.createGain();
      midGain.gain.setValueAtTime(0.3, ctx.currentTime);
      midOsc.connect(filter);
      filter.connect(midGain);
      midGain.connect(masterGain);
      midOsc.start();

      // 3. Studio Tape Room Texture (Noise buffer)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.04;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(800, ctx.currentTime);
      noiseFilter.Q.setValueAtTime(1.2, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.12, ctx.currentTime);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      whiteNoise.start();

      setIsPlaying(true);
    } catch (e) {
      console.warn('AudioContext error:', e);
    }
  };

  const stopAudio = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.2);
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
        gainNodeRef.current = null;
        setIsPlaying(false);
      }, 1200);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? 'Silence Studio Soundscape' : 'Listen to Athens Studio Soundscape'}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-malouz-800 bg-malouz-900/80 hover:border-malouz-alien/60 hover:bg-malouz-850 transition-all text-xs font-mono tracking-wider group"
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-malouz-alien opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-malouz-alien"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-malouz-alien" />
          <span className="hidden sm:inline text-malouz-bone">ATHENS STUDIO AMBIENCE [ON]</span>
        </>
      ) : (
        <>
          <Radio className="w-3.5 h-3.5 text-malouz-muted group-hover:text-malouz-alien transition-colors" />
          <VolumeX className="w-3.5 h-3.5 text-malouz-muted" />
          <span className="hidden sm:inline text-malouz-muted group-hover:text-malouz-bone transition-colors">
            STUDIO SOUND [OFF]
          </span>
        </>
      )}
    </button>
  );
};
