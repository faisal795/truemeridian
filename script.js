// Technologies tabs switching
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tech_tab");
  const panels = document.querySelectorAll(".tech_panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tech");

      // update active tab
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // update visible panel
      panels.forEach((panel) => {
        if (panel.getAttribute("data-tech-panel") === target) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    });
  });
});