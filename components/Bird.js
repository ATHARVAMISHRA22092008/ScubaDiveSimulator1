// Registering component in Target.js

AFRAME.registerComponent("flying-birds", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `bird${i}`;
  
        //position variables     
        var posX =(Math.random() * 5000 + (-1000));      
        var posY = (Math.random() * 3000.005 + (3000));
        var posZ = (Math.random() * -10000 + 0);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createBirds(id, position);
      }
    } ,
  
    createBirds: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var birdEl = document.createElement("a-entity");
  
      birdEl.setAttribute("id",id);
      birdEl.setAttribute("position",position);
            
      birdEl.setAttribute("gltf-model", "./assets/models/fish/scene.gltf");
      birdEl.setAttribute("scale", "25 25 25");
      birdEl.setAttribute("rotation", {x: 180, y:-90, z:0});   
  
      terrainEl.appendChild(birdEl);
    }
  });
  
  