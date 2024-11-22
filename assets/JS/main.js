
/*let c = 1;
const Rotate= ()=>{
    document.querySelector(".sliderss").innerHTML =     
    `<img src="./assets/img/sliders/mv-item${c}.jpg" alt="the revenant img">`;

}


setInterval( ()=>{
    Rotate();
    c++;
 }, 3000);
*/

/*const sliderRow = document.querySelector(".slider-row");
const totalImages = document.querySelectorAll(".slider-img").length;
const buttons = document.querySelectorAll(".slider-btn");

const imagesPerView = 4; // Number of images visible in one view
let currentSlide = 0; // Track the current slide index

// Function to move the slider to a specific slide
function moveToSlide(slideIndex) {
  currentSlide = slideIndex * imagesPerView; // Calculate the new starting image index
  const offset = -(100 / (totalImages / imagesPerView)) * slideIndex; // Calculate percentage offset
  sliderRow.style.transform = `translateX(${offset}%)`;

  // Update button active state
  buttons.forEach((btn, index) => {
    btn.classList.toggle("active", index === slideIndex);
  });
}

// Add event listeners to buttons
buttons.forEach((button, index) => {
  button.addEventListener("click", () => moveToSlide(index));
});

// Initialize the first button as active
buttons[0].classList.add("active");
*/


const sliderRow = document.querySelector(".slider-row");
const totalImages = document.querySelectorAll(".slider-img").length;
const buttons = document.querySelectorAll(".slider-btn");

const imagesPerView = 4; // Number of images visible in one view
let currentSlide = 0; // Track the current slide index
let autoSlideInterval; // Store the interval ID for automatic sliding

// Function to move the slider to a specific slide
function moveToSlide(slideIndex) {
  currentSlide = slideIndex * imagesPerView; // Calculate the new starting image index
  const offset = -(100 / (totalImages / imagesPerView)) * slideIndex; // Calculate percentage offset
  sliderRow.style.transform = `translateX(${offset}%)`;

  // Update button active state
  buttons.forEach((btn, index) => {
    btn.classList.toggle("active", index === slideIndex);
  });
}

// Function to handle automatic sliding
function slideImagesAutomatically() {
  currentSlide += imagesPerView; // Move to the next set of images
  if (currentSlide >= totalImages) {
    currentSlide = 0; // Reset to the beginning if at the end
  }

  const offset = -(100 / (totalImages / imagesPerView)) * (currentSlide / imagesPerView); // Calculate percentage offset
  sliderRow.style.transform = `translateX(${offset}%)`;

  // Update button active state
  const activeButtonIndex = Math.floor(currentSlide / imagesPerView);
  buttons.forEach((btn, index) => {
    btn.classList.toggle("active", index === activeButtonIndex);
  });
}

// Function to reset automatic sliding after a manual interaction
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Stop the current interval
  autoSlideInterval = setInterval(slideImagesAutomatically, 2000); // Restart the interval
}

// Add event listeners to buttons
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    moveToSlide(index); // Move to the selected slide
    resetAutoSlide(); // Restart automatic sliding
  });
});

// Start automatic sliding
autoSlideInterval = setInterval(slideImagesAutomatically, 2000);

// Initialize the first button as active
buttons[0].classList.add("active");





var loginBtn = document.querySelector(".login-link");


loginBtn.onclick = function() {
   document.querySelector(".my-modal").classList.remove("d-none");
}

var close = document.querySelector(".close-btn");

close.onclick = function() {
   document.querySelector(".my-modal").classList.add("d-none");
}

var signUp = document.querySelector(".signup-link");

signUp.onclick = function() {
   document.querySelector(".my-modal-sign").classList.remove("d-none");
}

document.querySelector(".close-button").onclick = function() {
    document.querySelector(".my-modal-sign").classList.add("d-none");
}




/**for trailer ************************************************************************* */


let array_for_time = ["2:55", "2:37", "2:44", "2:43", "2:32", "3:11", "2:30"];
let array_for_name = [
  "Interstellar",
  "Oblivion - Trailer",
  "Logan Official Trailer 1 (2017) - Hugh Jackman",
  "Beauty and the Beast: Official Teaser Trailer 2",
  "Fast & Furious 8 - Official Trailer 2",
  "Kong: Skull Island - Rise of the King",
  "WONDER WOMAN - Official Trailer"
];

let start = 1;
let end = 5;
let visibleCount = 4;
const maxLimit = array_for_name.length;
let translateY = 0;

const height = 76; // Height of each item

// Function to update the display
const display = (start, end) => {
  let video = ``;
  let result = ``;

  // Render video iframe based on the selected trailer
  if (start == 1) {
    video = `<iframe width="660" height="510" src="https://www.youtube.com/embed/zSWdZVtXT7E?si=eJgOGJ132WOLGzA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (start == 2) {
    video = `<iframe width="660" height="510" src="https://www.youtube.com/embed/UsjdRsrR6cs?si=x-2vhpN2LlmaI4te" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (start == 3) {
    video = `<iframe width="660" height="510" src="https://www.youtube.com/embed/Div0iP65aZo?si=61hiGoVB6LUrI6RJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (start == 4) {
    video = `<iframe width="660" height="510" src="https://www.youtube.com/embed/DRoQfD5demw?si=Ve_LJolM5s7VdL5j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (start == 5) {
    video = `<iframe width="660" height="510" src="https://www.youtube.com/embed/NxhEZG0k9_w?si=ptsFSXjIL7bzNYH-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (start == 6) {
    video = `<iframe width="660" height="510" src="https://www.youtube.com/embed/44LdLqgOpjo?si=_qlbaWINRsEJCJsN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (start == 7) {
    video = `<iframe width="660" height="510" src="https://www.youtube.com/embed/1Q8fG0TtVAY?si=h2HMOAe8yH8pxiJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }

  // Render slider items
  for (let i = 1; i <= maxLimit; i++) {
    result += `
        <div class="each-img ${i === start ? "selected" : ""}">
          <img src="./assets/img/trailers/trailer${i}.jpg" alt="${array_for_name[i - 1]}">
          <div class="trailer-info">
            <h4>${array_for_name[i - 1]}</h4>
            <p>${array_for_time[i - 1]}</p>
          </div>
        </div>
      `;
  }

  // Update DOM
  document.querySelector(".main-slider").innerHTML = video;
  document.querySelector(".row-y-slider").innerHTML = result;
  document.querySelector(".row-y-slider").style.transform = `translateY(${-translateY}px)`;

  attachClickHandlers(); // Attach click handlers to the new items
};

// Function to update selection when an item is clicked
const updateSliderSelection = (index) => {
  start = index; // Update start index to the clicked item
  end = start + visibleCount - 1;

  translateY = (start - 1) * height; // Recalculate translateY based on the selected item
  display(start, end); // Re-render the display
};

// Attach click event listeners to each slider item
const attachClickHandlers = () => {
  const items = document.querySelectorAll(".each-img");
  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      updateSliderSelection(index + 1); // Update slider selection
    });
  });
};

// Event listeners for buttons
document.querySelector(".fa-chevron-down").onclick = function () {
  start++;
  end++;
  if (start > maxLimit) {
    start = maxLimit;
  } else {
    translateY += height;
    display(start, end);
  }
};

document.querySelector(".fa-chevron-up").onclick = function () {
  start--;
  end--;
  if (start < 1) {
    start = 1;
  } else {
    translateY -= height;
    display(start, end);
  }
}

// Initial render
display(start, end);







/*sliders for the second section ********************************/




let arr = []; // Array to store movie items
let currentPage = 0; // Tracks the current page (for buttons)
let maxPages = 3;

const createArr = (index) => {
  arr = [];
  let c1 = 1;
  let dis = ``;
  while (index--) {
    dis = `<div class="movie-item">
             <img src="./assets/img/sliders/mv-item${c1}.jpg" alt="slider${c1}">
           </div>`;
    arr[c1 - 1] = dis;
    c1++;
  }
  console.log(arr); 
};

const display2 = () => {
  document.querySelector(".movie-list").innerHTML = ``;
  const start = currentPage * 4; // Calculate start index
  const end = Math.min(start + 4, arr.length); // Calculate end index
  for (let i = start; i < end; i++) {
    document.querySelector(".movie-list").innerHTML += arr[i];
  }
};

document.querySelectorAll(".tab-links li").forEach((link, index) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelectorAll(".tab-links li").forEach(link => link.classList.remove("active"));
    this.classList.add("active");
    
    let num = 8;
    maxPages = 2;
    if (index === 0) { 
      num = 9;
      maxPages = 3;
    }
    createArr(num);
    currentPage = 0;
    display2();
    updateButtonVisibility();
  });
});

// Slider Buttons Click Event
document.querySelectorAll(".slider-btn-links").forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index < maxPages) { // Only allow up to maxPages
      currentPage = index; // Set current page based on button
      display2(); // Update displayed movies
    }
  });
});

// Function to update button visibility
const updateButtonVisibility = () => {
  const buttons = document.querySelectorAll(".slider-btn-links");
  buttons.forEach((button, index) => {
    if (index < maxPages) {
      button.style.display = "inline-block"; // Show buttons for valid pages
    } else {
      button.style.display = "none"; // Hide buttons beyond maxPages
    }
  });
};

createArr(9);
display2();
updateButtonVisibility();

