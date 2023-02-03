if(window.matchMedia('(max-width: 769px)').matches){
  // sp用に画像差し替え
  $('img').each(function(){
      var change = $(this).attr('src');
      if(change.indexOf('-pc') > -1){
          var change = change.replace('-pc','-sp');
          $(this).attr('src',change);
      }
  });
}

//menu
$(".menu-btn, nav a").click(function() {
  $('.menu-btn').toggleClass('active');
  $('nav').toggleClass('active');
});

// faq
$('.faq dl dt').click(function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle();
});

//スムーズスクロール
$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});
