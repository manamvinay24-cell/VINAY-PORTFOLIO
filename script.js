const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const projectsGrid = document.getElementById("projectsGrid");

const welcomePopup = document.getElementById("welcomePopup");
const closePopup = document.getElementById("closePopup");
const exploreBtn = document.getElementById("exploreBtn");

/* MOBILE MENU */
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

/* WELCOME POPUP */
function closeWelcomePopup() {
  welcomePopup.classList.add("hide");
}

closePopup.addEventListener("click", closeWelcomePopup);
exploreBtn.addEventListener("click", closeWelcomePopup);

/* Optional: popup 8 seconds tarvata automatic close */
setTimeout(function () {
  welcomePopup.classList.add("hide");
}, 8000);

/* PROJECTS SECTION */
const projects = [
  {
    title: "VINAI AI Career Assistant",
    description:
      "AI-powered student career assistant with resume builder, saved resumes, cover letter helper, internship tracker and AI chat.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify Functions", "Gemini API"],
    live: "https://vinai-resume-builder.netlify.app",
    github: "https://github.com/manamvinay24-cell/VINAI"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A professional portfolio website built to showcase my skills, featured project, live demo links and contact details.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "#home",
    github: "#"
  },
  {
    title: "Student Career Tools",
    description:
      "Future project idea for students including resume generator, internship tracker and career roadmap builder.",
    tech: ["Web App", "AI", "Career Tools"],
    live: "#contact",
    github: "#"
  }
];

function displayProjects() {
  projectsGrid.innerHTML = "";

  projects.forEach(function (project) {
    const projectCard = document.createElement("article");
    projectCard.className = "project-card";

    const techTags = project.tech
      .map(function (item) {
        return `<span>${item}</span>`;
      })
      .join("");

    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="project-tech">
        ${techTags}
      </div>

      <div class="project-links">
        <a href="${project.live}" target="_blank">Live Demo</a>
        <a href="${project.github}" target="_blank">GitHub Code</a>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

displayProjects();