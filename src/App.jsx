import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dark flex h-screen w-full">
      <aside className="w-20 lg:w-64 border-r border-white/5 hidden md:flex flex-col bg-[#050505] shrink-0 z-30 relative">
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
        <div className="p-4 lg:p-6 pb-2 border-b border-white/5">
          <div className="flex items-center gap-4 mb-2 lg:mb-6 justify-center lg:justify-start">
            <div className="relative group cursor-pointer">
              <div className="bg-center bg-no-repeat bg-cover rounded-none clip-path-hexagon size-10 lg:size-12 border border-primary/50 shadow-neon-blue transition-all duration-300 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqOGvnWeMYYBAF2WkK0YfteHXGGMLo0e0xozmV9d7Ay5EW_2gx4aRUNHA5yPbfJQ3VVmr0ixCtOH7BBkWruXKvhuCG81faeSsoYXcPS7gJYSINUrxNXXjXfJC5KtuXHZeku_HauGm2uYWQWks2FYjQf-NB9MEpxrvzxShFsZ3aYkQlIuVVGSg2uXCXTb-iBwsdKXEit8NKPy7VetVtCGPOHmYweEeYXsf8sdD9BAWjWrZgojAhwgK7zc9FhhZ9XJ9hcGzC7hwM3sKT")' }}></div>
              <div className="absolute -inset-1 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="hidden lg:flex flex-col">
              <h1 className="text-white text-lg font-bold tracking-widest uppercase font-mono holographic-text">God Mode</h1>
              <p className="text-primary text-[10px] font-bold tracking-[0.2em] animate-pulse">SYSTEM_ACTIVE</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2 lg:p-4 flex-1 overflow-y-auto font-mono">
          <p className="hidden lg:block px-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2 mt-2">Neural Link</p>
          <a className="flex items-center gap-3 px-3 py-3 rounded-sm bg-primary/5 border-l-2 border-primary text-primary group transition-all hover:bg-primary/10 hover:translate-x-1" href="#">
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">neurology</span>
            <span className="hidden lg:block text-xs font-bold uppercase tracking-wider">Cortex Status</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 rounded-sm hover:bg-white/5 border-l-2 border-transparent hover:border-white/20 text-slate-500 hover:text-white group transition-all hover:translate-x-1" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-secondary transition-colors">memory</span>
            <span className="hidden lg:block text-xs font-bold uppercase tracking-wider">Memory Core</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 rounded-sm hover:bg-white/5 border-l-2 border-transparent hover:border-white/20 text-slate-500 hover:text-white group transition-all hover:translate-x-1" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-accent transition-colors">translate</span>
            <span className="hidden lg:block text-xs font-bold uppercase tracking-wider">Polyglot</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-3 rounded-sm hover:bg-white/5 border-l-2 border-transparent hover:border-white/20 text-slate-500 hover:text-white group transition-all hover:translate-x-1" href="#">
            <span className="material-symbols-outlined text-xl group-hover:text-red-500 transition-colors">admin_panel_settings</span>
            <span className="hidden lg:block text-xs font-bold uppercase tracking-wider">Firewall</span>
          </a>
        </div>
        <div className="p-4 border-t border-white/5 bg-[#080808]">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="relative">
              <div className="size-8 lg:size-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border border-white/10 relative z-10">
                <img className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" data-alt="User avatar profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAguTHHvY_A_EdTngUflhxqiV-Yu3w6NGIxlBZTWP0hqZKrKKNf-Uhs_4bmiRv51iYCiUmbx9hM2ErrxWn7Z8wIdSqLWdw3RBq8w22dR7rvK7ij1coh6FgOga_abZtC6G8G5mua9ZaHNQFjO8qORyjulhGRVe7khb6Mlc2d6-CfOPAPKxQCa4nGgz84TX0MPAPa9dAVQniTodlH9lyBv8efojoi6JRW6FyX6WXCM-IYJhsUF6YfvnptsGUEuppwlkQOfHMOgjWQOJuF" />
              </div>
              <div className="absolute -inset-0.5 bg-accent/30 rounded-full blur-sm animate-pulse-fast"></div>
              <div className="absolute bottom-0 right-0 size-2.5 bg-accent rounded-full border-2 border-black z-20 shadow-[0_0_8px_#00ff9d]"></div>
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-xs font-bold text-white font-mono">OP: TURING</span>
              <span className="text-[10px] text-slate-500 font-mono tracking-tight">LVL 5 ACCESS</span>
            </div>
            <div className="group relative hidden lg:block ml-auto cursor-help">
              <button className="text-slate-600 hover:text-slate-400 transition-colors">
                <span className="text-lg grayscale opacity-50">💰</span>
              </button>
              <div className="absolute bottom-full right-0 mb-2 w-max px-2 py-1 bg-black/90 border border-white/10 text-[9px] text-slate-300 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
                Soft Sales Engine Idle
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#050505]">
        <div className="absolute inset-0 pointer-events-none grid-bg opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none"></div>
        <header className="flex items-center justify-between whitespace-nowrap border-b border-white/5 px-6 py-3 bg-[#050505]/80 backdrop-blur-md z-20 shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4 text-white">
            <div className="h-8 w-8 text-primary animate-spin" style={{ animationDuration: '10s' }}>
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2"></path>
                <circle className="animate-pulse" cx="12" cy="12" fill="currentColor" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-sm font-bold leading-none tracking-[0.2em] font-mono flex items-center gap-2">
                SUPPORT GENIE <span className="text-white/20">|</span> <span className="text-accent animate-pulse">NEURAL STATUS: ONLINE</span>
              </h2>
              <div className="flex items-center gap-1 mt-1 opacity-50">
                <div className="flex items-end gap-0.5 h-3">
                  <div className="w-0.5 bg-primary h-1 animate-[pulse_0.5s_ease-in-out_infinite]"></div>
                  <div className="w-0.5 bg-primary h-2 animate-[pulse_0.7s_ease-in-out_infinite]"></div>
                  <div className="w-0.5 bg-primary h-3 animate-[pulse_0.4s_ease-in-out_infinite]"></div>
                  <div className="w-0.5 bg-primary h-1 animate-[pulse_0.6s_ease-in-out_infinite]"></div>
                  <div className="w-0.5 bg-primary h-2 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                </div>
                <span className="text-[9px] font-mono text-primary/80 ml-2">SYSTEM HUM: NORMAL</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="btn-glitch flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/50 text-primary hover:bg-primary/20 hover:text-white rounded-sm text-[10px] font-bold tracking-widest uppercase transition-all shadow-neon-blue">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              Deploy V2.0
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 scroll-smooth scrollbar-thin scrollbar-thumb-gray-800">
          <div className="grid grid-cols-12 gap-6 max-w-[1800px] mx-auto min-h-[800px]">
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-[calc(100vh-140px)]">
              <div className="glass-panel flex flex-col h-full overflow-hidden relative border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="p-3 border-b border-white/10 bg-black/40 flex items-center justify-between relative overflow-hidden z-10">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-widest font-mono flex items-center gap-2">
                    <span className="material-symbols-outlined text-base animate-pulse">psychology</span>
                    'Deep Think' Stream
                  </h3>
                  <div className="flex gap-1">
                    <span className="size-1.5 bg-secondary rounded-full animate-pulse"></span>
                    <span className="size-1.5 bg-primary rounded-full animate-pulse delay-75"></span>
                    <span className="size-1.5 bg-accent rounded-full animate-pulse delay-150"></span>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-5 font-mono text-xs relative animate-hologram-flicker">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMjQwLCAyNTUsIDAuMDUpIi8+PC9zdmc+')] opacity-20 pointer-events-none mix-blend-screen bg-fixed"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-0 deep-think-gradient"></div>
                  <div className="relative z-50 animate-toast-slide mb-6">
                    <div className="bg-black/80 backdrop-blur-md border-l-2 border-primary p-3 rounded-r shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center gap-3 w-full border-t border-b border-r border-white/10">
                      <div className="h-8 w-8 flex items-center justify-center bg-primary/10 rounded-full border border-primary/30">
                        <span className="text-lg font-bold text-primary font-serif pb-1">ఆ</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Language Detected</div>
                        <div className="text-xs font-bold text-white">Telugu (TG) <span className="text-accent ml-1">99.8%</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative pl-4 border-l border-white/10 hover:border-accent transition-colors duration-300 group z-10 animate-fade-in-up">
                    <div className="absolute -left-[5px] top-0 size-2.5 bg-black border border-slate-600 group-hover:border-accent rounded-full flex items-center justify-center transition-all duration-300">
                      <div className="size-1 bg-slate-600 group-hover:bg-accent rounded-full group-hover:shadow-[0_0_8px_#00ff9d]"></div>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-slate-500 font-bold opacity-70">10:42:01.442</span>
                      <span className="px-1.5 py-0.5 bg-accent/10 border border-accent/30 text-accent text-[9px] rounded font-bold tracking-wider shadow-[0_0_10px_rgba(0,255,157,0.3)] animate-badge-pulse backdrop-blur-sm">DETECT_EMOTION</span>
                    </div>
                    <div className="text-slate-300 font-sans text-[11px] relative leading-relaxed">
                      User sentiment: <span className="char-reveal animate-color-surge-red font-bold inline-block" style={{ animationDelay: '0.1s' }}>Frustration</span> detected.
                      <br />
                      <span className="text-[10px] text-slate-400">&gt; Ripple effect: Initiated.</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>
                    </div>
                  </div>
                  <div className="relative pl-4 border-l border-white/10 hover:border-secondary transition-colors duration-300 group z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute -left-[5px] top-0 size-2.5 bg-black border border-slate-600 group-hover:border-secondary rounded-full flex items-center justify-center transition-all duration-300">
                      <div className="size-1 bg-slate-600 group-hover:bg-secondary rounded-full group-hover:shadow-[0_0_8px_#7000ff]"></div>
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-slate-500 font-bold opacity-70">10:42:01.890</span>
                      <span className="px-1.5 py-0.5 bg-secondary/10 border border-secondary/30 text-secondary text-[9px] rounded font-bold tracking-wider shadow-[0_0_10px_rgba(112,0,255,0.3)] animate-badge-pulse backdrop-blur-sm" style={{ animationDelay: '1s' }}>THOUGHT_PROCESS</span>
                    </div>
                    <div className="text-slate-300 font-mono text-[10px] leading-relaxed relative overflow-hidden">
                      <div className="flex flex-col">
                        <span className="block text-slate-400 opacity-80 mb-0.5">&gt; Analyzing context vector...</span>
                        <span className="block text-secondary opacity-90 shadow-neon-purple mb-0.5">&gt; Retrieving policy #8842...</span>
                        <span className="block text-white glow-text relative w-fit pr-1 electric-text font-bold">
                          <span className="char-reveal">S</span><span className="char-reveal">y</span><span className="char-reveal">n</span><span className="char-reveal">t</span><span className="char-reveal">h</span><span className="char-reveal">e</span><span className="char-reveal">s</span><span className="char-reveal">i</span><span className="char-reveal">z</span><span className="char-reveal">i</span><span className="char-reveal">n</span><span className="char-reveal">g</span> <span className="char-reveal">e</span><span className="char-reveal">m</span><span className="char-reveal">p</span><span className="char-reveal">a</span><span className="char-reveal">t</span><span className="char-reveal">h</span><span className="char-reveal">y</span> <span className="char-reveal">m</span><span className="char-reveal">o</span><span className="char-reveal">d</span><span className="char-reveal">u</span><span className="char-reveal">l</span><span className="char-reveal">e</span><span className="char-reveal">.</span><span className="char-reveal">.</span><span className="char-reveal">.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center text-primary/50 text-xs font-mono mt-6 pl-4 border-l border-transparent">
                    <span className="w-1.5 h-3 bg-primary animate-pulse shadow-[0_0_5px_#00f0ff]"></span>
                    <span className="typing-effect animate-pulse opacity-70">Awaiting next token stream...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-6 h-[calc(100vh-140px)] overflow-y-auto">
              <div className="glass-panel rounded-none p-1 min-h-[300px] relative group overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(0,240,255,0.1)]">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary z-20"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary z-20"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary z-20"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary z-20"></div>
                <div className="absolute top-4 left-4 z-20 flex flex-col pointer-events-none">
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] holographic-text">Neural Network Graph</h3>
                  <span className="text-[10px] text-primary font-mono tracking-[0.3em] animate-pulse">PROCESSING...</span>
                </div>
                <div className="w-full h-full bg-[#020202] relative overflow-hidden">
                  <div className="absolute inset-0 bg-center bg-cover opacity-40 mix-blend-screen" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdqkHFv8-79Kv6ji-4cSfAD4ut2mZ3IcTC6SAs-AmphcaG1whugJNq-s89yZ1MC84tLPqGX_O8Ehfh-epnnw7dwdhBdpL81_JIfkfwee1P5pWtWDd-pN_5yu4JZD881utnoeTcmDixrMXaMIEdGX9fYxv_sjFGRTmABNEevo02WdTW_UAnKmZDPAQVHeTwqeXEwKCfJn4WPJe2OG8KGcGByBXxLwPSvdwV7sYJ2Fn05sc8VNI8ZM6uPj1frZy3erugEkN1i7ioOoJ9")', filter: 'hue-rotate(180deg) saturate(200%)' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
                  <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur result="coloredBlur" stdDeviation="2.5"></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="coloredBlur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                      <linearGradient id="stream-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'transparent', stopOpacity: 0 }}></stop>
                        <stop offset="50%" style={{ stopColor: '#00f0ff', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }}></stop>
                      </linearGradient>
                    </defs>
                    <path d="M 100 200 L 300 150 L 500 220" fill="none" stroke="#1a1a1a" strokeWidth="1"></path>
                    <path d="M 300 150 L 400 80" fill="none" stroke="#1a1a1a" strokeWidth="1"></path>
                    <path className="tendril-path" d="M 100 200 Q 200 175 300 150 T 500 220" fill="none" stroke="url(#stream-gradient)" strokeWidth="2"></path>
                    <circle className="brain-node-pulse" cx="100" cy="200" fill="#00f0ff" filter="url(#glow)" r="4"></circle>
                    <circle className="brain-node-pulse" cx="300" cy="150" fill="#7000ff" filter="url(#glow)" r="6" style={{ animationDelay: '0.5s' }}></circle>
                    <circle className="brain-node-pulse" cx="500" cy="220" fill="#00ff9d" filter="url(#glow)" r="4" style={{ animationDelay: '1s' }}></circle>
                  </svg>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                    <div className="flex flex-col gap-1 backdrop-blur-sm bg-black/40 p-2 rounded border border-white/5 w-2/3 h-16 relative overflow-hidden">
                      <span className="text-[10px] text-primary font-mono font-bold tracking-wider">CURRENT FOCUS THREAD</span>
                      <div className="relative w-full h-full">
                        <p className="absolute inset-0 text-white text-sm font-medium leading-tight font-mono holographic-text animate-text-cycle" style={{ animationDelay: '0s' }}>
                          "Routing via Language Matrix..."
                        </p>
                        <p className="absolute inset-0 text-white text-sm font-medium leading-tight font-mono holographic-text animate-text-cycle opacity-0" style={{ animationDelay: '3s' }}>
                          "Resolving financial anomaly..."
                        </p>
                        <p className="absolute inset-0 text-white text-sm font-medium leading-tight font-mono holographic-text animate-text-cycle opacity-0" style={{ animationDelay: '6s' }}>
                          "Executing refund protocol..."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel p-4 relative overflow-hidden group hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-start z-10 relative">
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest font-mono">Neural Load</p>
                      <p className="text-white text-3xl font-bold mt-1 tracking-tighter holographic-text">78%</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-700 group-hover:text-accent transition-colors">memory</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1a1a1a]">
                    <div className="h-full bg-accent w-[78%] shadow-[0_0_10px_#00ff9d]"></div>
                  </div>
                </div>
                <div className="glass-panel p-4 relative overflow-hidden group hover:border-secondary/50 transition-colors">
                  <div className="flex justify-between items-start z-10 relative">
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest font-mono">Confidence</p>
                      <p className="text-white text-3xl font-bold mt-1 tracking-tighter holographic-text">99.9%</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-700 group-hover:text-secondary transition-colors">verified</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1a1a1a]">
                    <div className="h-full bg-secondary w-[99%] shadow-[0_0_10px_#7000ff]"></div>
                  </div>
                </div>
                <div className="glass-panel p-4 relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start z-10 relative">
                    <div>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest font-mono">Latency</p>
                      <p className="text-white text-3xl font-bold mt-1 tracking-tighter holographic-text">12ms</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-700 group-hover:text-primary transition-colors">speed</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1a1a1a]">
                    <div className="h-full bg-primary w-[95%] shadow-[0_0_10px_#00f0ff]"></div>
                  </div>
                </div>
              </div>
              <div className="glass-panel flex flex-col overflow-hidden flex-1 min-h-[300px]">
                <div className="p-3 border-b border-white/10 bg-black/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
                      <span className="material-symbols-outlined text-primary text-sm">grid_view</span>
                      Active Neural Threads
                    </h3>
                    <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-[9px] font-bold text-green-400 tracking-wider shadow-[0_0_8px_rgba(34,197,94,0.2)]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      LANGUAGE MATRIX ACTIVE
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[10px] text-slate-400 font-mono">LIVE FEED</span>
                  </div>
                </div>
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left text-sm text-slate-400">
                    <thead className="bg-black/60 text-[10px] uppercase font-bold text-slate-500 sticky top-0 font-mono">
                      <tr>
                        <th className="px-6 py-3 tracking-wider">Session ID</th>
                        <th className="px-6 py-3 tracking-wider">Tier</th>
                        <th className="px-6 py-3 tracking-wider">Lang</th>
                        <th className="px-6 py-3 tracking-wider">State</th>
                        <th className="px-6 py-3 tracking-wider text-right">Latency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-mono text-[11px]">
                      <tr className="bg-white/5 border-l-2 border-primary hover:bg-white/10 transition-colors group cursor-pointer">
                        <td className="px-6 py-4 font-bold text-white group-hover:text-primary transition-colors">#SES-8829-X</td>
                        <td className="px-6 py-4"><span className="text-xs text-yellow-500 drop-shadow-[0_0_3px_rgba(234,179,8,0.5)]">ENTERPRISE</span></td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 text-white/90">
                            <div className="relative w-8 h-8 rounded-full bg-black/40 flex items-center justify-center overflow-hidden border border-primary/50 shadow-[0_0_8px_rgba(0,240,255,0.4)]">
                              <span className="text-xl font-bold font-telugu text-primary leading-none mt-1">ఆ</span>
                            </div>
                            <div className="flex flex-col leading-none">
                              <span className="text-[10px] font-bold text-primary tracking-wider">TELUGU</span>
                              <span className="text-[9px] text-slate-400">Output Active</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-primary">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                            </span>
                            Thinking...
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-white font-bold">45ms</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors group cursor-pointer border-l-2 border-transparent hover:border-accent">
                        <td className="px-6 py-4 font-bold text-white group-hover:text-accent transition-colors">#SES-8830-A</td>
                        <td className="px-6 py-4"><span className="text-xs text-slate-400">STANDARD</span></td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 text-white/90">
                            <div className="relative w-8 h-8 rounded-full bg-white/5 flex items-center justify-center overflow-hidden border border-white/20 group-hover:border-white transition-all">
                              <span className="material-symbols-outlined text-lg text-slate-300 group-hover:text-white">language</span>
                            </div>
                            <div className="flex flex-col leading-none">
                              <span className="text-[10px] font-bold text-slate-300 tracking-wider group-hover:text-white transition-colors">ENGLISH</span>
                              <span className="text-[9px] text-slate-500">Global Default</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-accent">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span>
                            Ready
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-white font-bold">12ms</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors group cursor-pointer border-l-2 border-transparent hover:border-secondary">
                        <td className="px-6 py-4 font-bold text-white group-hover:text-secondary transition-colors">#SES-8831-C</td>
                        <td className="px-6 py-4"><span className="text-xs text-secondary drop-shadow-[0_0_3px_rgba(112,0,255,0.5)]">PRO</span></td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3 text-white/90">
                            <div className="relative w-8 h-8 rounded-full bg-white/5 flex items-center justify-center overflow-hidden border border-india-orange/50 shadow-[0_0_8px_rgba(255,153,51,0.2)] group-hover:border-india-orange transition-all">
                              <span className="text-xl font-bold font-hindi text-india-orange leading-none mt-1">हि</span>
                            </div>
                            <div className="flex flex-col leading-none">
                              <span className="text-[10px] font-bold text-india-orange tracking-wider group-hover:text-white transition-colors">HINDI</span>
                              <span className="text-[9px] text-slate-500">Output Active</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-secondary">
                            <span className="material-symbols-outlined text-[14px] animate-pulse">keyboard</span>
                            Typing
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-white font-bold">28ms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-[calc(100vh-140px)]">
              <div className="glass-panel flex flex-col h-full overflow-hidden bg-[#080808]">
                <div className="p-3 border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
                    <span className="material-symbols-outlined text-sm">chat</span>
                    Comms Log
                  </h3>
                  <div className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] text-slate-400 font-mono">
                    ENCRYPTED::AES-256
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-6 relative scanline-overlay">
                  <div className="flex flex-col gap-1 items-end">
                    <div className="text-[9px] text-slate-500 font-mono uppercase">User #8829 <span className="text-slate-700">|</span> 10:41:55</div>
                    <div className="max-w-[85%] msg-container border-l-0 border-r-2 border-r-slate-500 bg-white/5 p-3 rounded-l-lg rounded-tr-sm text-xs text-slate-300 font-mono">
                      <p className="opacity-90">My billing shows a double charge for the last cycle. Can you check?</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start">
                    <div className="text-[9px] text-primary font-mono uppercase flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">smart_toy</span> GOD MODE AI <span className="text-slate-700">|</span> 10:41:56
                    </div>
                    <div className="max-w-[90%] msg-container border-primary bg-primary/5 p-3 rounded-r-lg rounded-tl-sm text-xs text-white font-mono shadow-[0_0_15px_rgba(0,240,255,0.05)]">
                      <p className="leading-relaxed">
                        <span className="text-primary">&gt;</span> Scanning transaction history...<br />
                        <span className="text-primary">&gt;</span> Duplicate detected: ID #TRX-992.<br />
                        I see the issue. Initiating refund protocol for $49.99 immediately.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="text-[9px] text-slate-500 font-mono uppercase">User #8829 <span className="text-slate-700">|</span> 10:42:10</div>
                    <div className="max-w-[85%] msg-container border-l-0 border-r-2 border-r-slate-500 bg-white/5 p-3 rounded-l-lg rounded-tr-sm text-xs text-slate-300 font-mono">
                      <p className="opacity-90">Wait, really? That was incredibly fast. Thanks.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start opacity-70">
                    <div className="text-[9px] text-primary font-mono uppercase flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">smart_toy</span> GOD MODE AI
                    </div>
                    <div className="px-3 py-2 bg-primary/5 rounded border border-primary/20 flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-white/10 bg-[#0a0a0a]">
                  <div className="flex items-center gap-2 bg-black border border-white/10 rounded px-3 py-2 focus-within:border-primary/50 focus-within:shadow-neon-blue transition-all">
                    <span className="text-primary font-mono">&gt;</span>
                    <input className="bg-transparent border-none p-0 text-xs text-white w-full font-mono focus:ring-0 placeholder:text-slate-700" placeholder="Inject System Override..." type="text" />
                    <button className="text-slate-500 hover:text-white"><span className="material-symbols-outlined text-sm">send</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;