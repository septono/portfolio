

// window.addEventListener('load', function(){
  $(function() {
    $.fn.extend({
      randomPh : function(num) {
        return this.each(function() {
          var chn = $(this).children().hide().length;
          for(var i = 0; i < num && i < chn; i++) {
            var r = parseInt(Math.random() * (chn - i)) + i;
          $(this).children().eq(r).show().prependTo($(this));
          }
        });
      }
    });
  
    $("[randomPh]").each(function() {
      $(this).randomPh($(this).attr("randomPh"));
    });
  
  });
// });



