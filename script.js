'use strict';

// Wheel
// (function () {
//   var canvas = document.getElementById('canvas'),
//     ctx = canvas.getContext('2d'),
//     gap = 0.02,
//     startAngle = 0,
//     endAngle, step,
//     colors = ['green', 'red', 'blue', 'yellow', 'purple', 'magenta', 'brown'],
//     store = {
//       segments: []
//     },
//     center = [150, 150], r = 145;

//   const segments = 7;

//   endAngle = 2 * Math.PI / segments;
//   step = endAngle;

//   function circle (a) {
//     for (let i = 0; i < 360; i += 0.25) {
//       let radians = i * Math.PI / 180,
//         x = center[0] + r * Math.cos(radians),
//         y = center[1] + r * Math.sin(radians);

//       if (radians >= startAngle + gap && radians <= endAngle - gap) {
//         ctx.beginPath();
//         ctx.lineWidth = 1;
//         ctx.strokeStyle = 'hsl(' + (i / 3) + ', 100%, 50%)';
//         ctx.moveTo(center[0], center[1]);
//         ctx.lineTo(x, y);
//         ctx.stroke();
//       } else if (radians > endAngle - gap) {
//         startAngle = endAngle;
//         endAngle += step;
//       }
//     }
//     ctx.beginPath();
//     ctx.moveTo(center[0], center[1]);
//     ctx.arc(center[0], center[1], r - 10, 0, Math.PI * 2);
//     ctx.fillStyle = 'white';
//     ctx.fill();

//     startAngle = 0;
//     endAngle = 2 * Math.PI / segments;
//     step = endAngle;

//     if (a) {
//       for (let i = 1; i <= segments; i += 1) {
//         ctx.beginPath();
//         ctx.lineWidth = 10;
//         ctx.strokeStyle = 'seagreen';
//         store.segments[i - 1] = {
//           startAngle: startAngle,
//           endAngle: endAngle
//         };
//         ctx.arc(center[0], center[1], r - 5, startAngle + gap, endAngle - gap);
//         startAngle = endAngle;
//         endAngle += step;
//         ctx.stroke();
//       }
//     }

//     startAngle = 0;
//     endAngle = 2 * Math.PI / segments;
//     step = endAngle;
//   }
//   circle(true);

//   canvas.addEventListener('mousemove', function (e) {
//     var x = e.pageX, y = e.pageY,
//       theta = Math.atan2((y - center[1]), (x - center[0]));

//     if (theta < 0) {
//       theta = Math.PI + (Math.PI - Math.abs(theta));
//     }
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     circle();
//     // console.log(theta);

//     ctx.lineWidth = 10;
//     for (let j = 0; j < segments; j += 1) {
//       ctx.beginPath();

//       if (theta > store.segments[j].endAngle - gap) {
//         ctx.strokeStyle = 'transparent';
//         ctx.arc(center[0], center[1], r - 5, store.segments[j].startAngle + gap, store.segments[j].endAngle - gap);
//         ctx.stroke();
//       } else if (theta > store.segments[j].startAngle + gap && theta < store.segments[j].endAngle - gap) {
//         ctx.beginPath();
//         ctx.strokeStyle = 'transparent';
//         ctx.arc(center[0], center[1], r - 5, store.segments[j].startAngle + gap, theta);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.strokeStyle = 'seagreen';
//         ctx.arc(center[0], center[1], r - 5, theta, store.segments[j].endAngle - gap);
//         ctx.stroke();
//       } else {
//         ctx.strokeStyle = 'seagreen';
//         ctx.arc(center[0], center[1], r - 5, store.segments[j].startAngle + gap, store.segments[j].endAngle - gap);
//         ctx.stroke();
//       }
//     }
//   }, false);
// }());

// Line motion
// (function () {
//   var canvas = document.getElementById('canvas'),
//     ctx = canvas.getContext('2d'),
//     colors = ['green', 'red', 'blue', 'yellow', 'purple', 'magenta', 'brown'],
//     requestId;

//   function rand (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   function animate (options) {
//     var start = window.performance.now();

//     requestAnimationFrame(function animate (time) {
//       var timeFraction = (time - start) / options.duration,
//         progress;

//       if (timeFraction > 1) {
//         timeFraction = 1;
//       }
//       if (timeFraction < 0) {
//         timeFraction = 0;
//       }

//       progress = options.timing(timeFraction);

//       options.draw(progress);

//       if (timeFraction < 1) {
//         requestAnimationFrame(animate);
//       }
//     });
//   }
//   // console.log(rand(1, 2));

//   // canvas.addEventListener('mousemove', function (e) {
//   //   var x = e.pageX, y = e.pageY, t = y;

//   //   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   //   ctx.strokeRect(0, 0, canvas.width, canvas.height);

//   //   ctx.beginPath();
//   //   ctx.moveTo(canvas.width, 0);
//   //   ctx.lineTo(x, y);
//   //   ctx.stroke();

//   //   ctx.beginPath();
//   //   ctx.moveTo(0, canvas.height);
//   //   ctx.lineTo(x, y);
//   //   ctx.stroke();
//   // }, false);

//   canvas.addEventListener('click', function (e) {
//     var s = 0;

//     animate({
//       duration: 2000,
//       timing(timeFraction) {
//         for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
//           if (timeFraction >= (7 - 4 * a) / 11) {
//             return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
//           }
//         }
//       },
//       draw(progress) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.beginPath();
//         // console.log(progress);
//         ctx.arc(300, 300, 260, 0, Math.PI * 2 * progress);
//         ctx.lineWidth = 20;
//         ctx.strokeStyle = 'hsl(' + (360 * progress) + ', 100%, 50%)';
//         ctx.stroke();
//       }
//     });
//   }, false);
// }());

// Mouse move rect
// (function () {
//   var startX, startY, currentX, currentY, rect,
//     ratio = 1,
//     canvas, ctx;

//   function drawRect (e) {
//     var top, left, w, h;

//     if (rect) {
//       document.body.removeChild(rect);
//       rect = null;
//     }

//     rect = document.createElement('div');
//     rect.className = 'rect';

//     currentX = e.pageX;
//     currentY = e.pageY;

//     w = Math.abs(currentX - startX);

//     if (currentY < startY) {
//       if (typeof ratio === 'number') {

//         top = startY - w / ratio;
//         h = startY - top;
//       } else {
//         top = currentY;
//         h = startY - currentY;
//       }
//     } else {
//       top = startY;
//       if (typeof ratio === 'number') {
//         h = Math.abs(currentX - startX) / ratio;
//       } else {
//         h = currentY - startY;
//       }
//     }

//     left = (currentX < startX) ? currentX : startX;
//     // if (currentX < startX) {
//     //   left = currentX;
//     // } else {
//     //   left = startX;
//     // }
    

//     rect.style.top = top + 'px';
//     rect.style.left = left + 'px';
//     rect.style.width = w + 'px';
//     rect.style.height = h + 'px';

//     document.body.appendChild(rect);
//   }

//   document.body.addEventListener('mousedown', function (e) {
//     startX = e.pageX;
//     startY = e.pageY;

//     document.body.addEventListener('mousemove', drawRect, false);
//   }, false);

//   canvas = document.createElement('canvas');
//   ctx = canvas.getContext('2d');

//   canvas.width = 600;
//   canvas.height = 400;

//   {
//     let img = new Image();
//     img.setAttribute('src', 'img.jpg');

//     img.addEventListener('load', function () {
//       ctx.drawImage(this, 0, 0, this.width, this.height, 0, 0, canvas.width, canvas.height);

//       document.body.appendChild(canvas);
//     });
//   }

//   document.body.addEventListener('mouseup', function (e) {
//     var croppedImg, top, left, w, h, radius, styles, data;

//     this.removeEventListener('mousemove', drawRect);

//     if (!rect) {
//       return;
//     }

//     styles = getComputedStyle(rect);
//     top = parseInt(styles.top, 10);
//     left = parseInt(styles.left, 10);
//     w = parseInt(styles.width, 10);
//     h = parseInt(styles.height, 10);
//     radius = styles.borderRadius;

//     data = ctx.getImageData(left, top, w, h);
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // if (radius === '100%') {
//     //   ctx.beginPath();
//     //   ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
//     //   ctx.closePath();
//     //   ctx.clip();
//     // }

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     canvas.width = w;
//     canvas.height = h;

//     if (radius === '100%') {
//       ctx.putImageData(data, 0, 0);

//       croppedImg = new Image();
//       croppedImg.setAttribute('src', canvas.toDataURL());
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       croppedImg.addEventListener('load', function () {
//         // ctx.save();
//         ctx.beginPath();
//         ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
//         // ctx.closePath();
//         ctx.clip();

//         ctx.drawImage(this, 0, 0);

//         let ci = new Image();
//         ci.setAttribute('src', canvas.toDataURL());
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Hack for clearing arc area
//         canvas.width = w;
//         canvas.height = h;
//         // ctx.restore();
//         document.body.appendChild(ci);
//       });
//     } else {
//       ctx.putImageData(data, 0, 0);

//       croppedImg = new Image();
//       croppedImg.setAttribute('src', canvas.toDataURL());
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       document.body.appendChild(croppedImg);
//     }
    
//   }, false);

//   // document.body.addEventListener('mouseup', function (e) {
//   //   var img, croppedImg, top, left, w, h, radius, styles,
//   //     canvas, ctx;

//   //   this.removeEventListener('mousemove', drawRect);

//   //   if (!rect) {
//   //     return;
//   //   }

//   //   img = document.getElementById('img');

//   //   styles = getComputedStyle(rect);
//   //   top = parseInt(styles.top, 10);
//   //   left = parseInt(styles.left, 10);
//   //   w = parseInt(styles.width, 10);
//   //   h = parseInt(styles.height, 10);
//   //   radius = styles.borderRadius;

//   //   canvas = document.createElement('canvas');
//   //   ctx = canvas.getContext('2d');

//   //   canvas.width = w;
//   //   canvas.height = h;

//   //   if (radius === '100%') {
//   //     ctx.beginPath();
//   //     ctx.arc(w / 2, h / 2, w / 2, 0, Math.PI * 2);
//   //     ctx.closePath();
//   //     ctx.clip();
//   //   }

//   //   // document.body.appendChild(canvas);
//   //   ctx.drawImage(img, left * (img.naturalWidth / img.width), top * (img.naturalHeight / img.height), w * (img.naturalWidth / img.width), h * (img.naturalHeight / img.height), 0, 0, w, h);

//   //   {
//   //     let img = new Image();
//   //     img.setAttribute('src', canvas.toDataURL());
//   //     document.body.appendChild(img);
//   //   }
//   // }, false);
// }());

// (function () {
//   var canvas = document.createElement('canvas'),
//     ctx = canvas.getContext('2d');

//   canvas.width = 600;
//   canvas.height = 400;


//   // ctx.beginPath();
//   // ctx.moveTo(canvas.width / 2, 0);
//   // ctx.lineTo(canvas.width / 2, canvas.height);
//   // ctx.stroke();

//   // ctx.beginPath();
//   // ctx.moveTo(0, canvas.height / 2);
//   // ctx.lineTo(canvas.width, canvas.height / 2);
//   // ctx.stroke();

//   // ctx.moveTo(canvas.width / 2, canvas.height / 2);
//   //   ctx.beginPath();

//   // let x = -Math.PI * 2;
//   // // let t = 0;
//   // requestAnimationFrame(function animate () {
//   //   let y = Math.sin(x);
    
//   //   // ctx.arc(canvas.width / 2 + x * 10, canvas.height / 2 - y * 10, 10, 0, Math.PI * 2);
//   //   ctx.lineTo(canvas.width / 2 + x * 100, canvas.height / 2 - y * 100);
//   //   ctx.stroke();
//   //   x += 0.1;
//   //   // t += 1;

//   //   if (x <= Math.PI * 2) {
//   //     requestAnimationFrame(animate);
//   //   }
//   // });
//   // for (let x = 0; x <= Math.PI * 2; x += 0.01) {
//   //   let y = Math.sin(x);
//   //   // console.log(x, y);
//   //   // ctx.lineTo(canvas.width / 2 + x * 50, canvas.height / 2 - y * 50);
//   //   ctx.arc(canvas.width / 2 + x * 50, canvas.height / 2 - y * 50, 10, 0, Math.PI * 2);
    
//   // }
//   // ctx.stroke();

//   // ctx.stroke();

//   ctx.strokeRect(0, 0, canvas.width, canvas.height);

//   // requestAnimationFrame(function animate () {
//   //   

//   //   requestAnimationFrame(animate);
//   // });

//   // function draw(startX, startY, len, angle) {
//   //   ctx.beginPath();
//   //   ctx.save();
    
//   //   ctx.translate(startX, startY);
//   //   ctx.rotate(angle * Math.PI/180);
//   //   ctx.moveTo(0, 0);
//   //   ctx.lineTo(0, -len);
//   //   ctx.stroke();
    
//   //   if(len < 10) {
//   //     ctx.restore();
//   //     return;
//   //   }
    
//   //   requestAnimationFrame(function () {
//   //     draw(0, -len, len*0.8, -15);
//   //     ctx.restore();
//   //   });
//   //   requestAnimationFrame(function () {
//   //     draw(0, -len, len*0.8, 15);
//   //     // ctx.restore();
//   //   });
    
//   // }

//   // draw(200, 400, 80, 0);

//   document.body.appendChild(canvas);

//   function rand (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) - min);
//   }

//   function getRandomColor () {
//     return 'rgb(' + rand(0, 255) + ',' + rand(0, 255) + ',' + rand(0, 255) + ')';
//   }
// }());