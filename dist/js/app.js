const lines = document.querySelectorAll('.scroll-indicator a');

const removeActiveClass = () => {
  lines.forEach((line) => {
    line.classList.remove('active');
  });
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let currentLine = document.querySelector(
        `.scroll-indicator a[href='#${entry.target.id}']`
      );
      removeActiveClass();
      currentLine.classList.add('active');
    }
  });
};

const option = {
  threshold: 0.4,
};

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(addActiveClass, option);

// console.log(section);

sections.forEach((section) => {
  observer.observe(section);
});
