<template>
  <div>
    <NavBar />
    <input v-model="searchQuery" placeholder="Search posts...">
    
    <div v-if="searchResults.data?.length > 0">
      <BlogCard 
        v-for="post in searchResults.data" 
        :key="post.id" 
        :post="post" 
      />
    </div>
    <p v-else-if="searchQuery && !loading">
      No results found for "{{ searchQuery }}"
    </p>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const searchResults = ref({ data: [] })
const loading = ref(false)

watch(searchQuery, async (query) => {
  if (query.length > 2) {
    loading.value = true
    const { data } = await useFetch(
      `http://localhost:1337/api/blog-posts?filters[title][$containsi]=${query}`
    )
    searchResults.value = data.value || { data: [] }
    loading.value = false
  }
})
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 30px 0;
  background: rgba(10, 14, 23, 0.7);
  border: 1px solid var(--neon-blue);
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  outline: none;
}

input:focus {
  box-shadow: 0 0 15px var(--neon-blue);
}

.no-results {
  text-align: center;
  padding: 40px;
  color: #ff9e9e;
  font-style: italic;
}

.loading {
  text-align: center;
  padding: 40px;
  color: var(--neon-blue);
}

.loading:after {
  content: '...';
  animation: dots 1.5s infinite;
}

@keyframes dots {
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60%, 100% { content: '...'; }
}
</style>