<template>
  <nav class="cosmic-navbar">
    <div class="nav-container">
      <NuxtLink 
        to="/" 
        class="nav-link"
        active-class="active-link"
      >
        <span class="nav-icon">☄️</span>
        <span class="nav-text">Home</span>
      </NuxtLink>
      
      <div class="nav-divider"></div>
      
      <NuxtLink 
        to="/search" 
        class="nav-link"
        active-class="active-link"
      >
        <span class="nav-icon">🔭</span>
        <span class="nav-text">Search</span>
      </NuxtLink>
    </div>
    
    <div class="nav-constellation">
      <span class="star">✦</span>
      <span class="star">✧</span>
      <span class="star">✦</span>
    </div>
  </nav>
</template>

<style scoped>
.cosmic-navbar {
  background: rgba(10, 14, 23, 0.9);
  backdrop-filter: blur(12px);
  padding: 15px 0;
  border-bottom: 1px solid rgba(79, 195, 247, 0.3);
  position: relative;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-glowing);
  text-decoration: none;
  transition: all 0.4s ease;
  padding: 8px 20px;
  border-radius: 50px;
  position: relative;
}

.nav-icon {
  font-size: 1.4rem;
  margin-bottom: 4px;
  transition: transform 0.3s ease;
}

.nav-text {
  font-size: 0.9rem;
  letter-spacing: 1px;
  position: relative;
}

.nav-link:hover {
  background: rgba(79, 195, 247, 0.1);
}

.nav-link:hover .nav-icon {
  transform: translateY(-5px) rotate(10deg);
}

.active-link {
  background: rgba(79, 195, 247, 0.2);
  box-shadow: 0 0 15px rgba(79, 195, 247, 0.3);
}

.active-link .nav-text::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--neon-blue);
  animation: pulse 2s infinite;
}

.nav-divider {
  width: 1px;
  height: 30px;
  background: linear-gradient(
    to bottom, 
    transparent, 
    var(--neon-blue), 
    transparent
  );
  opacity: 0.5;
}

.nav-constellation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 30px;
  pointer-events: none;
  z-index: -1;
}

.star {
  color: var(--star-yellow);
  opacity: 0.7;
  animation: twinkle 3s infinite alternate;
}

.star:nth-child(1) { animation-delay: 0.5s; }
.star:nth-child(2) { animation-delay: 1s; }
.star:nth-child(3) { animation-delay: 1.5s; }

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

@keyframes twinkle {
  0% { opacity: 0.3; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1.1); }
}
</style>