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
      
    },

    breakpoints: {
        320:{
            slidesPerView: 3,
        },
        1221:{
            slidesPerView: 4
        }


    }

  });



