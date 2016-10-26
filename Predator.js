var Predator = (function () {
  var carnivores = [];
  var herbivores = [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText);
        callbackToInvoke(carnivores);
      });
      loader.open("GET", "carnivores.json");
      loader.send();
    },
    
    loadHerbivores: function(functionToInvoke){
      var herbLoad = new XMLHttpRequest();
      herbLoad.addEventListener("load", function (){
        herbivores = JSON.parse(this.responseText);
        functionToInvoke(herbivores);
      });
      herbLoad.open("GET", "herbivores.json");
      herbLoad.send();
    }
  }
})();