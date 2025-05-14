<template>
  <div class="night-sky-theme">
    <NuxtPage />
  </div>
</template>

<style>
/* Replace your existing style with this */
.night-sky-theme {
  --space-dark: #0a0e17;
  --space-blue: #1a2138;
  --neon-blue: #4fc3f7;
  --star-yellow: #fffac2;
  --text-glowing: #e0f7fa;
  
  background-color: var(--space-dark);
  color: var(--text-glowing);
  min-height: 100vh;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  background-image: 
    radial-gradient(1px 1px at 50px 100px, var(--star-yellow), rgba(0,0,0,0)),
    radial-gradient(1px 1px at 150px 250px, var(--star-yellow), rgba(0,0,0,0)),
    radial-gradient(1px 1px at 300px 50px, var(--star-yellow), rgba(0,0,0,0));
  background-size: 400px 400px;
  background-attachment: fixed;
  animation: twinkle 5s infinite alternate;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>