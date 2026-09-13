import React, { useState, useEffect, useRef } from 'react';
import { siteContent } from '../../data/content';

interface GalvanizingProcessDiagramProps {
  variant?: 'light' | 'dark' | 'card';
  showDetailsCard?: boolean;
  interactive?: boolean;
  initialSelectedId?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const GalvanizingProcessDiagram: React.FC<GalvanizingProcessDiagramProps> = ({
  variant = 'card',
  showDetailsCard = true,
  interactive = true,
  initialSelectedId = 'degreasing',
  title = "Hot Dip Galvanizing Process Flow",
  subtitle = "Physical 12-Stage Bath & Centrifuge Sequence at Ajasra Vervetech (Harohalli)",
  className = ""
}) => {
  const { processFlowTanks } = siteContent;
  const [selectedTankId, setSelectedTankId] = useState<string>(initialSelectedId);
  const [hoveredTankId, setHoveredTankId] = useState<string | null>(null);

  // Crane simulation state
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [cranePhase, setCranePhase] = useState<'travel' | 'dip' | 'dwell' | 'lift'>('travel');

  const containerRef = useRef<HTMLDivElement>(null);
  const userInteractedRef = useRef<boolean>(false);

  const activeTank = processFlowTanks.find(t => t.id === (hoveredTankId || selectedTankId)) || processFlowTanks[0];

  const isDark = variant === 'dark';

  // Tank isometric dimensions and layout metrics for SVG
  // 12 stages across horizontal viewBox: 1100 x 290
  const tankLayouts: Record<string, {
    x: number;
    y: number;
    w: number;
    h: number;
    depth: number;
    frontColor: string;
    topColor: string;
    sideColor: string;
  }> = {
    'degreasing': { x: 30, y: 130, w: 54, h: 80, depth: 22, frontColor: '#9ec5e8', topColor: '#bed9f3', sideColor: '#7baecc' },
    'rinsing-1': { x: 100, y: 130, w: 54, h: 80, depth: 22, frontColor: '#4592df', topColor: '#78b0eb', sideColor: '#2b73be' },
    'pickling-1': { x: 170, y: 130, w: 54, h: 80, depth: 22, frontColor: '#ef4444', topColor: '#f87171', sideColor: '#c52828' },
    'pickling-2': { x: 240, y: 130, w: 54, h: 80, depth: 22, frontColor: '#ef4444', topColor: '#f87171', sideColor: '#c52828' },
    'rinsing-2': { x: 310, y: 130, w: 54, h: 80, depth: 22, frontColor: '#4592df', topColor: '#78b0eb', sideColor: '#2b73be' },
    'rinsing-3': { x: 380, y: 130, w: 54, h: 80, depth: 22, frontColor: '#4592df', topColor: '#78b0eb', sideColor: '#2b73be' },
    'hot-fluxing': { x: 454, y: 130, w: 58, h: 80, depth: 22, frontColor: '#dfa373', topColor: '#ecc4a3', sideColor: '#b77c4e' },
    'drying': { x: 532, y: 130, w: 100, h: 80, depth: 22, frontColor: '#eedecb', topColor: '#f9eee2', sideColor: '#cbbaa4' },
    'zinc-bath': { x: 652, y: 130, w: 154, h: 80, depth: 22, frontColor: '#e9a367', topColor: '#f4c59a', sideColor: '#bd7b43' },
    'cooling': { x: 920, y: 130, w: 64, h: 80, depth: 22, frontColor: '#4592df', topColor: '#78b0eb', sideColor: '#2b73be' },
    'passivation': { x: 1006, y: 130, w: 64, h: 80, depth: 22, frontColor: '#dfa373', topColor: '#ecc4a3', sideColor: '#b77c4e' }
  };

  // Target X center and dipping depth for all 12 stages
  const stagePositions: Record<string, { centerX: number; dipY: number }> = {
    'degreasing': { centerX: 57, dipY: 142 },
    'rinsing-1': { centerX: 127, dipY: 142 },
    'pickling-1': { centerX: 197, dipY: 142 },
    'pickling-2': { centerX: 267, dipY: 142 },
    'rinsing-2': { centerX: 337, dipY: 142 },
    'rinsing-3': { centerX: 407, dipY: 142 },
    'hot-fluxing': { centerX: 483, dipY: 142 },
    'drying': { centerX: 582, dipY: 124 },
    'zinc-bath': { centerX: 729, dipY: 146 },
    'spinning': { centerX: 860, dipY: 140 },
    'cooling': { centerX: 952, dipY: 142 },
    'passivation': { centerX: 1038, dipY: 142 }
  };

  const currentStage = processFlowTanks[currentStageIndex] || processFlowTanks[8];
  const currentPos = stagePositions[currentStage.id] || { centerX: 729, dipY: 146 };

  // Simulation controls
  const toggleSimulation = () => {
    if (isSimulating) {
      userInteractedRef.current = true;
      setIsSimulating(false);
    } else {
      userInteractedRef.current = false;
      if (currentStageIndex >= processFlowTanks.length - 1) {
        setCurrentStageIndex(0);
        setSelectedTankId(processFlowTanks[0].id);
      }
      setIsSimulating(true);
      setCranePhase('travel');
    }
  };

  const resetSimulation = () => {
    userInteractedRef.current = true;
    setIsSimulating(false);
    setCurrentStageIndex(0);
    setCranePhase('travel');
    setSelectedTankId(processFlowTanks[0].id);
  };

  const handlePrevStage = () => {
    userInteractedRef.current = true;
    if (currentStageIndex > 0) {
      const prevIdx = currentStageIndex - 1;
      setCurrentStageIndex(prevIdx);
      setSelectedTankId(processFlowTanks[prevIdx].id);
      setCranePhase('dwell');
      setIsSimulating(false);
    }
  };

  const handleNextStage = () => {
    userInteractedRef.current = true;
    if (currentStageIndex < processFlowTanks.length - 1) {
      const nextIdx = currentStageIndex + 1;
      setCurrentStageIndex(nextIdx);
      setSelectedTankId(processFlowTanks[nextIdx].id);
      setCranePhase('dwell');
      setIsSimulating(false);
    }
  };

  const handleTankSelect = (tankId: string) => {
    if (!interactive) return;
    userInteractedRef.current = true;
    setSelectedTankId(tankId);
    const idx = processFlowTanks.findIndex(t => t.id === tankId);
    if (idx !== -1) {
      setCurrentStageIndex(idx);
      setCranePhase('dwell');
    }
    if (isSimulating) {
      setIsSimulating(false);
    }
  };

  // Auto-start simulation when scrolled into view and repeat continuously
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-start if user hasn't explicitly clicked pause or a specific stage
            if (!userInteractedRef.current) {
              setIsSimulating(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Step-by-step automated dipping cycle state machine with infinite loop
  useEffect(() => {
    if (!isSimulating) return;

    let timer: ReturnType<typeof setTimeout>;

    if (cranePhase === 'travel') {
      const travelDelay = currentStageIndex === 0 ? 650 : 480;
      timer = setTimeout(() => {
        setCranePhase('dip');
      }, travelDelay);
    } else if (cranePhase === 'dip') {
      timer = setTimeout(() => {
        setCranePhase('dwell');
        const targetTank = processFlowTanks[currentStageIndex];
        if (targetTank) {
          setSelectedTankId(targetTank.id);
        }
      }, 400);
    } else if (cranePhase === 'dwell') {
      const dwellDuration = currentStageIndex === 8 || currentStageIndex === 9 ? 1400 : 850;
      timer = setTimeout(() => {
        setCranePhase('lift');
      }, dwellDuration);
    } else if (cranePhase === 'lift') {
      timer = setTimeout(() => {
        if (currentStageIndex < processFlowTanks.length - 1) {
          setCurrentStageIndex(prev => prev + 1);
          setCranePhase('travel');
        } else {
          // Keep on repeating continuously from Stage 1 to Stage 12!
          setCurrentStageIndex(0);
          setCranePhase('travel');
        }
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [isSimulating, currentStageIndex, cranePhase, processFlowTanks]);

  // Derived workpiece & crane immersion variables
  const isLowered = cranePhase === 'dip' || cranePhase === 'dwell';
  const targetCradleY = isLowered ? currentPos.dipY : 60;
  const isZincSubmerged = currentStage.id === 'zinc-bath' && isLowered;
  const isSpinningActive = currentStage.id === 'spinning' && isLowered;
  const hasFinishedZinc = currentStageIndex > 8 || (currentStage.id === 'zinc-bath' && cranePhase === 'lift');
  const isLoopingBack = currentStageIndex === 0 && cranePhase === 'travel';

  return (
    <div
      ref={containerRef}
      className={`process-diagram-container ${className}`}
      style={{
        backgroundColor: isDark ? 'var(--color-ink)' : 'var(--color-white)',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-xl)',
        boxShadow: isDark ? 'var(--shadow-xl)' : 'var(--shadow-card)',
        overflow: 'hidden',
        color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
        transition: 'all var(--transition-base)'
      }}
    >
      {/* Top Diagram Header with AV Branding & Authentic Blueprint Title */}
      <div
        style={{
          padding: 'clamp(1.25rem, 3vw, 2rem)',
          borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'var(--color-border-subtle)'}`,
          background: isDark
            ? 'linear-gradient(180deg, rgba(13, 58, 61, 0.4) 0%, rgba(11, 23, 36, 0.8) 100%)'
            : 'linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* AV Monogram Crest Badge matching screenshot branding */}
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#07182B',
              border: '2px solid rgba(216, 243, 93, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(7, 24, 43, 0.3)',
              flexShrink: 0
            }}
          >
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <polygon points="12,32 18,10 24,10 18,32" fill="#FFFFFF" />
              <polygon points="17,32 28,10 34,10 23,32" fill="#4592DF" />
              <line x1="14" y1="23" x2="26" y2="23" stroke="#D8F35D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: '800',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isDark ? 'var(--color-lime)' : 'var(--color-deep-teal)',
                  backgroundColor: isDark ? 'rgba(216, 243, 93, 0.12)' : 'rgba(13, 58, 61, 0.08)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                IS-2629 Process Flow
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-muted)' }}>
                • 12 Continuous Stages
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: isDark ? 'var(--color-white)' : '#071D33',
                margin: '2px 0 0'
              }}
            >
              {title}
            </h3>
            {subtitle && (
              <p style={{ fontSize: 'var(--text-xs)', color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-muted)', margin: '2px 0 0' }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Legend / Key indicators */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: 'var(--text-xs)',
            fontWeight: '600'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#ef4444' }} />
            <span>Dual Acid Pickling</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#4592df' }} />
            <span>Cascade Rinsing</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#e9a367' }} />
            <span>Molten Zinc Kettle</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#d48843' }} />
            <span>Centrifuge Spin</span>
          </div>
        </div>
      </div>

      {/* Simulation Toolbar: Play / Pause / Reset & Status Ticker */}
      <div
        className="simulation-control-bar"
        style={{
          padding: '0.625rem clamp(1rem, 2.5vw, 1.75rem)',
          backgroundColor: isDark ? '#061424' : '#E8EEF5',
          borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'var(--color-border)'}`,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={toggleSimulation}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: isSimulating ? 'var(--color-copper)' : 'var(--color-deep-teal)',
              color: 'var(--color-white)',
              fontSize: 'var(--text-xs)',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'background-color 0.2s ease, transform 0.1s ease'
            }}
            title={isSimulating ? "Pause Simulation" : "Start Automated Plant Tour"}
          >
            <span>{isSimulating ? '⏸' : '▶'}</span>
            <span>{isSimulating ? 'Pause Tour' : 'Run Dipping Simulation'}</span>
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={resetSimulation}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'var(--color-white)',
              color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'var(--color-border)'}`,
              fontSize: 'var(--text-xs)',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            title="Reset to Stage 1"
          >
            ⟲ Reset
          </button>

          {/* Stepper Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginLeft: '4px' }}>
            <button
              type="button"
              onClick={handlePrevStage}
              disabled={currentStageIndex <= 0}
              style={{
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-xs)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'var(--color-border)'}`,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'var(--color-white)',
                cursor: currentStageIndex <= 0 ? 'not-allowed' : 'pointer',
                opacity: currentStageIndex <= 0 ? 0.35 : 1,
                color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
                fontSize: '11px',
                fontWeight: '700'
              }}
              title="Previous Stage"
            >
              ◀
            </button>
            <button
              type="button"
              onClick={handleNextStage}
              disabled={currentStageIndex >= 11}
              style={{
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-xs)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'var(--color-border)'}`,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'var(--color-white)',
                cursor: currentStageIndex >= 11 ? 'not-allowed' : 'pointer',
                opacity: currentStageIndex >= 11 ? 0.35 : 1,
                color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
                fontSize: '11px',
                fontWeight: '700'
              }}
              title="Next Stage"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Live Crane & Dipping Status Ticker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isSimulating ? 'rgba(216, 243, 93, 0.15)' : (isDark ? 'rgba(255, 255, 255, 0.06)' : 'var(--color-white)'),
              border: `1px solid ${isSimulating ? 'rgba(216, 243, 93, 0.4)' : 'var(--color-border)'}`,
              fontSize: 'var(--text-xs)',
              fontWeight: '700',
              color: isSimulating ? (isDark ? 'var(--color-lime)' : '#07182B') : (isDark ? '#EAEFED' : 'var(--color-ink)')
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: isSimulating ? '#22c55e' : 'var(--color-copper)',
                boxShadow: isSimulating ? '0 0 6px #22c55e' : 'none'
              }}
              className={isSimulating ? 'crane-led-blink' : ''}
            />
            <span>
              {isSimulating
                ? `Crane at Stage ${activeTank.stepNumber}/12: ${activeTank.name} (${cranePhase.toUpperCase()}) • Continuous Loop`
                : `Active Station: ${activeTank.stepNumber}. ${activeTank.name}`
              }
            </span>
          </div>
        </div>
      </div>

      {/* Main Diagram Area: High-Fidelity SVG Graphic */}
      <div
        style={{
          position: 'relative',
          padding: 'clamp(1.25rem, 3vw, 2.25rem) clamp(0.75rem, 2vw, 1.5rem)',
          backgroundColor: isDark ? '#08121E' : '#F9FBFE',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div style={{ minWidth: '980px', position: 'relative' }}>
          <svg
            viewBox="0 0 1100 290"
            style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
            role="img"
            aria-label="Hot Dip Galvanizing 12-stage process flow diagram: Degreasing, Rinsing, Pickling 1 and 2, Rinsing 1 and 2, Hot Fluxing, Drying, Zinc Bath, Spinning, Cooling, Passivation"
          >
            <defs>
              {/* Drop Shadows */}
              <filter id="tankShadow" x="-10%" y="-10%" width="130%" height="140%">
                <feDropShadow dx="3" dy="8" stdDeviation="6" floodOpacity={isDark ? "0.45" : "0.15"} floodColor="#040b14" />
              </filter>
              <filter id="activeGlow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodOpacity="0.8" floodColor="#D8F35D" />
              </filter>

              {/* Molten Zinc Texture Gradient */}
              <linearGradient id="zincBathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5b87b" />
                <stop offset="50%" stopColor="#e59853" />
                <stop offset="100%" stopColor="#d17d33" />
              </linearGradient>

              {/* Curved Centrifugal Arrow Gradient */}
              <linearGradient id="spinningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3be8f" />
                <stop offset="100%" stopColor="#cf782b" />
              </linearGradient>
            </defs>

            {/* FLOW DIRECTION ARROWS (Matching the 3 blue arrows in user slide with ambient flow pulse) */}
            {/* Arrow 1: Pre-treatment flow */}
            <g className="ambient-flow-arrow">
              <rect x="75" y="44" width="56" height="8" rx="2" fill="#165ea8" />
              <polygon points="131,38 145,48 131,58" fill="#165ea8" />
              <line x1="77" y1="48" x2="135" y2="48" stroke="#D8F35D" strokeWidth="2" strokeDasharray="6 8" className="flow-dash-anim" opacity="0.8" />
            </g>

            {/* Arrow 2: Into Fluxing & Drying */}
            <g className="ambient-flow-arrow">
              <rect x="495" y="44" width="56" height="8" rx="2" fill="#165ea8" />
              <polygon points="551,38 565,48 551,58" fill="#165ea8" />
              <line x1="497" y1="48" x2="555" y2="48" stroke="#D8F35D" strokeWidth="2" strokeDasharray="6 8" className="flow-dash-anim" opacity="0.8" />
            </g>

            {/* Arrow 3: Post-Galvanizing / Cooling & Passivation */}
            <g className="ambient-flow-arrow">
              <rect x="945" y="44" width="56" height="8" rx="2" fill="#165ea8" />
              <polygon points="1001,38 1015,48 1001,58" fill="#165ea8" />
              <line x1="947" y1="48" x2="1005" y2="48" stroke="#D8F35D" strokeWidth="2" strokeDasharray="6 8" className="flow-dash-anim" opacity="0.8" />
            </g>

            {/* OVERHEAD MONORAIL HOIST TRACK */}
            <g id="overhead-monorail-track" opacity="0.75">
              <line x1="20" y1="14" x2="1080" y2="14" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="2" />
              <line x1="20" y1="18" x2="1080" y2="18" stroke={isDark ? "#1e293b" : "#94a3b8"} strokeWidth="2" />
              <line x1="20" y1="16" x2="1080" y2="16" stroke={isDark ? "#475569" : "#64748b"} strokeWidth="4" />
              {[50, 190, 330, 470, 610, 750, 890, 1030].map(hx => (
                <line key={hx} x1={hx} y1="4" x2={hx} y2="14" stroke={isDark ? "#334155" : "#94a3b8"} strokeWidth="1.5" strokeDasharray="2 2" />
              ))}
            </g>

            {/* DYNAMIC CRANE HOIST & WORKPIECE ASSEMBLY */}
            <g id="crane-assembly">
              {/* Crane Trolley Carriage (Smooth X-axis translation along monorail) */}
              <g
                id="crane-trolley"
                transform={`translate(${currentPos.centerX}, 16)`}
                style={{
                  transition: isLoopingBack
                    ? 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)'
                    : 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <circle cx="-10" cy="-3" r="3.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
                <circle cx="10" cy="-3" r="3.5" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
                <rect x="-16" y="-2" width="32" height="11" rx="2" fill="#1e293b" stroke="var(--color-lime)" strokeWidth="1" />
                <rect x="-8" y="9" width="16" height="4" rx="1" fill="#0f172a" />
                <circle cx="11" cy="3.5" r="1.5" fill={isSimulating ? "#22c55e" : "var(--color-lime)"} className="crane-led-blink" />
              </g>

              {/* Dual Steel Hoist Cables */}
              <g>
                <line
                  x1={currentPos.centerX - 7}
                  y1="23"
                  x2={currentPos.centerX - 7}
                  y2={targetCradleY - 4}
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="2 1"
                  style={{
                    transition: isLoopingBack
                      ? 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)'
                      : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                <line
                  x1={currentPos.centerX + 7}
                  y1="23"
                  x2={currentPos.centerX + 7}
                  y2={targetCradleY - 4}
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="2 1"
                  style={{
                    transition: isLoopingBack
                      ? 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)'
                      : 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </g>

              {/* Suspended Steel Workpiece Cradle */}
              <g
                id="crane-workpiece-cradle"
                transform={`translate(${currentPos.centerX}, ${targetCradleY})`}
                style={{
                  transition: isLoopingBack
                    ? 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)'
                    : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Spreader Hanger Bar */}
                <rect x="-15" y="-4" width="30" height="4" rx="1" fill="#334155" stroke="#0f172a" strokeWidth="0.75" />
                <circle cx="-8" cy="-2" r="1.5" fill="#f8fafc" />
                <circle cx="8" cy="-2" r="1.5" fill="#f8fafc" />

                {/* Fabricated Steel Workpiece */}
                <g className={isSpinningActive ? "workpiece-spinning-active" : ""}>
                  <polygon
                    points="-11,0 11,0 6,18 -6,18"
                    fill={
                      isZincSubmerged
                        ? '#f59e0b'
                        : hasFinishedZinc
                          ? '#f8fafc'
                          : currentStage.id === 'drying'
                            ? '#c29d74'
                            : '#475569'
                    }
                    stroke={
                      hasFinishedZinc
                        ? '#94a3b8'
                        : currentStage.id === 'drying'
                          ? '#8c6742'
                          : '#1e293b'
                    }
                    strokeWidth="1.2"
                    style={{ transition: 'fill 0.3s ease, stroke 0.3s ease' }}
                  />
                  <line x1="0" y1="0" x2="0" y2="18" stroke={hasFinishedZinc ? "#cbd5e1" : "#334155"} strokeWidth="1" />
                  <circle cx="0" cy="12" r="2.2" fill={isZincSubmerged ? "#fef08a" : (hasFinishedZinc ? "#0f172a" : "#1e293b")} />

                  {/* Specular Spangle Glint when finished */}
                  {hasFinishedZinc && !isZincSubmerged && (
                    <polygon points="-4,4 -2,2 2,4 -1,6" fill="#FFFFFF" opacity="0.9" />
                  )}
                </g>

                {/* Dipping Reaction Bubbles in Zinc Bath */}
                {isZincSubmerged && (
                  <g className="zinc-reaction-bubbles">
                    <circle cx="-14" cy="-2" r="2" fill="#fef08a" opacity="0.85" />
                    <circle cx="-6" cy="-8" r="3" fill="#fde047" opacity="0.9" />
                    <circle cx="8" cy="-6" r="2.5" fill="#fef08a" opacity="0.85" />
                    <circle cx="15" cy="-3" r="1.5" fill="#fde047" opacity="0.8" />
                  </g>
                )}

                {/* Centrifuge Splatter Droplets in Stage 10 */}
                {isSpinningActive && (
                  <g className="centrifuge-spin-droplets">
                    <circle cx="-16" cy="6" r="1.5" fill="#f8fafc" />
                    <circle cx="16" cy="14" r="1.5" fill="#f8fafc" />
                    <circle cx="-12" cy="18" r="1.2" fill="#f8fafc" />
                    <circle cx="14" cy="2" r="1.2" fill="#f8fafc" />
                  </g>
                )}
              </g>
            </g>

            {/* 12 PHYSICAL TANK BLOCKS (Isometric 3D perspective) */}
            {processFlowTanks.map((tank) => {
              if (tank.id === 'spinning') return null; // Rendered as the curved arrow below

              const layout = tankLayouts[tank.id];
              if (!layout) return null;

              const isSelected = selectedTankId === tank.id;
              const isHovered = hoveredTankId === tank.id;
              const isActive = isSelected || isHovered;

              const { x, y, w, h, depth, frontColor, topColor, sideColor } = layout;

              // Isometric 3D points
              const topPoints = `${x},${y} ${x + depth},${y - depth} ${x + w + depth},${y - depth} ${x + w},${y}`;
              const sidePoints = `${x + w},${y} ${x + w + depth},${y - depth} ${x + w + depth},${y + h - depth} ${x + w},${y + h}`;

              return (
                <g
                  key={tank.id}
                  id={`tank-${tank.id}`}
                  style={{ cursor: interactive ? 'pointer' : 'default', transition: 'all 0.2s ease' }}
                  onClick={() => interactive && handleTankSelect(tank.id)}
                  onMouseEnter={() => interactive && setHoveredTankId(tank.id)}
                  onMouseLeave={() => interactive && setHoveredTankId(null)}
                  filter={isActive ? "url(#activeGlow)" : "url(#tankShadow)"}
                >
                  {/* Active Aura Highlight */}
                  {isActive && (
                    <rect
                      x={x - 4}
                      y={y - depth - 4}
                      width={w + depth + 8}
                      height={h + depth + 8}
                      rx="6"
                      fill="none"
                      stroke="var(--color-lime)"
                      strokeWidth="2.5"
                      strokeDasharray="4 2"
                      opacity="0.9"
                    />
                  )}

                  {/* 3D Top Face */}
                  <polygon
                    points={topPoints}
                    fill={tank.id === 'zinc-bath' ? '#f5ca9e' : topColor}
                    stroke={isActive ? 'var(--color-lime)' : 'rgba(0, 0, 0, 0.15)'}
                    strokeWidth="1"
                  />

                  {/* 3D Right Side Face */}
                  <polygon
                    points={sidePoints}
                    fill={tank.id === 'zinc-bath' ? '#bd7b43' : sideColor}
                    stroke={isActive ? 'var(--color-lime)' : 'rgba(0, 0, 0, 0.2)'}
                    strokeWidth="1"
                  />

                  {/* 3D Front Face */}
                  <rect
                    x={x}
                    y={y}
                    width={w}
                    height={h}
                    fill={tank.id === 'zinc-bath' ? 'url(#zincBathGrad)' : frontColor}
                    stroke={isActive ? 'var(--color-lime)' : 'rgba(0, 0, 0, 0.15)'}
                    strokeWidth="1"
                  />

                  {/* Tank Specular Highlights / Liquid Rim */}
                  <line
                    x1={x}
                    y1={y}
                    x2={x + w}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.65)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1={x + w}
                    y1={y}
                    x2={x + w + depth}
                    y2={y - depth}
                    stroke="rgba(255, 255, 255, 0.45)"
                    strokeWidth="1.5"
                  />

                  {/* Zinc Bath Special Heat Wave Indicator */}
                  {tank.id === 'zinc-bath' && (
                    <g opacity="0.6">
                      <path
                        d={`M ${x + 20} ${y - depth - 6} Q ${x + 30} ${y - depth - 16} ${x + 40} ${y - depth - 6} T ${x + 60} ${y - depth - 6}`}
                        fill="none"
                        stroke="#e28526"
                        strokeWidth="2"
                        className="zinc-convection-wave"
                      />
                      <path
                        d={`M ${x + 70} ${y - depth - 8} Q ${x + 85} ${y - depth - 20} ${x + 100} ${y - depth - 8} T ${x + 130} ${y - depth - 8}`}
                        fill="none"
                        stroke="#e28526"
                        strokeWidth="2"
                        className="zinc-convection-wave-2"
                      />
                      <text
                        x={x + (w / 2)}
                        y={y + (h / 2) + 5}
                        textAnchor="middle"
                        fontSize="12"
                        fontWeight="800"
                        fill="#FFFFFF"
                        style={{ letterSpacing: '0.04em', textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
                      >
                        480°C ZINC
                      </text>
                    </g>
                  )}

                  {/* Drying Special Warm Air Glow */}
                  {tank.id === 'drying' && (
                    <text
                      x={x + (w / 2)}
                      y={y + (h / 2) + 5}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="700"
                      fill="#7a6245"
                    >
                      120°C DRYING
                    </text>
                  )}

                  {/* Stage Number Badge on Front Face */}
                  <circle
                    cx={x + 14}
                    cy={y + 14}
                    r="9"
                    fill={isActive ? 'var(--color-lime)' : 'rgba(0, 0, 0, 0.45)'}
                  />
                  <text
                    x={x + 14}
                    y={y + 18}
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="800"
                    fill={isActive ? '#07182B' : '#FFFFFF'}
                  >
                    {tank.stepNumber}
                  </text>
                </g>
              );
            })}

            {/* STEP 10: SPINNING (Centrifugal U-Turn Arrow matching user slide) */}
            {(() => {
              const isSelected = selectedTankId === 'spinning';
              const isHovered = hoveredTankId === 'spinning';
              const isActive = isSelected || isHovered;

              return (
                <g
                  id="tank-spinning"
                  style={{ cursor: interactive ? 'pointer' : 'default' }}
                  onClick={() => interactive && handleTankSelect('spinning')}
                  onMouseEnter={() => interactive && setHoveredTankId('spinning')}
                  onMouseLeave={() => interactive && setHoveredTankId(null)}
                  filter={isActive ? "url(#activeGlow)" : undefined}
                >
                  {/* Curved 3D Arch Arrow looping from Zinc Bath down to Quench Cooling */}
                  <path
                    d="M 825,145 C 875,130 900,160 885,190 C 880,198 870,205 855,200"
                    fill="none"
                    stroke="url(#spinningGrad)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Arrowhead */}
                  <polygon
                    points="868,206 845,205 858,188"
                    fill="#cf782b"
                  />
                  {/* Inner dynamic swirl lines */}
                  <path
                    d="M 830,147 C 865,137 885,160 873,184"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    opacity="0.8"
                    className="centrifuge-orbit-dash"
                  />
                  {/* Label badge */}
                  <rect
                    x="838"
                    y="138"
                    width="54"
                    height="18"
                    rx="4"
                    fill="#0B1724"
                    opacity="0.9"
                  />
                  <text
                    x="865"
                    y="151"
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="800"
                    fill="#D8F35D"
                    style={{ letterSpacing: '0.04em' }}
                  >
                    SPIN 10
                  </text>
                </g>
              );
            })()}

            {/* BOTTOM LABELS (Fidelity to user slide: Vertical/Rotated Text) */}
            {processFlowTanks.map((tank) => {
              const layout = tankLayouts[tank.id];
              let centerX = 0;
              if (tank.id === 'spinning') {
                centerX = 865;
              } else if (layout) {
                centerX = layout.x + (layout.w / 2);
              }

              const isSelected = selectedTankId === tank.id;
              const isHovered = hoveredTankId === tank.id;
              const isActive = isSelected || isHovered;

              return (
                <g
                  key={`label-${tank.id}`}
                  style={{ cursor: interactive ? 'pointer' : 'default' }}
                  onClick={() => interactive && handleTankSelect(tank.id)}
                  onMouseEnter={() => interactive && setHoveredTankId(tank.id)}
                  onMouseLeave={() => interactive && setHoveredTankId(null)}
                >
                  {/* Vertical line connection */}
                  <line
                    x1={centerX}
                    y1={216}
                    x2={centerX}
                    y2={228}
                    stroke={isActive ? 'var(--color-lime)' : (isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)')}
                    strokeWidth={isActive ? 2 : 1}
                  />

                  {/* Rotated Tank Name (90-deg angle matching diagram) */}
                  <text
                    transform={`translate(${centerX + 4}, 235) rotate(90)`}
                    fontSize="12"
                    fontWeight={isActive ? "800" : "600"}
                    fill={isActive ? (isDark ? 'var(--color-lime)' : '#0D3A3D') : (isDark ? '#BAC8D6' : '#2C3E50')}
                    style={{
                      transition: 'fill 0.15s ease',
                      textDecoration: isActive ? 'underline' : 'none'
                    }}
                  >
                    {tank.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile Swipe Hint */}
        <div
          className="mobile-only-block"
          style={{
            textAlign: 'center',
            fontSize: '0.6875rem',
            color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'var(--color-muted)',
            marginTop: '0.75rem',
            display: 'none'
          }}
        >
          ↔ Scroll horizontally to view complete 12-tank facility line
        </div>
      </div>

      {/* Quick Stage Navigation Pill Carousel (Touch friendly on all viewports) */}
      <div
        style={{
          padding: '0.75rem 1rem',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'var(--color-paper-subtle)',
          borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'var(--color-border-subtle)'}`,
          borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'var(--color-border-subtle)'}`,
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}
      >
        {processFlowTanks.map((tank) => {
          const isSelected = selectedTankId === tank.id;
          return (
            <button
              key={`pill-${tank.id}`}
              onClick={() => handleTankSelect(tank.id)}
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: isSelected ? '800' : '600',
                border: isSelected
                  ? '1px solid var(--color-lime)'
                  : `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-border)'}`,
                backgroundColor: isSelected
                  ? (isDark ? 'rgba(216, 243, 93, 0.18)' : 'var(--color-deep-teal)')
                  : (isDark ? 'rgba(255, 255, 255, 0.05)' : 'var(--color-white)'),
                color: isSelected
                  ? (isDark ? 'var(--color-lime)' : 'var(--color-white)')
                  : (isDark ? 'rgba(255, 255, 255, 0.7)' : 'var(--color-ink-light)'),
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: tank.tankColor
                }}
              />
              <span>{tank.stepNumber}. {tank.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Active Tank Deep-Dive Telemetry HUD */}
      {showDetailsCard && activeTank && (
        <div
          style={{
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            backgroundColor: isDark ? 'rgba(13, 58, 61, 0.3)' : 'var(--color-white)',
            borderTop: `1px solid ${isDark ? 'rgba(216, 243, 93, 0.15)' : 'var(--color-border)'}`
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1.25rem, 2.5vw, 2rem)',
              alignItems: 'start'
            }}
          >
            {/* Left: Stage Title & Purpose */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    backgroundColor: activeTank.tankColor,
                    color: activeTank.colorFamily === 'beige' ? '#333' : '#FFF',
                    fontSize: 'var(--text-xs)',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                  }}
                >
                  Stage {activeTank.stepNumber.toString().padStart(2, '0')} of 12
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-xs)',
                    fontWeight: '700',
                    color: isDark ? 'var(--color-lime)' : 'var(--color-copper)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  {activeTank.category}
                </span>
              </div>

              <h4
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                  fontWeight: '800',
                  color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
                  margin: '0 0 6px'
                }}
              >
                {activeTank.name}
                {activeTank.subname && (
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: '500', opacity: 0.75, marginLeft: '8px' }}>
                    ({activeTank.subname})
                  </span>
                )}
              </h4>

              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-muted-dark)',
                  lineHeight: '1.6',
                  margin: '0 0 1rem'
                }}
              >
                {activeTank.details}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'var(--color-paper-subtle)',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'var(--color-border-subtle)'}`,
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: '600'
                }}
              >
                <span style={{ color: 'var(--color-copper)' }}>🎯 Metallurgical Goal:</span>
                <span>{activeTank.purpose}</span>
              </div>
            </div>

            {/* Right: Technical Telemetry (Temperature, Chemistry, Dwell Time) */}
            <div
              style={{
                backgroundColor: isDark ? 'rgba(11, 23, 36, 0.7)' : 'var(--color-paper-subtle)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'var(--color-border)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-muted)' }}>
                  Operating Temp
                </div>
                <div style={{ fontSize: 'var(--text-lg)', fontWeight: '800', color: isDark ? 'var(--color-lime)' : 'var(--color-deep-teal)', marginTop: '2px' }}>
                  {activeTank.temperature}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-muted)' }}>
                  Typical Dwell
                </div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: '800', color: isDark ? 'var(--color-white)' : 'var(--color-ink)', marginTop: '2px' }}>
                  {activeTank.dwellTime}
                </div>
              </div>

              <div style={{ gridColumn: '1 / -1', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'var(--color-border-subtle)'}`, paddingTop: '0.75rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-muted)' }}>
                  Bath Chemistry & Medium
                </div>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: '700', color: isDark ? '#EAEFED' : 'var(--color-ink)', marginTop: '2px' }}>
                  {activeTank.chemistry}
                </div>
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.6875rem', color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-muted)' }}>
                <span>Plant Station: {activeTank.bathType}</span>
                <span>Code: IS-2629 / Harohalli</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Ambient Flow Pulse along Transfer Direction Arrows */
        @keyframes flowDash {
          to {
            stroke-dashoffset: -28;
          }
        }
        .flow-dash-anim {
          animation: flowDash 1.2s linear infinite;
        }

        /* Zinc Kettle 480°C Thermal Convection Waves */
        @keyframes heatWaveMotion {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-4px) scaleY(1.15);
            opacity: 0.85;
          }
        }
        .zinc-convection-wave {
          animation: heatWaveMotion 2.2s ease-in-out infinite;
          transform-origin: center bottom;
        }
        .zinc-convection-wave-2 {
          animation: heatWaveMotion 2.8s ease-in-out 0.8s infinite;
          transform-origin: center bottom;
        }

        /* Stage 10 Centrifuge Orbital Swirl */
        @keyframes centrifugeOrbit {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -24;
          }
        }
        .centrifuge-orbit-dash {
          animation: centrifugeOrbit 1.4s linear infinite;
        }

        /* Stage 10 High-Speed Workpiece Centrifuge Spin */
        @keyframes spinWorkpiece {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(0.92);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        .workpiece-spinning-active {
          animation: spinWorkpiece 0.6s linear infinite;
          transform-origin: 0px 9px;
        }

        /* Molten Zinc Metallurgical Reaction Bubbles */
        @keyframes bubbleRise {
          0% {
            transform: translateY(0);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-8px);
            opacity: 0.2;
          }
        }
        .zinc-reaction-bubbles circle {
          animation: bubbleRise 0.8s ease-out infinite alternate;
        }

        /* Crane Carriage Active LED Indicator */
        @keyframes craneLedPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.85);
          }
        }
        .crane-led-blink {
          animation: craneLedPulse 1s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .mobile-only-block {
            display: block !important;
          }
        }

        /* Accessibility: Prefers Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .flow-dash-anim,
          .zinc-convection-wave,
          .zinc-convection-wave-2,
          .centrifuge-orbit-dash,
          .workpiece-spinning-active,
          .zinc-reaction-bubbles circle,
          .crane-led-blink {
            animation: none !important;
          }
          #crane-trolley,
          #crane-workpiece-cradle,
          line {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};
