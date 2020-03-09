function scrollTop() {
  var btn = $('#back-top');


btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
}

function scrollToAnchor() {
  $(document).ready(function(){
        $("#nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 150;
            $('body,html').animate({scrollTop: top}, 300);
        });
    });

    $(document).ready(function(){
      $("#goToForm").on("click","button", function (event) {
          event.preventDefault();
          var id  = $('#goToFormLink').attr('href'),
              top = $(id).offset().top - 180;
          $('body,html').animate({scrollTop: top}, 300);
      });
  });
  
}

function teachHoverHandler() {
  let teacherHover = document.querySelector(".hover");

teacherHover.addEventListener('mouseover', (e) => {
  teacherHover.classList.remove('hover');
});
}

function dropDownElemenet() {
  $('.dropdown-el').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#'+$(e.target).attr('for')).prop('checked',true);
  });
  $(document).click(function() {
    $('.dropdown-el').removeClass('expanded');
  });
}

function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector('.burger-menu__botton');
  let links = menu.querySelector('.burger-menu__link');
  let overlay = menu.querySelector('.burger-menu__overlay');
  let ham = document.querySelector('.ham');
  let engMenu = menu.querySelector('#cadad');
  let subMenu = menu.querySelector('#hgfks');
  let subMenuEng = menu.querySelector('#faadf');
  let courseMenu = menu.querySelector('#gfdas');
  let arrow = menu.querySelector('.arrow-icon');
  let arrow2 = menu.querySelector('.arrow-icon2');

  console.log(button);

  button.addEventListener('click', (e) => {
      e.preventDefault()
      toggleMenu();
  });

  overlay.addEventListener('click', () => {
      toggleMenu();
      if(ham.classList.contains('active')) {
          ham.classList.remove('active');
      }

      if(!subMenuEng.classList.contains('burger-menu__hidden')) {
          subMenuEng.classList.add('burger-menu__hidden');
      }
      
      if(!subMenu.classList.contains('burger-menu__hidden__link')) {
          subMenu.classList.add('burger-menu__hidden__link');
      }

      if(arrow.classList.contains('open')) {
          arrow.classList.remove('open');
      }

      if(arrow2.classList.contains('open')) {
          arrow2.classList.remove('open');
      }
  });

  engMenu.addEventListener('click', () => {
      subMenuEng.classList.toggle('burger-menu__hidden');
      arrow2.classList.toggle('open');
  });

  courseMenu.addEventListener('click', () => {
      subMenu.classList.toggle('burger-menu__hidden__link');
      arrow.classList.toggle('open');

      if(arrow2.classList.contains('open')) {
          arrow2.classList.remove('open');
      }

      if(!subMenuEng.classList.contains('burger-menu__hidden')) {
          subMenuEng.classList.add('burger-menu__hidden');
      }
  });

  ham.addEventListener('click', (e) => {
      if(!subMenuEng.classList.contains('burger-menu__hidden')) {
          subMenuEng.classList.add('burger-menu__hidden');
      }
      
      if(!subMenu.classList.contains('burger-menu__hidden__link')) {
          subMenu.classList.add('burger-menu__hidden__link');
      } 

      if(arrow.classList.contains('open')) {
          arrow.classList.remove('open');
      }

      if(arrow2.classList.contains('open')) {
          arrow2.classList.remove('open');
      }
  });

  function toggleMenu() {
      menu.classList.toggle('burger-menu_active');

      if(menu.classList.contains('burger-menu_active')) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'visible';
      }
  }
}

burgerMenu('.burger-menu');
scrollToAnchor();
scrollTop();
teachHoverHandler();
dropDownElemenet();