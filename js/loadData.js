// Load projects

import projects from "./data/projects.json" assert { type: "json" };

const projectsContainer = document.querySelector(".portfolio-images");

projects.forEach((project) => {
  projectsContainer.innerHTML += `
    <div class="portfolio-img">
        <img src="${project.img}" alt="" />
        <div class="img-bottons">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer"><i
            class="fa-brands fa-github"></i></a>
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer"><i
            class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
  </div>
    `;
});

projectsContainer.innerHTML += `
    <div class="portfolio-img off">
        <img src="./img/CS.png" alt="" />
        <div class="img-bottons">
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
    </div>
`;

// Load achievements

import achievements from "./data/achievements.json" assert { type: "json" };

const achievementsModalContainer = document.querySelector(
  ".achievements-modal-card-body"
);

const achievementsContainer = document.querySelector(
  ".achievements-collection"
);
achievements.slice(0, 6).forEach((achievement) => {
  achievementsContainer.innerHTML += `
      <div class="achievements-card">
          <div class="achievements-card-head">
              <img src="${achievement.img}" alt="" />
          </div>
          <div class="achievements-card-title">
              <p>${achievement.title}</p>
          </div>
      </div>
      `;
});

achievements.slice(6).forEach((achievement) => {
  achievementsModalContainer.innerHTML += `
    <div class="achievements-card">
        <div class="achievements-card-head">
            <img src="${achievement.img}" alt="" />
        </div>
        <div class="achievements-card-title">
            <p>${achievement.title}</p>
        </div>
    </div> 
    `;
});
