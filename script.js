/* script.js - Interactive features for Rheivatech landing page */

/* =========================================================================
   FOUNDERS COLLECTIVE REGISTRY
   ========================================================================= */
const FOUNDERS_REGISTRY = [
  {
    name: "Omotayo Oladapo Dan",
    title: "Founder & Chief Architect",
    bio: "Technology owns the responsibility of transforming the world for the better as we know it. With our impending infrastructural procurement, that duty extends to our arms to provide our contributions; which I believe will be one the world has never seen before.",
    focus: "SYSTEM INNOVATION & INTEGRATION",
    status: "ACTIVE",
    email: "dantayo58@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/omotayo-oladapo-4699362a5",
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
   PORTFOLIO OF WORKS REGISTRY (3 ACTIVE PLATFORMS)
   -------------------------------------------------------------------------
   HOW TO ADD MORE PORTFOLIOS OR IMAGES IN THE FUTURE:
   1. Add a new object to this array with a unique id (e.g. id: "spec_04").
   2. Set `featuresRheivada: true` if the application features the Rheivada
      Analytical AI model, or `false` otherwise.
   3. In the `gallery` array, add as many image filenames/URLs as you want!
   4. Update `displayImage` for the primary cover and `liveUrl` for direct link.
   ========================================================================= */
const PORTFOLIO_REGISTRY = [
  {
    id: "Prod 1",
    specNumber: "01",
    tag: "Enterprise Trading & E-Commerce",
    title: "Trading Enterprise & High-Performance E-Commerce Platform",
    subtitle: "Programmed in PHP with an analytics ability that outperforms conventional systems.",
    badge: "ACTIVE DEPLOYMENT",
    statusColor: "emerald",
    featuresRheivada: true,
    rheivadaRole: "Features Rheivada Algorithmic Trading Analytics & High-Frequency Spread Engine",
    summary: "Our flagship trading enterprise and e-commerce platform custom-engineered in PHP. Powered by the Rheivada analytical AI infrastructure model to process high-frequency purchase orders, inventory buy-sell spreads, real-time margins, and merchant velocity metrics with unprecedented speed and accuracy.",
    liveUrl: "https://rheivatech.space",
    // Primary display image on the card
    displayImage: "analysis_1.jpeg",
    // Gallery Modal Images: YOU CAN ADD AS MANY IMAGES AS YOU WANT HERE!
    gallery: [
      "analysis_1.jpeg",
      "analysis_2.jpeg"
    ],
    metrics: [
      { label: "AI ENGINE", val: "RHEIVADA CORE" },
      { label: "ANALYTICS", val: "HIGH FREQUENCY" },
      { label: "ACCURACY", val: "99.98%" }
    ],
    tech: ["Rheivada Analytics Core", "Custom PHP Core", "High-Volume Orders", "Real-Time Margins", "PostgreSQL", "Buy-Sell Spread Engine"]
  },
  {
    id: "Prod 2",
    specNumber: "02",
    tag: "Web Platform & Food Commerce",
    title: "Fingerchopsng.com",
    subtitle: "A dynamic web platform & sovereign culinary commerce destination.",
    badge: "LIVE WEB PLATFORM",
    statusColor: "sky",
    featuresRheivada: false,
    rheivadaRole: null,
    summary: "An optimized, high-converting digital storefront and culinary commerce destination crafted for Fingerchops NG. Built for blazing fast delivery logistics, interactive menus, frictionless multi-channel ordering, and streamlined customer transaction flows.",
    liveUrl: "https://fingerchopsng.com",
    // Primary display image on the card
    displayImage: "fcv.png",
    // Gallery Modal Images: YOU CAN ADD AS MANY IMAGES AS YOU WANT HERE!
    gallery: [
      "fcv2.png",
      "fcv3.png",
      "fcv4.png"
    ],
    metrics: [
      { label: "DOMAIN", val: "fingerchopsng.com" },
      { label: "UPTIME", val: "99.99%" },
      { label: "ORDER FLOW", val: "INSTANT" }
    ],
    tech: ["Full-Stack Web", "Responsive UI", "Payment Flow", "Logistics Routing"]
  },
  {
    id: "Prod 3",
    specNumber: "03",
    tag: "HR Aid Suite SaaS",
    title: "Teamgrid",
    subtitle: "Enterprise HR aid suite & workforce intelligence SaaS platform.",
    badge: "ENTERPRISE SAAS",
    statusColor: "indigo",
    featuresRheivada: true,
    rheivadaRole: "Features Rheivada Workforce Analytics, Attendance Matrices & Predictive Payroll",
    summary: "Teamgrid is a comprehensive HR aid suite and workforce management SaaS platform. Powered by the Rheivada analytical AI infrastructure model to orchestrate end-to-end employee lifecycles, real-time attendance matrices, performance analytics, predictive payroll distributions, leave workflows, and team collaboration within a sovereign cloud cockpit.",
    liveUrl: "https://teamgrid.rheivatech.space",
    // Primary display image on the card (tg.png was missing; point to existing asset)
    displayImage: "tg2.png",
    // Gallery Modal Images: YOU CAN ADD AS MANY IMAGES AS YOU WANT HERE!
    gallery: [
      "tg2.png",
      "tg3.png",
      "tg4.png"
    ],
    metrics: [
      { label: "AI ENGINE", val: "RHEIVADA CORE" },
      { label: "TYPE", val: "HR AID SUITE" },
      { label: "WORKFLOWS", val: "100% AUTOMATED" }
    ],
    tech: ["Rheivada Analytics AI", "HR Intelligence", "Cloud SaaS", "Role-Based Access", "Workflow Engine", "Payroll Analytics"]
  }
];

/* Global Modal Scroll Helpers */
function lockBodyScroll() {
  document.body.classList.add('overflow-hidden');
}

function unlockBodyScroll() {
  const aiModal = document.getElementById('ai-modal');
  const submitModal = document.getElementById('submit-modal');
  const galleryModal = document.getElementById('portfolio-gallery-modal');

  const isAiOpen = aiModal && !aiModal.classList.contains('hidden');
  const isSubmitOpen = submitModal && !submitModal.classList.contains('hidden');
  const isGalleryOpen = galleryModal && !galleryModal.classList.contains('hidden');

  if (!isAiOpen && !isSubmitOpen && !isGalleryOpen) {
    document.body.classList.remove('overflow-hidden');
  }
}

/* =========================================================================
   PORTFOLIO AUTOMATED CAROUSEL STATE & CONTROLS
   ========================================================================= */
let currentPortfolioIndex = 0;
let portfolioAutoPlayInterval = null;
let isPortfolioAutoPlaying = true;
let isPortfolioHoverPaused = false;
const PORTFOLIO_AUTOPLAY_DELAY = 4500;

function renderPortfolioCarousel() {
  const track = document.getElementById('portfolio-carousel-track');
  const dotsContainer = document.getElementById('portfolio-indicator-dots');
  if (!track) return;

  track.innerHTML = PORTFOLIO_REGISTRY.map((item, index) => {
    const slideNumber = String(index + 1).padStart(2, '0');
    const totalSlides = String(PORTFOLIO_REGISTRY.length).padStart(2, '0');
    const galleryCount = item.gallery && item.gallery.length ? item.gallery.length : 1;
    
    return `
      <div class="portfolio-slide w-full min-w-full flex-shrink-0 p-6 sm:p-8 md:p-12 flex items-center justify-center">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between w-full max-w-5xl">
          
          <!-- Left: Work Details -->
          <div class="flex-1 text-left space-y-4">
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="font-mono text-xs text-sky-700 font-bold tracking-widest uppercase">Project ${slideNumber} / ${totalSlides} • ${item.tag}</span>
              <span class="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                ${item.badge}
              </span>
            </div>

            <div>
              <h3 class="font-sans font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
                ${item.title}
              </h3>
              ${item.subtitle ? `<p class="font-sans text-xs font-semibold text-slate-500 mt-1">${item.subtitle}</p>` : ''}
            </div>

            <div class="h-px bg-slate-200 my-2"></div>

            <p class="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              ${item.summary}
            </p>

            <!-- Metrics Specs Grid -->
            <div class="grid grid-cols-3 gap-2.5 pt-2">
              ${item.metrics.map(m => `
                <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-left">
                  <span class="text-[9px] font-mono text-slate-400 font-bold block uppercase">${m.label}</span>
                  <span class="text-xs font-mono font-bold text-slate-900 truncate block">${m.val}</span>
                </div>
              `).join('')}
            </div>

            <!-- Tech Stack Badges -->
            <div class="flex flex-wrap items-center gap-1.5 pt-2">
              ${item.tech.map(t => `
                <span class="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[10px] font-semibold">
                  ${t}
                </span>
              `).join('')}
            </div>

            <!-- Direct Visit Page Link & Gallery Trigger -->
            <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              
              <!-- Requested: "visit this page directly" link -->
              <a 
                href="${item.liveUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-mono text-xs font-bold transition-all shadow-sm group/btn"
              >
                <span>visit this page directly</span>
                <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"/></svg>
              </a>

              <!-- Clickable Modal Preview Button -->
              <button 
                onclick="openPortfolioGalleryModal('${item.id}', 0)" 
                class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white font-mono text-xs font-bold transition-all shadow-xs cursor-pointer"
                title="Open screenshot gallery modal"
              >
                <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span>View Gallery (${galleryCount} ${galleryCount === 1 ? 'image' : 'images'})</span>
              </button>

            </div>

          </div>

          <!-- Right: Visual Image Preview Frame (Clickable into Gallery Modal) -->
          <div 
            onclick="openPortfolioGalleryModal('${item.id}', 0)" 
            class="relative w-full sm:w-80 md:w-96 aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md flex items-center justify-center p-3 group/img shrink-0 cursor-pointer"
            title="Click to view full image gallery"
          >
            <img 
              src="${item.displayImage || item.gallery[0]}" 
              alt="${item.title}" 
              referrerPolicy="no-referrer"
              onerror="this.onerror=null;this.src='logo.png'"
              class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover/img:scale-105"
            />
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-4">
              <div class="w-10 h-10 rounded-full bg-sky-600/90 flex items-center justify-center text-white shadow-lg">
                <svg class="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
              </div>
              <span class="font-mono text-xs font-bold uppercase tracking-wider text-center">Click to Inspect Gallery</span>
              <span class="font-mono text-[10px] text-sky-300">${galleryCount} screenshots available</span>
            </div>

            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[10px] font-mono font-semibold drop-shadow-md pointer-events-none group-hover/img:opacity-0 transition-opacity">
              <span class="bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs">${item.id.toUpperCase()}</span>
              <span class="bg-sky-600/90 px-2 py-0.5 rounded backdrop-blur-xs">${galleryCount} IMAGES</span>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = PORTFOLIO_REGISTRY.map((item, index) => {
      const isCurrent = index === currentPortfolioIndex;
      return `
        <button 
          onclick="jumpToPortfolioSlide(${index})" 
          class="px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1.5 ${isCurrent ? 'bg-sky-600 text-white border-sky-600 shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600'}"
          title="${item.title}"
        >
          <span class="w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-white' : 'bg-slate-300'}"></span>
          <span>0${index + 1} • ${item.id.toUpperCase()}</span>
        </button>
      `;
    }).join('');
  }

  updatePortfolioUI();
}

function updatePortfolioUI() {
  const track = document.getElementById('portfolio-carousel-track');
  const counter = document.getElementById('portfolio-slide-counter');
  const progressBar = document.getElementById('portfolio-progress-bar');
  const dotsContainer = document.getElementById('portfolio-indicator-dots');

  if (track) {
    track.style.transform = `translateX(-${currentPortfolioIndex * 100}%)`;
  }

  if (counter) {
    const currentStr = String(currentPortfolioIndex + 1).padStart(2, '0');
    const totalStr = String(PORTFOLIO_REGISTRY.length).padStart(2, '0');
    counter.textContent = `${currentStr} / ${totalStr}`;
  }

  if (progressBar) {
    const pct = ((currentPortfolioIndex + 1) / PORTFOLIO_REGISTRY.length) * 100;
    progressBar.style.width = `${pct}%`;
  }

  if (dotsContainer) {
    const buttons = dotsContainer.children;
    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i];
      const dot = btn.querySelector('span:first-child');
      if (i === currentPortfolioIndex) {
        btn.className = "px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1.5 bg-sky-600 text-white border-sky-600 shadow-sm";
        if (dot) dot.className = "w-1.5 h-1.5 rounded-full bg-white";
      } else {
        btn.className = "px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1.5 bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600";
        if (dot) dot.className = "w-1.5 h-1.5 rounded-full bg-slate-300";
      }
    }
  }
}

function slidePortfolioCarousel(direction) {
  const maxSlides = PORTFOLIO_REGISTRY.length - 1;
  if (direction === 'next') {
    currentPortfolioIndex = currentPortfolioIndex >= maxSlides ? 0 : currentPortfolioIndex + 1;
  } else {
    currentPortfolioIndex = currentPortfolioIndex <= 0 ? maxSlides : currentPortfolioIndex - 1;
  }
  updatePortfolioUI();
}
window.slidePortfolioCarousel = slidePortfolioCarousel;

function jumpToPortfolioSlide(index) {
  if (index >= 0 && index < PORTFOLIO_REGISTRY.length) {
    currentPortfolioIndex = index;
    updatePortfolioUI();
  }
}
window.jumpToPortfolioSlide = jumpToPortfolioSlide;

function startPortfolioAutoPlay() {
  if (portfolioAutoPlayInterval) clearInterval(portfolioAutoPlayInterval);
  portfolioAutoPlayInterval = setInterval(() => {
    if (isPortfolioAutoPlaying && !isPortfolioHoverPaused) {
      slidePortfolioCarousel('next');
    }
  }, PORTFOLIO_AUTOPLAY_DELAY);
}

function togglePortfolioAutoPlay() {
  isPortfolioAutoPlaying = !isPortfolioAutoPlaying;
  const statusDot = document.getElementById('portfolio-status-dot');
  const statusText = document.getElementById('portfolio-status-text');
  const playPauseIcon = document.getElementById('portfolio-play-pause-icon');
  const playPauseLabel = document.getElementById('portfolio-play-pause-label');

  if (isPortfolioAutoPlaying) {
    if (statusDot) statusDot.className = "w-2 h-2 rounded-full bg-emerald-500 animate-pulse";
    if (statusText) statusText.textContent = "AUTO-PLAYING";
    if (playPauseLabel) playPauseLabel.textContent = "Pause";
    if (playPauseIcon) playPauseIcon.setAttribute('data-lucide', 'pause');
  } else {
    if (statusDot) statusDot.className = "w-2 h-2 rounded-full bg-amber-500";
    if (statusText) statusText.textContent = "PAUSED";
    if (playPauseLabel) playPauseLabel.textContent = "Play";
    if (playPauseIcon) playPauseIcon.setAttribute('data-lucide', 'play');
  }

  if (window.lucide) window.lucide.createIcons();
}
window.togglePortfolioAutoPlay = togglePortfolioAutoPlay;

function pausePortfolioAutoPlayHover() {
  isPortfolioHoverPaused = true;
}
window.pausePortfolioAutoPlayHover = pausePortfolioAutoPlayHover;

function resumePortfolioAutoPlayHover() {
  isPortfolioHoverPaused = false;
}
window.resumePortfolioAutoPlayHover = resumePortfolioAutoPlayHover;

/* =========================================================================
   PORTFOLIO GALLERY / LIGHTBOX MODAL HANDLERS
   ========================================================================= */
// Initialize active modal portfolio id to first registry item to avoid mismatches
let activeModalPortfolioId = PORTFOLIO_REGISTRY[0]?.id || null;
let activeModalImageIndex = 0;

function openPortfolioGalleryModal(specId, imageIndex = 0) {
  const item = PORTFOLIO_REGISTRY.find(p => p.id === specId) || PORTFOLIO_REGISTRY[0];
  activeModalPortfolioId = item.id;
  activeModalImageIndex = Math.max(0, Math.min(imageIndex, (item.gallery.length - 1)));

  const modal = document.getElementById('portfolio-gallery-modal');
  if (!modal) return;

  updateGalleryModalUI();
  modal.classList.remove('hidden');
  lockBodyScroll();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}
window.openPortfolioGalleryModal = openPortfolioGalleryModal;

function closePortfolioGalleryModal() {
  const modal = document.getElementById('portfolio-gallery-modal');
  if (modal) {
    modal.classList.add('hidden');
    unlockBodyScroll();
  }
}
window.closePortfolioGalleryModal = closePortfolioGalleryModal;

function handlePortfolioModalBackdropClick(event) {
  const modal = document.getElementById('portfolio-gallery-modal');
  if (event.target === modal) {
    closePortfolioGalleryModal();
  }
}
window.handlePortfolioModalBackdropClick = handlePortfolioModalBackdropClick;

function updateGalleryModalUI() {
  const item = PORTFOLIO_REGISTRY.find(p => p.id === activeModalPortfolioId) || PORTFOLIO_REGISTRY[0];
  const gallery = item.gallery && item.gallery.length > 0 ? item.gallery : [item.displayImage || "logo.png"];

  // Ensure index is in bounds
  if (activeModalImageIndex >= gallery.length) activeModalImageIndex = 0;
  if (activeModalImageIndex < 0) activeModalImageIndex = gallery.length - 1;

  const currentImgSrc = gallery[activeModalImageIndex];

  // Update Top Bar
  const specTag = document.getElementById('gallery-modal-spec-tag');
  const titleElem = document.getElementById('gallery-modal-title');
  const counterElem = document.getElementById('gallery-modal-counter');
  const directLink = document.getElementById('gallery-modal-direct-link');
  const mobileDirectLink = document.getElementById('gallery-modal-mobile-direct-link');
  const mainImg = document.getElementById('gallery-modal-main-img');
  const thumbsContainer = document.getElementById('gallery-modal-thumbnails');

  if (specTag) specTag.textContent = item.id.toUpperCase();
  if (titleElem) titleElem.textContent = item.title;
  if (counterElem) counterElem.textContent = `Image ${activeModalImageIndex + 1} of ${gallery.length}`;
  
  if (directLink) directLink.href = item.liveUrl;
  if (mobileDirectLink) mobileDirectLink.href = item.liveUrl;

  if (mainImg) {
    mainImg.src = currentImgSrc;
    mainImg.alt = `${item.title} Screenshot ${activeModalImageIndex + 1}`;
  }

  // Populate Bottom Thumbnails
  if (thumbsContainer) {
    thumbsContainer.innerHTML = gallery.map((imgSrc, idx) => {
      const isSelected = idx === activeModalImageIndex;
      return `
        <button 
          onclick="selectGalleryModalImage(${idx})" 
          class="relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${isSelected ? 'border-sky-500 ring-2 ring-sky-500/40 opacity-100 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'}"
          title="View screenshot ${idx + 1}"
        >
          <img 
            src="${imgSrc}" 
            alt="thumb ${idx + 1}" 
            referrerPolicy="no-referrer"
            onerror="this.onerror=null;this.src='logo.png'"
            class="w-full h-full object-cover"
          />
        </button>
      `;
    }).join('');
  }
}

function slideGalleryModal(direction) {
  const item = PORTFOLIO_REGISTRY.find(p => p.id === activeModalPortfolioId) || PORTFOLIO_REGISTRY[0];
  const gallery = item.gallery && item.gallery.length > 0 ? item.gallery : [item.displayImage || "logo.png"];
  
  if (direction === 'next') {
    activeModalImageIndex = (activeModalImageIndex + 1) % gallery.length;
  } else {
    activeModalImageIndex = (activeModalImageIndex - 1 + gallery.length) % gallery.length;
  }

  updateGalleryModalUI();
}
window.slideGalleryModal = slideGalleryModal;

function selectGalleryModalImage(index) {
  activeModalImageIndex = index;
  updateGalleryModalUI();
}
window.selectGalleryModalImage = selectGalleryModalImage;

/* =========================================================================
   DOM READY & INITIALIZATION
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js-loaded');

  /* 0. Intersection Observer for Smooth On-Scroll Animations */
  const animElements = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    animElements.forEach(el => observer.observe(el));
  } else {
    animElements.forEach(el => el.classList.add('is-visible'));
  }

  /* 1. Render Founders Carousel */
  const carouselTrack = document.getElementById('carousel-track');
  if (carouselTrack) {
    carouselTrack.innerHTML = FOUNDERS_REGISTRY.map((founder, index) => {
      const idNum = String(index + 1).padStart(2, '0');
      const avatarSrc = founder.imageUrl || "logo.png";
      const linkedinHref = founder.linkedinUrl || "https://www.linkedin.com/posts/rheivatech_rheivatech-linkedin-activity-7483134289891622912-3dJL";
      const emailHref = founder.email ? `mailto:${founder.email}` : "mailto:dantayo58@gmail.com";
      
      return `
        <div class="w-full min-w-full flex-shrink-0 p-8 sm:p-12 md:p-14 flex items-center justify-center">
          <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between w-full max-w-4xl px-4 md:px-8">
            
            <!-- Left Side: Founder Details -->
            <div class="flex-1 text-left space-y-4">
              <div>
                <span class="font-mono text-xs text-sky-700 font-bold tracking-widest block mb-1 uppercase">Member ${idNum} • Founding Collective</span>
                <h3 class="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">${founder.name}</h3>
                <p class="font-mono text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">${founder.title}</p>
              </div>
              
              <div class="h-px bg-slate-200"></div>
              
              <p class="font-sans text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                ${founder.bio}
              </p>

              <!-- Interactive Connect Actions -->
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <a href="${linkedinHref}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-mono text-xs font-bold transition-all shadow-sm group/btn">
                  <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  <span>LinkedIn Channel</span>
                </a>

                <a href="${emailHref}" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-700 font-mono text-xs font-bold transition-all shadow-sm">
                  <svg class="w-4 h-4 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>${founder.email || 'Email Direct'}</span>
                </a>
              </div>

              <div class="font-mono text-xs text-slate-500 flex flex-wrap items-center gap-x-6 gap-y-1.5 uppercase pt-3 border-t border-slate-100">
                <span>Focus: <span class="text-slate-800 font-semibold">${founder.focus}</span></span>
                <span>Status: <span class="text-emerald-600 font-semibold">● ${founder.status}</span></span>
              </div>
            </div>

            <!-- Right Side: Bigger Image Frame -->
            <div class="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md flex items-center justify-center p-6 group/avatar shrink-0">
              <div class="absolute inset-0 bg-gradient-to-tr from-sky-50 to-slate-50"></div>
              
              <img 
                src="${avatarSrc}" 
                alt="${founder.name}" 
                referrerPolicy="no-referrer"
                onerror="this.onerror=null;this.src='logo.png'"
                class="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover/avatar:scale-105 relative z-10"
              />
              
              <a 
                href="${linkedinHref}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="absolute inset-0 bg-slate-900/80 backdrop-blur-xs flex flex-col items-center justify-center gap-2 opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 cursor-pointer z-20 text-white"
              >
                <div class="w-11 h-11 rounded-full bg-sky-600 flex items-center justify-center text-white shadow-lg">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </div>
                <span class="font-mono text-xs font-bold uppercase tracking-wider">Connect on LinkedIn</span>
              </a>
            </div>

          </div>
        </div>
      `;
    }).join('');
  }

  /* 2. Render Automated Portfolio Carousel */
  renderPortfolioCarousel();
  startPortfolioAutoPlay();

  /* 3. Render Static Analysis Portal (Only apps featuring Rheivada: ERP & Teamgrid) */
  const portfolioContainer = document.getElementById('analytics-portfolio-container');
  if (portfolioContainer) {
    const rheivadaApps = PORTFOLIO_REGISTRY.filter(item => item.featuresRheivada);
    portfolioContainer.innerHTML = rheivadaApps.map((item, index) => {
      return `
        <div class="border border-amber-200/80 rounded-2xl p-6 bg-gradient-to-b from-amber-50/20 to-white flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden">
          <div class="space-y-4">
            <div 
              onclick="openPortfolioGalleryModal('${item.id}', 0)"
              class="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center shadow-sm cursor-pointer group/thumb"
              title="Click to view screenshots"
            >
              <img 
                src="${item.displayImage || item.gallery[0]}" 
                alt="${item.title}" 
                referrerPolicy="no-referrer"
                onerror="this.onerror=null;this.src='logo.png'"
                class="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
              />
              <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-xs font-bold">
                Inspect Gallery (${item.gallery.length} Images)
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span class="font-mono text-[10px] text-amber-700 font-bold uppercase tracking-wider">${item.tag}</span>
                <span class="px-2 py-0.5 rounded text-[9px] font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200">
                  ● FEATURES RHEIVADA AI
                </span>
              </div>
              <h4 class="font-sans font-bold text-base text-slate-900">
                ${item.title}
              </h4>
              <div class="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200/70 font-mono text-[11px] text-amber-900 font-medium">
                ${item.rheivadaRole || 'Powered by Rheivada analytical AI infrastructure'}
              </div>
              <p class="font-sans text-xs text-slate-600 leading-relaxed text-justify">
                ${item.summary}
              </p>
            </div>
          </div>
          
          <div class="mt-6 pt-3 border-t border-slate-200 flex justify-between items-center text-xs font-mono text-slate-500 uppercase">
            <a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-amber-700 hover:text-amber-900 font-bold hover:underline">
              visit this page directly &rarr;
            </a>
            <span class="font-bold text-slate-400">SPEC 0${item.specNumber}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  /* 4. Phases click-to-toggle dropdown */
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

  /* 5. Page View Progress Tracking Bar */
  window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + "%";
    }
  });

  /* 6. Initialize Lucide Icons */
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* 7. Peek-a-boo Robot Head animation centered behind logo */
  const robotHead = document.getElementById('robot-head');
  if (robotHead) {
    setInterval(() => {
      robotHead.style.transform = 'translate(14px, -50%)';
      robotHead.classList.remove('opacity-0');
      robotHead.classList.add('opacity-100');
      
      setTimeout(() => {
        robotHead.style.transform = 'translate(-50%, -50%)';
        robotHead.classList.remove('opacity-100');
        robotHead.classList.add('opacity-0');
      }, 2000);
    }, 4500);
  }

  /* 8. Upcoming RheivaAI Teaser Modal Handlers */
  const logoLink = document.getElementById('logo-link');
  const aiModal = document.getElementById('ai-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

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
    aiModal.addEventListener('click', (e) => {
      if (e.target === aiModal) {
        closeAiModal();
      }
    });
  }

  /* Global ESC key handler & Left/Right arrow keys for modal */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const aiModalElem = document.getElementById('ai-modal');
      const submitModalElem = document.getElementById('submit-modal');
      const galleryModalElem = document.getElementById('portfolio-gallery-modal');

      if (aiModalElem && !aiModalElem.classList.contains('hidden')) {
        aiModalElem.classList.add('hidden');
      }
      if (submitModalElem && !submitModalElem.classList.contains('hidden')) {
        submitModalElem.classList.add('hidden');
      }
      if (galleryModalElem && !galleryModalElem.classList.contains('hidden')) {
        galleryModalElem.classList.add('hidden');
      }
      document.body.classList.remove('overflow-hidden');
    } else if (e.key === 'ArrowLeft') {
      const galleryModalElem = document.getElementById('portfolio-gallery-modal');
      if (galleryModalElem && !galleryModalElem.classList.contains('hidden')) {
        slideGalleryModal('prev');
      }
    } else if (e.key === 'ArrowRight') {
      const galleryModalElem = document.getElementById('portfolio-gallery-modal');
      if (galleryModalElem && !galleryModalElem.classList.contains('hidden')) {
        slideGalleryModal('next');
      }
    }
  });

  /* 9. Handle AI Notify Subscription */
  window.handleAiNotify = function(e) {
    if (e) e.preventDefault();
    const emailInput = document.getElementById('ai-notify-email');
    const statusBox = document.getElementById('ai-notify-status');
    const submitBtn = document.getElementById('ai-notify-submit-btn');

    if (emailInput && emailInput.value.trim()) {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Queued`;
      }
      if (statusBox) {
        statusBox.classList.remove('hidden');
      }
      emailInput.disabled = true;
    }
  };

  /* 10. Dynamic Status Simulators */
  const hudClock = document.getElementById('hud-clock');
  const hudNodes = document.getElementById('hud-nodes');
  const hudCpu = document.getElementById('hud-cpu');

  function startSimulators() {
    setInterval(() => {
      const now = new Date();
      const isoStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      if (hudClock) hudClock.textContent = isoStr;
    }, 1000);

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

  /* 11. Mobile Menu Toggle */
  function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }
  window.toggleMobileMenu = toggleMobileMenu;

  /* 12. Pipeline Selection States */
  const phaseData = {
    1: {
      tag: 'Compartment 01 Logistics',
      title: 'Earth Specification',
      metrics: [
        { label: 'ECOSYSTEM NATIVITY', value: '100% REGIONAL' },
        { label: 'CLIMATE RESILIENCE', value: 'UP TO 65°C' },
        { label: 'RESOURCE OPTIMIZATION', value: 'PASSIVE SOLAR' },
        { label: 'CARBON FOOTPRINT', value: '0.00 NET ZERO' }
      ]
    },
    2: {
      tag: 'Compartment 02 Logistics',
      title: 'Technology Specification',
      metrics: [
        { label: 'COMPLEX INTEGRATION', value: 'DYNAMIC MOE' },
        { label: 'COST VS CIVILIZATION', value: 'OPTIMAL EDGE' },
        { label: 'HARDWARE BEDROCK', value: 'CUSTOM SILICON' },
        { label: 'LOCAL AUTONOMY', value: 'AIR-GAPPED' }
      ]
    },
    3: {
      tag: 'Compartment 03 Logistics',
      title: 'YOU Specification',
      metrics: [
        { label: 'INTERACTION PLANE', value: 'COGNITIVE SYMPHONY' },
        { label: 'EMPOWERMENT RATIO', value: 'INFINITE SCALING' },
        { label: 'BIOMETRIC RESONANCE', value: 'DYNAMIC MATCH' },
        { label: 'USER SOVEREIGNTY', value: '100% DECENTRALIZED' }
      ]
    }
  };

  function selectPhase(phaseId) {
    for (let i = 1; i <= 3; i++) {
      const card = document.getElementById(`phase-card-${i}`);
      if (!card) continue;
      const label = card.querySelector('span');

      if (i === phaseId) {
        card.className = "relative rounded-2xl border p-6 sm:p-8 bg-white cursor-pointer transition-all duration-300 overflow-hidden select-none border-sky-500 shadow-md ring-1 ring-sky-500/20";
        if (label) label.className = "font-mono text-xs text-sky-700 font-bold tracking-wider";
      } else {
        card.className = "relative rounded-2xl border p-6 sm:p-8 bg-white cursor-pointer transition-all duration-300 overflow-hidden select-none border-slate-200 hover:border-sky-300 hover:shadow-md";
        if (label) label.className = "font-mono text-xs text-slate-400 font-bold tracking-wider";
      }
    }

    const data = phaseData[phaseId];
    if (data) {
      const specPhaseNum = document.getElementById('spec-phase-num');
      const specPhaseTitle = document.getElementById('spec-phase-title');
      const grid = document.getElementById('spec-metrics-grid');

      if (specPhaseNum) specPhaseNum.textContent = data.tag;
      if (specPhaseTitle) specPhaseTitle.textContent = data.title;
      if (grid) {
        grid.innerHTML = data.metrics.map(m => `
          <div class="p-4 border border-slate-100 rounded-xl bg-slate-50">
            <span class="text-[10px] text-slate-400 font-bold tracking-wider block mb-1 font-mono">${m.label}</span>
            <span class="text-slate-900 font-mono text-sm font-bold">${m.value}</span>
          </div>
        `).join('');
      }
    }
  }
  window.selectPhase = selectPhase;

  /* 13. Interactive Terminal Shell Logic */
  const terminalScreen = document.getElementById('terminal-screen');
  
  function appendTerminalLog(line, isResponse = false) {
    if (!terminalScreen) return;
    const div = document.createElement('div');
    if (isResponse) {
      div.innerHTML = line;
    } else {
      div.innerHTML = `<span class="text-sky-400 font-bold">&gt;</span> <span class="text-white">${line}</span>`;
    }
    terminalScreen.appendChild(div);
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }

  function handleTerminalSubmit(e) {
    if (e.key === 'Enter') {
      const input = document.getElementById('terminal-input');
      if (!input) return;
      const rawCmd = input.value.trim();
      input.value = '';
      if (!rawCmd) return;
      executeCommand(rawCmd);
    }
  }
  window.handleTerminalSubmit = handleTerminalSubmit;

  function executeQuickCommand(cmd) {
    executeCommand(cmd);
    const input = document.getElementById('terminal-input');
    if (input) input.focus();
  }
  window.executeQuickCommand = executeQuickCommand;

  function executeCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase().trim();
    appendTerminalLog(rawCmd, false);

    setTimeout(() => {
      if (cmd === 'help') {
        appendTerminalLog(`
          <div class="text-sky-300 font-bold">Available Commands:</div>
          <div class="grid grid-cols-2 gap-1 text-slate-300 text-xs">
            <div><b class="text-sky-400">status</b> : System and node health summary</div>
            <div><b class="text-sky-400">founders</b> : Founding collective bios & contacts</div>
            <div><b class="text-sky-400">phases</b> : Roadmap & timeline migration status</div>
            <div><b class="text-sky-400">services</b> : Enterprise engineering capabilities</div>
            <div><b class="text-sky-400">analysis</b> : Open ERP sales analytics portal</div>
            <div><b class="text-sky-400">intellect</b> : Open sovereign AI intellect core</div>
            <div><b class="text-sky-400">contact</b> : Direct messaging & phone details</div>
            <div><b class="text-sky-400">about</b> : Mission manifesto & technical vision</div>
            <div><b class="text-sky-400">date</b> : UTC system timestamp & node epoch</div>
            <div><b class="text-sky-400">clear</b> : Clear terminal console output</div>
          </div>
        `, true);
      } else if (cmd === 'status') {
        appendTerminalLog(`
          <div class="text-emerald-400 font-bold">SYSTEM STATUS: OPTIMAL</div>
          <div class="text-slate-300">• Active Nodes: 148 Distributed Regional Nodes</div>
          <div class="text-slate-300">• Telemetry Mode: 100% Air-Gapped / Zero External Leakage</div>
          <div class="text-slate-300">• Latency: 0.04ms Local Core Routing</div>
          <div class="text-slate-300">• Active Architecture: Sandbox Terminal Live Engine</div>
        `, true);
      } else if (cmd === 'founders') {
        appendTerminalLog(`
          <div class="text-sky-300 font-bold">Founding Collective Registry:</div>
          <div class="text-slate-200 mt-1">1. <b>Omotayo Oladapo Dan</b> — Founder & Chief Architect (<a href="mailto:dantayo58@gmail.com" class="text-sky-400 underline">dantayo58@gmail.com</a>)</div>
          <div class="text-slate-200">2. <b>Akwiwu Kachi Nwando</b> — Co-Founder & Media Director (<a href="mailto:kachiakwiwu@gmail.com" class="text-sky-400 underline">kachiakwiwu@gmail.com</a>)</div>
          <div class="text-slate-400 text-[11px] mt-1">Use the Founders carousel section to view full background specs.</div>
        `, true);
      } else if (cmd === 'phases') {
        appendTerminalLog(`
          <div class="text-sky-300 font-bold">Sovereign Evolution Roadmap:</div>
          <div class="text-emerald-400">• Phase 00 (Released & Live): Rheivada Analytical AI Model (Active in Trading ERP & Teamgrid SaaS)</div>
          <div class="text-sky-400">• Phase 01 (In Development): RheivaAI Frontier Intellect Core (70B+ Sovereign Dialect MoE)</div>
          <div class="text-slate-400">• Phase 02 (H1 2027): Custom Silicon SoCs & Solar Microwave Mesh</div>
          <div class="text-slate-400">• Phase 03 (H2 2027): Stage-4 Autonomous Heavy Mobility Chassis</div>
        `, true);
      } else if (cmd === 'services') {
        appendTerminalLog(`
          <div class="text-sky-300 font-bold">Core Capabilities & Services:</div>
          <div class="text-slate-300">• Custom Full-Stack Web Applications & High-Performance UI</div>
          <div class="text-slate-300">• Native Mobile Applications & Embedded Systems</div>
          <div class="text-slate-300">• Rheivada Real-Time Analytical Engines & ERP Data Modeling</div>
          <div class="text-slate-300">• RheivaAI Sovereign Air-Gapped Intelligence Development</div>
        `, true);
      } else if (cmd === 'analysis') {
        appendTerminalLog('<span class="text-amber-400">Opening Rheivada Analytics Hub (Featuring Trading ERP & Teamgrid SaaS)...</span>', true);
        const sec = document.getElementById('analytics-section');
        if (sec) {
          sec.classList.remove('hidden');
          sec.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (cmd === 'intellect') {
        appendTerminalLog('<span class="text-pink-400">Opening RheivaAI Frontier Architecture & Model Lineage...</span>', true);
        const sec = document.getElementById('intellect-section');
        if (sec) {
          sec.classList.remove('hidden');
          sec.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (cmd === 'contact') {
        appendTerminalLog(`
          <div class="text-sky-300 font-bold">Rheivatech Direct Communications:</div>
          <div class="text-slate-300">• Email: <a href="mailto:contact@rheivatech.space" class="text-sky-400 underline">contact@rheivatech.space</a></div>
          <div class="text-slate-300">• WhatsApp: <a href="https://wa.me/2348154058015" target="_blank" class="text-emerald-400 underline">Direct Chat (DM)</a></div>
          <div class="text-slate-300">• Phone: <a href="tel:+2348154058015" class="text-sky-400 underline">+234 815 405 8015</a></div>
          <div class="text-slate-300">• LinkedIn: <a href="https://www.linkedin.com/posts/rheivatech_rheivatech-linkedin-activity-7483134289891622912-3dJL" target="_blank" class="text-blue-400 underline">Channel Post</a></div>
        `, true);
      } else if (cmd === 'about') {
        appendTerminalLog(`
          <div class="text-slate-200">Rheivatech is an uncompromising commitment to complete technology sovereignty in Africa—engineering high-availability software platforms and heavy industrial infrastructure designed to endure and empower.</div>
        `, true);
      } else if (cmd === 'date') {
        appendTerminalLog(`<div class="text-slate-300">System UTC Epoch: ${new Date().toUTCString()}</div>`, true);
      } else if (cmd === 'clear') {
        if (terminalScreen) terminalScreen.innerHTML = '';
      } else {
        appendTerminalLog(`<div class="text-slate-400">Command not recognized: "${rawCmd}". Type "<b class="text-sky-400">help</b>" for options.</div>`, true);
      }
    }, 150);
  }

  /* 14. Founders Carousel Sliding Function */
  let currentSlide = 0;
  function slideCarousel(direction) {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    const items = track.children;
    if (items.length === 0) return;
    const maxSlides = items.length - 1;

    if (direction === 'next') {
      currentSlide = currentSlide >= maxSlides ? 0 : currentSlide + 1;
    } else {
      currentSlide = currentSlide <= 0 ? maxSlides : currentSlide - 1;
    }

    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  window.slideCarousel = slideCarousel;

  /* 15. Section close handlers */
  window.closeAnalyticsSection = function() {
    const sec = document.getElementById('analytics-section');
    if (sec) sec.classList.add('hidden');
  };

  window.closeIntellectSection = function() {
    const sec = document.getElementById('intellect-section');
    if (sec) sec.classList.add('hidden');
  };

  /* 16. Form Submission handler */
  window.handleRecruitSubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('reg-name')?.value || '';
    const email = document.getElementById('reg-email')?.value || '';
    const specialty = document.getElementById('reg-specialty')?.value || '';

    const modal = document.getElementById('submit-modal');
    const loadingState = document.getElementById('modal-loading-state');
    const successState = document.getElementById('modal-success-state');

    if (modal) {
      modal.classList.remove('hidden');
      lockBodyScroll();
      if (loadingState) loadingState.classList.remove('hidden');
      if (successState) successState.classList.add('hidden');

      setTimeout(() => {
        if (loadingState) loadingState.classList.add('hidden');
        if (successState) successState.classList.remove('hidden');

        const successName = document.getElementById('m-success-name');
        const successEmail = document.getElementById('m-success-email');
        const successSpecialty = document.getElementById('m-success-specialty');

        if (successName) successName.textContent = name;
        if (successEmail) successEmail.textContent = email;
        if (successSpecialty) successSpecialty.textContent = specialty;

        if (window.lucide) window.lucide.createIcons();
      }, 1000);
    }
  };

  window.closeSubmitModal = function() {
    const modal = document.getElementById('submit-modal');
    if (modal) {
      modal.classList.add('hidden');
      unlockBodyScroll();
    }
  };

});
