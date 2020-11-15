(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const context = canvas.getContext('2d');

  class Ball {
    constructor(radius, color, speed, context) {
      this.radius = radius;
      this.color = color;
      this.context = context;
      this.x = radius;
      this.y = radius;
      this.dx = speed;
      this.dy = speed;

      this.draw();
    }

    move() {
      this.x += this.dx;
      this.y += this.dy;

      if (this.x < this.radius || this.x > canvas.width - this.radius) {
        this.dx = -this.dx;
      }
      if (this.y < this.radius || this.y > canvas.height - this.radius) {
        this.dy = -this.dy;
      }

      this.draw();
    }

    draw() {
      this.context.beginPath();

      this.context.fillStyle = this.color;
      this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.context.fill();
    }
  }

  //const ball = new Ball(20, 'red', context);

  // const moveTheBall = ball.move.bind(ball);
  // setInterval(moveTheBall, 1);
  //setInterval(() => ball.move(), 1);

  const colorPicker = document.getElementById('color');
  const sizePicker = document.getElementById('size');
  const speedPicker = document.getElementById('speed');

  let balls = [];

  document.getElementById('controls').addEventListener('submit', e => {
    e.preventDefault();

    balls.push(new Ball(Number(sizePicker.value), colorPicker.value, Number(speedPicker.value), context));
  });

  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => ball.move());
  }, 1);

  /*setInterval(() => {
    balls = balls.filter((b, i) => i % 2);
  }, 10000);*/
}());