// JavaScript source code
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const projects = [
  {
      title: "Project 1",
      description: "A responsive website built with HTML & CSS.",
      link: "#"
  },
  {
      title: "Project 2",
      description: "A JavaScript-powered interactive app.",
      link: "#"
  }
];

const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}">View Project</a>
  `;
    projectGrid.appendChild(projectCard);
});


