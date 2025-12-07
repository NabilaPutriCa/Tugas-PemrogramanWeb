// script.js

// Data makanan
const foodData = {
  cookies: {
    title: "Cookies",
    image: "cookies.jpg"
  },
  icecream: {
    title: "Ice Cream",
    image: "icecream.jpg"
  },
  jelly: {
    title: "Jelly",
    image: "jelly.jpg"
  },
  chocolate: {
    title: "Coklat",
    image: "coklat.jpg"
  },
  candy: {
    title: "Permen",
    image: "permen.jpg"
  },
  marshmallow: {
    title: "Marshmallow",
    image: "marshmallow.jpg"
  },
  coffee: {
    title: "Coffee",
    image: "coffee.jpg"
  },
  pizza: {
    title: "Pizza",
    image: "pizza.jpg"
  },
  bread: {
    title: "Roti",
    image: "roti.jpg"
  },
  pasta: {
    title: "Pasta",
    image: "pasta.jpg"
  },
  cheesecake: {
    title: "Cheesecake",
    image: "cheesecake.jpg"
  },
  waffle: {
    title: "Waffle",
    image: "waffle.jpg"
  }
};

// Fungsi untuk menampilkan detail
function showDetail(foodType) {
  const food = foodData[foodType];
  if (!food) return;
  
  // Sembunyikan container utama
  document.getElementById('mainContainer').classList.add('hide-main');
  
  // Tampilkan tombol kembali
  document.getElementById('backToMain').classList.add('show');
  
  // Ambil konten lengkap dari card yang diklik
  const card = document.querySelector(`.card[data-food-type="${foodType}"]`);
  const fullContent = card.innerHTML;
  
  // Buat tampilan detail
  const detailHTML = `
    <div class="food-detail active">
      <div class="detail-header">
        <h2>${food.title}</h2>
        <button class="back-btn" onclick="showMain()">← Kembali</button>
      </div>
      <div class="detail-content">
        ${fullContent.replace('Klik untuk lihat detail →', '')}
      </div>
    </div>
  `;
  
  // Tampilkan detail
  document.getElementById('detailContainer').innerHTML = detailHTML;
  document.getElementById('detailContainer').scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk kembali ke tampilan utama
function showMain() {
  // Tampilkan kembali container utama
  document.getElementById('mainContainer').classList.remove('hide-main');
  
  // Sembunyikan tombol kembali
  document.getElementById('backToMain').classList.remove('show');
  
  // Hapus detail view
  document.getElementById('detailContainer').innerHTML = '';
  
  // Scroll ke atas
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Setup event listeners setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
  // Setup event listener untuk tombol kembali di header
  document.getElementById('backToMain').addEventListener('click', showMain);
  
  // Setup event listeners untuk setiap card
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const foodType = this.getAttribute('data-food-type');
      showDetail(foodType);
    });
  });
  
  // Tambahkan animasi fadeIn
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .hide-main {
      display: none;
    }
  `;
  document.head.appendChild(style);
});