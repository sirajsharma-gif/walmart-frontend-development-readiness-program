const animationsSectionElement = document.querySelector("#animations-section");
const lazyLoadSectionElement = document.querySelector("#lazy-load-section");
const loadMoreElement = document.querySelector("#load-more");

const animationObserver = new IntersectionObserver(
  (enteries) => {
    for (const entry of enteries) {
      const contentElements = entry.target.querySelectorAll(".content-block");

      if (entry.isIntersecting) {
        contentElements?.forEach((contentElement) => {
          contentElement.classList.add("active");
        });
      } else {
        contentElements?.forEach((contentElement) => {
          contentElement.classList.remove("active");
        });
      }
    }
  },
  {
    threshold: 0.5,
  },
);

animationObserver.observe(animationsSectionElement as Element);

const lazyLoaderObserver = new IntersectionObserver((enteries) => {
  for (const entry of enteries) {
    if (entry.isIntersecting) {
      const imageElements = entry.target.querySelectorAll(".lazy-image");

      for (const imageElement of imageElements) {
        imageElement.setAttribute(
          "src",
          imageElement.getAttribute("data-src") as string,
        );
      }
    }
  }
});

lazyLoaderObserver.observe(lazyLoadSectionElement as Element);

function loadMoreContent() {
  const feedContainerElement = document.querySelector("#feed-container");

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      const newContentElement = document.createElement("div");
      newContentElement.classList.add("content-block");
      newContentElement.classList.add("active");
      newContentElement.textContent = `New Content Block ${i + 1}`;
      feedContainerElement?.appendChild(newContentElement);
    }
  }, 1000);
}

const loadMoreObserver = new IntersectionObserver(
  (enteries) => {
    for (const entry of enteries) {
      if (entry.isIntersecting && entry.target === loadMoreElement) {
        loadMoreContent();
      }
    }
  },
  {
    threshold: 0.5,
  },
);

loadMoreObserver.observe(loadMoreElement as Element);
