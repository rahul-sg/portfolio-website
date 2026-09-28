// The pages are static HTML and render without this file. Two jobs only:
// the light/dark toggle, and marking the current section in the sub-nav.
(function () {
  // ── Theme ────────────────────────────────────────────────────────────────
  // Light is the default. A choice is remembered per browser; the pre-paint
  // script in <head> applies it before first paint so there is no flash.
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  const label = () => {
    if (!toggle) return;
    const dark = root.dataset.theme === "dark";
    toggle.querySelector(".theme-toggle-label").textContent = dark ? "Light" : "Dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };

  if (toggle) {
    label();
    toggle.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", root.dataset.theme);
      } catch (e) {
        // Private browsing, or storage is blocked. The toggle still works
        // for this page view; it just will not be remembered.
      }
      label();
    });
  }

  // ── Current section ──────────────────────────────────────────────────────
  // Project pages point the nav at "../index.html#work", which is not a valid
  // selector, so only same-page hash links are wired up.
  const navLinks = Array.from(document.querySelectorAll(".subnav a")).filter((link) =>
    (link.getAttribute("href") || "").startsWith("#")
  );
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const setCurrent = (id) => {
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-current", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setCurrent(visible.target.id);
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
})();
