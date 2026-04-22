"use client";

import { useEffect, useState, useRef } from "react";

export default function AmbientAudio({ isActive }: { isActive: boolean }) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneOscRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  
  useEffect(() => {
    if (isActive && !audioCtxRef.current) {
      // Initialize Audio Context on user interaction
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // --- 1. Ambient Drone ---
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Deep, low hum
      droneOsc.type = "sine";
      droneOsc.frequency.value = 55; // Low A
      
      // Filter to muffle it
      filter.type = "lowpass";
      filter.frequency.value = 150;

      // Very quiet
      droneGain.gain.setValueAtTime(0, ctx.currentTime);
      droneGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 3);

      droneOsc.connect(filter);
      filter.connect(droneGain);
      droneGain.connect(ctx.destination);
      
      droneOsc.start();
      droneOscRef.current = droneOsc;
      droneGainRef.current = droneGain;

      // --- 2. Sporadic Radar sweeping "beeps" ---
      const playBeep = () => {
        if (ctx.state !== "running") return;
        const bOsc = ctx.createOscillator();
        const bGain = ctx.createGain();
        const bPan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

        bOsc.type = "sine";
        bOsc.frequency.setValueAtTime(800, ctx.currentTime);
        bOsc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);

        bGain.gain.setValueAtTime(0, ctx.currentTime);
        bGain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.05);
        bGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

        if (bPan) {
          bPan.pan.value = (Math.random() * 2) - 1; // Random stereo pan
          bOsc.connect(bGain);
          bGain.connect(bPan);
          bPan.connect(ctx.destination);
        } else {
          bOsc.connect(bGain);
          bGain.connect(ctx.destination);
        }

        bOsc.start();
        bOsc.stop(ctx.currentTime + 1);

        // Schedule next beep randomly between 4s and 12s
        const nextTime = Math.random() * 8000 + 4000;
        setTimeout(playBeep, nextTime);
      };

      // Start first beep after structural initialization
      setTimeout(playBeep, 2000);
    }

    if (audioCtxRef.current) {
       if (isActive) {
           audioCtxRef.current.resume();
           if (droneGainRef.current) {
               droneGainRef.current.gain.linearRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 1);
           }
       } else {
           if (droneGainRef.current) {
               droneGainRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.5);
           }
           setTimeout(() => audioCtxRef.current?.suspend(), 600);
       }
    }
  }, [isActive]);

  // Cleanup on unmount
  useEffect(() => {
      return () => {
          if (audioCtxRef.current) {
              audioCtxRef.current.close();
          }
      }
  }, []);

  return null; // Invisible audio controller
}
