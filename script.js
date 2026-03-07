// Technologies tabs switching (kept for reference)
// document.addEventListener("DOMContentLoaded", () => {
//   const tabs = document.querySelectorAll(".tech_tab");
//   const panels = document.querySelectorAll(".tech_panel");
//
//   tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//       const target = tab.getAttribute("data-tech");
//
//       // update active tab
//       tabs.forEach((t) => t.classList.remove("active"));
//       tab.classList.add("active");
//
//       // update visible panel
//       panels.forEach((panel) => {
//         if (panel.getAttribute("data-tech-panel") === target) {
//           panel.classList.add("active");
//         } else {
//           panel.classList.remove("active");
//         }
//       });
//     });
//   });
// });

const links = document.querySelectorAll(".pages_links a");

const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  // Expertise hover card (only if elements exist on the page)
  const items = document.querySelectorAll(".expertise_item");
  const card = document.querySelector(".expertise_center_details_card");
  const cardTitle = document.querySelector(".expertise_center_detail_title");
  const cardText = document.querySelector(".expertise_center_detail_text");
  const cardIcon = document.querySelector(".expertise_center_detail_icon img");

  if (items.length && card && cardTitle && cardText && cardIcon) {
    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cardTitle.textContent = item.dataset.title;
        cardText.textContent = item.dataset.text;
        cardIcon.src = item.dataset.icon;
        card.classList.add("active");
      });

      item.addEventListener("mouseleave", () => {
        card.classList.remove("active");
      });
    });
  }

  // Services sidebar tab panels (AI Services page)
  const serviceTabs = document.querySelectorAll("[data-service-tab]");
  const servicePanels = document.querySelectorAll("[data-service-panel]");

  if (serviceTabs.length && servicePanels.length) {
    serviceTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-service-tab");

        // update active tab
        serviceTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // update visible panel
        servicePanels.forEach((panel) => {
          if (panel.getAttribute("data-service-panel") === target) {
            panel.classList.add("active");
          } else {
            panel.classList.remove("active");
          }
        });
      });
    });

    // Ensure a default selection
    const initiallyActive =
      document.querySelector(".service_tab.active") || serviceTabs[0];
    if (initiallyActive) {
      initiallyActive.click();
    }
  }
});

const items = document.querySelectorAll(".expertise_item");

const card = document.querySelector(".expertise_center_details_card");
const cardTitle = document.querySelector(".expertise_center_detail_title");
const cardText = document.querySelector(".expertise_center_detail_text");
const cardIcon = document.querySelector(".expertise_center_detail_icon img");

items.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cardTitle.textContent = item.dataset.title;
        cardText.textContent = item.dataset.text;
        cardIcon.src = item.dataset.icon;

        card.classList.add("active");

    });

    item.addEventListener("mouseleave", () => {
        card.classList.remove("active");
    });

});