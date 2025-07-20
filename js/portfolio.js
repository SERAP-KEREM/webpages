// Projeyi gösteren işlev - MainPage animasyonu ile
function showProject(projectId) {
  // Tüm projeleri al
  var projects = document.querySelectorAll('.project-details');
  var navLinks = document.querySelectorAll(".aside .nav li a");
  
  // Önceki aktif projeyi back-section yap
  removeBackSection();
  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].classList.contains("active")) {
      addBackSection(navLinks[i].getAttribute("href").split("#")[1]);
    }
  }
  
  // Tüm projeleri pasif yap
  projects.forEach(function(project) {
    project.classList.remove('active');
    
    // Videoyu durdur
    var video = project.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });

  // Tüm menü linklerini pasif yap
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });

  // Seçili projeyi aktif yap
  var selectedProject = document.getElementById(projectId);
  if (selectedProject) {
    selectedProject.classList.add('active');

    // Tıklama ile video başlatmayı kontrol et
    var video = selectedProject.querySelector('video');
    if (video) {
      // Video başlatma işlevini ekle
      video.addEventListener('click', function() {
        video.play();
      });
    }
  }

  // İlgili menü linkini aktif yap
  var targetLink = document.querySelector(`[href="#${projectId}"]`);
  if (targetLink) {
    targetLink.classList.add('active');
  }
}

// Back section'ları temizle
function removeBackSection() {
  var projects = document.querySelectorAll('.project-details');
  for (let i = 0; i < projects.length; i++) {
    projects[i].classList.remove('back-section');
  }
}

// Back section ekle
function addBackSection(projectId) {
  var project = document.getElementById(projectId);
  if (project) {
    project.classList.add('back-section');
  }
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
