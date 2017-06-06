$(document).ready(function(){
   
    $('.scrollspy').scrollSpy();
    var options = [
      {selector: '#nav_f', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#index-banner', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#intro', offset: 50, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#work', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);

    $('.modal').modal();

  });

