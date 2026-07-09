(() => {
  const b = document.createElement('button');
  b.id = 'kiosk-yt-btn';
  b.innerHTML = `
    <svg width="26" height="18" viewBox="0 0 28 20" style="display:block;flex:0 0 auto">
      <rect width="28" height="20" rx="5" fill="#FF0000"/>
      <path d="M11 5.5v9l8-4.5z" fill="#fff"/>
    </svg>
    <span>YouTube</span>`;
  b.style.cssText = 'position:fixed;top:16px;right:16px;z-index:2147483647;display:flex;align-items:center;justify-content:center;gap:8px;width:170px;height:54px;padding:0;border:none;border-radius:14px;background:#fff;color:#1B1815;font:700 16px sans-serif;box-shadow:0 4px 16px rgba(0,0,0,.4);cursor:pointer;box-sizing:border-box';
  b.onclick = () => location.href = 'https://www.youtube.com';
  document.documentElement.appendChild(b);
})();
