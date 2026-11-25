// Confirm script.js loads and executes cleanly
console.log("Portfolio script.js loaded successfully!");

// ==========================================================================
// 1. Project Data Array (Single Source of Truth)
// ==========================================================================
const projects = [
  {
    title: "HealthGuard AI",
    category: "Healthcare & AI Assistant",
    description:
      "An intelligent healthcare monitoring assistant designed for real-time symptom analysis, vital telemetry tracking, and personalized risk assessment.",
    highlights: [
      "Real-time biometric monitoring & vital telemetry (Heart Rate, SpO2)",
      "AI-driven automated symptom assessment & predictive risk alerts",
      "Personalized patient wellness analytics and status classification"
    ],
    tags: ["Python", "AI / ML", "HTML/CSS", "HealthTech"],
    image: "images/project1.svg",
    alt: "HealthGuard AI dashboard preview with biometric vital signs, ECG telemetry, and AI diagnosis feed",
    link: "https://github.com/magilesh07-pixel/healthguard-ai"
  },
  {
    title: "National Agriculture Portal",
    category: "AgTech & Web Portal",
    description:
      "A unified agricultural web platform providing farmers with live MSP crop pricing, agro-climatic weather advisories, and direct access to welfare schemes.",
    highlights: [
      "Real-time Minimum Support Price (MSP) rate tracker across regions",
      "Agro-weather advisories, rain forecasts & soil moisture indicators",
      "Single-window hub for government agricultural schemes (PM-KISAN)"
    ],
    tags: ["HTML/CSS", "JavaScript", "Flexbox", "Web Portal"],
    image: "images/project2.svg",
    alt: "National Agriculture Portal preview showing crop MSP rates, soil health telemetry, and farmer schemes",
    link: "https://github.com/magilesh07-pixel/NATIONAL-AGRICULTURE-PORTAL"
  },
  {
    title: "FreshGuard AI",
    category: "Food Tech & Computer Vision",
    description:
      "A computer vision inspection system that assesses produce freshness, estimates remaining shelf life, and minimizes waste using automated visual recognition.",
    highlights: [
      "Deep learning visual scanner for fruit & vegetable inspection",
      "Automated freshness grading (A+ Grade score) and defect detection",
      "Dynamic shelf-life estimation to prevent food waste in retail & homes"
    ],
    tags: ["Python", "AI / ML", "Computer Vision", "Deep Learning"],
    image: "images/project3.svg",
    alt: "FreshGuard AI computer vision scanner interface detecting produce freshness score and shelf life estimation",
    link: "https://github.com/magilesh07-pixel/FreahGuard-AI"
  }
];

// ==========================================================================
// 2. DOM Elements
// ==========================================================================
const navbar = document.querySelector(".navbar");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navLinks = document.querySelectorAll(".nav-link");
const projectsContainer = document.querySelector("#projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");

// ==========================================================================
// 3. Mobile Hamburger Menu Logic
// ==========================================================================
if (hamburgerBtn && navbar) {
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Stretch Goal: Automatically close mobile menu when any nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// ==========================================================================
// 4. Dynamic Project Card Rendering
// ==========================================================================
function renderProjects(filterTag = "All") {
  if (!projectsContainer) return;

  // Clear container before rendering
  projectsContainer.innerHTML = "";

  // Filter projects using array.filter()
  const filteredProjects =
    filterTag === "All"
      ? projects
      : projects.filter(
          (project) => Array.isArray(project.tags) && project.tags.includes(filterTag)
        );

  if (filteredProjects.length === 0) {
    projectsContainer.innerHTML = `
      <p class="no-projects-msg">No projects matched the filter "${filterTag}".</p>
    `;
    return;
  }

  // Build HTML string with template literals via array.map()
  const cardsHTML = filteredProjects
    .map((project) => {
      const hasImage = Boolean(project.image);
      const imageBlock = hasImage
        ? `<img src="${project.image}" alt="${project.alt || `${project.title} preview`}" class="card-img" loading="lazy">`
        : `<div class="card-image-placeholder" aria-label="${project.title} preview">${project.title}</div>`;

      const categoryHTML = project.category
        ? `<span class="card-category">${project.category}</span>`
        : "";

      const highlightsHTML =
        Array.isArray(project.highlights) && project.highlights.length > 0
          ? `<ul class="project-highlights" aria-label="Key features">
              ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>`
          : "";

      const tagsHTML =
        Array.isArray(project.tags) && project.tags.length > 0
          ? `<ul class="card-tags" aria-label="Project technologies">
              ${project.tags.map((tag) => `<li class="tag">${tag}</li>`).join("")}
            </ul>`
          : "";

      const isExternal = project.link && project.link.startsWith("http");
      const linkAttrs = isExternal ? `target="_blank" rel="noopener noreferrer"` : "";
      const linkLabel = isExternal ? "View on GitHub" : "View Project";

      return `
        <article class="project-card">
          <div class="card-image-wrapper">
            ${imageBlock}
          </div>
          <div class="card-body">
            ${categoryHTML}
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${project.description}</p>
            ${highlightsHTML}
            ${tagsHTML}
            <div class="card-footer">
              <a href="${project.link || "#"}" ${linkAttrs} class="project-link" aria-label="View ${project.title} details">
                ${linkLabel} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  projectsContainer.innerHTML = cardsHTML;
}

// ==========================================================================
// 5. Project Filter Button Listeners (with Active Highlight Stretch Goal)
// ==========================================================================
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter || "All";

    // Highlight active filter button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    // Re-render matching project cards
    renderProjects(selectedFilter);
  });
});

// Initial render on page load
renderProjects("All");
