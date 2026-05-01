const dots = document.querySelectorAll('.chapter-dot');
  const pages = ['cover','brand-soul','positioning','visual-identity','verbal-identity','brand-experience','referral','sub-brand'];

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateDots() {
    const scrollY = window.scrollY;
    const winH = window.innerHeight;
    pages.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.offsetTop;
      const bot = top + el.offsetHeight;
      if (scrollY + winH/2 >= top && scrollY + winH/2 < bot) {
        dots.forEach(d => d.classList.remove('active'));
        if (dots[i]) dots[i].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateDots);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      scrollTo(pages[i]);
    });
  });