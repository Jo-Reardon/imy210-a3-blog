<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <p>By {{ post.author }}</p>
    <div class="content-preview">
      {{ getFirstSentence(post.content) }}
    </div>
      <NuxtLink 
        :to="`/blog/${post.slug}`" 
        class="read-more-link">
        <span class="link-text">Read more</span>
        <span class="link-icon">→</span>
      </NuxtLink>
  </div>
</template>

<script setup>
const getFirstSentence = (content) => {
  return content[0]?.children[0]?.text || 'No content available'
}

defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card {
  background: linear-gradient(145deg, var(--space-blue), #121a2e);
  border: 1px solid #2a3a5a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 
    0 0 15px rgba(79, 195, 247, 0.1),
    0 0 30px rgba(79, 195, 247, 0.05);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(79, 195, 247, 0.3);
}

h2 {
  color: var(--neon-blue);
  margin-bottom: 8px;
  font-size: 1.5rem;
}

.content-preview {
  color: #b0c4de;
  margin: 12px 0;
}

/* NuxtLink {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(79, 195, 247, 0.1);
  border-radius: 4px;
  border: 1px solid var(--neon-blue);
} */

.read-more-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding: 8px 16px;
  color: var(--neon-blue);
  text-decoration: none;
  border-radius: 24px;
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.read-more-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(79, 195, 247, 0.2),
    transparent
  );
  transition: left 0.6s ease;
  z-index: -1;
}

.read-more-link:hover {
  box-shadow: 0 0 15px rgba(79, 195, 247, 0.4);
  transform: translateY(-2px);
  border-color: var(--neon-blue);
}

.read-more-link:hover::before {
  left: 100%;
}

.link-text {
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.link-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.read-more-link:hover .link-icon {
  transform: translateX(3px) rotate(45deg);
  text-shadow: 0 0 8px var(--neon-blue);
}

/* Glow pulse effect for active cards */
.card:hover .read-more-link {
  animation: pulse-glow 2s infinite alternate;
}

@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 5px rgba(79, 195, 247, 0.3);
  }
  100% {
    box-shadow: 0 0 15px rgba(79, 195, 247, 0.6);
  }
}
</style>