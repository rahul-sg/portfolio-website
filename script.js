const portfolioData = {
  "hero": {
    "headline": "I turn models into products people actually use.",
    "subtext": "Data Science and Finance at UC San Diego. I like owning a problem end to end — the data cleaning, the model, and the interface someone actually clicks. Right now: LLM evaluation at Honda Research and forecasting work at Eurofins."
  },
  "about": "I'm a Data Science and Finance student at UC San Diego, graduating in 2026 with Provost Honors. Most of what I build sits between research and a working product: an LLM-evaluation framework at Honda Research Labs, revenue forecasting at Eurofins, and side projects — a housing-affordability tool and a 2026 election model — that are deployed and used by people I've never met, not just handed in for a grade. I'm at my best when something needs both the modeling and the engineering to actually ship. The Finance minor keeps me honest about whether a number means anything before it goes on a dashboard, and thirteen years of competitive swimming taught me how to keep grinding at something long after it stops being fun.",
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
        "LightGBM",
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
        "FastAPI",
        "REST APIs",
        "PostgreSQL",
        "Supabase",
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
      "title": "Touse",
      "description": "Full-stack USA housing affordability platform, live at touse.us. Calculates your real max home price across 6 loan types using live Freddie Mac rates, scores your readiness 0–100 (DTI, down payment, credit, savings cushion), and lets you save and compare unlimited buy/rent scenarios. An interactive map shows real geocoded listings filtered to your budget, and a two-stage ML pipeline (global LightGBM panel + per-ZIP Prophet) delivers 12-month price forecasts with 80% confidence bands. Backed by Zillow ZHVI, FRED, BEA, and RapidAPI with weekly/monthly Celery ETL jobs.",
      "tags": [
        "FastAPI",
        "React + Vite + TS",
        "LightGBM + Prophet",
        "PostgreSQL",
        "MapLibre GL",
        "Docker + Caddy"
      ],
      "links": [
        { "label": "GitHub →", "href": "https://github.com/rahul-sg/Touse" },
        { "label": "Live →", "href": "https://touse.us" }
      ]
    },
    {
      "index": "02",
      "title": "Enterprise LLM Evaluation Framework — Honda Research Institute & 99P Labs",
      "description": "My UCSD capstone with Honda Research Institute and 99P Labs, where I led the evaluation research. A framework that scores LLM output across five quality dimensions — accuracy, coherence, relevance, safety, and user alignment — using an LLM for the first-pass scoring and human reviewers for ground truth. A trend-aware stopping controller ends each run once scores stabilize, so no compute is wasted chasing noise. Built in Python with LangChain and RAG and wrapped in a Streamlit app with interactive diagnostics. It held up at 0.96 average and 4.7/5 inter-rater agreement across 7 cross-domain lecture datasets.",
      "tags": [
        "Python",
        "LLM Evaluation",
        "Streamlit",
        "RAG"
      ],
      "links": [
        { "label": "GitHub →", "href": "https://tinyurl.com/honda-ucsd-capstone" }
      ]
    },
    {
      "index": "03",
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
        { "label": "Live →", "href": "https://tinyurl.com/midterm-predictor" }
      ]
    },
    {
      "index": "04",
      "title": "PicksIQ",
      "description": "A full-stack sports analytics platform that predicts player props in real time and surfaces the ones with positive expected value. Live API pipelines pull in game and player data, feed a feature pipeline, and an XGBoost model turns it into probabilities and EV estimates that update as the lines move. The React front end lets users browse props, filter by matchup, and see where the model disagrees with the market. It grew to 1,000+ active users, which mostly meant keeping the data pipelines reliable and the predictions fast enough to be useful during live games.",
      "tags": [
        "React",
        "XGBoost",
        "Data Engineering",
        "API Pipelines"
      ],
      "links": [
        { "label": "GitHub →", "href": "https://tinyurl.com/picksiq-github" }
      ]
    },
    {
      "index": "05",
      "title": "CitMit: Expedite City Construction Plan-Checking Time",
      "description": "An AI compliance tool that checks city construction plans against building regulations, built during my time with UC Berkeley Haas and UCSD's Blackstone Launchpad. I built the end-to-end PDF pipeline — chunking documents, generating embeddings, and running similarity search against the regulations — with GPT-4 doing the actual plan-checking through prompt engineering and fine-tuning. Deployed on DigitalOcean with Supabase behind 10+ React pages I designed in Figma: multi-step forms, file uploads, and interactive results. It cut estimated review time by roughly half.",
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
    "note": "I'm looking for full-time Data Science, ML, or AI roles starting in 2026 — remote, hybrid, or onsite, wherever the work is interesting. If you're hiring or just want to talk through a problem, email is the fastest way to reach me.",
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
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3 2 8.5 12 14l10-5.5L12 3Z\"/><path d=\"M2 15.5 12 21l10-5.5\"/><path d=\"M2 12 12 17.5 22 12\"/></svg>",
      "title": "Multimodal AI",
      "description": "How vision-language models fuse image and text — and, more interesting to me, where they quietly fall apart."
    },
    {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 3v18h18\"/><path d=\"M7 14l4-5 3 3 5-7\"/></svg>",
      "title": "Time Series",
      "description": "Prophet and neural forecasters, pushing past the ARIMA and tree models I already use at work."
    },
    {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"5\" cy=\"6\" r=\"2.2\"/><circle cx=\"19\" cy=\"6\" r=\"2.2\"/><circle cx=\"12\" cy=\"18\" r=\"2.2\"/><path d=\"M6.8 7.3 10.4 16M17.2 7.3 13.6 16M7 6h10\"/></svg>",
      "title": "Graph Neural Networks",
      "description": "Using graph structure for problems I'd normally flatten into a table and lose information."
    },
    {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h4l3 8 4-16 3 8h4\"/></svg>",
      "title": "Real-time Systems",
      "description": "Streaming pipelines, and keeping latency low enough that a prediction still arrives in time to matter."
    },
    {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 18a8 8 0 1 1 16 0\"/><path d=\"M12 13l3.5-3.5\"/><circle cx=\"12\" cy=\"18\" r=\"1.1\" fill=\"currentColor\" stroke=\"none\"/></svg>",
      "title": "AI Evaluation",
      "description": "A continuation of the Honda work — how you actually measure whether a model is any good."
    },
    {
      "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 19.3 5 15.4 5 11V6l7-3Z\"/><path d=\"M9.2 11.8 11.2 13.8 15 10\"/></svg>",
      "title": "AI Safety & Alignment",
      "description": "Robustness and interpretability: making models you'd trust enough to leave running in production."
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
      "phase": "Understand the problem",
      "description": "Start with whoever actually has the problem and the raw data — not with a model. Most of the work is figuring out what's really being asked."
    },
    {
      "phase": "Baseline first",
      "description": "A simple model I trust beats a complex one I don't. I start with something basic that works, then earn every bit of added complexity."
    },
    {
      "phase": "Make it usable",
      "description": "Wrap the model in an API and an interface, so it's something you can click — not a notebook only I can run."
    },
    {
      "phase": "Ship and maintain",
      "description": "Deploy it, put it in front of real users, and keep fixing what breaks. A model that isn't running isn't finished."
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
      ${index < portfolioData.throughline.length - 1 ? '<div class="throughline-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>' : ''}
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

const siteHeader = document.querySelector(".site-header");
const scrollRailProgress = document.getElementById("scroll-rail-progress");

// ── Header state + left scroll-progress rail ─────────────────────────────────
const updateScrollUI = () => {
  if (siteHeader) {
    siteHeader.classList.toggle("scrolled", window.scrollY > 24);
  }
  if (scrollRailProgress) {
    const maxScrollable =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = maxScrollable > 0 ? (window.scrollY / maxScrollable) * 100 : 0;
    scrollRailProgress.style.height = `${Math.min(100, Math.max(0, progress))}%`;
  }
};

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);
updateScrollUI();

// ── Alternate section layout (header left / right) ───────────────────────────
document.querySelectorAll(".section").forEach((section, i) => {
  if (i % 2 === 1) section.classList.add("section--alt");
});

// ── Staggered reveal for card groups ─────────────────────────────────────────
// Tag each card in a group with .reveal and an incremental delay so groups
// cascade in as they scroll into view instead of all appearing at once.
[
  "#about-cards",
  "#skills-body",
  "#projects-grid",
  ".honda-visual",
  "#throughline-grid",
  "#experience-list",
  "#metrics-list",
  "#achievements-list",
  "#learning-list",
].forEach((selector) => {
  const group = document.querySelector(selector);
  if (!group) return;
  Array.from(group.children).forEach((child, i) => {
    child.classList.add("reveal");
    child.style.transitionDelay = `${Math.min(i * 0.06, 0.36)}s`;
  });
});

// ── Scroll reveal: subtle fade + rise via IntersectionObserver ───────────────
const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));

  // Reveal above-the-fold hero content immediately (no flash on load).
  document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
