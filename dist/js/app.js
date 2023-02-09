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
  threshold: 0.2,
};

const checkInnerWidth = () => {
  if (window.innerWidth <= 768) {
    option.threshold = 0.2;
  } else {
    option.threshold = 0.8;
  }

  return option;
};

const addingIntersectionObserver = () => {
  const observer = new IntersectionObserver(addActiveClass, option);

  sections.forEach((section) => {
    observer.observe(section);
  });
};

window.addEventListener('resize', () => {
  checkInnerWidth();
  addingIntersectionObserver();
});

window.addEventListener('load', () => {
  checkInnerWidth();
  addingIntersectionObserver();
});

const sections = document.querySelectorAll('section');

addingIntersectionObserver();
