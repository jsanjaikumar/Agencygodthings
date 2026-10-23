import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'AETHER.OS [Version 9.0.4.8821]' },
    { type: 'system', text: 'Copyright (c) 2024 Aether Digital Corporation. All rights reserved.' },
    { type: 'system', text: 'Cryptographic Uplink: ACTIVE // NODE_ALPHA_7 ESTABLISHED' },
    { type: 'system', text: 'Type "help" for a list of available commands, or "projects" to view our archive.' }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `> ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  help        - Display command manifest
  projects    - List curated client deployments
  status      - Perform node diagnostic scan
  audit       - Navigate to Free Website Audit
  services    - Display core architectural protocols
  contact     - Initialize project inquiry
  clear       - Wipe terminal screen buffer
  exit        - Close terminal interface`
        });
        break;

      case 'projects':
      case 'work':
        newHistory.push({
          type: 'response',
          text: `ARCHIVED DEPLOYMENTS:
  [01] Stockwise               (Business Software / SaaS - Inventory Platform)
  [02] Clientflow              (SaaS / CRM - Lightweight Pipeline)
  [03] Mindbase AI             (AI / Knowledge - RAG Vector Assistant)
  [04] DevDudes                (Dev Community - Real-Time Network)
  [05] CineScout               (Movie Discovery - Live Web Application)
  [06] Local Business Platform (Digital Solutions - High Conversion Web)
  
  Navigating to /work...`
        });
        setTimeout(() => {
          onClose();
          navigate('/work');
        }, 1200);
        break;

      case 'status':
        newHistory.push({
          type: 'response',
          text: `SYSTEM DIAGNOSTICS:
  -----------------------------------------
  CORE STATUS      : 100% OPERATIONAL
  EDGE LATENCY     : 1.2ms [GLOBAL P99]
  SECURITY POSTURE : ZERO-TRUST LEVEL 5
  ENCRYPTION       : AES-256-GCM + CRYSTALS-Kyber
  ACTIVE WORKERS   : 128 GEO-NODES
  MEMORY UTIL      : 18.4%
  -----------------------------------------`
        });
        break;

      case 'audit':
        newHistory.push({
          type: 'response',
          text: 'INITIALIZING COMPLIMENTARY DIAGNOSTIC SUITE...\nRedirecting to /audit...'
        });
        setTimeout(() => {
          onClose();
          navigate('/audit');
        }, 800);
        break;

      case 'services':
      case 'protocols':
        newHistory.push({
          type: 'response',
          text: `CORE PROTOCOLS:
  01. Core Architecture - Fault-tolerant microservice topologies
  02. Revenue Engine   - Algorithmic funnel optimization (300% Avg Uplift)
  03. Strategic Advisory - Sovereign technology roadmap consulting`
        });
        break;

      case 'contact':
      case 'inquire':
      case 'start':
        newHistory.push({
          type: 'response',
          text: 'ENGAGING COUNCIL ONBOARDING SEQUENCE...\nRedirecting to /start-project...'
        });
        setTimeout(() => {
          onClose();
          navigate('/start-project');
        }, 800);
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `COMMAND NOT RECOGNIZED: "${cmd}". Type "help" for a list of valid commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
      <div 
        className={`bg-obsidian-deep border border-surface-stroke w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded flex flex-col transition-all duration-300 ${
          isExpanded 
            ? 'h-[95vh] max-w-[95vw]' 
            : 'h-[620px] max-w-3xl'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface-container border-b border-surface-stroke select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-electric-gold" />
            <span className="font-mono text-xs font-bold text-on-surface tracking-wider">
              AETHER.OS // TERMINAL UPLINK [ALPHA_7]
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-on-surface-variant hover:text-white p-1"
              title={isExpanded ? 'Minimize' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-electric-gold p-1"
              title="Close Terminal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-2 select-text bg-[#09090a]">
          {history.map((item, index) => (
            <div 
              key={index} 
              className={`leading-relaxed whitespace-pre-wrap ${
                item.type === 'user' 
                  ? 'text-pure-white font-bold' 
                  : item.type === 'error' 
                  ? 'text-red-400' 
                  : item.type === 'response' 
                  ? 'text-electric-gold' 
                  : 'text-on-surface-variant/80'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Command Line Input */}
        <form 
          onSubmit={handleCommand} 
          className="flex items-center px-4 py-3 bg-surface-container border-t border-surface-stroke"
        >
          <span className="font-mono text-xs text-electric-gold mr-2 font-bold select-none">
            AETHER@OBSIDIAN:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command..."
            className="flex-1 bg-transparent border-none text-xs font-mono text-pure-white focus:outline-none placeholder-on-surface-variant/30"
            autoFocus
          />
          <button 
            type="submit" 
            className="text-electric-gold hover:text-white p-1 ml-2"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
