const sidebarElement = document.querySelector("#sidebar");
const dataCardElement = document.querySelector("#data-card");

if (!sidebarElement || !dataCardElement) {
  throw new Error("One or more required elements not found");
}

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.target === sidebarElement) {
      if (entry.contentRect.width < 150) {
        sidebarElement.classList.add("collapsed");
      } else {
        sidebarElement.classList.remove("collapsed");
      }
    }
  }
});

resizeObserver.observe(sidebarElement);

const dataCardResizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.target === dataCardElement) {
      if (entry.contentRect.width > 500) {
        dataCardElement.classList.add("wide-layout");
      } else {
        dataCardElement.classList.remove("wide-layout");
      }
    }
  }
});

dataCardResizeObserver.observe(dataCardElement);
