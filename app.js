const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");



menu.addEventListener("click" , ()=>{
  
    menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  
  
})

window.addEventListener("scroll" , ()=>{
  
  header.classList.toggle("shadow" ,window.scrollY > 0)
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
})

var swiper = new Swiper(".home", {
  // slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".coming-container" , {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  })

  
