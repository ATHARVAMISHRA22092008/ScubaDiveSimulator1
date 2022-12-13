// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables     
      var posX =(Math.random() * 5000 + (-1000));      
      var posY = (Math.random() * 3000.005 + (3000));
      var posZ = (Math.random() * -10000 + 0);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createRings(id, position);
    }
  } ,

  createRings: function(id, position) { 
    
    var terrainEl = document.querySelector("#terrain");

    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id",id);
    ringEl.setAttribute("position",position);
    ringEl.setAttribute("gltf-model", "./assets/models/roman_coin/scene.gltf");
    ringEl.setAttribute("scale", {x: 50, y: 50, z: 50})
    ringEl.setAttribute("rotation", {x: 90, y: 0, z: 0})  

    terrainEl.appendChild(ringEl);
  }
});

