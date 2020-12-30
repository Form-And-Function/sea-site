disintegrate.init();

if(document.querySelector('[data-dis-type="simultaneous"]')) {
  // If you do anything with dises, you need to wait for them to 
  // all finish loading
  window.addEventListener("disesLoaded", function() {
    disintegrate.dises.forEach(function(disObj) {
      if(disObj.elem.dataset.disType === "simultaneous") {
        disObj.elem.addEventListener("click", function(e) {
          disintegrate.createSimultaneousParticles(disObj);
        });
      }
    });
  });

  window.addEventListener("particlesReady", function() {
    disintegrate.dises[0].elem.classList.remove("hovered");
  });
}



// paperclips

var Paperclips = function() {
    this.name = "Paperclips";
    this.animationDuration = 1000; // in ms

    /*this.widthScaler = Math.round(50 * genNormalizedVal()); // Normalized val between -50 and 50
    this.numWaves = (genNormalizedVal() + 1 / 2) * 2 + 1;
    this.xPosFunc = t => { return Math.sin(this.numWaves * Math.PI * t); }; 

    this.heightScaler = Math.round(65 * (genNormalizedVal() + 1) / 2) + 10; // Normalized val between 10 and 75
    this.yPosFunc = t => { return t; }; 
    
    this.startRadius = 5 + Math.random() * 7;
    this.sizeFunc = t => { return 1 - t; };

    this.opacityFactor = Math.round(((genNormalizedVal() + 1) / 2) * 3 + 1);
    this.opacityFunc = t => { return 1 - EaseInOut(this.opacityFactor)(t); };
    
    this.firstRun = true;*/

    this.draw = (ctx, percent) => {
      percent = percent >= 1 ? 1 : percent;

      if(this.firstRun) {
        this.firstRun = false;
        this.startY += Math.random() * 20;
      }

      let currX = this.startX + this.xPosFunc(percent) * this.widthScaler;
      let currY = this.startY - this.yPosFunc(percent) * this.heightScaler;
      let radius = this.startRadius * this.sizeFunc(percent);
      let currOpacity = this.opacityFunc(percent);

      ctx.strokeStyle = "rgba(" + this.rgbArray[0] + ',' + this.rgbArray[1] + ',' + this.rgbArray[2] + ',' + currOpacity + ")";
      var path = new Path2D('M88.725,230.334V49.5c0-59.167-83-58.167-83.167,0-.131,45.833,0,193.166,0,236s70.167,41.166,70.167,0V70.334c0-36-55-39-55,0v147');
      ctx.stroke(path);

    };
  };
  disintegrate.addParticleType(HollowCircles);