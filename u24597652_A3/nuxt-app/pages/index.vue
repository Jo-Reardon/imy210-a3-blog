<template>
  <div class="homepage">
    <NavBar />
    <div class="constellation-banner">
      <h1>Stellar Blog</h1>
      <p>Exploring the universe of web development</p>
    </div>
    
    <div class="posts-grid">
      <BlogCard 
        v-for="post in posts.data" 
        :key="post.id" 
        :post="post" 
      />
    </div>
    
    <div class="shooting-star"></div>
  </div>
</template>

<script setup>
const { data: posts } = await useFetch('http://localhost:1337/api/blog-posts')
</script>

<style scoped>
.homepage {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.constellation-banner {
  text-align: center;
  padding: 40px 0;
  margin-bottom: 40px;
  position: relative;
}

.constellation-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    var(--neon-blue), 
    transparent);
}

.constellation-banner::after {
  content: "✦ ✦ ✦";
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  color: var(--star-yellow);
  letter-spacing: 20px;
  font-size: 1.2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  background: linear-gradient(to right, #4fc3f7, #b19cd9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 15px rgba(79, 195, 247, 0.3);
}

p {
  color: #b0c4de;
  font-size: 1.2rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

/* Shooting star animation */
.shooting-star {
  position: absolute;
  top: 150px;
  right: -100px;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
              0 0 0 8px rgba(255, 255, 255, 0.1),
              0 0 20px rgba(255, 255, 255, 1);
  animation: shoot 15s linear infinite;
}

.shooting-star::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,1), transparent);
}

@keyframes shoot {
  0% {
    transform: translateX(0) translateY(0) rotate(-45deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px) translateY(500px) rotate(-45deg);
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  h1 {
    font-size: 2rem;
  }
}
</style>