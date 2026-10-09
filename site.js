// Sheen Digital — shared interactions

// Header hairline once the page has scrolled
const siteHead = document.querySelector(".site-head");
const onScroll = () => {
  siteHead.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
