/* ============================================
   Osiberu Boluwatife — Portfolio
   Plain HTML5 + CSS3 + Vanilla JS
   ============================================ */

(() => {
  "use strict";

  // ---------- Data ----------
  const SKILLS = [
    { name: "Website Design", level: 95 },
    { name: "Website Development", level: 90 },
    { name: "Google Maps Listing", level: 92 },
    { name: "Social Media Advertising", level: 88 },
    { name: "Graphic Design", level: 90 },
    { name: "Digital Marketing", level: 85 },
    { name: "Content Creation", level: 80 },
    { name: "Branding", level: 82 },
  ];

  const CATEGORIES = [
    "All",
    "Website Design",
    "Google Maps Listings",
    "Social Media Advertising",
    "Graphic Design",
  ];

  const PROJECTS = [
    {
      id: 1, title: "Corporate Business Website", category: "Website Design",
      description: "A clean, conversion-focused corporate website built for a growing service company to establish a credible online presence.",
      services: ["UI/UX Design", "Responsive Build", "Landing Page"],
      image: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: true,
    },
    {
      id: 2, title: "E-Commerce Landing Page", category: "Website Design",
      description: "High-converting product landing page designed to drive leads and online sales for a retail brand.",
      services: ["Landing Page", "Lead Generation", "Mobile First"],
      image: "https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
    {
      id: 3, title: "Startup Portfolio Site", category: "Website Design",
      description: "A modern portfolio website that showcases a startup's products with smooth animations and a premium feel.",
      services: ["Web Design", "Animation", "SEO Setup"],
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
    {
      id: 4, title: "Restaurant Google Profile", category: "Google Maps Listings",
      description: "Created and optimized a Google Business Profile that boosted a restaurant's local search rankings and foot traffic.",
      services: ["Profile Setup", "Local SEO", "Optimization"],
      image: "https://images.pexels.com/photos/5921677/pexels-photo-5921677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: true,
    },
    {
      id: 5, title: "Local Store Map Listing", category: "Google Maps Listings",
      description: "Verified and optimized a retail store's map listing to attract more nearby customers searching online.",
      services: ["Map Verification", "Local Visibility", "Reviews"],
      image: "https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
    {
      id: 6, title: "Service Business Listing", category: "Google Maps Listings",
      description: "Optimized a service provider's Google profile with accurate info, photos and categories for stronger local reach.",
      services: ["Profile Setup", "Citations", "Local SEO"],
      image: "https://images.pexels.com/photos/5444631/pexels-photo-5444631.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
    {
      id: 7, title: "Brand Awareness Campaign", category: "Social Media Advertising",
      description: "Planned and managed a multi-platform ad campaign that grew brand awareness and audience engagement.",
      services: ["Ad Strategy", "Campaign Mgmt", "Targeting"],
      image: "https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: true,
    },
    {
      id: 8, title: "Lead Generation Ads", category: "Social Media Advertising",
      description: "Designed and ran targeted lead-generation ads delivering qualified prospects at a strong return on ad spend.",
      services: ["Meta Ads", "Analytics", "A/B Testing"],
      image: "https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
    {
      id: 9, title: "Content Marketing Plan", category: "Social Media Advertising",
      description: "Built a consistent content marketing calendar that increased reach and customer engagement over time.",
      services: ["Content Plan", "Scheduling", "Engagement"],
      image: "https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
    {
      id: 10, title: "Complete Brand Identity", category: "Graphic Design",
      description: "Developed a cohesive brand identity including logo, colour palette and visual guidelines for a new business.",
      services: ["Logo Design", "Brand Kit", "Guidelines"],
      image: "https://images.pexels.com/photos/8546649/pexels-photo-8546649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: true,
    },
    {
      id: 11, title: "Social Media Graphics", category: "Graphic Design",
      description: "Created a set of eye-catching social media templates and promotional graphics to keep branding consistent.",
      services: ["Social Templates", "Promo Graphics", "Branding"],
      image: "https://images.pexels.com/photos/15569284/pexels-photo-15569284.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
    {
      id: 12, title: "Logo & Marketing Assets", category: "Graphic Design",
      description: "Designed a memorable logo and a suite of marketing materials including flyers and business cards.",
      services: ["Logo Design", "Print Assets", "Flyers"],
      image: "https://images.pexels.com/photos/17845/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      featured: false,
    },
  ];

  // ---------- DOM helpers ----------
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ---------- Footer year ----------
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Sticky navbar scroll state ----------
  const navbar = $("#navbar");
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Mobile menu toggle ----------
  const navToggle = $("#nav-toggle");
  const mobileMenu = $("#mobile-menu");
  const setMenu = (open) => {
    if (!navToggle || !mobileMenu) return;
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    if (open) mobileMenu.removeAttribute("hidden");
    else mobileMenu.setAttribute("hidden", "");
  };
  navToggle?.addEventListener("click", () => {
    const isOpen = !mobileMenu.hasAttribute("hidden");
    setMenu(!isOpen);
  });
  $$(".mobile-link, .mobile-cta", mobileMenu).forEach((a) =>
    a.addEventListener("click", () => setMenu(false))
  );

  // ---------- Active nav link on scroll ----------
  const navLinks = $$(".nav-link");
  const mobileLinks = $$(".mobile-link");
  const sections = navLinks
    .map((l) => document.getElementById(l.getAttribute("href").slice(1)))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach((l) =>
      l.classList.toggle("is-active", l.getAttribute("href") === "#" + id)
    );
    mobileLinks.forEach((l) =>
      l.classList.toggle("is-active", l.getAttribute("href") === "#" + id)
    );
  };

  if ("IntersectionObserver" in window) {
    const sectionObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => sectionObs.observe(s));
  }

  // ---------- Reveal on scroll ----------
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- Skills ----------
  const skillsGrid = $("#skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = SKILLS.map(
      (s) => `
        <div class="skill-row reveal">
          <div class="skill-head">
            <span class="skill-name">${s.name}</span>
            <span class="skill-level">${s.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" data-level="${s.level}"></div>
          </div>
        </div>`
    ).join("");

    // Re-observe new reveal rows
    if ("IntersectionObserver" in window) {
      const rowObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              rowObs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      $$(".skill-row", skillsGrid).forEach((el) => rowObs.observe(el));
    }

    // Animate skill fills when skills section is visible
    const skillsSection = $("#skills");
    if (skillsSection && "IntersectionObserver" in window) {
      const skillObs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            $$(".skill-fill", skillsGrid).forEach((fill, i) => {
              const lvl = parseInt(fill.getAttribute("data-level"), 10) || 0;
              setTimeout(() => {
                fill.style.width = lvl + "%";
              }, i * 90);
            });
            skillsGrid.classList.add("is-visible");
            skillObs.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      skillObs.observe(skillsSection);
    }
  }

  // ---------- Projects ----------
  const featuredGrid = $("#featured-grid");
  const projectGrid = $("#project-grid");
  const emptyState = $("#empty-state");
  const filterBar = $("#filter-bar");
  const searchInput = $("#search-input");

  let activeFilter = "All";
  let query = "";

  const projectCardHTML = (p) => `
    <article class="project-card">
      <div class="project-thumb">
        <img src="${p.image}" alt="${escapeHTML(p.title)}" loading="lazy" />
        <span class="chip">${escapeHTML(p.category)}</span>
        ${p.featured ? `<span class="featured-chip">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>
          Featured
        </span>` : ""}
      </div>
      <div class="project-body">
        <h3>${escapeHTML(p.title)}</h3>
        <p>${escapeHTML(p.description)}</p>
        <div class="project-tags">
          ${p.services.map((s) => `<span class="project-tag">${escapeHTML(s)}</span>`).join("")}
        </div>
        <a class="project-action" href="#contact">
          View Project
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </article>`;

  function renderFeatured() {
    if (!featuredGrid) return;
    featuredGrid.innerHTML = PROJECTS
      .filter((p) => p.featured)
      .map(projectCardHTML)
      .join("");
  }

  function renderFilterBar() {
    if (!filterBar) return;
    filterBar.innerHTML = CATEGORIES.map(
      (c) =>
        `<button class="filter-pill ${c === activeFilter ? "is-active" : ""}" data-cat="${c}">${c}</button>`
    ).join("");
    $$(".filter-pill", filterBar).forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.getAttribute("data-cat");
        renderFilterBar();
        renderProjects();
      });
    });
  }

  function renderProjects() {
    if (!projectGrid) return;
    const q = query.trim().toLowerCase();
    const list = PROJECTS.filter((p) => {
      const matchCat = activeFilter === "All" || p.category === activeFilter;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.services.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchQ;
    });

    projectGrid.innerHTML = list.map(projectCardHTML).join("");
    if (emptyState) emptyState.hidden = list.length > 0;
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  renderFeatured();
  renderFilterBar();
  renderProjects();

  searchInput?.addEventListener("input", (e) => {
    query = e.target.value;
    renderProjects();
  });

  // ---------- Back to top ----------
  const fabTop = $("#fab-top");
  const footerTop = $("#back-to-top");
  const onScrollFab = () => {
    if (!fabTop) return;
    fabTop.classList.toggle("is-visible", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScrollFab, { passive: true });
  onScrollFab();
  fabTop?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
  footerTop?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // ---------- Contact form (Web3Forms) ----------
  const form = $("#contact-form");
  const formResult = $("#form-result");
  const submitBtn = $("#submit-btn");

  const validators = {
    name: (v) => v.trim().length >= 2 || "Please enter your full name (min 2 characters).",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Please enter a valid email address.",
    message: (v) => v.trim().length >= 10 || "Message should be at least 10 characters long.",
  };

  function setError(field, msg) {
    const input = form.querySelector(`[name="${field}"]`);
    const err = form.querySelector(`.error[data-for="${field}"]`);
    if (input) input.classList.toggle("has-error", Boolean(msg));
    if (err) err.textContent = msg || "";
  }

  function validateField(field) {
    const input = form?.querySelector(`[name="${field}"]`);
    if (!input) return true;
    const fn = validators[field];
    if (!fn) return true;
    const result = fn(input.value);
    setError(field, result === true ? "" : result);
    return result === true;
  }

  if (form) {
    ["name", "email", "message"].forEach((f) => {
      const input = form.querySelector(`[name="${f}"]`);
      input?.addEventListener("blur", () => validateField(f));
      input?.addEventListener("input", () => {
        if (input.classList.contains("has-error")) validateField(f);
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const allValid = ["name", "email", "message"]
        .map((f) => validateField(f))
        .every(Boolean);

      if (!allValid) {
        showResult("Please fix the highlighted fields and try again.", "error");
        return;
      }

      const data = new FormData(form);

      // Honeypot anti-spam
      if (data.get("botcheck")) return;

      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
        const json = await response.json().catch(() => ({}));

        if (response.ok && (json.success === true || json.success === undefined)) {
          form.reset();
          showResult("✅ Thank you! Your message has been sent successfully. I'll get back to you shortly.", "success");
        } else {
          showResult(
            "❌ Sorry, something went wrong sending your message. Please try again or use the WhatsApp buttons above.",
            "error"
          );
        }
      } catch (err) {
        showResult(
          "❌ Network error. Please check your connection and try again, or reach out via WhatsApp.",
          "error"
        );
      } finally {
        submitBtn.classList.remove("is-loading");
        submitBtn.disabled = false;
      }
    });
  }

  function showResult(msg, type) {
    if (!formResult) return;
    formResult.textContent = msg;
    formResult.classList.remove("is-success", "is-error");
    formResult.classList.add(type === "success" ? "is-success" : "is-error");
    if (type === "success") {
      setTimeout(() => {
        formResult.classList.remove("is-success");
        formResult.textContent = "";
      }, 7000);
    }
  }

  // ---------- Smooth-scroll fallback for older browsers ----------
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });
})();
