document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const toggleNavbarShadow = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };
  toggleNavbarShadow();
  window.addEventListener("scroll", toggleNavbarShadow);

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px",
  };

  const inViewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".section-header, .service-card, .stat-item, .process-step, .benefit-card, .neon-accordion .accordion-item",
    )
    .forEach((element) => inViewObserver.observe(element));

  const animateCounter = (element, target, suffix = "+") => {
    const duration = 2000;
    const frameTime = 16;
    const increment = target / (duration / frameTime);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = `${target}${suffix}`;
        clearInterval(timer);
      } else {
        element.textContent = `${Math.floor(current)}${suffix}`;
      }
    }, frameTime);
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          !entry.isIntersecting ||
          entry.target.classList.contains("counted")
        ) {
          return;
        }

        const numberElement = entry.target.querySelector(".stat-number");
        const targetValue = parseInt(
          numberElement.getAttribute("data-target"),
          10,
        );
        const labelText = entry.target.querySelector(".stat-label").textContent;
        const suffix = labelText.includes("Satisfação")
          ? "%"
          : labelText.includes("24h")
            ? "h"
            : "+";

        animateCounter(numberElement, targetValue, suffix);
        entry.target.classList.add("counted");
      });
    },
    { threshold: 0.5 },
  );

  document
    .querySelectorAll(".stat-item")
    .forEach((item) => statsObserver.observe(item));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetSelector = anchor.getAttribute("href");
      const target = document.querySelector(targetSelector);
      if (!target) {
        return;
      }

      event.preventDefault();
      const offset = navbar.offsetHeight;
      const targetPosition = target.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse?.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse?.hide();
      }

      const offcanvasEl = document.getElementById("navbarOffcanvas");
      if (offcanvasEl) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        bsOffcanvas?.hide();
      }
    });
  });

  /* ── Active nav-link por seção visível ── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    ".offcanvas-body .nav-link, .navbar-nav .nav-link",
  );

  const highlightActiveLink = () => {
    const scrollY = window.scrollY + navbar.offsetHeight + 60;
    let currentId = "";

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentId}`,
      );
    });
  };

  highlightActiveLink();
  window.addEventListener("scroll", highlightActiveLink);

  const setStagger = (selector, step) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.style.transitionDelay = `${index * step}s`;
    });
  };

  setStagger(".service-card", 0.15);
  setStagger(".process-step", 0.12);
  setStagger(".benefit-card", 0.1);
  setStagger(".stat-item", 0.15);
  setStagger(".neon-accordion .accordion-item", 0.08);

  const accordionElement = document.getElementById("servicosAccordion");
  if (accordionElement) {
    const toggleAccordionGlow = (event, isOpen) => {
      event.target
        .closest(".accordion-item")
        ?.classList.toggle("is-open", isOpen);
    };

    accordionElement
      .querySelectorAll(".accordion-collapse")
      .forEach((collapse) => {
        collapse.addEventListener("show.bs.collapse", (event) =>
          toggleAccordionGlow(event, true),
        );
        collapse.addEventListener("hide.bs.collapse", (event) =>
          toggleAccordionGlow(event, false),
        );
      });

    accordionElement
      .querySelectorAll(".accordion-collapse.show")
      .forEach((collapse) =>
        collapse.closest(".accordion-item")?.classList.add("is-open"),
      );
  }
});
