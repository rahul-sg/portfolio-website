const portfolioData = {
  "hero": {
    "headline": "Building AI and data products that turn complex signals into decisions.",
    "subtext": "Data Science @ UC San Diego. I bridge the gap between data science and engineering, turning research and raw data into production-ready AI systems."
  },
  "about": "I'm Rahul Sengupta — a Data Science and Finance graduate from UC San Diego, where I earned Provost Honors, with a drive for building things that actually work. From enterprise LLM evaluation at Honda Research Labs to real-time forecasting for Eurofins, I've consistently shipped production systems that reduce uncertainty and accelerate decisions. I care about the full stack: the model, the interface, and the story the data tells.",
  "skills": [
    {
      "category": "Languages",
      "items": [
        "Python",
        "R",
        "Java",
        "C++",
        "TypeScript",
        "JavaScript",
        "SQL"
      ]
    },
    {
      "category": "AI & Machine Learning",
      "items": [
        "PyTorch",
        "TensorFlow",
        "XGBoost",
        "LangChain",
        "LLM Evaluation",
        "RAG Systems",
        "Prompt Engineering",
        "Fine-tuning"
      ]
    },
    {
      "category": "Web & Systems",
      "items": [
        "React",
        "Node.js",
        "Flask",
        "REST APIs",
        "Supabase",
        "DigitalOcean",
        "Docker",
        "AWS"
      ]
    },
    {
      "category": "Data & Analytics",
      "items": [
        "Power BI",
        "Tableau",
        "Pandas",
        "NumPy",
        "Statistical Modeling",
        "Time Series",
        "Data Engineering"
      ]
    }
  ],
  "projects": [
    {
      "index": "01",
      "title": "PicksIQ",
      "description": "Full-stack sports analytics platform using XGBoost for real-time player prop predictions and expected-value insights. Reached 1,000+ active users through live API data pipelines.",
      "tags": [
        "React",
        "XGBoost",
        "Data Engineering",
        "API Pipelines"
      ],
      "link": "https://tinyurl.com/picksiq-github"
    },
    {
      "index": "02",
      "title": "Enterprise LLM Evaluation Framework",
      "description": "Scalable evaluation framework across 5 quality dimensions using LLM-as-judge + human validation. Achieved 0.96 avg score and 4.7/5 inter-rater agreement across 7 cross-domain datasets at Honda Research.",
      "tags": [
        "Python",
        "LLM Evaluation",
        "Streamlit",
        "RAG"
      ],
      "link": "https://tinyurl.com/honda-ucsd-capstone"
    },
    {
      "index": "03",
      "title": "CitMit: Expedite City Construction Plan-Checking Time",
      "description": "GPT-4 powered compliance workflow with fine-tuning, prompt engineering, and vector embeddings for regulatory document checks. Reduced estimated review time by 50%. I also designed the product website (see Figma).",
      "tags": [
        "GPT-4",
        "Embeddings",
        "Supabase",
        "DigitalOcean"
      ],
      "links": [
        { "label": "GitHub →", "href": "https://github.com/YashRavipati1/CitmitAI" },
        { "label": "Figma →", "href": "https://tinyurl.com/citmit-figma" }
      ]
    },
    {
      "index": "04",
      "title": "2026 Midterm Election Predictor",
      "description": "Full-stack ML election forecasting app covering all 505 2026 US races (435 House, 34 Senate, 36 Governor). Ridge regression model trained on 2,245 historical results with live data pipelines for generic ballot polls (Wikipedia, 4h), FEC fundraising (daily bulk file), presidential approval, and BLS/FRED economic indicators. Features a 10,000-trial correlated Monte Carlo simulator, tipping-point analysis, interactive choropleth maps, shareable scenario builder, and 12+ pages including per-race deep-dives and a full model exploration tab. Deployed on AWS EC2 behind Caddy with Redis caching.",
      "tags": [
        "FastAPI",
        "React + Vite",
        "scikit-learn",
        "Docker",
        "AWS EC2"
      ],
      "links": [
        { "label": "GitHub →", "href": "https://github.com/rahul-sg/midterm-predictor" },
        { "label": "Live →", "href": "https://tinyurl.com/midtermpredictor" }
      ]
    }
  ],
  "experience": [
    {
      "role": "Finance & Data Science Intern",
      "company": "Eurofins USA · San Diego, CA (Remote)",
      "range": "Jun 2025 — Present",
      "bullets": [
        "Developed quarterly revenue forecasting models using Random Forest and XGBoost across 45+ business units, improving RMSE from 0.94 to 0.72.",
        "Built 5+ real-time Power BI dashboards for operational KPIs used by leadership for quarterly sales planning.",
        "Automated data ingestion pipelines, reducing manual reporting effort by ~60% across finance and operations teams."
      ]
    },
    {
      "role": "AI Research & Evaluation Engineer",
      "company": "Honda Research Labs & 99P Labs · San Diego, CA (Hybrid)",
      "range": "Sep 2025 — Mar 2026",
      "bullets": [
        "Led evaluation strategy research for enterprise AI systems and designed end-to-end framework architecture across 5 quality dimensions.",
        "Engineered a trend-aware stopping controller and hybrid scoring system across 7 cross-domain lecture datasets.",
        "Achieved 0.96 avg evaluation score and 4.7/5 inter-rater agreement with interactive diagnostics in Streamlit."
      ]
    },
    {
      "role": "AI Developer Intern",
      "company": "CitMit AI · UC Berkeley Haas & UCSD Blackstone Launchpad",
      "range": "Sep 2023 — Sep 2024",
      "bullets": [
        "Built AI compliance system using GPT-4, prompt engineering, fine-tuning, and vector embeddings for regulatory verification workflows.",
        "Architected end-to-end PDF processing pipeline (chunking, embeddings, similarity search) deployed on DigitalOcean with Supabase.",
        "Designed 10+ React pages with Figma-driven UI/UX: multi-step forms, file uploads, and interactive visualizations."
      ]
    }
  ],
  "contact": {
    "note": "Actively looking for Data Science, ML Engineering, and AI roles. Open to remote, hybrid, or onsite — anywhere. If you're building something in AI or data, I'd love to hear about it.",
    "links": [
      {
        "label": "rahul_sen_gupta@yahoo.com",
        "href": "mailto:rahul_sen_gupta@yahoo.com"
      },
      {
        "label": "LinkedIn",
        "href": "https://linkedin.com/in/rahul-sg"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/rahul-sg"
      }
    ]
  },
  "metrics": [
    {
      "value": "1,000+",
      "label": "Users",
      "description": "Active users on PicksIQ sports analytics platform"
    },
    {
      "value": "0.72",
      "label": "RMSE",
      "description": "Forecast accuracy improvement (from 0.94 baseline) at Eurofins"
    },
    {
      "value": "50%",
      "label": "Time Saved",
      "description": "Reduction in estimated compliance review time"
    },
    {
      "value": "5+",
      "label": "Dashboards",
      "description": "Live Power BI dashboards driving C-suite decisions"
    },
    {
      "value": "0.96",
      "label": "Eval Score",
      "description": "Average LLM evaluation score at Honda Research"
    },
    {
      "value": "60%",
      "label": "Automated",
      "description": "Reduction in manual data reporting pipeline effort"
    }
  ],
  "recognition": [
    {
      "title": "Provost Honors",
      "detail": "UC San Diego — academic excellence in Data Science & Finance",
      "year": "2024–2026"
    },
    {
      "title": "3.586 GPA",
      "detail": "Dean's List across 6 quarters",
      "year": "2022–2026"
    },
    {
      "title": "Launchpad Fellow",
      "detail": "UC Berkeley Haas + UCSD Blackstone entrepreneurship program",
      "year": "2023–2024"
    },
    {
      "title": "Honda Research Capstone",
      "detail": "One of twelve UCSD students selected to lead enterprise AI evaluation research",
      "year": "2025–2026"
    }
  ],
  "learning": [
    {
      "icon": "🤖",
      "title": "Multimodal AI",
      "description": "Vision language models and cross-modal reasoning architectures"
    },
    {
      "icon": "📊",
      "title": "Time Series",
      "description": "Advanced ARIMA, Prophet, and neural forecasting at scale"
    },
    {
      "icon": "🔗",
      "title": "Graph Neural Networks",
      "description": "Knowledge graphs and network-based prediction systems"
    },
    {
      "icon": "⚡",
      "title": "Real-time Systems",
      "description": "Streaming data pipelines with sub-second latency optimization"
    },
    {
      "icon": "🧪",
      "title": "AI Evaluation Science",
      "description": "Automated and human-in-the-loop frameworks for model quality"
    },
    {
      "icon": "🔐",
      "title": "AI Safety & Alignment",
      "description": "Robustness, interpretability, and responsible AI deployment"
    }
  ],
  "aboutCards": [
    {
      "label": "3.586 GPA",
      "value": "Provost Honors"
    },
    {
      "label": "UCSD",
      "value": "Data Science '26"
    },
    {
      "label": "Finance Minor",
      "value": "Rady School"
    },
    {
      "label": "1,000+",
      "value": "Users Shipped"
    },
    {
      "label": "4 Roles",
      "value": "Industry Experience"
    },
    {
      "label": "5+",
      "value": "Prod Systems"
    },
    {
      "label": "FIJI",
      "value": "Phi Gamma Delta (Fraternity)"
    },
    {
      "label": "13 Years",
      "value": "Swimmer & Water Polo"
    }
  ],
  "throughline": [
    {
      "phase": "Observe",
      "description": "Capture signals across data streams, user behavior, and domain context before assumptions take over"
    },
    {
      "phase": "Reason",
      "description": "Extract structure from noise: feature engineering, pattern recognition, anomaly detection"
    },
    {
      "phase": "Predict",
      "description": "Build models that anticipate outcomes with confidence intervals, not false certainty"
    },
    {
      "phase": "Deliver",
      "description": "Ship interfaces and systems that turn predictions into action, at scale"
    }
  ]
};

const setText = (id, text) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
};

setText("hero-headline", portfolioData.hero.headline);
setText("hero-subtext", portfolioData.hero.subtext);
setText("about-text", portfolioData.about);
setText("contact-note", portfolioData.contact.note);

const skillsBody = document.getElementById("skills-body");
if (skillsBody) {
  portfolioData.skills.forEach((group) => {
    const section = document.createElement("div");
    section.className = "skill-category";
    const label = document.createElement("span");
    label.className = "skill-category-label";
    label.textContent = group.category;
    const list = document.createElement("ul");
    list.className = "chip-list";
    group.items.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      list.appendChild(li);
    });
    section.appendChild(label);
    section.appendChild(list);
    skillsBody.appendChild(section);
  });
}

const projectsGrid = document.getElementById("projects-grid");
portfolioData.projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const tagsMarkup = project.tags.map((tag) => `<span>${tag}</span>`).join("");

  const links = project.links || (project.link ? [{ label: "OPEN →", href: project.link }] : []);
  const linksMarkup = links.map((l) =>
    l.href === "#"
      ? `<span class="project-link project-link--disabled">${l.label}</span>`
      : `<a class="project-link" href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`
  ).join("");

  const wipBadge = project.wip ? `<span class="project-wip">IN PROGRESS</span>` : "";

  card.innerHTML = `
    <p class="project-meta">${wipBadge}${project.index} / PROJECT</p>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-desc">${project.description}</p>
    <div class="project-tags">${tagsMarkup}</div>
    <div class="project-links">${linksMarkup}</div>
  `;

  projectsGrid.appendChild(card);
});

const experienceList = document.getElementById("experience-list");
portfolioData.experience.forEach((item) => {
  const wrapper = document.createElement("article");
  wrapper.className = "timeline-item";

  const bullets = item.bullets.map((bullet) => `<li>${bullet}</li>`).join("");

  wrapper.innerHTML = `
    <div class="timeline-head">
      <div>
        <h3 class="timeline-role">${item.role}</h3>
        <p class="timeline-company">${item.company}</p>
      </div>
      <span class="timeline-range">${item.range}</span>
    </div>
    <ul class="timeline-bullets">${bullets}</ul>
  `;

  experienceList.appendChild(wrapper);
});

const metricsList = document.getElementById("metrics-list");
portfolioData.metrics.forEach((metric) => {
  const card = document.createElement("div");
  card.className = "metric-card";
  card.innerHTML = `
    <div class="metric-value">${metric.value}</div>
    <div class="metric-label">${metric.label}</div>
    <p class="metric-description">${metric.description}</p>
  `;
  metricsList.appendChild(card);
});

const achievementsList = document.getElementById("achievements-list");
portfolioData.recognition.forEach((achievement) => {
  const item = document.createElement("li");
  item.className = "achievement-item";
  item.innerHTML = `
    <div class="achievement-head">
      <h3>${achievement.title}</h3>
      <span class="achievement-year">${achievement.year}</span>
    </div>
    <p class="achievement-detail">${achievement.detail}</p>
  `;
  achievementsList.appendChild(item);
});

const learningList = document.getElementById("learning-list");
portfolioData.learning.forEach((topic) => {
  const card = document.createElement("div");
  card.className = "learning-card";
  card.innerHTML = `
    <div class="learning-icon">${topic.icon}</div>
    <h3 class="learning-title">${topic.title}</h3>
    <p class="learning-description">${topic.description}</p>
  `;
  learningList.appendChild(card);
});

const aboutCards = document.getElementById("about-cards");
if (aboutCards) {
  portfolioData.aboutCards.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.className = "about-card";
    cardEl.style.animationDelay = `${index * 0.08}s`;
    cardEl.innerHTML = `
      <div class="about-card-value">${card.label}</div>
      <div class="about-card-label">${card.value}</div>
    `;
    aboutCards.appendChild(cardEl);
  });
}

const throughlineGrid = document.getElementById("throughline-grid");
if (throughlineGrid) {
  portfolioData.throughline.forEach((item, index) => {
    const col = document.createElement("div");
    col.className = "throughline-column";
    col.innerHTML = `
      <div class="throughline-step">
        <div class="step-number">${index + 1}</div>
        <h3 class="step-phase">${item.phase}</h3>
        <p class="step-description">${item.description}</p>
      </div>
      ${index < portfolioData.throughline.length - 1 ? '<div class="throughline-arrow">→</div>' : ''}
    `;
    throughlineGrid.appendChild(col);
  });
}

const contactLinks = document.getElementById("contact-links");
portfolioData.contact.links.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  if (!link.href.startsWith("mailto:") && !link.href.startsWith("tel:")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  anchor.textContent = `${link.label} →`;
  contactLinks.appendChild(anchor);
});

document.getElementById("year").textContent = new Date().getFullYear();

// ── Cursor spotlight ──────────────────────────────────────────────────────────
(function () {
  const spotlight = document.createElement("div");
  spotlight.id = "cursor-spotlight";
  document.body.appendChild(spotlight);

  let mx = -9999, my = -9999;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    spotlight.style.transform = `translate(${mx}px, ${my}px)`;
    spotlight.style.opacity = "1";
  });
  document.addEventListener("mouseleave", () => {
    spotlight.style.opacity = "0";
  });
})();
// ─────────────────────────────────────────────────────────────────────────────

const siteHeader = document.querySelector(".site-header");
const scrollRailProgress = document.getElementById("scroll-rail-progress");
const transitionSection = document.getElementById("transition");
const transitionOrbit = document.querySelector(".transition-scroll-orbit");
const heroSection = document.getElementById("home");
const aboutSection = document.getElementById("about");

const updateSectionOverlays = () => {
  const overlays = document.querySelectorAll(".section-overlay");
  overlays.forEach((overlay) => {
    // Find the next section after this overlay
    let nextSection = overlay.nextElementSibling;
    while (nextSection && !nextSection.id) {
      nextSection = nextSection.nextElementSibling;
    }

    if (!nextSection) return;

    const sectionTop = nextSection.offsetTop;
    const sectionBottom = sectionTop + nextSection.offsetHeight;
    const viewportCenter = window.scrollY + window.innerHeight / 2;
    const sectionCenter = (sectionTop + sectionBottom) / 2;

    // Calculate opacity based on proximity to section center
    // Peak opacity when section is centered in viewport
    const distance = Math.abs(viewportCenter - sectionCenter);
    const fadeDistance = window.innerHeight;
    let opacity = Math.max(0, 1 - distance / fadeDistance);
    opacity = opacity * 0.15; // Cap at 15% for subtle effect

    overlay.style.opacity = opacity;
  });
};

const updateTransitionOrbit = () => {
  if (!transitionOrbit || !transitionSection) return;

  const maxScrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = maxScrollable > 0 ? window.scrollY / maxScrollable : 0;

  const sectionTop = transitionSection.offsetTop;
  const sectionBottom = sectionTop + transitionSection.offsetHeight;
  const viewportCenter = window.scrollY + window.innerHeight * 0.5;
  const distance = Math.abs(viewportCenter - (sectionTop + transitionSection.offsetHeight * 0.5));
  const fadeDistance = window.innerHeight * 0.9;
  const localProgress = Math.min(1, Math.max(0, (window.scrollY - sectionTop + window.innerHeight) / (transitionSection.offsetHeight + window.innerHeight)));
  const active = viewportCenter >= sectionTop - window.innerHeight * 0.5 && viewportCenter <= sectionBottom + window.innerHeight * 0.5;

  transitionOrbit.style.setProperty("--transition-progress", String(localProgress));
  transitionOrbit.style.opacity = active ? String(Math.max(0.18, 1 - distance / fadeDistance)) : "0.06";
};

window.addEventListener("scroll", () => {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("scrolled", window.scrollY > 24);

  if (scrollRailProgress) {
    const maxScrollable =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = maxScrollable > 0 ? (window.scrollY / maxScrollable) * 100 : 0;
    scrollRailProgress.style.height = `${Math.min(100, Math.max(0, progress))}%`;
  }

  updateTransitionOrbit();
  updateSectionOverlays();
});

if (scrollRailProgress) {
  const maxScrollable =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = maxScrollable > 0 ? (window.scrollY / maxScrollable) * 100 : 0;
  scrollRailProgress.style.height = `${Math.min(100, Math.max(0, progress))}%`;
}

updateTransitionOrbit();
updateSectionOverlays();

window.addEventListener("resize", () => {
  updateTransitionOrbit();
  updateSectionOverlays();
});

// Wrap each .section in a .section-wrap so sticky stacking works.
// Alternate even-indexed sections to put the header on the right.
// Append a .section-gap at the end of each wrapper — this is the themed
// transition zone that shows before proximity scroll-snap pulls the next section in.
document.querySelectorAll(".section").forEach((section, i) => {
  const wrap = document.createElement("div");
  wrap.className = "section-wrap" + (i % 2 === 1 ? " section-wrap--alt" : "");
  section.parentNode.insertBefore(wrap, section);
  wrap.appendChild(section);

  const gap = document.createElement("div");
  gap.className = "section-gap";
  wrap.appendChild(gap);
});

// Reveal hero content immediately
const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((el) => el.classList.add("visible"));

// ── Starfield ────────────────────────────────────────────────────────────────
(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "starfield-canvas";
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext("2d");

  const STAR_COUNT = 220;
  let stars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = Array.from({ length: STAR_COUNT }, () => ({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      r:       Math.random() * 1.5 + 0.3,
      alpha:   Math.random() * 0.55 + 0.3,
      speed:   Math.random() * 0.004 + 0.001,
      phase:   Math.random() * Math.PI * 2,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      const twinkle = s.alpha + Math.sin(t * s.speed * 60 + s.phase) * 0.18;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 200, 255, ${Math.max(0, Math.min(1, twinkle))})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  initStars();
  requestAnimationFrame(draw);
  window.addEventListener("resize", () => { resize(); initStars(); });
})();
// ─────────────────────────────────────────────────────────────────────────────

// ── Background snowy owl visuals ─────────────────────────────────────────────
const owlSVG = `<svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bodyGrad" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#e8e4f0"/>
      <stop offset="100%" stop-color="#c8c0d8"/>
    </radialGradient>
    <radialGradient id="headGrad" cx="50%" cy="35%" r="55%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#ede8f8"/>
      <stop offset="100%" stop-color="#d0c8e0"/>
    </radialGradient>
    <radialGradient id="eyeGrad" cx="35%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#f5c842"/>
      <stop offset="45%" stop-color="#e09820"/>
      <stop offset="100%" stop-color="#7a4800"/>
    </radialGradient>
    <radialGradient id="faceGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f0e8d8"/>
      <stop offset="100%" stop-color="#d8ccc0"/>
    </radialGradient>
  </defs>

  <!-- Body -->
  <ellipse cx="60" cy="122" rx="34" ry="46" fill="url(#bodyGrad)"/>

  <!-- Body dark barring / feather pattern -->
  <ellipse cx="60" cy="122" rx="34" ry="46" fill="none" stroke="#9080a8" stroke-width="0.4" opacity="0.3"/>
  <!-- Feather barring rows -->
  <path d="M30,100 Q45,96 60,100 Q75,96 90,100" fill="none" stroke="#7060a0" stroke-width="0.7" opacity="0.25"/>
  <path d="M28,110 Q45,106 60,110 Q75,106 92,110" fill="none" stroke="#7060a0" stroke-width="0.7" opacity="0.25"/>
  <path d="M27,120 Q44,116 60,120 Q76,116 93,120" fill="none" stroke="#7060a0" stroke-width="0.7" opacity="0.22"/>
  <path d="M28,130 Q45,126 60,130 Q75,126 92,130" fill="none" stroke="#7060a0" stroke-width="0.7" opacity="0.20"/>
  <path d="M30,140 Q46,136 60,140 Q74,136 90,140" fill="none" stroke="#7060a0" stroke-width="0.7" opacity="0.18"/>
  <path d="M33,150 Q47,146 60,150 Q73,146 87,150" fill="none" stroke="#7060a0" stroke-width="0.7" opacity="0.15"/>
  <!-- Chest speckles -->
  <ellipse cx="52" cy="108" rx="2.5" ry="1.5" fill="#6050a0" opacity="0.18" transform="rotate(-10 52 108)"/>
  <ellipse cx="60" cy="104" rx="2" ry="1.2" fill="#6050a0" opacity="0.15"/>
  <ellipse cx="68" cy="108" rx="2.5" ry="1.5" fill="#6050a0" opacity="0.18" transform="rotate(10 68 108)"/>
  <ellipse cx="48" cy="118" rx="2" ry="1.3" fill="#6050a0" opacity="0.14" transform="rotate(-8 48 118)"/>
  <ellipse cx="63" cy="115" rx="2" ry="1.2" fill="#6050a0" opacity="0.13"/>
  <ellipse cx="72" cy="118" rx="2" ry="1.3" fill="#6050a0" opacity="0.14" transform="rotate(8 72 118)"/>
  <ellipse cx="55" cy="128" rx="1.8" ry="1.1" fill="#6050a0" opacity="0.12"/>
  <ellipse cx="65" cy="128" rx="1.8" ry="1.1" fill="#6050a0" opacity="0.12"/>

  <!-- Wing left -->
  <path d="M28,90 Q14,100 12,130 Q14,155 30,162 Q40,158 42,148 Q30,140 30,122 Q30,108 38,98 Z" fill="#d8d0e8"/>
  <path d="M29,95 Q18,108 17,128" fill="none" stroke="#9080b8" stroke-width="0.8" opacity="0.4"/>
  <path d="M30,105 Q20,116 19,134" fill="none" stroke="#9080b8" stroke-width="0.8" opacity="0.35"/>
  <path d="M31,115 Q22,124 21,140" fill="none" stroke="#9080b8" stroke-width="0.8" opacity="0.3"/>
  <!-- Wing right -->
  <path d="M92,90 Q106,100 108,130 Q106,155 90,162 Q80,158 78,148 Q90,140 90,122 Q90,108 82,98 Z" fill="#d8d0e8"/>
  <path d="M91,95 Q102,108 103,128" fill="none" stroke="#9080b8" stroke-width="0.8" opacity="0.4"/>
  <path d="M90,105 Q100,116 101,134" fill="none" stroke="#9080b8" stroke-width="0.8" opacity="0.35"/>
  <path d="M89,115 Q98,124 99,140" fill="none" stroke="#9080b8" stroke-width="0.8" opacity="0.3"/>

  <!-- Head -->
  <circle cx="60" cy="50" r="30" fill="url(#headGrad)"/>

  <!-- Head barring -->
  <path d="M35,42 Q48,38 60,42 Q72,38 85,42" fill="none" stroke="#8070b0" stroke-width="0.6" opacity="0.22"/>
  <path d="M33,52 Q47,48 60,52 Q73,48 87,52" fill="none" stroke="#8070b0" stroke-width="0.6" opacity="0.20"/>
  <path d="M37,62 Q49,58 60,62 Q71,58 83,62" fill="none" stroke="#8070b0" stroke-width="0.6" opacity="0.18"/>

  <!-- Left ear tuft -->
  <polygon points="42,27 38,10 48,24" fill="#e8e0f0"/>
  <polygon points="42,27 39,12 45,22" fill="#c0b8d0" opacity="0.5"/>
  <!-- Right ear tuft -->
  <polygon points="78,27 82,10 72,24" fill="#e8e0f0"/>
  <polygon points="78,27 81,12 75,22" fill="#c0b8d0" opacity="0.5"/>

  <!-- Facial disc (heart-shaped frame) -->
  <path d="M60,78 Q42,72 38,58 Q36,44 48,40 Q54,38 60,44 Q66,38 72,40 Q84,44 82,58 Q78,72 60,78 Z" fill="url(#faceGrad)" opacity="0.7"/>
  <path d="M60,78 Q42,72 38,58 Q36,44 48,40 Q54,38 60,44 Q66,38 72,40 Q84,44 82,58 Q78,72 60,78 Z" fill="none" stroke="#b8a8c8" stroke-width="0.8" opacity="0.5"/>

  <!-- Left eye outer ring -->
  <circle cx="50" cy="50" r="10" fill="#1a1230"/>
  <!-- Left eye iris -->
  <circle cx="50" cy="50" r="8" fill="url(#eyeGrad)"/>
  <!-- Left pupil -->
  <circle cx="50" cy="50" r="4.5" fill="#0a0818"/>
  <!-- Left eye gleam -->
  <circle cx="52.5" cy="47.5" r="2" fill="white" opacity="0.9"/>
  <circle cx="48" cy="52" r="0.8" fill="white" opacity="0.4"/>

  <!-- Right eye outer ring -->
  <circle cx="70" cy="50" r="10" fill="#1a1230"/>
  <!-- Right eye iris -->
  <circle cx="70" cy="50" r="8" fill="url(#eyeGrad)"/>
  <!-- Right pupil -->
  <circle cx="70" cy="50" r="4.5" fill="#0a0818"/>
  <!-- Right eye gleam -->
  <circle cx="72.5" cy="47.5" r="2" fill="white" opacity="0.9"/>
  <circle cx="68" cy="52" r="0.8" fill="white" opacity="0.4"/>

  <!-- Beak -->
  <path d="M60,58 L55,66 Q58,70 60,68 Q62,70 65,66 Z" fill="#c89030"/>
  <path d="M60,58 L60,68" fill="none" stroke="#a07020" stroke-width="0.6" opacity="0.7"/>

  <!-- Talons left -->
  <line x1="48" y1="165" x2="36" y2="175" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="48" y1="165" x2="42" y2="177" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="48" y1="165" x2="50" y2="178" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="48" y1="165" x2="56" y2="174" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
  <!-- Talons right -->
  <line x1="72" y1="165" x2="64" y2="174" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="72" y1="165" x2="70" y2="178" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="72" y1="165" x2="78" y2="177" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="72" y1="165" x2="84" y2="175" stroke="#c8c0d0" stroke-width="2.2" stroke-linecap="round"/>
</svg>`;

const owlConfigs = [
  { top: '6%',  right: '5%',  width: 300, opacity: 0.042, dur: '14s', delay: '0s'   },
  { top: '36%', left: '2%',   width: 190, opacity: 0.030, dur: '19s', delay: '-6s'  },
  { top: '68%', right: '10%', width: 240, opacity: 0.036, dur: '16s', delay: '-10s' },
  { top: '52%', left: '16%',  width: 140, opacity: 0.024, dur: '22s', delay: '-4s'  },
];

owlConfigs.forEach((cfg) => {
  const el = document.createElement("div");
  el.className = "bg-owl";
  el.innerHTML = owlSVG;
  el.style.width  = cfg.width + "px";
  el.style.height = Math.round(cfg.width * 180 / 120) + "px";
  el.style.opacity = cfg.opacity;
  el.style.setProperty("--owl-dur",   cfg.dur);
  el.style.setProperty("--owl-delay", cfg.delay);
  if (cfg.top)   el.style.top   = cfg.top;
  if (cfg.left)  el.style.left  = cfg.left;
  if (cfg.right) el.style.right = cfg.right;
  document.body.appendChild(el);
});
// ─────────────────────────────────────────────────────────────────────────────
