(() => {
  const MENU_URL = 'https://desk.wapulse.com.tr/tablet';

  const b = document.createElement('button');
  b.id = 'kiosk-menu-btn';
  b.textContent = 'Menüye Dön';
  b.style.cssText = 'position:fixed;top:16px;right:16px;z-index:2147483647;display:flex;align-items:center;justify-content:center;gap:8px;width:170px;height:54px;padding:0;border:none;border-radius:14px;background:#B8461E;color:#fff;font:700 16px sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.4);cursor:pointer;box-sizing:border-box';

  const go = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.assign(MENU_URL);
  };

  // YouTube tıklamaları document seviyesinde yutabiliyor; window'daki
  // capture dinleyicisi HER ŞEYDEN önce çalışır, bizden habersiz duduramaz.
  window.addEventListener('pointerdown', (e) => { if (e.composedPath().includes(b)) go(e); }, true);
  window.addEventListener('click', (e) => { if (e.composedPath().includes(b)) go(e); }, true);

  // YouTube SPA'dır, DOM'u sürekli değiştirir; butonu silerse geri koy.
  const mount = () => {
    if (!document.getElementById('kiosk-menu-btn')) document.documentElement.appendChild(b);
  };
  mount();
  new MutationObserver(mount).observe(document.documentElement, { childList: true });
})();
