'use strict';

(function () {
  function Scrollbar (container, options) {
    var barHeight;

    this._container = container;
    this._heightLeft = this._container.querySelector('.content__text').scrollHeight - this._container.offsetHeight;
    this._bar = this._container.querySelector('.scrollbar__bar');
    this._text = this._container.querySelector('.content__text');

    barHeight = Math.floor(this._container.offsetHeight / this._heightLeft * 100);

    if (barHeight > 100) {
      barHeight = 100;
    }
    if (barHeight < 20) {
      barHeight = 20;
    }

    this._bar.style.height = barHeight + '%';
    this._top = 0;

    this.onDragMove = this.onDragMove.bind(this);
  }
  Scrollbar.prototype.onDragStart = function (e) {
    if (this._heightLeft <= 0) {
      return;
    }

    this.startY = e.pageY;
    this.startTop = this._bar.offsetTop;
    this._start = Date.now();
    
    document.body.addEventListener('mousemove', this.onDragMove);
  };
  Scrollbar.prototype.onDragEnd = function (e) {
    this._end = Date.now();

    var distance = Math.abs(this.startY - e.pageY);
    console.log(distance / ((this._end - this._start)) * 1000);
    document.body.removeEventListener('mousemove', this.onDragMove);
  };
  Scrollbar.prototype.onDragMove = function (e) {
    var diff = e.pageY - this.startY, k;

    this._top = this.startTop + diff;

    if (this._top < 0) {
      this._top = 0;
    }
    if (this._top > this._container.offsetHeight - this._bar.offsetHeight) {
      this._top = this._container.offsetHeight - this._bar.offsetHeight;
    }

    this._bar.style.top = this._top + 'px';

    k = this._top / (this._container.offsetHeight - this._bar.offsetHeight);
    this._text.style.transform = 'translateY(-' + (this._heightLeft * k) + 'px)';
  };

  var scrollbar = new Scrollbar(document.getElementById('scrollbar'), {

  });
  document.body.addEventListener('mousedown', function (e) {
    var target = e.target;

    while (target !== this) {
      if (target.className === 'scrollbar__bar') {
        break;
      }

      target = target.parentNode;
    }

    if (target === this) {
      return;
    }

    scrollbar.onDragStart(e);
  });
  document.body.addEventListener('mouseup', function (e) {
    scrollbar.onDragEnd(e);
  });

}());
