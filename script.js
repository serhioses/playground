'use strict';

(function () {
  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    gap = 0.02,
    startAngle = 0,
    endAngle, step,
    colors = ['green', 'red', 'blue', 'yellow', 'purple', 'magenta', 'brown'],
    store = {
      segments: []
    };

  const segments = 7;

  endAngle = 2 * Math.PI / segments;
  step = endAngle;

  function circle () {
    for (let i = 1; i <= segments; i += 1) {
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.strokeStyle = colors[i - 1];
      store.segments[i - 1] = {
        startAngle: startAngle,
        endAngle: endAngle
      };
      ctx.arc(150, 150, 145, startAngle + gap, endAngle - gap);
      startAngle = endAngle;
      endAngle += step;
      ctx.stroke();
    }

    startAngle = 0;
    endAngle = 2 * Math.PI / segments;
    step = endAngle;
  }
  circle();

  canvas.addEventListener('mousemove', function (e) {
    var x = e.pageX, y = e.pageY,
      theta = Math.atan2((y - 150), (x - 150));

    if (theta < 0) {
      theta = Math.PI + (Math.PI - Math.abs(theta));
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle();

    ctx.strokeStyle = 'orange';

    for (let j = 0; j < segments; j += 1) {
      if (theta > store.segments[j].endAngle - gap) {
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.arc(150, 150, 145, store.segments[j].startAngle + gap, store.segments[j].endAngle - gap);
        ctx.stroke();
      } else if (theta > store.segments[j].startAngle + gap && theta < store.segments[j].endAngle - gap) {
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.arc(150, 150, 145, store.segments[j].startAngle + gap, theta);
        ctx.stroke();
      }
    }
  }, false);
}());
