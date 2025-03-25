/* devamını oku button*/

// DOMContentLoaded olayını dinleyerek sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
  
  // Daha fazla oku ve kapat linklerini seç
  var readMoreLinks = document.querySelectorAll('.news-read-more-link');
  var closeLinks = document.querySelectorAll('.news-close-link');

  // Her bir "Daha Fazla Oku" linki için olay dinleyici ekle
  readMoreLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Linkin varsayılan davranışını engelle
          var newsItem = link.closest('.news-item'); // Bağlantının içinde bulunduğu haber öğesini bul
          var content = newsItem.querySelector('.news-content'); // Haber içeriğini bul
          content.classList.add('open'); // İçeriğe "open" sınıfını ekle (göster)
      });
  });

  // Her bir "Kapat" linki için olay dinleyici ekle
  closeLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Linkin varsayılan davranışını engelle
          var content = link.closest('.news-content'); // Bağlantının içinde bulunduğu içeriği bul
          content.classList.remove('open'); // İçeriğin üzerinden "open" sınıfını kaldır (gizle)
      });
  });
});
/* ------------------------------slider-------------------------------------------------- */
// Slayt gösterme işlevleri
let slaytIndeksi = 1; // Başlangıçta gösterilecek slaytın indeksi
slaytlarıGöster(slaytIndeksi); // İlk slaytı göster

// Slaytı ileri veya geri gösterme işlevleri
function artıSlaytlar(n) {
  slaytlarıGöster(slaytIndeksi += n); // Gösterilen slaytın indeksini artır veya azalt
}

// Belirli bir slaytı gösterme işlevi
function mevcutSlayt(n) {
  slaytlarıGöster(slaytIndeksi = n); // Belirtilen slaytın indeksini göster
}

// Tüm slaytları gösterme ve navigasyon noktalarını güncelleme işlevi
function slaytlarıGöster(n) {
  let i;
  let slaytlar = document.getElementsByClassName("benimSlaytlarım"); // Slayt elementlerini seç
  let noktalar = document.getElementsByClassName("nokta"); // Navigasyon noktalarını seç
  
  // Slayt indeksini sınır
  if (n > slaytlar.length) { slaytIndeksi = 1 }    
  if (n < 1) { slaytIndeksi = slaytlar.length }
  
  // Tüm slaytları gizle
  for (i = 0; i < slaytlar.length; i++) {
    slaytlar[i].style.display = "none";  
  }
  
  // Tüm navigasyon noktalarını aktif olmayan yap
  for (i = 0; i < noktalar.length; i++) {
    noktalar[i].className = noktalar[i].className.replace(" aktif", "");
  }
  
  // Belirtilen slaytı göster ve ilgili navigasyon noktasını aktif yap
  slaytlar[slaytIndeksi - 1].style.display = "block";  
  noktalar[slaytIndeksi - 1].className += " aktif";
}

// Otomatik slayt geçişini ayarla (4 saniyede bir slayt değişir)
setInterval(function() {
  artıSlaytlar(1);
}, 4000);

// jQuery kullanarak müşteri karuselini otomatik olarak başlatma (her 3 saniyede bir geçiş yapabacak )
$(document).ready(function(){
  $('#müşteriKarusel').carousel({
      interval: 3000
  });
});

/* SSS- */

/* İletişim formu gönderildiğinde kullanıcıya bildirim göster */
document.getElementById("contactForm").addEventListener("submit", function(event) {
  alert("Mesajınız gönderildi! Teşekkür ederiz.");
});


