 function up() {
     var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
     if (top > 0) {
         window.scrollBy(0, ((top + 100) / -25));
         t = setTimeout('up()', 20);
     } else clearTimeout(t);
     return false;
 }

 $(document).ready(function() {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
       
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 1300, 'linear');
      });
});