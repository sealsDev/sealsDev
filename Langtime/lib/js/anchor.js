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
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top - 150;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 300);
        });
    });

    $(document).ready(function(){
      $("#goToForm").on("click","div", function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();
          //забираем идентификатор бока с атрибута href
          var id  = $('#goToFormLink').attr('href'),
          //узнаем высоту от начала страницы до блока на который ссылается якорь
              top = $(id).offset().top - 180;
          //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({scrollTop: top}, 300);
      });
  });
    
}


$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});

scrollToAnchor();
scrollTop();