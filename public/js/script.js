// typing text section
let typingEffect = new Typed(".typing-text", {
    strings: ["Frontend", "Backend", "Web"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    showCursor: true,
    cursorChar: '|'
  });

// About Section Scrollreveal 

  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200
  });

  // Image from the left
  ScrollReveal().reveal('.about-section-content-left', {
    origin: 'left'
  });

  // Content from the right
  ScrollReveal().reveal('.about-section-content', {
    origin: 'right'
  });

  // Tabs fade up
  ScrollReveal().reveal('.nav-tabs', {
    origin: 'bottom',
    delay: 400
  });

  // Tab Content
  ScrollReveal().reveal('.tab-content', {
    origin: 'bottom',
    delay: 600
  });

  // Button
  ScrollReveal().reveal('.btn-about', {
    origin: 'bottom',
    delay: 800
  });

  // Services Section scrollreveal
  ScrollReveal().reveal(".service-content", {
    duration : 1000,
    origin : "bottom",
    distance : "60px",
    easing: "ease-in-out",
    reset : true,
    interval: 300
  });

  // portfolio section scrollrevals
ScrollReveal().reveal(".portfolio-info", {
  duration : 1000,
  origin : "bottom",
  distance : "60px",
  easing: "ease-in-out",
  reset : true,
  interval: 300
});
// Blog Section scrollreveals
ScrollReveal().reveal(".blog-info", {
  duration : 1000,
  origin : "bottom",
  distance : "60px",
  easing : "ease-in-out",
  reset :true,
  interval : 300
})
// Contact Section scrollreveals
ScrollReveal().reveal({
  duration : 1000,
  reset : true,
  distance : "60px",
  delay : 100
});
ScrollReveal().reveal(".contact-info-right", {
  delay : 200,
  origin : "left"
});
ScrollReveal().reveal(".contact-info", {
  delay : 400,
  origin : "bottom"
});
ScrollReveal().reveal(".new-letter", {
  delay : 600,
  origin : "right"
});




