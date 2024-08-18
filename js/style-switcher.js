document.addEventListener('DOMContentLoaded', function() {
  // Yerel depolamadan tema seçimini al ve uygula
  const savedStyle = localStorage.getItem('theme-style');
  if (savedStyle) {
    setActiveStyle(savedStyle);
  }

  // Tema switcher toggler öğesini seç ve toggle işlevi ekle
  const toggler = document.querySelector('.style-switcher-toggler');
  toggler?.addEventListener('click', () => {
    document.querySelector('.style-switcher')?.classList.toggle('open');
  });

  // Tema değiştirme öğelerini seç ve her birine tıklama işlevi ekle
  const colors = document.querySelectorAll('.colors span');
  colors.forEach(color => {
    color.addEventListener('click', function() {
      const colorClass = this.className;
      setActiveStyle(colorClass);
    });
  });

  // Dark mode için iconu seç ve toggle işlevi ekle
  const dayNightToggle = document.querySelector('.day-night em');
  dayNightToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    dayNightToggle.classList.toggle('fa-sun');
    dayNightToggle.classList.toggle('fa-moon');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark') ? 'enabled' : 'disabled');
  });

  // Sayfa yüklendiğinde, dark mode durumunu kontrol et
  const darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'enabled') {
    document.body.classList.add('dark');
    dayNightToggle.classList.add('fa-sun');
    dayNightToggle.classList.remove('fa-moon');
  } else {
    dayNightToggle.classList.add('fa-moon');
    dayNightToggle.classList.remove('fa-sun');
  }
});

function setActiveStyle(styleName) {
  const alternateStyles = document.querySelectorAll('.alternate-style');
  alternateStyles.forEach(style => {
    style.disabled = style.getAttribute('title') !== styleName;
  });
  localStorage.setItem('theme-style', styleName);
}
