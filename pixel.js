/* pixel.js
 * creates the methods for implementing a grid on a canvas, button functions, and allows user to
 * fill in the grid with different colors, creating a pixel art image_
*/
var size = 15;
var width = 10*size;
var height =  10*size;
//initial color before user selects one 
var s = 'black';
var isDrawing;
var scaleX = 1;
var scaleY = 1;
var drawStack = [];
var redoArray = [];
var hasDrawn = false;

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

        var slider = document.getElementById("MySlider");
        var output = document.getElementById("BrushSize");
        //output.innerHTML = slider.value; // Display the default slider value
        
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
          output.innerHTML = "Brush Size: " + slider.value;

          scaleX=this.value;
          scaleY=this.value;

        }
  
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
        //Brush Size

        var slider = document.getElementById("mySlider");
        var out = slider.nodeValue;
        
    });
    

function clickDownload(){

    var canvas = document.getElementById("canvas");
// Convert the canvas to data
var image = canvas.toDataURL();
// Create a link
var aDownloadLink = document.createElement('a');
// Add the name of the file to the link
aDownloadLink.download = 'canvas_image.png';
// Attach the data to the link
aDownloadLink.href = image;
// Get the code to click the download link
aDownloadLink.click();
    //fill in all the functions, gets called when user clicks on the color
} document.getElementById("download").addEventListener("click", clickDownload);

//     <!-------------------- Buttons Row 1     ---------------------------->
//<---------------------------------------------------------------------------->
    
    function clickRed(){ 
        s = "#F78181";
    } document.getElementById("red").addEventListener("click", clickRed);
 
    function clickOrange(){ 
        s = "#F7BE81";
    } document.getElementById("orange").addEventListener("click", clickOrange);

    function clickYellow(){ 
        s = "#F3F781";
    } document.getElementById("yellow").addEventListener("click", clickYellow);

    function clickGreen(){ 
        s = "#9FF781";
    } document.getElementById("green").addEventListener("click", clickGreen);

    function clickBlue(){ 
        s = "#A9F5F2";
    } document.getElementById("blue").addEventListener("click", clickBlue);

    function clickPurple(){ 
        s = "#BCA9F5";
    } document.getElementById("purple").addEventListener("click", clickPurple);

    function clickBlack(){ 
        s = "#FFFFFF";
    } document.getElementById("black").addEventListener("click", clickBlack);

//     <!-------------------- Buttons Row 2---------------------------->
//<----------------------------------------------------------------------------->
    
    function clickRed2(){ 
        s = "#FA5858";
    } document.getElementById("red2").addEventListener("click", clickRed2);
 
    function clickOrange2(){ 
        s = "#FAAC58";
    } document.getElementById("orange2").addEventListener("click", clickOrange2);

    function clickYellow2(){ 
        s = "#F4FA58";
    } document.getElementById("yellow2").addEventListener("click", clickYellow2);

    function clickGreen2(){ 
        s = "#82FA58";
    } document.getElementById("green2").addEventListener("click", clickGreen2);

    function clickBlue2(){ 
        s = "#81DAF5";
    } document.getElementById("blue2").addEventListener("click", clickBlue2);

    function clickPurple2(){ 
        s = "#9F81F7";
    } document.getElementById("purple2").addEventListener("click", clickPurple2);

    function clickBlack2(){ 
        s = "#E6E6E6";
    } document.getElementById("black2").addEventListener("click", clickBlack2);

//     <!-------------------- Buttons Row 3---------------------------->
//<--------------------------------------------------------------------------->

    function clickRed3(){ 
        s = "#FE2E2E";
    } document.getElementById("red3").addEventListener("click", clickRed3);

    function clickOrange3(){ 
        s = "#FE9A2E";
    } document.getElementById("orange3").addEventListener("click", clickOrange3);

     
    function clickYellow3(){ 
        s = "#F7FE2E";
    } document.getElementById("yellow3").addEventListener("click", clickYellow3);

    function clickGreen3(){ 
        s = "#64FE2E";
    } document.getElementById("green3").addEventListener("click", clickGreen3);

    function clickBlue3(){ 
        s = "#2E9AFE";
    } document.getElementById("blue3").addEventListener("click", clickBlue3);


    function clickPurple3(){ 
        s = "#9A2EFE";
    } document.getElementById("purple3").addEventListener("click", clickPurple3);

    function clickBlack3(){ 
        s = "#A4A4A4";
    } document.getElementById("black3").addEventListener("click", clickBlack3);
    
//     <!-------------------- Buttons Row 4     ---------------------------->
//<------------------------------------------------------------------------>

     function clickRed4(){ 
        s = "#FF0000";
    } document.getElementById("red4").addEventListener("click", clickRed4);

    function clickOrange4(){ 
        s = "#FF8000";
    } document.getElementById("orange4").addEventListener("click", clickOrange4);

       
    function clickYellow4(){ 
        s = "#FFFF00";
    } document.getElementById("yellow4").addEventListener("click", clickYellow4);

    function clickGreen4(){ 
        s = "#00FF00";
    } document.getElementById("green4").addEventListener("click", clickGreen4);

    function clickBlue4(){ 
        s = "#0000FF";
    } document.getElementById("blue4").addEventListener("click", clickBlue4);


    function clickPurple4(){ 
        s = "#A901DB";
    } document.getElementById("purple4").addEventListener("click", clickPurple4);

    function clickBlack4(){ 
        s = "#848484";
    } document.getElementById("black4").addEventListener("click", clickBlack4);
   
//<------------------------------------------------------------------>

//<------------------------ Buttons Row 5 ------------------------------------------>
//<------------------------------------------------------------------->
  
    function clickRed5(){ 
        s = "#8A0808";
    } document.getElementById("red5").addEventListener("click", clickRed5);

    function clickOrange5(){ 
        s = "#8A4B08";
    } document.getElementById("orange5").addEventListener("click", clickOrange5);

    
    function clickYellow5(){ 
        s = "#868A08";
    } document.getElementById("yellow5").addEventListener("click", clickYellow5);

    function clickGreen5(){ 
        s = "#088A08";
    } document.getElementById("green5").addEventListener("click", clickGreen5);

    function clickBlue5(){ 
        s = "#0404B4";
    } document.getElementById("blue5").addEventListener("click", clickBlue5);


    function clickPurple5(){ 
        s = "#8904B1";
    } document.getElementById("purple5").addEventListener("click", clickPurple5);

    function clickBlack5(){ 
        s = "#2E2E2E";
    } document.getElementById("black5").addEventListener("click", clickBlack5);


//<------------------------ Buttons Row 6 ------------------------------------------>
//<------------------------------------------------------------------->
 
    function clickRed6(){ 
        s = "#610B0B";
    } document.getElementById("red6").addEventListener("click", clickRed6);

    function clickOrange6(){ 
        s = "#8A4B08";
    } document.getElementById("orange6").addEventListener("click", clickOrange6);


    function clickYellow6(){ 
        s = "#5E610B";
    } document.getElementById("yellow6").addEventListener("click", clickYellow6);


    function clickGreen6(){ 
        s = "#0B610B";
    } document.getElementById("green6").addEventListener("click", clickGreen6);

    function clickBlue6(){ 
        s = "#08088A";
    } document.getElementById("blue6").addEventListener("click", clickBlue6);


    function clickPurple6(){ 
        s = "#4C0B5F";
    } document.getElementById("purple6").addEventListener("click", clickPurple6);


    function clickBlack6(){ 
        s = "#000000";
    } document.getElementById("black6").addEventListener("click", clickBlack6);

//<------------------------     END     ------------------------------------------>
//<------------------------------------------------------------------->

//<------------------------------------------------------------------->
  
    ctx.canvas.addEventListener('mousedown', function(event){
    
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        var fx = ~~ (mouseX / size);
        var fy = ~~ (mouseY / size);

        if(drawStack[drawStack.length-1] != 'd') 
        drawStack.push('d'); //doing this increases the length by one
        drawStack.push(scaleX+''+(fx+10)+''+(fy+10)+s);

       
        isDrawing = true;
        fill(s, fx, fy)
    });


    ctx.canvas.addEventListener('mousemove', function(event){
    
        if(isDrawing == true){
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        var fx = ~~ (mouseX / size);
        var fy = ~~ (mouseY / size);


        if (drawStack[drawStack.length-1] != scaleX+''+(fx+10)+''+(fy+10)+s) 
            drawStack[drawStack.length] = scaleX+''+(fx+10)+''+(fy+10)+s;
       // alert(drawStack[drawStack.length -1])
        
        isDrawing = true;
        fill(s, fx, fy)
        }
    });
    ctx.canvas.addEventListener('mouseup', function(event){
/* 
      var mouseX = event.offsetX;
      var mouseY = event.offsetY;
      var fx = ~~ (mouseX / size);
      var fy = ~~ (mouseY / size); */
      

      isDrawing = false;

    });

        function clickUndo(){ 

        //        for(a=drawStack.length-1; drawStack[a] && a>0; a--){alert(drawStack[a])} 
        redoArray.push('d');
                for(a=drawStack.length-1; drawStack[a] != 'd' && a>0; a--){
                
                    redoArray.push(drawStack[drawStack.length - 1]);
                    drawStack.pop();
                } 
                drawStack.pop(); //this pops 'd'
               // alert(drawStack.length)
                
               draw();
                for(a=0; a<drawStack.length; a++){
               
        
                      var x=drawStack[a].toString();
                      var paintX = x.substring(1,3);
                      var paintNumX=parseInt(paintX) - 10;
        
                      var y=drawStack[a].toString();
                      var paintY = y.substring(3,5);
                      var paintNumY=parseInt(paintY) - 10;
        
                      var s=drawStack[a].toString();
                      var paintS = s.substring(5);
        
                      var undoSize=drawStack[a].toString();
                      //var paintSize= undoSize.substring(0,1);
                      //var paintSizeNum=parseInt(paintSize);
        
                      scaleY=scaleX=parseInt(undoSize.substring(0,1));
                
                      
                       
                    fill(paintS, paintNumX, paintNumY);
                    
                    }
            
            } document.getElementById("undo").addEventListener("click", clickUndo);
        

    function clickRedo(){

    //draw();

    drawStack.push('d');
    //redoArray.pop();

    for(b=redoArray.length-1; redoArray[b] != 'd' && b>0; b--){

    drawStack.push(redoArray[b]);
    redoArray.pop();
    }
    redoArray.pop();

    draw();
    for(a=0; a<drawStack.length; a++){
               
        
        var x=drawStack[a].toString();
        var paintX = x.substring(1,3);
        var paintNumX=parseInt(paintX) - 10;

        var y=drawStack[a].toString();
        var paintY = y.substring(3,5);
        var paintNumY=parseInt(paintY) - 10;

        var s=drawStack[a].toString();
        var paintS = s.substring(5);

        var undoSize=drawStack[a].toString();
        //var paintSize= undoSize.substring(0,1);
        //var paintSizeNum=parseInt(paintSize);

        scaleY=scaleX=parseInt(undoSize.substring(0,1));
  
        
         
      fill(paintS, paintNumX, paintNumY);
      
      }


    } document.getElementById("redo").addEventListener("click", clickRedo);
      
   

}
window.addEventListener('load', function(event) {
    initCanvas();
});
initCanvas();
}
