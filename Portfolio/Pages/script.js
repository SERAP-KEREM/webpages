document.addEventListener("DOMContentLoaded", function () {
  // Mevcut sayfanın URL'ini al
  const currentUrl = window.location.href;
  
  // Tüm butonları seç
  const navLinks = document.querySelectorAll(".aside .nav li a");

  // Tüm butonlardan 'active' sınıfını kaldır ve ilgili butona 'active' sınıfı ekle
  navLinks.forEach(link => {
      // Tüm butonların 'active' sınıfını temizle
      link.classList.remove("active");

      // Eğer butonun href'i mevcut URL ile eşleşiyorsa, ona 'active' sınıfı ekle
      if (currentUrl.includes(link.href)) {
          link.classList.add("active");
      }
  });
});
