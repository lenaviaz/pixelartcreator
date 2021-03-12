/* pixel.js
 * creates the methods for implementing a grid on a canvas, button functions, and allows user to
 * fill in the grid with different colors, creating a pixel art image
*/
var size = 15;
var width = 10*size;
var height =  10*size;
//initial color before user selects one 
var s = 'black';
var isDrawing;
var scaleX = 1;
var scaleY = 1;
var undoArray = [];

window.onload = function() {
//canvas element 
 var ctx = document.getElementById('canvas').getContext('2d');

function draw(){

    for(y = 0; y < 40; y++){
        for(x = 0; x < 40; x++){
         ctx.rect(x*size, y*size, size, size)
            
        }
    }
   
    ctx.strokeStyle = "white";
    ctx.lineWidth = 0.05;
    ctx.stroke(); 
    
    
    for (y = 0; y <= 40; y++) {
        for (x = 0; x <= 40; x++) {
         let rect = ctx.rect(x * size, y * size, size, size);
         let isEven = y%2==0;
    
         if (x % 2 === 0) {
            ctx.fillStyle = isEven? "#d3d3d3":"white";
          } else {
            ctx.fillStyle = isEven?"white":"#d3d3d3";
          }
          ctx.fillRect(x*size, y*size, size, size);
        }
      }
      ctx.strokeStyle = "white";
      ctx.lineWidth = 0.05;
      ctx.stroke();
}   
    draw();
   
    
     function initCanvas(){

        function clickOne(){ 
            scaleX=1;
            scaleY=1;
        } document.getElementById("size1").addEventListener("click", clickOne);

        function clickTwo(){ 
            scaleX=2;
            scaleY=2;
        } document.getElementById("size2").addEventListener("click", clickTwo);

        function clickThree(){ 
            scaleX=3;
            scaleY=3;
        } document.getElementById("size3").addEventListener("click", clickThree);

    
  
    // function to fill the rectangle
     function fill(s, fx, fy) {
        ctx.fillStyle = s;
        ctx.fillRect(fx * size, fy * size, size*scaleX, size*scaleY);
    }
   
    
   
    //allows user to see coordinates of their mouse on the grid
    ctx.canvas.addEventListener('mousemove', function(event){
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        var corX = mouseX / size;
        var corY = mouseY / size;

        var status = document.getElementById('status');
       
        // generates the x and y coordinate, +1 because the first coordinate should be (1,1)
        var x = Math.floor(corX) + 1;
        var y = Math.floor(corY) + 1;
       //displays coordinate onscreen
        statusX.innerHTML = "MouseX : " + x;
        statusY.innerHTML = "MouseY : " + y;
    });

    //fill in all the functions, gets called when user clicks on the color
    function clickRed(){ 
        s = "red";
    } document.getElementById("red").addEventListener("click", clickRed);
 
    function clickOrange(){ 
        s = "orange";
    } document.getElementById("orange").addEventListener("click", clickOrange);

    function clickYellow(){ 
        s = "yellow";
    } document.getElementById("yellow").addEventListener("click", clickYellow);

    function clickGreen(){ 
        s = "green";
    } document.getElementById("green").addEventListener("click", clickGreen);

    function clickBlue(){ 
        s = "blue";
    } document.getElementById("blue").addEventListener("click", clickBlue);

    function clickPurple(){ 
        s = "purple";
    } document.getElementById("purple").addEventListener("click", clickPurple);

    function clickWhite(){ 
        s = "white";
    } document.getElementById("white").addEventListener("click", clickWhite);

    function clickBlack(){ 
        s = "black";
    } document.getElementById("black").addEventListener("click", clickBlack);

    function clickBrown(){ 
        s = "brown";
    } document.getElementById("brown").addEventListener("click", clickBrown);

    function clickPink(){ 
        s = "pink";
    } document.getElementById("pink").addEventListener("click", clickPink);

    function clickGray(){ 
        s = "gray";
    } document.getElementById("gray").addEventListener("click", clickGray);
 
    function clicklBlue(){ 
        s = "lightblue";
    } document.getElementById("lblue").addEventListener("click", clicklBlue);


    
  
    ctx.canvas.addEventListener('mousedown', function(event){
    
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        var fx = ~~ (mouseX / size);
        var fy = ~~ (mouseY / size);

        if(undoArray[undoArray.length-1] != 'd') undoArray[undoArray.length] = 'd';
        undoArray[undoArray.length] = scaleX+''+(fx+10)+''+(fy+10)+s;

       
        isDrawing = true;
        fill(s, fx, fy)
    });


    ctx.canvas.addEventListener('mousemove', function(event){
    
        if(isDrawing == true){
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        var fx = ~~ (mouseX / size);
        var fy = ~~ (mouseY / size);


        if (undoArray[undoArray.length-1] != scaleX+''+(fx+10)+''+(fy+10)+s) 
            undoArray[undoArray.length] = scaleX+''+(fx+10)+''+(fy+10)+s;
       // alert(undoArray[undoArray.length -1])
        
        isDrawing = true;
        fill(s, fx, fy)
        }
    });
    ctx.canvas.addEventListener('mouseup', function(event){

      var mouseX = event.offsetX;
      var mouseY = event.offsetY;
      var fx = ~~ (mouseX / size);
      var fy = ~~ (mouseY / size);

      isDrawing = false;

      

 

    });

    function clickUndo(){ 

//        for(a=undoArray.length-1; undoArray[a] && a>0; a--){alert(undoArray[a])} 
        
        for(a=undoArray.length-1; undoArray[a] != 'd' && a>0; a--){
            
            undoArray.pop();
        } 
        undoArray.pop();
       // alert(undoArray.length)
        
       draw();
        for(a=0; a<undoArray.length; a++){
       

              var x=undoArray[a].toString();
              var paintX = x.substring(1,3);
              var paintNumX=parseInt(paintX) - 10;

              var y=undoArray[a].toString();
              var paintY = y.substring(3,5);
              var paintNumY=parseInt(paintY) - 10;

              var s=undoArray[a].toString();
              var paintS = s.substring(5);

              var undoSize=undoArray[a].toString();
              //var paintSize= undoSize.substring(0,1);
              //var paintSizeNum=parseInt(paintSize);

              scaleY=scaleX=parseInt(undoSize.substring(0,1));
        
              
               
            fill(paintS, paintNumX, paintNumY);
            
              //  alert(x,y,s,undosize)
            }
        //   var x=undoArray[5].toString();
          //  }

       // var stringX = x.substring(0,2);
        
       // y=undoArray[undoArray.length-2].toString.substring(2,4);
      //   s=undoArray[undoArray.length-2].toString.substring(4);
     //  alert(scaleX);
      //  fill()

    
    } document.getElementById("undo").addEventListener("click", clickUndo);




}
window.addEventListener('load', function(event) {
    initCanvas();
});
initCanvas();
}