function showProject(projectId) {
  // Tüm projeleri gizle
  var projects = document.querySelectorAll('.project-details');
  projects.forEach(function(project) {
    project.classList.remove('active');
  });

  // Seçili projeyi göster
  var selectedProject = document.getElementById(projectId);
  selectedProject.classList.add('active');

  // Tüm butonlardan 'active' sınıfını kaldır ve ilgili butona 'active' sınıfı ekle
  var navLinks = document.querySelectorAll(".aside .nav li a");
  navLinks.forEach(function(link) {
    link.classList.remove('active');
    
    // Tıklanan projenin id'si ile href değerini karşılaştır
    if (link.getAttribute('href').includes(projectId)) {
      link.classList.add('active');
    }
  });
}

// Sayfa yüklendiğinde ve geri/ileri tuşlarına basıldığında çalışacak işlevi tanımla
function handleNavigation() {
  var currentHash = window.location.hash.substring(1);

  if (currentHash) {
    // Eğer hash varsa, o projeyi göster
    showProject(currentHash);
  } else {
    // Hash yoksa, varsayılan olarak ilk projeyi göster
    showProject('gta-clone');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  handleNavigation();

  // Geri/ileri tuşlarına basıldığında sayfayı yeniden yüklemek yerine projeyi değiştir
  window.addEventListener('popstate', function() {
    handleNavigation();
  });
});
