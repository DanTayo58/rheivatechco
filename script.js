/* script.js - Core dynamic interactions for Rheivatech landing page */

/* =========================================================================
   FOUNDERS COLLECTIVE REGISTRY
   To add, edit, or remove founders, simply update this array of objects. 
   The system will dynamically generate the cards, format the Member IDs, 
   assign active states, and automatically adjust the carousel controls.
   ========================================================================= */
const FOUNDERS_REGISTRY = [
  {
    name: "Omotayo Oladapo Dan",
    title: "Founder & Chief Architect",
    bio: "Technology owns the responsibility of transforming the world for the better as we know it. With our impending infrascructural procurement, that duty extends to our arms to provide our contributions; which i believe will be one the world has never seen before.",
    focus: "SYSTEM INTEGRATION & HARDWARE",
    status: "ACTIVE",
    email: "dantayo58@gmail.com",
    linkedinUrl: "https://www.linkedin.com/posts/rheivatech_rheivatech-linkedin-activity-7483134289891622912-3dJL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmkmhEBrPE1HZTbFSTrISGEeay-1DwboKE",
    imageUrl: "owner.png"
  },
  {
    name: "Akwiwu Kachi Nwando",
    title: "Co-Founder & Media Director",
    bio: "Directing strategic brand architecture, multimedia communications, creative storytelling, and continental outreach to amplify sovereign technology initiatives.",
    focus: "MEDIA & BRAND STRATEGY",
    status: "ACTIVE",
    email: "kachiakwiwu@gmail.com",
    linkedinUrl: "https://www.linkedin.com/posts/rheivatech_rheivatech-linkedin-activity-7483134289891622912-3dJL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmkmhEBrPE1HZTbFSTrISGEeay-1DwboKE",
    imageUrl: "logo.png"
  }
];

/* =========================================================================
   ERP SALES ANALYSIS PORTFOLIO (DATA SCIENCE SECTION)
   To add more analysis screens/images, simply add objects to this array.
   The system will dynamically render them in the unlocked "analysis" section.
   ========================================================================= */
const ANALYSIS_PORTFOLIO = [
  {
    image: "analysis_1.jpeg",
    title: "Analysis 1: Sales & Buy-Sell Analytics Dashboard",
    writeup: "Our flagship ERP analytics engine tracking wholesale purchase orders, high-frequency sales metrics, margin analysis, and inventory re-ordering trends in real-time."
  },
  {
    image: "analysis_2.jpeg",
    title: "Analysis 2: Intelligent Profit-Margin Tracking",
    writeup: "Advanced margin forecasting and dynamic optimization engine. Detects supply gaps and computes pricing thresholds to secure sovereign merchant profit lines."
  }
];

/* Global Modal Scroll Helpers */
function lockBodyScroll() {
  document.body.classList.add('overflow-hidden');
}

function unlockBodyScroll() {
  const aiModal = document.getElementById('ai-modal');
  const submitModal = document.getElementById('submit-modal');
  const isAiOpen = aiModal && !aiModal.classList.contains('hidden');
  const isSubmitOpen = submitModal && !submitModal.classList.contains('hidden');
  if (!isAiOpen && !isSubmitOpen) {
    document.body.classList.remove('overflow-hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  /* Render Founders Carousel Dynamically */
  const carouselTrack = document.getElementById('carousel-track');
  if (carouselTrack) {
    carouselTrack.innerHTML = FOUNDERS_REGISTRY.map((founder, index) => {
      const idNum = String(index + 1).padStart(2, '0');
      const avatarSrc = founder.imageUrl || "logo.png";
      const linkedinHref = founder.linkedinUrl || "https://www.linkedin.com/posts/rheivatech_rheivatech-linkedin-activity-7483134289891622912-3dJL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmkmhEBrPE1HZTbFSTrISGEeay-1DwboKE";
      const emailHref = founder.email ? `mailto:${founder.email}` : "mailto:dantayo58@gmail.com";
      
      return `
        <div class="w-full max-w-6xl border border-cyber-border rounded-xl p-8 md:p-14 bg-cyber-card flex-shrink-0 relative group overflow-hidden transition-all duration-300 hover:border-quantum-blue/40 mx-auto min-h-[460px] flex items-center">
          <div class="absolute top-0 right-0 w-48 h-48 bg-radial from-quantum-blue/5 to-transparent pointer-events-none"></div>
          
          <div class="flex flex-col md:flex-row gap-10 items-center justify-between w-full">
            <!-- Left Side: Typography -->
            <div class="flex-1 text-left space-y-5">
              <div>
                <span class="font-mono text-[10px] text-quantum-blue font-bold tracking-[0.25em] block mb-2 uppercase">MEMBER_${idNum} | FOUNDING COLLECTIVE</span>
                <h3 class="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight leading-none">${founder.name}</h3>
                <p class="font-mono text-xs text-slate-400 uppercase tracking-[0.15em] mt-2">${founder.title}</p>
              </div>
              <div class="h-px bg-slate-800"></div>
              
              <p class="font-sans text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
                ${founder.bio}
              </p>

              <!-- Interactive LinkedIn & Email Connect Actions -->
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <!-- Direct LinkedIn Connect Button -->
                <a href="${linkedinHref}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-quantum-blue/40 bg-quantum-blue/10 text-quantum-blue hover:bg-quantum-blue hover:text-slate-950 font-mono text-xs font-bold transition-all duration-200 uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)] group/btn">
                  <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  <span>LinkedIn Channel</span>
                </a>

                <!-- Direct Email Connect Button -->
                <a href="${emailHref}" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-[#020408]/80 text-slate-300 hover:text-white hover:border-slate-700 font-mono text-xs font-bold transition-all duration-200 uppercase tracking-wider">
                  <svg class="w-4 h-4 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>${founder.email || 'Email Direct'}</span>
                </a>
              </div>

              <div class="font-mono text-[10px] text-slate-500 flex flex-wrap items-center gap-x-8 gap-y-2 uppercase pt-5 border-t border-slate-900/60">
                <span>Focus Area: <span class="text-slate-300 font-bold">${founder.focus}</span></span>
                <span>Status: <span class="text-green-400 font-bold">● ${founder.status}</span></span>
              </div>
            </div>

            <!-- Right Side: Image with hover overlay -->
            <div class="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/80 flex items-center justify-center p-8 group/avatar flex-shrink-0">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
              
              <img 
                src="${avatarSrc}" 
                alt="${founder.name}" 
                referrerPolicy="no-referrer"
                class="w-52 h-52 md:w-[220px] md:h-[220px] object-contain filter drop-shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-transform duration-500 group-hover/avatar:scale-110 z-10"
              />
              
              <!-- LinkedIn Link overlay specifically on image as well -->
              <a 
                href="${linkedinHref}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="absolute inset-0 bg-[#020408]/90 backdrop-blur-sm flex flex-col items-center justify-center gap-3 opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 cursor-pointer z-20"
              >
                <div class="w-12 h-12 rounded-full bg-quantum-blue-glow border border-quantum-blue flex items-center justify-center text-quantum-blue shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </div>
                <span class="font-mono text-[10px] text-quantum-blue font-bold tracking-widest uppercase text-center px-4">LinkedIn Channel</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* Render ERP Analysis Portfolios Dynamically */
  const portfolioContainer = document.getElementById('analytics-portfolio-container');
  if (portfolioContainer) {
    portfolioContainer.innerHTML = ANALYSIS_PORTFOLIO.map((item, index) => {
      return `
        <div class="border border-slate-900 rounded-xl p-6 bg-cyber-card/60 flex flex-col justify-between hover:border-yellow-500/30 transition-all duration-300 relative group overflow-hidden">
          <div class="absolute inset-0 bg-radial from-yellow-500/2 to-transparent pointer-events-none"></div>
          
          <div class="space-y-4">
            <!-- Image Frame -->
            <div class="relative w-full aspect-video rounded-lg overflow-hidden border border-slate-900 bg-slate-950 flex items-center justify-center group-hover:border-yellow-500/20 transition-colors duration-300">
              <img 
                src="${item.image}" 
                alt="${item.title}" 
                referrerPolicy="no-referrer"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-[#020408]/65 backdrop-blur-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <div class="w-8 h-8 rounded-full border border-yellow-500/40 flex items-center justify-center bg-yellow-500/5 text-yellow-500">
                  <i data-lucide="eye" class="w-4 h-4"></i>
                </div>
                <span class="font-mono text-[9px] text-yellow-500 font-bold uppercase tracking-widest px-2 py-0.5 border border-yellow-500/15 bg-yellow-500/5 rounded">Reveal ERP Interface</span>
              </div>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-sans font-bold text-lg text-white group-hover:text-yellow-500 transition-colors duration-200">
                ${item.title}
              </h4>
              <p class="font-mono text-xs text-slate-400 leading-relaxed text-justify">
                ${item.writeup}
              </p>
            </div>
          </div>
          
          <div class="mt-6 pt-3 border-t border-slate-900/60 flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase">
            <span>Module status: <span class="text-green-400 font-bold">● ONLINE</span></span>
            <span class="font-bold">SPEC_0${index + 1}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  /* 0. Phases click-to-toggle dropdown */
  const phasesBtn = document.getElementById('phases-dropdown-btn');
  const phasesMenu = document.getElementById('phases-dropdown-menu');
  
  if (phasesBtn && phasesMenu) {
    phasesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      phasesMenu.classList.toggle('hidden');
      const chevron = phasesBtn.querySelector('i[data-lucide="chevron-down"]');
      if (chevron) {
        chevron.classList.toggle('rotate-180');
      }
    });

    /* Close phases menu on clicking anywhere else on page */
    document.addEventListener('click', (e) => {
      if (!phasesBtn.contains(e.target) && !phasesMenu.contains(e.target)) {
        phasesMenu.classList.add('hidden');
        const chevron = phasesBtn.querySelector('i[data-lucide="chevron-down"]');
        if (chevron) {
          chevron.classList.remove('rotate-180');
        }
      }
    });
  }

  /* 1. Initialize Lucide Icons */
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* Robot Head peek-a-boo loop (Centered behind logo, slides out half its face for 2s, swipes back in) */
  const robotHead = document.getElementById('robot-head');
  if (robotHead) {
    setInterval(() => {
      // Slides out from center (-50%) to 16px right of center so half of face peeks out past the logo box
      robotHead.style.transform = 'translate(16px, -50%)';
      robotHead.classList.remove('opacity-0');
      robotHead.classList.add('opacity-100');
      
      /* Stay out for 2 seconds then swipe back behind the logo */
      setTimeout(() => {
        robotHead.style.transform = 'translate(-50%, -50%)';
        robotHead.classList.remove('opacity-100');
        robotHead.classList.add('opacity-0');
      }, 2000);
    }, 4500);
  }

  /* Upcoming RheivaAI Teaser Modal Interactive Handlers */
  const logoLink = document.getElementById('logo-link');
  const aiModal = document.getElementById('ai-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const viewOtherBtn = document.getElementById('view-other-portfolio-btn');

  function openAiModal(e) {
    if (e) e.preventDefault();
    if (aiModal) {
      aiModal.classList.remove('hidden');
      lockBodyScroll();
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  }

  function closeAiModal() {
    if (aiModal) {
      aiModal.classList.add('hidden');
      unlockBodyScroll();
    }
  }

  if (logoLink) {
    logoLink.addEventListener('click', openAiModal);
  }

  if (robotHead) {
    robotHead.addEventListener('click', (e) => {
      e.stopPropagation();
      openAiModal(e);
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeAiModal);
  }

  if (aiModal) {
    /* Close on outside overlay click */
    aiModal.addEventListener('click', (e) => {
      if (e.target === aiModal) {
        closeAiModal();
      }
    });
  }

  const submitModalElem = document.getElementById('submit-modal');
  if (submitModalElem) {
    submitModalElem.addEventListener('click', (e) => {
      if (e.target === submitModalElem) {
        window.closeSubmitModal();
      }
    });
  }

  /* Global Escape Key Handler to close any open modal and unlock scroll */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const aiModalElem = document.getElementById('ai-modal');
      const submitModalElem = document.getElementById('submit-modal');
      if (aiModalElem && !aiModalElem.classList.contains('hidden')) {
        aiModalElem.classList.add('hidden');
      }
      if (submitModalElem && !submitModalElem.classList.contains('hidden')) {
        submitModalElem.classList.add('hidden');
      }
      document.body.classList.remove('overflow-hidden');
    }
  });

  /* Handle Early Access Pre-release Dispatch Subscription */
  window.handleAiNotify = function(e) {
    if (e) e.preventDefault();
    const emailInput = document.getElementById('ai-notify-email');
    const statusBox = document.getElementById('ai-notify-status');
    const submitBtn = document.getElementById('ai-notify-submit-btn');

    if (emailInput && emailInput.value.trim()) {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> Queued`;
      }
      if (statusBox) {
        statusBox.classList.remove('hidden');
      }
      emailInput.disabled = true;
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }
  };

  if (viewOtherBtn) {
    viewOtherBtn.addEventListener('click', () => {
      /* Turn button grey, update cursor and disable */
      viewOtherBtn.classList.remove('text-slate-400', 'hover:text-slate-200', 'border-slate-800');
      viewOtherBtn.classList.add('bg-slate-800/40', 'text-slate-600', 'border-slate-800/30', 'cursor-not-allowed');
      viewOtherBtn.setAttribute('title', 'Coming Soon');
      viewOtherBtn.setAttribute('disabled', 'true');
      viewOtherBtn.innerHTML = `<i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i> In Development`;
      if (window.lucide) {
         window.lucide.createIcons();
      }
    });
  }

  /* 2. Dynamic Status Simulator (Real-time UTC clock & fluctuating network nodes) */
  const hudClock = document.getElementById('hud-clock');
  const hudNodes = document.getElementById('hud-nodes');
  const hudCpu = document.getElementById('hud-cpu');

  function startSimulators() {
    /* Clock Ticker */
    setInterval(() => {
      const now = new Date();
      const isoStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      if (hudClock) hudClock.textContent = isoStr;
    }, 1000);

    /* Nodes & CPU fluctuation */
    let nodes = 148;
    setInterval(() => {
      const delta = Math.floor(Math.random() * 5) - 2;
      nodes = Math.max(140, Math.min(160, nodes + delta));
      if (hudNodes) hudNodes.textContent = `${nodes} NODES`;

      const cpu = (1.5 + Math.random() * 2.5).toFixed(2);
      if (hudCpu) hudCpu.textContent = `${cpu}%`;
    }, 3000);
  }
  startSimulators();

  /* 3. Mobile Menu Toggle */
  const menu = document.getElementById('mobile-menu');
  const mobileToggle = document.getElementById('mobile-menu-toggle');

  function toggleMobileMenu() {
    if (menu) {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  /* Expose toggleMobileMenu to global window scope so onclick in HTML still works */
  window.toggleMobileMenu = toggleMobileMenu;

  /* 4. Header Scroll effect */
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.remove('bg-transparent', 'h-20');
        header.classList.add('bg-[#020408]/90', 'backdrop-blur-md', 'border-b', 'border-cyber-border', 'h-16');
      } else {
        header.classList.remove('bg-[#020408]/90', 'backdrop-blur-md', 'border-b', 'border-cyber-border', 'h-16');
        header.classList.add('bg-transparent', 'h-20');
      }
    }
  });

  /* 5. Pipeline Vectors Interactive Selection State */
  const phaseData = {
    1: {
      tag: 'COMPARTMENT 01 LOGISTICS',
      title: 'EARTH SPECIFICATION',
      metrics: [
        { label: 'ECOSYSTEM_NATIVITY', value: '100% REGIONAL' },
        { label: 'CLIMATE_RESILIENCE', value: 'UP TO 65°C' },
        { label: 'RESOURCE_OPTIMIZATION', value: 'PASSIVE SOLAR' },
        { label: 'CARBON_FOOTPRINT', value: '0.00 NET_ZERO' }
      ]
    },
    2: {
      tag: 'COMPARTMENT 02 LOGISTICS',
      title: 'TECHNOLOGY SPECIFICATION',
      metrics: [
        { label: 'COMPLEX_INTEGRATION', value: 'DYNAMIC MOE' },
        { label: 'COST_VS_CIVILIZATION', value: 'OPTIMAL EDGE' },
        { label: 'HARDWARE_BEDROCK', value: 'CUSTOM SILICON' },
        { label: 'LOCAL_AUTONOMY', value: 'AIR-GAPPED' }
      ]
    },
    3: {
      tag: 'COMPARTMENT 03 LOGISTICS',
      title: 'YOU SPECIFICATION',
      metrics: [
        { label: 'INTERACTION_PLANE', value: 'COGNITIVE SYMPHONY' },
        { label: 'EMPOWERMENT_RATIO', value: 'INFINITE SCALING' },
        { label: 'BIOMETRIC_RESONANCE', value: 'DYNAMIC MATCH' },
        { label: 'USER_SOVEREIGNTY', value: '100% DECENTRALIZED' }
      ]
    }
  };

  function selectPhase(phaseId) {
    /* Toggle selected cards look */
    for (let i = 1; i <= 3; i++) {
      const card = document.getElementById(`phase-card-${i}`);
      if (!card) continue;
      const label = card.querySelector('span');
      const iconDiv = card.querySelector('div > div');

      if (i === phaseId) {
        card.className = "relative rounded-xl border p-8 bg-cyber-card cursor-pointer transition-all duration-300 overflow-hidden select-none border-quantum-blue shadow-[0_0_30px_rgba(6,182,212,0.08)]";
        if (label) label.className = "font-mono text-[10px] text-quantum-blue font-bold tracking-widest";
        if (iconDiv) iconDiv.className = "w-10 h-10 rounded border border-cyber-border flex items-center justify-center bg-cyber-dark/40 text-quantum-blue";
      } else {
        card.className = "relative rounded-xl border p-8 bg-cyber-card/60 cursor-pointer transition-all duration-300 overflow-hidden select-none border-cyber-border hover:border-quantum-blue/40";
        if (label) label.className = "font-mono text-[10px] text-slate-500 font-bold tracking-widest";
        if (iconDiv) iconDiv.className = "w-10 h-10 rounded border border-cyber-border flex items-center justify-center bg-cyber-dark/40 text-slate-500";
      }
    }

    /* Update technical panel metrics */
    const data = phaseData[phaseId];
    if (data) {
      const specPhaseNum = document.getElementById('spec-phase-num');
      const specPhaseTitle = document.getElementById('spec-phase-title');
      const grid = document.getElementById('spec-metrics-grid');

      if (specPhaseNum) specPhaseNum.textContent = data.tag;
      if (specPhaseTitle) specPhaseTitle.textContent = data.title;
      if (grid) {
        grid.innerHTML = data.metrics.map(m => `
          <div class="p-4 border border-slate-800/40 rounded bg-[#020408]/40">
            <span class="text-[9px] text-slate-500 font-bold tracking-wider block mb-1">${m.label}</span>
            <span class="text-white font-mono text-sm font-medium">${m.value}</span>
          </div>
        `).join('');
      }
    }
  }

  /* Expose to window */
  window.selectPhase = selectPhase;

  /* 6. Interactive Terminal Simulation Console */
  const terminalScreen = document.getElementById('terminal-screen');
  function appendLog(line, isResponse = false) {
    if (!terminalScreen) return;
    const div = document.createElement('div');
    if (isResponse) {
      div.innerHTML = line;
    } else {
      div.innerHTML = `<span class="text-quantum-blue">r-tech_telemetry$</span> ${line}`;
    }
    terminalScreen.appendChild(div);
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }

  function runDiagnostic(type) {
    if (type === 'scan') {
      appendLog('SCAN_CHASSIS');
      setTimeout(() => {
        appendLog('<span class="text-slate-500">&gt; probing passive chassis sensors...</span>', true);
        appendLog('<span class="text-green-400">&gt; SCAN SUCCESSFUL: Chassis core is secure. Core temp: 34.2C.</span>', true);
      }, 400);
    } else if (type === 'nodes') {
      appendLog('DIAG_GRID');
      setTimeout(() => {
        appendLog('<span class="text-slate-500">&gt; pinging distributed regional network cells...</span>', true);
        appendLog('&gt; CELL 01 (SOUTH): 100% | CELL 02 (EAST): 100% | CELL 03 (WEST): 98%', true);
        appendLog('<span class="text-green-400">&gt; OVERALL GRID STATUS: OPTIMAL</span>', true);
      }, 500);
    } else if (type === 'protocols') {
      appendLog('INIT_PROTOCOL');
      setTimeout(() => {
        appendLog('<span class="text-slate-500">&gt; compiling sovereign firmware boot loader...</span>', true);
        appendLog('<span class="text-quantum-blue">&gt; SYSTEM COMPILATION: PHASE_01 STABLE. ready to link.</span>', true);
      }, 450);
    }
  }

  window.runDiagnostic = runDiagnostic;

  function handleTerminalSubmit(event) {
    if (event.key === 'Enter') {
      const input = document.getElementById('terminal-input');
      if (!input) return;
      const rawCommand = input.value.trim();
      const command = rawCommand.toLowerCase();
      if (!command) return;

      appendLog(rawCommand);
      input.value = '';

      setTimeout(() => {
        if (command === 'help') {
          appendLog('&gt; Available commands: <b>status</b>, <b>analysis</b>, <b>intellect</b>, <b>clear</b>, <b>vector</b>, <b>epoch</b>, <b>nodes</b>, <b>contacts</b>', true);
        } else if (command === 'contacts') {
          appendLog('&gt; <span class="text-quantum-blue">INITIATING SECURE LOCAL DATABASE DECRYPTION...</span>', true);
          appendLog('&gt; <span class="text-slate-500">QUERYING ACTIVE NETWORK OPERATORS LEDGER...</span>', true);
          
          fetch('/api/contacts')
            .then(res => res.json())
            .then(data => {
              const serverContacts = data.contacts || [];
              let localContacts = [];
              try {
                const cached = localStorage.getItem('rheivatech_contacts');
                if (cached) localContacts = JSON.parse(cached);
              } catch (e) { console.error(e); }
              
              // Filter out duplicates that might be in both places
              const allContacts = [...serverContacts];
              localContacts.forEach(lc => {
                if (!allContacts.some(sc => sc.email.toLowerCase() === lc.email.toLowerCase())) {
                  allContacts.push(lc);
                }
              });

              setTimeout(() => {
                if (allContacts.length === 0) {
                  appendLog('&gt; <span class="text-yellow-500">DATABASE STATUS: ONLINE | RECORDS: 0</span>', true);
                  appendLog('&gt; No operators registered yet. Be the first to join by submitting the Secure Access Portal form below!', true);
                } else {
                  appendLog(`&gt; <span class="text-green-400">DECRYPTION SUCCESSFUL! FOUND ${allContacts.length} ACTIVE OPERATOR(S):</span>`, true);
                  appendLog('&gt; -------------------------------------------------------------', true);
                  allContacts.forEach((c, idx) => {
                    const origin = c.id ? '<span class="text-green-500">[SERVER_DB]</span>' : '<span class="text-yellow-500">[LOCAL_CACHE]</span>';
                    appendLog(`&gt; <span class="text-white font-bold">OPERATOR #${idx + 1} ${origin}</span>`, true);
                    appendLog(`&gt; <span class="text-slate-400">NAME:</span> ${c.name}`, true);
                    appendLog(`&gt; <span class="text-slate-400">EMAIL:</span> ${c.email}`, true);
                    appendLog(`&gt; <span class="text-slate-400">SPECIALTY:</span> ${c.specialty}`, true);
                    appendLog(`&gt; <span class="text-slate-400">STATED ALIGNMENT:</span> "${c.statement}"`, true);
                    appendLog(`&gt; <span class="text-slate-400">DATE:</span> ${c.timestamp || new Date().toISOString()}`, true);
                    appendLog('&gt; -------------------------------------------------------------', true);
                  });
                }
              }, 800);
            })
            .catch(err => {
              // Offline/Static local fallback
              let localContacts = [];
              try {
                const cached = localStorage.getItem('rheivatech_contacts');
                if (cached) localContacts = JSON.parse(cached);
              } catch (e) { console.error(e); }

              setTimeout(() => {
                if (localContacts.length === 0) {
                  appendLog('&gt; <span class="text-yellow-500">DATABASE STATUS: OFFLINE (LOCAL FALLBACK ACTIVE) | RECORDS: 0</span>', true);
                  appendLog('&gt; No offline operators registered yet. Use the Join Our Network form to save contacts locally!', true);
                } else {
                  appendLog(`&gt; <span class="text-yellow-500">DATABASE STATUS: OFFLINE (LOCAL FALLBACK ACTIVE) | RECORDS: ${localContacts.length}</span>`, true);
                  appendLog('&gt; -------------------------------------------------------------', true);
                  localContacts.forEach((c, idx) => {
                    appendLog(`&gt; <span class="text-white font-bold">OFFLINE OPERATOR #${idx + 1} <span class="text-yellow-500">[LOCAL_CACHE]</span></span>`, true);
                    appendLog(`&gt; <span class="text-slate-400">NAME:</span> ${c.name}`, true);
                    appendLog(`&gt; <span class="text-slate-400">EMAIL:</span> ${c.email}`, true);
                    appendLog(`&gt; <span class="text-slate-400">SPECIALTY:</span> ${c.specialty}`, true);
                    appendLog(`&gt; <span class="text-slate-400">STATED ALIGNMENT:</span> "${c.statement}"`, true);
                    appendLog(`&gt; <span class="text-slate-400">DATE:</span> ${c.timestamp || new Date().toISOString()}`, true);
                    appendLog('&gt; -------------------------------------------------------------', true);
                  });
                }
              }, 800);
            });
        } else if (command === 'status') {
          appendLog('&gt; [ STATUS REPORT: UNDER PRODUCTION ]', true);
          appendLog('&gt; CURRENT COGNITIVE INFRASTRUCTURE: DEVELOPMENT PHASE', true);
          appendLog('&gt; ASSET STATE: BOOTSTRAPPED | CAPITAL INDEX: CONSTRAINED', true);
          appendLog('&gt; Rheivatech is built on extreme cost-efficiency and relentless technical passion.', true);
          appendLog('&gt; We run highly optimized networks built for local resilience, bypassing corporate bloat.', true);
          appendLog('&gt; ⚡ PLEASE STAY IN TOUCH to receive priority node updates!', true);
        } else if (command === 'analysis') {
          appendLog('&gt; <span class="text-yellow-500">INITIALIZING SECURE LINK TO DATA LAB...</span>', true);
          appendLog('&gt; <span class="text-slate-500">CONNECTING TO RHEIVADA CORE ANALYTICS ENGINE...</span>', true);
          setTimeout(() => {
            appendLog('&gt; <span class="text-green-400">ACCESS GRANTED: UNLOCKING LAYER_02_EXT PORTAL.</span>', true);
            const section = document.getElementById('analytics-section');
            if (section) {
              section.classList.remove('hidden');
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 1200);
        } else if (command === 'intellect') {
          appendLog('&gt; <span class="text-pink-500">INITIALIZING COGNITIVE INTERFACE...</span>', true);
          appendLog('&gt; <span class="text-slate-500">DECRYPTING LOCAL REPOSITORY METADATA...</span>', true);
          setTimeout(() => {
            appendLog('&gt; <span class="text-green-400">ACCESS GRANTED: OPENING SOVEREIGN INTELLECT CORES.</span>', true);
            const section = document.getElementById('intellect-section');
            if (section) {
              section.classList.remove('hidden');
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 1200);
        } else if (command === 'closeintellect' || command === 'close intellect') {
          appendLog('&gt; deactivating localized AI section...', true);
          const section = document.getElementById('intellect-section');
          if (section) {
            section.classList.add('hidden');
          }
        } else if (command === 'closeanalysis' || command === 'close analysis') {
          appendLog('&gt; deactivating data analytics service section...', true);
          const section = document.getElementById('analytics-section');
          if (section) {
            section.classList.add('hidden');
          }
        } else if (command === 'clear') {
          if (terminalScreen) terminalScreen.innerHTML = '';
        } else if (command === 'vector') {
          appendLog('&gt; Pipeline Active States:', true);
          appendLog('&gt; Phase 01: local cognitive mixture-of-expert tuning', true);
          appendLog('&gt; Phase 02: custom solar mesh communications network', true);
          appendLog('&gt; Phase 03: custom chassis tuning with heavy autonomous mobility', true);
        } else if (command === 'epoch') {
          appendLog(`&gt; EPOCH TIME: ${new Date().toISOString()}`, true);
        } else if (command === 'nodes') {
          runDiagnostic('nodes');
        } else {
          appendLog(`&gt; Command not recognized: "${rawCommand}". Type "<b>help</b>" for options.`, true);
        }
      }, 200);
    }
  }

  window.handleTerminalSubmit = handleTerminalSubmit;

  /* 7. System Stack Tab-swaps */
  const stackData = {
    hardware: {
      tag: '[ SPEC_INDEX | HARDWARE_FAB ]',
      title: 'PHYSICAL ENDURANCE HARDWARE',
      desc: 'Forging tactical electronics and heavy mechanical structures. We engineer custom microcontrollers, low-power system-on-chips (SoCs), military-spec wear structures, and heavy battery enclosures built to withstand regional thermal profiles.',
      points: [
        'TACTILE_CHASSIS | SOLID-CORE ENCLOSURES',
        'SOLAR_THERMAL | PASSIVE CONVECTIVE COOLING',
        'MODULAR_SOC | SWAPPABLE COMPUTATIONAL CORES'
      ],
      blueprint: 'R-CHASSIS_V4_CORE.3D',
      blueprintStats: `
        <div>DIMENSIONS: 340mm x 210mm x 45mm</div>
        <div>THERMAL_TOLERANCE: -20C TO +65C</div>
        <div>FABRICATION_ACCURACY: 0.02 Microns</div>
      `
    },
    protocols: {
      tag: '[ SPEC_INDEX | MESH_NETS ]',
      title: 'DECENTRALIZED PROTOCOLS',
      desc: 'Establishing peer-to-peer resilient wireless links. Our protocols operate over long-distance solar mesh channels, enabling reliable packet exchange entirely independent of standard internet trunk pipelines.',
      points: [
        'PEER_ROUTING | ZERO CENTRAL BACKBONE',
        'AIR_GAPPED_FALLBACKS | OPTICAL LINK CHANNELS',
        'REDUNDANT_SAT_MESH | GLOBAL SYNC MATRIX'
      ],
      blueprint: 'M-NET_TOPOLOGY_08.XML',
      blueprintStats: `
        <div>MAX_LINK_RANGE: 15km (AIR-TO-GROUND)</div>
        <div>ENCRYPTION_STANDARD: SHA-512 SECURE</div>
        <div>BACKHAUL_THROUGHPUT: 1.2 GBPS LINK</div>
      `
    },
    intelligence: {
      tag: '[ SPEC_INDEX | COGNITIVE_MOE ]',
      title: 'LOCALIZED INTELLIGENCE KERNELS',
      desc: 'Localized reasoning platforms optimized for high-capacity offline execution. We train models directly on dialect variances and continental context so no data has to travel over foreign clouds.',
      points: [
        'OFFLINE_MOE_COMPILERS | DIRECT EMBEDDINGS',
        'DIALECT_TUNED_SAMPLERS | REGIONAL ALIGNMENT',
        'TENSOR_STRETCHING | MEMORY-EFFICIENT WEIGHTS'
      ],
      blueprint: 'LLM_REASONING_ENGINE.BIN',
      blueprintStats: `
        <div>PARAMETER_SIZE: 70 Billion MOE</div>
        <div>QUANTIZATION: 4-BIT INT EDGE CORES</div>
        <div>DIALECT_COORDINATES: 18 REGIONAL VECTORS</div>
      `
    },
    secure_grid: {
      tag: '[ SPEC_INDEX | SEC_DEFENSE ]',
      title: 'CONTINENTAL SOVEREIGN GRID',
      desc: 'Full-spectrum resource tracking and smart automated grids. Monitoring ambient sensors, power cells, and regional network logs to guarantee permanent autonomy and uptime.',
      points: [
        'STABILITY_AUDITS | REALTIME ATTACK TRACE',
        'GRID_SOVEREIGNTY | CONTINENTAL SANCTIONS INSULATION',
        'AUTONOMOUS_LOAD_SINK | AMBIENT LOAD BALANCING'
      ],
      blueprint: 'SOVEREIGN_GRID_MATRIX.JSON',
      blueprintStats: `
        <div>TOTAL_ACTIVE_CELLS: 4,012 NODES</div>
        <div>INTEGRITY_INDEX: 99.999% HEAL</div>
        <div>ATTACK_ABSORBENCE: MULTI-TERABIT/SEC</div>
      `
    }
  };

  function selectCategory(catId) {
    const categories = ['hardware', 'protocols', 'intelligence', 'secure_grid'];
    categories.forEach(id => {
      const btn = document.getElementById(`cat-btn-${id}`);
      if (!btn) return;
      if (id === catId) {
        btn.className = "px-5 py-2.5 font-mono text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded border border-quantum-blue text-quantum-blue bg-quantum-blue-glow";
      } else {
        btn.className = "px-5 py-2.5 font-mono text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded border border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300";
      }
    });

    const data = stackData[catId];
    if (data) {
      const stackTag = document.getElementById('stack-tag');
      const stackTitle = document.getElementById('stack-title');
      const stackDesc = document.getElementById('stack-description');
      const pointsContainer = document.getElementById('stack-points');
      const blueprintContent = document.getElementById('blueprint-content');
      const blueprintStats = document.getElementById('blueprint-stats');

      if (stackTag) stackTag.textContent = data.tag;
      if (stackTitle) stackTitle.textContent = data.title;
      if (stackDesc) stackDesc.textContent = data.desc;

      if (pointsContainer) {
        pointsContainer.innerHTML = data.points.map(pt => `
          <div class="flex items-center gap-3">
            <div class="w-1.5 h-1.5 rounded-full bg-quantum-blue"></div>
            <span class="font-mono text-xs text-white">${pt}</span>
          </div>
        `).join('');
      }

      if (blueprintContent) blueprintContent.textContent = data.blueprint;
      if (blueprintStats) blueprintStats.innerHTML = data.blueprintStats;
    }
  }

  window.selectCategory = selectCategory;

  /* 8. Leadership Carousel Slider */
  let currentSlide = 0;
  function slideCarousel(direction) {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    const items = track.children;
    if (items.length === 0) return;
    const gap = 24;
    const itemWidth = items[0].getBoundingClientRect().width;
    const totalWidthToScroll = itemWidth + gap;
    const maxSlides = items.length - 1;

    if (direction === 'next') {
      currentSlide = currentSlide >= maxSlides ? 0 : currentSlide + 1;
    } else {
      currentSlide = currentSlide <= 0 ? maxSlides : currentSlide - 1;
    }

    track.style.transform = `translateX(-${currentSlide * totalWidthToScroll}px)`;
  }

  window.slideCarousel = slideCarousel;

  /* 9. Mixture of Experts compiler interactive stats & formulas */
  function updateMoeMetrics() {
    const slider = document.getElementById('param-slider');
    const quantSelect = document.getElementById('quant-select');
    if (!slider || !quantSelect) return;

    const P = parseInt(slider.value);
    const Q = parseInt(quantSelect.value);

    // Update displays for slider value & quantization type
    const paramValDisp = document.getElementById('param-val');
    const quantValDisp = document.getElementById('quant-val');
    if (paramValDisp) paramValDisp.textContent = P + "B";
    
    let quantText = "4-BIT INT";
    let compressionFactor = 4.0;
    let bytePerParam = 0.5;
    if (Q === 16) {
      quantText = "16-BIT FLOAT";
      compressionFactor = 1.0;
      bytePerParam = 2.0;
    } else if (Q === 8) {
      quantText = "8-BIT INT";
      compressionFactor = 2.0;
      bytePerParam = 1.0;
    } else if (Q === 4) {
      quantText = "4-BIT INT";
      compressionFactor = 4.0;
      bytePerParam = 0.5;
    } else if (Q === 2) {
      quantText = "2-BIT TENSOR";
      compressionFactor = 8.0;
      bytePerParam = 0.25;
    }
    if (quantValDisp) quantValDisp.textContent = quantText;

    // Calculate RAM and file size
    const M = P * bytePerParam;
    const estRam = document.getElementById('est-ram');
    const estStorage = document.getElementById('est-storage');
    const mFootprint = document.getElementById('m-footprint');
    
    if (estRam) estRam.textContent = M.toFixed(1) + " GB";
    if (estStorage) estStorage.textContent = M.toFixed(1) + " GB";
    if (mFootprint) mFootprint.textContent = M.toFixed(1) + " GB";

    // Compression rates
    const mCompression = document.getElementById('m-compression');
    if (mCompression) mCompression.textContent = compressionFactor.toFixed(2) + " x";

    // Latency approximation
    const mLatency = document.getElementById('m-latency');
    const computedLatency = Math.max(2, Math.round((M * 0.3) + 3));
    if (mLatency) mLatency.textContent = computedLatency + " ms";

    // Reasoning Accuracy formula
    const mAccuracy = document.getElementById('m-accuracy');
    let baseAccuracy = 98.5;
    if (Q === 16) baseAccuracy = 99.8;
    else if (Q === 8) baseAccuracy = 99.1;
    else if (Q === 4) baseAccuracy = 96.8;
    else if (Q === 2) baseAccuracy = 88.5;
    
    const paramRatio = (P - 8) / (120 - 8);
    const actualAccuracy = baseAccuracy - (1.0 - paramRatio) * 5.0;
    if (mAccuracy) mAccuracy.textContent = actualAccuracy.toFixed(1) + "%";

    // Minimum hardware suite selection
    const estHardware = document.getElementById('est-hardware');
    if (estHardware) {
      if (M <= 8) {
        estHardware.textContent = "Ultra-Lightweight Edge (Raspberry Pi / Jetson Nano)";
        estHardware.className = "text-green-400 font-bold";
      } else if (M <= 16) {
        estHardware.textContent = "Standard Smartphone / Entry-Level Laptop";
        estHardware.className = "text-green-400 font-bold";
      } else if (M <= 32) {
        estHardware.textContent = "Developer Workstation / High-Performance PC";
        estHardware.className = "text-quantum-blue font-bold";
      } else if (M <= 64) {
        estHardware.textContent = "Dedicated Developer PC / Dual-GPU Server Node";
        estHardware.className = "text-yellow-400 font-bold";
      } else {
        estHardware.textContent = "Heavy Continental Infrastructure Node / Cloud AI Farm";
        estHardware.className = "text-red-400 font-bold";
      }
    }

    // Dynamic expert allocation visualization weights formula based on slider
    const r1 = document.getElementById('e1-val');
    const r2 = document.getElementById('e2-val');
    const r3 = document.getElementById('e3-val');
    const r4 = document.getElementById('e4-val');

    const b1 = document.getElementById('e1-bar');
    const b2 = document.getElementById('e2-bar');
    const b3 = document.getElementById('e3-bar');
    const b4 = document.getElementById('e4-bar');

    const w1 = Math.max(15, Math.min(65, Math.round(40 + (P % 11) - (Q % 3))));
    const w2 = Math.max(10, Math.min(45, Math.round(30 - (P % 7) + (Q % 4))));
    const w3 = Math.max(5, Math.min(30, Math.round(20 + (P % 5))));
    const w4 = Math.max(5, 100 - (w1 + w2 + w3));

    if (r1) r1.textContent = w1 + "%";
    if (r2) r2.textContent = w2 + "%";
    if (r3) r3.textContent = w3 + "%";
    if (r4) r4.textContent = w4 + "%";

    if (b1) b1.style.width = w1 + "%";
    if (b2) b2.style.width = w2 + "%";
    if (b3) b3.style.width = w3 + "%";
    if (b4) b4.style.width = w4 + "%";
  }

  function simulateMoeCompile() {
    const btn = document.getElementById('moe-compile-btn');
    const terminal = document.getElementById('moe-terminal');
    const preloader = document.getElementById('moe-preloader');
    const fillBox = document.getElementById('preloader-fill-box');
    const eyeL = document.getElementById('preloader-eye-l');
    const eyeR = document.getElementById('preloader-eye-r');
    const statusText = document.getElementById('preloader-status-text');
    const percentageDisp = document.getElementById('preloader-percentage');

    if (!btn || !terminal) return;

    btn.setAttribute('disabled', 'true');
    btn.classList.add('opacity-50', 'cursor-not-allowed');

    if (preloader) {
      preloader.classList.remove('hidden');
      setTimeout(() => {
        preloader.classList.remove('opacity-0');
        preloader.classList.add('opacity-100');
      }, 50);
    }

    if (fillBox) fillBox.style.height = '0%';
    if (eyeL) eyeL.classList.add('hidden');
    if (eyeR) eyeR.classList.add('hidden');
    if (statusText) statusText.textContent = "INITIALIZING EXPERT ROUTING MATRIX...";
    if (percentageDisp) percentageDisp.textContent = "0%";

    let pct = 0;
    const progressInterval = setInterval(() => {
      pct += 2;
      if (pct > 100) pct = 100;

      if (percentageDisp) percentageDisp.textContent = pct + "%";
      if (fillBox) fillBox.style.height = pct + "%";

      if (statusText) {
        if (pct < 25) {
          statusText.textContent = "MAPPING REGIONAL DIALECT VECTORS...";
        } else if (pct < 50) {
          statusText.textContent = "MAPPING EXPERT ROUTING MATRICES...";
        } else if (pct < 75) {
          statusText.textContent = "APPLYING INT-4 QUANTIZATION SCALING...";
        } else if (pct < 100) {
          statusText.textContent = "PROBING STANDALONE AIR-GAP BEDROCK...";
        } else {
          statusText.textContent = "COMPILATION PLOTTED! LINK ESTABLISHED.";
        }
      }

      if (pct >= 100) {
        clearInterval(progressInterval);
        
        if (eyeL) eyeL.classList.remove('hidden');
        if (eyeR) eyeR.classList.remove('hidden');

        setTimeout(() => {
          if (preloader) {
            preloader.classList.remove('opacity-100');
            preloader.classList.add('opacity-0');
            setTimeout(() => {
              preloader.classList.add('hidden');
              
              terminal.innerHTML = '';
              const logs = [
                'INIT_COMPILER_SESSION: SUCCESSFUL',
                'RESOLVING LOCALIZED LINGUISTIC EMBEDDING WEIGHTS...',
                'MAPPING INTER-EXPERT ROUTING MATRIX...',
                'QUANTIZING COEFFICIENTS FOR AIR-GAP EFFICIENCY...',
                'VERIFYING CHASSIS-LEVEL COMPATIBILITY...',
                'COMPILATION COMPLETED: SECURED AND READY FOR AUTONOMOUS DEPLOYMENT!'
              ];

              let logIndex = 0;
              function printNextLog() {
                if (logIndex < logs.length) {
                  const isSuccess = logs[logIndex].includes('COMPLETED') || logs[logIndex].includes('SUCCESSFUL');
                  const colorClass = isSuccess ? 'text-green-400' : 'text-slate-400';
                  terminal.innerHTML += `<div class="${colorClass}">&gt; ${logs[logIndex]}</div>`;
                  terminal.scrollTop = terminal.scrollHeight;
                  logIndex++;
                  setTimeout(printNextLog, 300);
                } else {
                  btn.removeAttribute('disabled');
                  btn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
              }
              printNextLog();

            }, 300);
          }
        }, 600);
      }
    }, 40);
  }

  /* PHASE 02: Solar Connection Directory Specs Retrieval */
  let selectedMeshNodeId = 'lagos-ng';
  let activeMeshMode = 'local';
  let lastProbedData = null;

  async function detectUserLocation() {
    return new Promise((resolve) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            try {
              const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`);
              if (response.ok) {
                const data = await response.json();
                const city = data.city || data.locality || data.principalSubdivision || "Unknown City";
                const country = data.countryName || "Unknown Country";
                resolve({
                  lat: lat.toFixed(4),
                  lon: lon.toFixed(4),
                  region: `${city}, ${country}`,
                  countryCode: data.countryCode || ""
                });
              } else {
                resolve(fallbackIpLocation(lat, lon));
              }
            } catch (e) {
              resolve(fallbackIpLocation(lat, lon));
            }
          },
          async (err) => {
            resolve(await getIpLocation());
          },
          { timeout: 8000 }
        );
      } else {
        getIpLocation().then(resolve);
      }
    });
  }

  async function getIpLocation() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        const data = await response.json();
        return {
          lat: Number(data.latitude || 0).toFixed(4),
          lon: Number(data.longitude || 0).toFixed(4),
          region: `${data.city || "Unknown City"}, ${data.country_name || "Unknown Country"}`,
          countryCode: data.country_code || ""
        };
      }
    } catch (e) {}
    return {
      lat: "6.5244",
      lon: "3.3792",
      region: "Lagos, Nigeria (Fallback Core)",
      countryCode: "NG"
    };
  }

  function fallbackIpLocation(lat, lon) {
    return {
      lat: lat.toFixed(4),
      lon: lon.toFixed(4),
      region: "Unknown Regional Coordinate",
      countryCode: ""
    };
  }

  window.triggerGeolocationProbe = async function() {
    const display = document.getElementById('mesh-specs-display');
    const btn = document.getElementById('mesh-fetch-btn');
    const probeBtn = document.getElementById('probe-geo-btn');

    if (!display) return;

    if (btn) {
      btn.setAttribute('disabled', 'true');
      btn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5 animate-spin"></i> Probing Local Coords...`;
    }
    if (probeBtn) {
      probeBtn.setAttribute('disabled', 'true');
      probeBtn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5 animate-spin"></i> Querying Regional Nodes...`;
    }

    display.innerHTML = `
      <div class="flex flex-col items-center justify-center py-6 gap-3 text-quantum-blue font-mono text-xs">
        <div class="w-4 h-4 rounded-full border border-quantum-blue border-t-transparent animate-spin"></div>
        <span class="animate-pulse tracking-widest uppercase text-[10px]">[ DECRYPTING GEOLOCATION SIGNAL CORES ]</span>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    const data = await detectUserLocation();
    lastProbedData = data;

    setTimeout(() => {
      if (btn) {
        btn.removeAttribute('disabled');
        btn.innerHTML = `<i data-lucide="download" class="w-3.5 h-3.5"></i> Request Specifications Data`;
      }
      if (probeBtn) {
        probeBtn.removeAttribute('disabled');
        probeBtn.innerHTML = `<i data-lucide="crosshair" class="w-4 h-4"></i> Detect &amp; Probe Local Region Coords`;
      }
      
      updateLocalMeshSpecsDisplay(data);
      if (window.lucide) window.lucide.createIcons();
    }, 1200);
  };

  function updateLocalMeshSpecsDisplay(data) {
    const display = document.getElementById('mesh-specs-display');
    if (!display) return;

    const lat = parseFloat(data.lat);
    const lon = parseFloat(data.lon);

    const baseYield = Math.max(2.1, Math.min(6.3, 6.0 - Math.abs(lat) * 0.08));
    let yieldRating = "Sub-optimal";
    let yieldColor = "text-yellow-500";
    if (baseYield >= 5.0) {
      yieldRating = "Optimal Peak";
      yieldColor = "text-green-400";
    } else if (baseYield >= 4.0) {
      yieldRating = "Optimal";
      yieldColor = "text-quantum-blue";
    } else if (baseYield >= 3.0) {
      yieldRating = "Moderate";
      yieldColor = "text-slate-300";
    }
    const solarStr = `${baseYield.toFixed(1)} kWh/m²/day (${yieldRating})`;

    let availabilityStr = "EDGE AIR-GAP EMULATOR ACTIVE";
    let availabilityColor = "text-yellow-400 font-bold";
    if (data.countryCode === 'NG' || data.region.toLowerCase().includes('nigeria')) {
      availabilityStr = "DIRECT METROPOLITAN HUB ONLINE (100% AVAILABLE)";
      availabilityColor = "text-green-400 font-bold";
    } else if (['ZA', 'KE', 'GH', 'EG', 'SN', 'DZ', 'MA', 'CI', 'UG', 'ET'].includes(data.countryCode)) {
      availabilityStr = "REGIONAL SAT-MESH DEPLOYED (85% DIRECT LINE)";
      availabilityColor = "text-quantum-blue font-bold";
    } else {
      availabilityStr = "TRANSCONTINENTAL TUNNEL ACTIVE (STABLE DEPLOYMENT)";
      availabilityColor = "text-slate-300 font-bold";
    }

    const latencyVal = Math.max(10, Math.round(12 + Math.abs(lat - 6.5) * 3.5));

    display.innerHTML = `
      <div class="grid grid-cols-2 gap-4 text-xs font-mono">
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">PROBED REGION</span>
          <span class="text-white font-medium">${data.region}</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">COORDINATES</span>
          <span class="text-white font-medium">${Math.abs(lat).toFixed(4)}° ${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lon).toFixed(4)}° ${lon >= 0 ? 'E' : 'W'}</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">SOLAR YIELD</span>
          <span class="${yieldColor} font-bold">${solarStr}</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">INFRASTRUCTURE AVAILABILITY</span>
          <span class="${availabilityColor}">${availabilityStr}</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800/60 font-mono text-[9px] text-slate-500 uppercase">
        <div>Transmitting latency: <span class="text-white font-bold">${latencyVal}ms</span></div>
        <div>Mesh coordination: <span class="text-green-400 font-bold">ESTABLISHED DIRECT PEER</span></div>
      </div>
    `;
  }

  function resetLocalMeshSpecsDisplay() {
    const display = document.getElementById('mesh-specs-display');
    if (!display) return;
    display.innerHTML = `
      <div class="grid grid-cols-2 gap-4 text-xs font-mono">
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">PROBED REGION</span>
          <span class="text-slate-400 font-mono text-[10px] uppercase font-bold animate-pulse">Use detect button to get values</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">COORDINATES</span>
          <span class="text-slate-400 font-mono text-[10px] uppercase font-bold animate-pulse">Use detect button to get values</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">SOLAR YIELD</span>
          <span class="text-slate-400 font-mono text-[10px] uppercase font-bold animate-pulse">Use detect button to get values</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
          <span class="text-[9px] text-slate-500 font-bold block mb-1">HARDWARE AVAILABILITY</span>
          <span class="text-slate-400 font-mono text-[10px] uppercase font-bold animate-pulse">Use detect button to get values</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800/60 font-mono text-[9px] text-slate-500 uppercase">
        <div>Transmitting latency: <span class="text-slate-500 font-bold">Use detect button to get values</span></div>
        <div>Mesh coordination: <span class="text-slate-500">OFFLINE</span></div>
      </div>
    `;
  }

  function selectMeshMode(mode) {
    activeMeshMode = mode;
    const btnLocal = document.getElementById('mode-btn-local');
    const btnGlobal = document.getElementById('mode-btn-global');
    const localContainer = document.getElementById('local-nodes-container');
    const globalContainer = document.getElementById('global-nodes-container');
    const nodeSelectionTitle = document.getElementById('node-selection-title');

    if (mode === 'local') {
      if (btnLocal) btnLocal.className = "py-2 font-mono text-[10px] font-bold border border-quantum-blue text-quantum-blue bg-quantum-blue-glow rounded transition-all uppercase flex items-center justify-center gap-1.5";
      if (btnGlobal) btnGlobal.className = "py-2 font-mono text-[10px] font-bold border border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300 rounded transition-all uppercase flex items-center justify-center gap-1.5 bg-[#020408]/40";
      if (localContainer) localContainer.classList.remove('hidden');
      if (globalContainer) globalContainer.classList.add('hidden');
      if (nodeSelectionTitle) nodeSelectionTitle.textContent = "Sovereign Local Coordinate Signal Mapping:";
      
      if (lastProbedData) {
        updateLocalMeshSpecsDisplay(lastProbedData);
      } else {
        resetLocalMeshSpecsDisplay();
      }
    } else {
      if (btnLocal) btnLocal.className = "py-2 font-mono text-[10px] font-bold border border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300 rounded transition-all uppercase flex items-center justify-center gap-1.5 bg-[#020408]/40";
      if (btnGlobal) btnGlobal.className = "py-2 font-mono text-[10px] font-bold border border-quantum-blue text-quantum-blue bg-quantum-blue-glow rounded transition-all uppercase flex items-center justify-center gap-1.5";
      if (localContainer) localContainer.classList.add('hidden');
      if (globalContainer) globalContainer.classList.remove('hidden');
      if (nodeSelectionTitle) nodeSelectionTitle.textContent = "Select Nigerian Core Headquarters Node:";
      selectMeshNode('lagos-ng');
    }
  }

  function selectMeshNode(nodeId) {
    selectedMeshNodeId = nodeId;
    const allNodes = ['lagos-ng', 'abuja-ng', 'ph-ng', 'kano-ng'];
    allNodes.forEach(id => {
      const btn = document.getElementById(`node-${id}`);
      if (!btn) return;
      if (id === nodeId) {
        btn.className = "px-3 py-2 font-mono text-[9px] font-bold border border-quantum-blue text-quantum-blue bg-quantum-blue-glow rounded transition-all uppercase";
      } else {
        btn.className = "px-3 py-2 font-mono text-[9px] font-bold border border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300 rounded transition-all uppercase bg-[#020408]/40";
      }
    });

    fetchMeshSpecs();
  }

  function fetchMeshSpecs() {
    const display = document.getElementById('mesh-specs-display');
    const btn = document.getElementById('mesh-fetch-btn');
    if (!display) return;

    if (activeMeshMode === 'local') {
      if (lastProbedData) {
        updateLocalMeshSpecsDisplay(lastProbedData);
      } else {
        triggerGeolocationProbe();
      }
      return;
    }

    if (btn) {
      btn.setAttribute('disabled', 'true');
      btn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5 animate-spin"></i> Retrieving Hub specs...`;
      if (window.lucide) window.lucide.createIcons();
    }

    display.innerHTML = `
      <div class="flex items-center justify-center py-6 gap-2 text-quantum-blue font-mono text-xs">
        <div class="w-3.5 h-3.5 rounded-full border border-quantum-blue border-t-transparent animate-spin"></div>
        <span>CONNECTING TO NIGERIAN CORE SERVER...</span>
      </div>
    `;

    setTimeout(() => {
      if (btn) {
        btn.removeAttribute('disabled');
        btn.innerHTML = `<i data-lucide="download" class="w-3.5 h-3.5"></i> Request Specifications Data`;
        if (window.lucide) window.lucide.createIcons();
      }

      let region = "Lagos, Nigeria";
      let coords = "6.5244° N, 3.3792° E";
      let solar = "5.6 kWh/m²/day (Optimal Peak)";
      let health = "99.9% Core integrity (Primary Root)";
      let latency = "4.5ms";

      if (selectedMeshNodeId === 'abuja-ng') {
        region = "Abuja, Nigeria";
        coords = "9.0765° N, 7.3986° E";
        solar = "5.9 kWh/m²/day (Optimal Peak)";
        health = "99.8% Sync integrity (Secondary Core)";
        latency = "8.2ms";
      } else if (selectedMeshNodeId === 'ph-ng') {
        region = "Port Harcourt, Nigeria";
        coords = "4.8156° N, 7.0498° E";
        solar = "4.8 kWh/m²/day (Optimal Coastal)";
        health = "99.7% Base integrity (Coastal Node)";
        latency = "9.1ms";
      } else if (selectedMeshNodeId === 'kano-ng') {
        region = "Kano, Nigeria";
        coords = "12.0022° N, 8.5920° E";
        solar = "6.2 kWh/m²/day (Maximum Peak)";
        health = "99.9% Envelope integrity (Sahelian Hub)";
        latency = "11.8ms";
      }

      display.innerHTML = `
        <div class="grid grid-cols-2 gap-4 text-xs font-mono">
          <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
            <span class="text-[9px] text-slate-500 font-bold block mb-1">SELECTED NIGERIAN HUB</span>
            <span class="text-white font-medium">${region}</span>
          </div>
          <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
            <span class="text-[9px] text-slate-500 font-bold block mb-1">COORDINATES</span>
            <span class="text-white font-medium">${coords}</span>
          </div>
          <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
            <span class="text-[9px] text-slate-500 font-bold block mb-1">SOLAR RADIANCE</span>
            <span class="text-quantum-blue font-bold">${solar}</span>
          </div>
          <div class="p-3 border border-slate-900 rounded bg-[#020408]/40">
            <span class="text-[9px] text-slate-500 font-bold block mb-1">SOVEREIGN HARDWARE DEPLOYED</span>
            <span class="text-green-400 font-bold">${health}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800/60 font-mono text-[9px] text-slate-500 uppercase">
          <div>Transmitting latency: <span class="text-white font-bold">${latency}</span></div>
          <div>Mesh coordination: <span class="text-green-400 font-bold">STABLE PEER LINK</span></div>
        </div>
      `;
    }, 400);
  }

  /* PHASE 03: Chassis Aero-Tuning Specs Retrieval & Automatic Switcher */
  let selectedChassisProfileId = 'slim';
  let isChassisBlueprintOpen = false;

  function selectChassisProfile(profileId, isAuto = false) {
    if (!isAuto) {
      if (window.chassisAutoCycleInterval) {
        clearInterval(window.chassisAutoCycleInterval);
        window.chassisAutoCycleInterval = null;
      }
    }

    selectedChassisProfileId = profileId;
    const profiles = ['slim', 'reinforced', 'heavy'];
    profiles.forEach(id => {
      const btn = document.getElementById(`chassis-${id}`);
      if (!btn) return;
      if (id === profileId) {
        btn.className = "px-4 py-3 font-mono text-[9px] font-bold border border-quantum-blue text-quantum-blue bg-quantum-blue-glow rounded transition-all uppercase flex flex-col items-center";
      } else {
        btn.className = "px-4 py-3 font-mono text-[9px] font-bold border border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-300 rounded transition-all uppercase flex flex-col items-center";
      }
    });

    const ascii = document.getElementById('chassis-ascii');
    if (profileId === 'slim') {
      if (ascii) {
        ascii.innerHTML = `
      ___...---...___
  ======================\\__
   O - O            O - O  \\
  --------------------------
        `;
      }
    } else if (profileId === 'reinforced') {
      if (ascii) {
        ascii.innerHTML = `
       __________________
      /  __  __  __  __  \\
  ___/  /  \\/  \\/  \\/  \\  \\___
 / [_]  [_]  [_]  [_]  [_]  [_] \\
 \\_ O === O ________ O === O _/
        `;
      }
    } else if (profileId === 'heavy') {
      if (ascii) {
        ascii.innerHTML = `
    _______________________
   /                       \\____
  |  [===]   [===]   [===]  ____|
  |  [===]   [===]   [===] |
  [=(_O_O_)=========(_O_O_)=]
        `;
      }
    }

    if (isChassisBlueprintOpen) {
      fetchChassisSpecs(true);
    } else {
      resetChassisSpecsDisplay();
    }
  }

  function resetChassisSpecsDisplay() {
    const displayGrid = document.getElementById('chassis-specs-grid');
    if (!displayGrid) return;
    
    let drag = "0.21 Cd";
    let range = "1,200 km";
    let payload = "2.5 tonnes";
    let sensor = "STAGE 4 READY";
    let sensorColor = "text-green-400";

    if (selectedChassisProfileId === 'reinforced') {
      drag = "0.35 Cd";
      range = "850 km";
      payload = "8.0 tonnes";
      sensor = "STAGE 3 HEAVY";
      sensorColor = "text-quantum-blue";
    } else if (selectedChassisProfileId === 'heavy') {
      drag = "0.48 Cd";
      range = "620 km";
      payload = "24.0 tonnes";
      sensor = "LOW SPEED ONLY";
      sensorColor = "text-yellow-400";
    }

    displayGrid.innerHTML = `
      <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
        <span class="text-[8px] text-slate-500 font-bold block mb-1">DRAG RATING</span>
        <span class="text-white font-mono text-xs font-bold">${drag}</span>
      </div>
      <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
        <span class="text-[8px] text-slate-500 font-bold block mb-1">BATTERY RANGE</span>
        <span class="text-white font-mono text-xs font-bold">${range}</span>
      </div>
      <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
        <span class="text-[8px] text-slate-500 font-bold block mb-1">PAYLOAD LIMIT</span>
        <span class="text-white font-mono text-xs font-bold">${payload}</span>
      </div>
      <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
        <span class="text-[8px] text-slate-500 font-bold block mb-1">LIDAR ACCURACY</span>
        <span class="${sensorColor} font-mono text-xs font-bold">${sensor}</span>
      </div>
    `;
  }

  function fetchChassisSpecs(forceUpdate = false) {
    const displayGrid = document.getElementById('chassis-specs-grid');
    const btn = document.getElementById('chassis-fetch-btn');
    if (!displayGrid) return;

    if (isChassisBlueprintOpen && !forceUpdate) {
      isChassisBlueprintOpen = false;
      resetChassisSpecsDisplay();
      if (btn) {
        btn.innerHTML = `<i data-lucide="shield" class="w-3.5 h-3.5"></i> Request Blueprint Specs`;
        if (window.lucide) window.lucide.createIcons();
      }
      return;
    }

    isChassisBlueprintOpen = true;

    if (btn) {
      btn.setAttribute('disabled', 'true');
      btn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5 animate-spin"></i> Loading Specs...`;
      if (window.lucide) window.lucide.createIcons();
    }

    displayGrid.innerHTML = `
      <div class="col-span-2 sm:col-span-4 flex items-center justify-center py-6 gap-2 text-quantum-blue font-mono text-xs">
        <div class="w-3.5 h-3.5 rounded-full border border-quantum-blue border-t-transparent animate-spin"></div>
        <span>AUTHENTICATING TELEMETRY CHANNEL...</span>
      </div>
    `;

    setTimeout(() => {
      let drag = "0.21 Cd";
      let range = "1,200 km";
      let payload = "2.5 tonnes";
      let sensor = "STAGE 4 READY";
      let sensorColor = "text-green-400";
      let detailedSpecs = "Air-drag optimized micro-carver chassis built on active telemetry contours.";

      if (selectedChassisProfileId === 'reinforced') {
        drag = "0.35 Cd";
        range = "850 km";
        payload = "8.0 tonnes";
        sensor = "STAGE 3 HEAVY";
        sensorColor = "text-quantum-blue";
        detailedSpecs = "Tough-bed reinforced logistics framework. Ready for extreme load scaling.";
      } else if (selectedChassisProfileId === 'heavy') {
        drag = "0.48 Cd";
        range = "620 km";
        payload = "24.0 tonnes";
        sensor = "LOW SPEED ONLY";
        sensorColor = "text-yellow-400";
        detailedSpecs = "Heavy-weight locomotive core. Direct high-power battery line routing.";
      }

      displayGrid.innerHTML = `
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
          <span class="text-[8px] text-slate-500 font-bold block mb-1">DRAG RATING</span>
          <span class="text-white font-mono text-xs font-bold">${drag}</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
          <span class="text-[8px] text-slate-500 font-bold block mb-1">BATTERY RANGE</span>
          <span class="text-white font-mono text-xs font-bold">${range}</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
          <span class="text-[8px] text-slate-500 font-bold block mb-1">PAYLOAD LIMIT</span>
          <span class="text-white font-mono text-xs font-bold">${payload}</span>
        </div>
        <div class="p-3 border border-slate-900 rounded bg-[#020408]/40 text-left">
          <span class="text-[8px] text-slate-500 font-bold block mb-1">LIDAR ACCURACY</span>
          <span class="${sensorColor} font-mono text-xs font-bold">${sensor}</span>
        </div>
        <div class="col-span-2 sm:col-span-4 p-4 border border-quantum-blue/10 bg-quantum-blue/5 rounded text-left font-sans text-xs text-slate-300">
          <span class="font-mono text-[9px] text-quantum-blue font-bold tracking-widest block mb-1 uppercase">[ COMPARTMENT BLUEPRINT SPECS ]</span>
          ${detailedSpecs}
        </div>
      `;

      if (btn) {
        btn.removeAttribute('disabled');
        btn.innerHTML = `<i data-lucide="x" class="w-3.5 h-3.5"></i> Close Blueprint`;
        if (window.lucide) window.lucide.createIcons();
      }
    }, 400);
  }

  // Automatic Switcher cycle interval
  window.chassisAutoCycleInterval = setInterval(() => {
    const profiles = ['slim', 'reinforced', 'heavy'];
    let nextIdx = (profiles.indexOf(selectedChassisProfileId) + 1) % profiles.length;
    selectChassisProfile(profiles[nextIdx], true);
  }, 4000);

  /* Contact / Recruitment Submission handler with beautiful spinner modal and real JSON DB API */
  window.handleRecruitSubmit = function(event) {
    event.preventDefault();

    const nameVal = document.getElementById('reg-name').value.trim();
    const emailVal = document.getElementById('reg-email').value.trim();
    const specialtySelect = document.getElementById('reg-specialty');
    const specialtyVal = specialtySelect.options[specialtySelect.selectedIndex].text;
    const statementVal = document.getElementById('reg-statement').value.trim();

    const submitModal = document.getElementById('submit-modal');
    const modalLoading = document.getElementById('modal-loading-state');
    const modalSuccess = document.getElementById('modal-success-state');

    // Show modal and the spinner state
    if (submitModal) {
      submitModal.classList.remove('hidden');
      lockBodyScroll();
      if (modalLoading) {
        modalLoading.classList.remove('hidden');
        modalLoading.innerHTML = `
          <div class="relative w-12 h-12">
            <div class="absolute inset-0 rounded-full border-4 border-slate-900"></div>
            <div class="absolute inset-0 rounded-full border-4 border-t-quantum-blue border-r-quantum-blue/40 animate-spin"></div>
          </div>
          <span class="font-mono text-xs text-quantum-blue font-bold tracking-widest uppercase animate-pulse">TRANSMITTING CREDENTIALS TO DATABASE...</span>
        `;
      }
      if (modalSuccess) modalSuccess.classList.add('hidden');
    }

    // Attempt to write to real JSON DB via Express server
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameVal,
        email: emailVal,
        specialty: specialtyVal,
        statement: statementVal
      })
    })
    .then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Transmission error');
      }
      return data;
    })
    .then((data) => {
      // Successfully written to database!
      setTimeout(() => {
        if (modalLoading) modalLoading.classList.add('hidden');
        if (modalSuccess) modalSuccess.classList.remove('hidden');

        const sName = document.getElementById('m-success-name');
        const sEmail = document.getElementById('m-success-email');
        const sSpecialty = document.getElementById('m-success-specialty');
        const sStatement = document.getElementById('m-success-statement');
        const sBadge = document.querySelector('[id="submit-modal"] [class*="text-green-400"]');

        if (sName) sName.textContent = nameVal;
        if (sEmail) sEmail.textContent = emailVal;
        if (sSpecialty) sSpecialty.textContent = specialtyVal;
        if (sStatement) sStatement.textContent = `"${statementVal}"`;
        if (sBadge) sBadge.textContent = '[ SYSTEM | SECURE_JSON_DB_LOGGED ]';

        appendLog(`&gt; <span class="text-green-400">Database saved: Registered operator "${nameVal}" (${emailVal}) to Rheiva secure ledger.</span>`, true);
      }, 1000);
    })
    .catch((err) => {
      // Fallback gracefully to LocalStorage database if server is offline (e.g. static GitHub Pages hosting)
      console.warn('Backend DB server not available or returned error. Syncing to local memory fallback...', err);

      let offlineContacts = [];
      try {
        const cached = localStorage.getItem('rheivatech_contacts');
        if (cached) offlineContacts = JSON.parse(cached);
      } catch (e) {
        console.error(e);
      }

      const isDup = offlineContacts.some(c => c.email.toLowerCase() === emailVal.toLowerCase());
      if (!isDup) {
        offlineContacts.push({
          name: nameVal,
          email: emailVal,
          specialty: specialtyVal,
          statement: statementVal,
          timestamp: new Date().toISOString(),
          storage: 'local_cache'
        });
        localStorage.setItem('rheivatech_contacts', JSON.stringify(offlineContacts));
      }

      setTimeout(() => {
        if (modalLoading) modalLoading.classList.add('hidden');
        if (modalSuccess) modalSuccess.classList.remove('hidden');

        const sName = document.getElementById('m-success-name');
        const sEmail = document.getElementById('m-success-email');
        const sSpecialty = document.getElementById('m-success-specialty');
        const sStatement = document.getElementById('m-success-statement');
        const sBadge = document.querySelector('[id="submit-modal"] [class*="text-green-400"]');

        if (sName) sName.textContent = nameVal;
        if (sEmail) sEmail.textContent = emailVal;
        if (sSpecialty) sSpecialty.textContent = specialtyVal;
        if (sStatement) sStatement.textContent = `"${statementVal}"`;
        
        // Update badge to highlight offline compatibility / GitHub pages fallback!
        if (sBadge) sBadge.textContent = '[ LOCAL_CLIENT | CACHED_SYNC_STABLE ]';

        appendLog(`&gt; <span class="text-yellow-500">Local-Sync active: Saved "${nameVal}" (${emailVal}) to browser localStorage backup.</span>`, true);
      }, 1000);
    });
  };

  window.closeSubmitModal = function() {
    const submitModal = document.getElementById('submit-modal');
    if (submitModal) {
      submitModal.classList.add('hidden');
    }
    unlockBodyScroll();
  };

  window.closeAnalyticsSection = function() {
    const section = document.getElementById('analytics-section');
    if (section) section.classList.add('hidden');
    appendLog('closeanalysis');
    appendLog('<span class="text-slate-500">&gt; data analytics service deactivated.</span>', true);
  };

  window.closeIntellectSection = function() {
    const section = document.getElementById('intellect-section');
    if (section) section.classList.add('hidden');
    appendLog('closeintellect');
    appendLog('<span class="text-slate-500">&gt; localized AI section deactivated.</span>', true);
  };

  /* Expose methods to global scope for HTML event triggers */
  window.updateMoeMetrics = updateMoeMetrics;
  window.simulateMoeCompile = simulateMoeCompile;
  window.selectMeshMode = selectMeshMode;
  window.selectMeshNode = selectMeshNode;
  window.fetchMeshSpecs = fetchMeshSpecs;
  window.selectChassisProfile = selectChassisProfile;
  window.fetchChassisSpecs = fetchChassisSpecs;

  /* Initializing default states for simulators */
  updateMoeMetrics();
  fetchMeshSpecs();
  resetChassisSpecsDisplay();

  /* 7. Onscroll Animations using IntersectionObserver */
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  if (scrollElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.05
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    scrollElements.forEach(el => {
      scrollObserver.observe(el);
    });
  }
});
