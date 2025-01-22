<template>
    <div class="fixed inset-0 bg-gray-950 overflow-hidden z-[-1]">
      <canvas ref="canvas" class="block w-full h-full"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.initAnimation();
    },
    methods: {
      initAnimation() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext("2d");
  
        // Canvas o‘lchamlari
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        // Zarrachalar ro'yxati
        const particles = [];
        const numberOfParticles = 100;
  
        // Zarrachalar klassi
        class Particle {
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
          }
          update() {
            this.x += this.speedX;
            this.y += this.speedY;
  
            // Chegaralardan qaytish
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
          }
          draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.fill();
          }
        }
  
        // Zarrachalar yaratish
        for (let i = 0; i < numberOfParticles; i++) {
          particles.push(new Particle());
        }
  
        // Animatsiyani boshlash
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach((particle) => {
            particle.update();
            particle.draw();
          });
          requestAnimationFrame(animate);
        };
  
        animate();
  
        // Responsivlikni ta'minlash
        window.addEventListener("resize", () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });
      },
    },
  };
  </script>
  