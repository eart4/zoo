document.addEventListener('DOMContentLoaded', function (){
    let burger = document.getElementById('burger');


    burger.addEventListener('click', function (){

        burger.classList.toggle('open');
    })

    document.querySelector('.burger').addEventListener('click', _=> {
        document.querySelector('.nav-burger').classList.toggle('nav-open');
      })

});



