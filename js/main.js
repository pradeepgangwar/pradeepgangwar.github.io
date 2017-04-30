$(document).ready(function(){
   
    var options = [
    {selector: '#scrol', offset: 500, callback: 'Materialize.fadeInImage("#scrol")' }
  ];
  Materialize.scrollFire(options);
  });
