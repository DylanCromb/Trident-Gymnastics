export function setupNavDropdown() {
  const items = document.querySelectorAll<HTMLElement>('.has-submenu');
  items.forEach((item) => {
    const caret = item.querySelector<HTMLButtonElement>('.nav-caret');
    const submenu = item.querySelector<HTMLElement>('.submenu');
    if (!caret || !submenu) return;

    let openTimer: number | null = null;
    let closeTimer: number | null = null;
    const openDelay = 80;   // ms
    const closeDelay = 150; // ms

    const openMenu = () => {
      if (closeTimer) { window.clearTimeout(closeTimer); closeTimer = null; }
      if (item.classList.contains('open')) return;
      openTimer = window.setTimeout(() => {
        item.classList.add('open');
        caret.setAttribute('aria-expanded', 'true');
      }, openDelay);
    };

    const closeMenu = () => {
      if (openTimer) { window.clearTimeout(openTimer); openTimer = null; }
      closeTimer = window.setTimeout(() => {
        item.classList.remove('open');
        caret.setAttribute('aria-expanded', 'false');
      }, closeDelay);
    };

    // Hover intent (mouse)
    item.addEventListener('mouseenter', openMenu);
    item.addEventListener('mouseleave', closeMenu);

    // Click/touch toggle
    caret.addEventListener('click', (e) => {
      e.preventDefault();
      if (item.classList.contains('open')) {
        item.classList.remove('open'); 
        caret.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open'); 
        caret.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support
    item.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') { 
        item.classList.remove('open'); 
        caret.setAttribute('aria-expanded', 'false'); 
        caret.focus(); 
      }
      if (e.key === 'ArrowDown') { 
        const first = submenu.querySelector<HTMLElement>('a,button,[tabindex]:not([tabindex="-1"])');
        if (first) { 
          e.preventDefault(); 
          item.classList.add('open'); 
          caret.setAttribute('aria-expanded', 'true'); 
          first.focus(); 
        }
      }
    });

    // Outside click closes
    document.addEventListener('click', (e) => {
      if (!item.contains(e.target as Node)) {
        item.classList.remove('open'); 
        caret.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
