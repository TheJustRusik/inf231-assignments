const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");

let page = 1;
const perPage = 10; // Number of images to load per request
let isLoading = false;

// Function to fetch and append images
function loadImages() {
  if (isLoading) return;

  isLoading = true;
  loading.style.display = "block";

  // Simulate fetching more images (replace with actual API call)
  setTimeout(() => {
    for (let i = 0; i < perPage; i++) {
      const image = document.createElement("img");
      image.src = "img.jpg";
      gallery.appendChild(image);
    }
    page++;
    isLoading = false;
    loading.style.display = "none";
  }, 1); // Simulate a delay, replace with actual AJAX or fetch request
}

// Function to check if user has scrolled to the bottom
function checkScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight - 100) {
    loadImages();
  }
}

// Initial load
loadImages();

// Event listener for scroll
window.addEventListener("scroll", checkScroll);
