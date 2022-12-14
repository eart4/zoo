document.addEventListener('DOMContentLoaded', function (){
    let burger = document.getElementById('burger');


    burger.addEventListener('click', function (){

        burger.classList.toggle('open');
    })

    document.querySelector('.burger').addEventListener('click', _=> {
        document.querySelector('.nav-burger').classList.toggle('nav-open');
      })

});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      slideToClickedSlide: true,
      slideClass: ''
    },

    breakpoints: {
        320:{
            slidesPerView: 1,
        },

        501:{
            slidesPerView: 2,
        },
        
        

        780:{
            slidesPerView: 3,
        },
        1221:{
            slidesPerView: 4
        }


    }

  });


  let myTopAnimals = new Swiper(".myAnimals", {
    slidesPerView: 3,

    spaceBetween: 31,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 500,
     

      breakpoints:{

        320:{
            slidesPerView: 1,
        },

        589:{
            slidesPerView: 2,
        },

        940:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
  });


  let myLowAnimals = new Swiper(".myAnimals-1", {
    slidesPerView: 3,
    spaceBetween: 31,
    speed: 500,




    breakpoints:{
        320:{
            slidesPerView: 1,
        },

        589:{
            slidesPerView: 2,
        },

        950:{
            slidesPerView: 3,
            spaceBetween: 30,
        },


    }

  });

  myTopAnimals.controller.control = myLowAnimals;
  myLowAnimals.controller.control = myTopAnimals;




