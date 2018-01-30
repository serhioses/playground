'use strict';

(function () {
  // var f = new File(['text'], 'test.txt', {
  //   type: 'text/plain'
  // }),
  //   url = URL.createObjectURL(f),
  //   a = document.createElement('a');

  // a.href = url;
  // a.innerHTML = 'download';
  // a.download = f.name;

  // document.body.appendChild(a);

  // console.log(url);

  // var a = new Blob();

  // // Create a 1024-byte ArrayBuffer
  // // buffer could also come from reading a File

  // var buffer = new ArrayBuffer(1024);

  // // Create ArrayBufferView objects based on buffer

  // var shorts = new Uint16Array(buffer, 512, 128);

  // var bytes = new Uint8Array(buffer, shorts.byteOffset + shorts.byteLength);

  // var b = new Blob(["foobarbazetcetc" + "birdiebirdieboo"], {type: "text/plain;charset=utf-8"});

  // var c = new Blob([b, shorts]);

  // var a = new Blob([b, c, bytes]);

  // var d = new Blob([buffer, b, c, bytes]);
  
  // var f = new File([d], 'test.txt');
  // var url = URL.createObjectURL(f),
  //   an = document.createElement('a');

  // an.href = url;
  // an.innerHTML = 'download';
  // an.download = f.name;

  // document.body.appendChild(an);

   var context = document.getElementsByTagName('canvas')[0].getContext('2d');

 var lastX = context.canvas.width * Math.random();
 var lastY = context.canvas.height * Math.random();
 var hue = 0;
 function line() {
   context.save();
   context.translate(context.canvas.width/2, context.canvas.height/2);
   context.scale(0.9, 0.9);
   context.translate(-context.canvas.width/2, -context.canvas.height/2);
   context.beginPath();
   context.lineWidth = 5 + Math.random() * 10;
   context.moveTo(lastX, lastY);
   lastX = context.canvas.width * Math.random();
   lastY = context.canvas.height * Math.random();
   context.bezierCurveTo(context.canvas.width * Math.random(),
                         context.canvas.height * Math.random(),
                         context.canvas.width * Math.random(),
                         context.canvas.height * Math.random(),
                         lastX, lastY);

   hue = hue + 10 * Math.random();
   context.strokeStyle = 'hsl(' + hue + ', 50%, 50%)';
   context.shadowColor = 'white';
   context.shadowBlur = 10;
   context.stroke();
   context.restore();
 }
 setInterval(line, 50);

 function blank() {
   context.fillStyle = 'rgba(0,0,0,0.1)';
   context.fillRect(0, 0, context.canvas.width, context.canvas.height);
 }
 setInterval(blank, 40);
}());
