export const usePosts = async () => {
    const { data, error } = await useFetch('http://localhost:1337/api/blog-posts')
  
    if (error.value) {
      console.error('Failed to fetch posts:', error.value)
    }
  
    return data
  }
  