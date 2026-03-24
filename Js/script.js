const allLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayLessons(data.data));
};

const displayLessons = (Lessons) => {
  const lessonLevel = document.getElementById("level-container");
  lessonLevel.innerHTML = "";
  Lessons.forEach((Lesson) => {
    const lessonCard = document.createElement("button");

    lessonCard.innerHTML = `
        <a class = "btn btn-outline btn-primary mr-5 w-32 flex items-center">
        <i class="fa-solid fa-book-open"></i> 
        Lesson-${Lesson.level_no}</a>
    `;

    lessonLevel.appendChild(lessonCard);
  });
};
allLessons();
