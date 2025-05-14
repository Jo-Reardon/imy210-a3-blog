<template>
  <div class="post-page">
    <!-- Main Content -->
    <div v-if="post" class="cosmic-post">
      <!-- Title -->
      <h1 class="post-title">{{ post.title }}</h1>
      
      <!-- Meta Info -->
      <div class="post-meta">
        <span class="author">By {{ post.author }}</span>
        <span class="divider">✦</span>
        <span class="category">{{ post.category }}</span>
      </div>
      
      <!-- Content -->
      <div class="post-content">
        <div v-for="(block, index) in post.content" :key="index">
          <p class="content-paragraph">{{ block.children[0].text }}</p>
        </div>
      </div>
      
      <!-- Back Button at Bottom -->
      <NuxtLink to="/" class="back-button cosmic-button">
        <span class="button-icon">←</span>
        <span class="button-text">Back to Posts</span>
      </NuxtLink>
    </div>
    
    <!-- Loading State -->
    <div v-else class="loading-state">
      <div class="pulsing-star">✦</div>
      <p>Warping to post...</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const post = ref(null)

const { data } = await useFetch(
  `http://localhost:1337/api/blog-posts?filters[slug][$eq]=${route.params.slug}`
)

if (data.value?.data?.length > 0) {
  post.value = data.value.data[0]
}
</script>

<style scoped>
.post-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
}

.cosmic-post {
  background: rgba(26, 33, 56, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 40px;
  border: 1px solid rgba(79, 195, 247, 0.2);
  box-shadow: 0 0 30px rgba(79, 195, 247, 0.1);
}

.post-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--neon-blue);
  text-align: center;
  background: linear-gradient(to right, #4fc3f7, #b19cd9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 15px rgba(79, 195, 247, 0.3);
}

.post-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  color: #b0c4de;
  font-size: 1.1rem;
}

.divider {
  color: var(--star-yellow);
  opacity: 0.7;
}

.author {
  font-weight: 500;
}

.category {
  background: rgba(79, 195, 247, 0.1);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.post-content {
  line-height: 1.8;
  margin-bottom: 50px;
}

.content-paragraph {
  margin-bottom: 25px;
  font-size: 1.1rem;
  color: #e0f7fa;
}

/* Back Button */
.cosmic-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid var(--neon-blue);
  border-radius: 50px;
  color: var(--neon-blue);
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 40px auto 0;
  width: fit-content;
}

.cosmic-button:hover {
  background: rgba(79, 195, 247, 0.2);
  box-shadow: 0 0 20px rgba(79, 195, 247, 0.3);
  transform: translateY(-2px);
}

.button-icon {
  font-size: 1.2rem;
}

.button-text {
  font-weight: 500;
}

/* Loading State */
.loading-state {
  text-align: center;
  padding: 100px 0;
  color: var(--neon-blue);
}

.pulsing-star {
  font-size: 2rem;
  animation: pulse 2s infinite alternate;
  margin-bottom: 20px;
  display: inline-block;
}

@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.7; }
  100% { transform: scale(1.2); opacity: 1; }
}

/* Responsive */
@media (max-width: 768px) {
  .cosmic-post {
    padding: 30px 20px;
  }
  
  .post-title {
    font-size: 2rem;
  }
  
  .post-meta {
    flex-direction: column;
    gap: 8px;
  }
}
</style>