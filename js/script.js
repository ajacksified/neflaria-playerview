(function(window, $){
  $(function(){
    var template = $("#playerTemplate").html();

    $("form").bind("submit", function(e){
      e.preventDefault();

      $.ajax({
        url: 'http://web1.neflaria.com/api/player.php',
        dataType: 'jsonp',
        data: { player: $("#player").val() },
        success: function(data){
          var templateData  = { player: data };

          $("#playerInfo").html(Mustache.render(template, templateData));
        }
      });
    });
  });
})(window, jQuery);
