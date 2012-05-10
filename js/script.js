(function(window, $){
  $(function(){
    var template = $("#playerTemplate").html();

    var loadData = function(playerName){
      $.ajax({
        url: 'http://web1.neflaria.com/api/player.php',
        dataType: 'jsonp',
        data: { player: playerName },
        success: function(data){
          window.location.hash = $("#player").val();
          var templateData  = { player: data };

          $("#playerInfo").html(Mustache.render(template, templateData));
        }
      });
    }

    $("form").bind("submit", function(e){
      e.preventDefault();
      loadData($("#player").val());
    });

    if(window.location.hash){
      player = window.location.hash.substr(1,window.location.hash.length);

      $("#player").val(player);
      loadData(player);
    }
  });
})(window, jQuery);
