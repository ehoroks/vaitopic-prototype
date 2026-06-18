// VaiTopic! — protótipo — rupturas de todas as páginas

function showRuptura(msg) {
  const banner = document.getElementById('ruptura-banner');
  if (!banner) return;
  banner.textContent = msg;
  banner.classList.add('show');
  clearTimeout(window.__rupturaTimeout);
  window.__rupturaTimeout = setTimeout(() => {
    banner.classList.remove('show');
  }, 4200);
}
