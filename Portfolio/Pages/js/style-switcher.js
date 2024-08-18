document.addEventListener('DOMContentLoaded', function() {
  // Yerel depolamadan tema seçimini al
  var savedStyle = localStorage.getItem('theme-style');
  if (savedStyle) {
    setActiveStyle(savedStyle);
  }

  // Tema switcher toggler öğesini seç
  var toggler = document.querySelector('.style-switcher-toggler');
  if (toggler) {
    toggler.addEventListener('click', function() {
      var styleSwitcher = document.querySelector('.style-switcher');
      if (styleSwitcher) {
        styleSwitcher.classList.toggle('open');
      }
    });
  }

  // Tema değiştirme öğelerini seç
  var colors = document.querySelectorAll('.colors .color-1, .colors .color-2, .colors .color-3, .colors .color-4, .colors .color-5');
  colors.forEach(function(color) {
    color.addEventListener('click', function() {
      setActiveStyle(this.className);
    });
  });
});

function setActiveStyle(styleName) {
  var link = document.getElementById('theme-style');
  if (link) {
    var alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach(function(style) {
      style.disabled = true; // Tüm alternatif stilleri devre dışı bırak
    });
    var activeStyle = document.querySelector(`.alternate-style[title="${styleName}"]`);
    if (activeStyle) {
      activeStyle.disabled = false; // Seçilen temayı etkinleştir
    }
    localStorage.setItem('theme-style', styleName); // Tema seçimini yerel depolamaya kaydet
  }
}
