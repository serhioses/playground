'use strict';

const EARTH = 60,
  FIRE = 15,
  AIR = 8,
  WATER = 17;

var graph = document.getElementById('graph'),
  ctx = graph.getContext('2d'),
  w = 180, h = 180,
  hw = 90, hh = 90,
  iw = 84, ih = 84,
  hiw = 42, hih = 42;

graph.width = 180;
graph.height = 180;

ctx.strokeWidth = 1;
ctx.strokeStyle = 'red';

// Earth
{
  let x = hw, y = ((100 - EARTH) / 100) * (hh - hih);

  ctx.beginPath();
  ctx.moveTo(hw, hh);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();

  // ctx.beginPath();
  // ctx.arc(x, y + 40, 40, Math.PI * 1.4, Math.PI * 1.6);
  // ctx.stroke();

  
  // ctx.beginPath();
  // ctx.moveTo(x, y);
  // ctx.bezierCurveTo(x + x / 2, hh / 2, x - x / 2, hh, (((FIRE) / 100) * (hw - hiw)) + hw + hiw, hh);
  // ctx.stroke();
}


// Fire
{
  let x = (((FIRE) / 100) * (hw - hiw)) + hw + hiw, y = hh;

  ctx.beginPath();
  ctx.moveTo(hw, hh);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();

  // ctx.beginPath();
  // ctx.arc(x - 40, y, 40, Math.PI * 1.9, Math.PI * 0.1);
  // ctx.stroke();
}

// // Air
{
  let x = hw, y = (((AIR) / 100) * (hh - hih)) + hh + hiw;

  ctx.beginPath();
  ctx.moveTo(hw, hh);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x, y - 40, 40, Math.PI * 0.4, Math.PI * 0.6);
  ctx.stroke();
}

// // Water
{
  let x = (((100 - WATER) / 100) * (hw - hiw)), y = hh;
  ctx.beginPath();
  ctx.moveTo(hw, hh);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(x + 40, y, 40, Math.PI * 0.9, Math.PI * 1.1);
  ctx.stroke();
}
