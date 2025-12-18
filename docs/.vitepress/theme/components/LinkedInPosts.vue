<template>
  <div class="linkedin-posts-section">
    <div v-if="loading" class="linkedin-loading">
      <p>Loading LinkedIn posts...</p>
    </div>
    <div v-else-if="error" class="linkedin-error">
      <p style="margin-bottom: 0.5rem;"><strong>Unable to load LinkedIn posts.</strong></p>
      <p style="font-size: 0.9rem; margin-top: 0.5rem;">
        Visit <a href="https://www.linkedin.com/in/joe-yeong/" target="_blank">Joe Yeong's LinkedIn</a> directly.
      </p>
    </div>
    <div v-else-if="posts.length === 0" class="linkedin-error">
      <p style="margin-bottom: 0.5rem;"><strong>No LinkedIn posts configured yet.</strong></p>
      <p style="font-size: 0.9rem; margin-top: 0.5rem;">
        To add posts, edit <code>docs/public/data/linkedin-posts.json</code> and add post URLs.
      </p>
    </div>
    <div v-else class="linkedin-posts-container">
      <div v-for="(post, index) in posts" :key="index" class="linkedin-post-wrapper">
        <iframe
          :src="`https://www.linkedin.com/embed/feed/update/${post.activityId}`"
          height="400"
          width="100%"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
          title="Embedded LinkedIn post"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const error = ref(false)
const posts = ref([])

function extractActivityId(url) {
  if (!url) return null
  if (url.startsWith('urn:li:activity:')) {
    return url
  }
  const urlMatch = url.match(/activity-(\d+)/)
  if (urlMatch) {
    return `urn:li:activity:${urlMatch[1]}`
  }
  const urnMatch = url.match(/urn:li:activity:(\d+)/)
  if (urnMatch) {
    return url
  }
  return null
}

async function loadPosts() {
  try {
    const response = await fetch('/data/linkedin-posts.json')
    if (!response.ok) {
      throw new Error('Failed to load posts data')
    }
    
    const data = await response.json()
    const rawPosts = data.posts || []
    const maxPosts = data.instructions?.max_posts || 5
    
    posts.value = rawPosts
      .slice(0, maxPosts)
      .map(post => ({
        ...post,
        activityId: extractActivityId(post.url)
      }))
      .filter(post => post.activityId)
    
    loading.value = false
  } catch (e) {
    console.error('Error loading LinkedIn posts:', e)
    error.value = true
    loading.value = false
  }
}

onMounted(() => {
  loadPosts()
})
</script>

<style scoped>
.linkedin-posts-section {
  margin-top: 2rem;
}

.linkedin-posts-container {
  display: grid;
  gap: 2rem;
}

.linkedin-post-wrapper {
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.linkedin-post-wrapper:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.linkedin-post-wrapper iframe {
  width: 100%;
  border: none;
  min-height: 400px;
  border-radius: 4px;
}

.linkedin-loading,
.linkedin-error {
  padding: 2rem;
  text-align: center;
  color: #6c757d;
  background: #f8f9fa;
  border-radius: 8px;
}

.linkedin-error a {
  color: #0077b5;
}

.dark .linkedin-post-wrapper {
  background: #1a1a1a;
}

.dark .linkedin-loading,
.dark .linkedin-error {
  background: #2a2a2a;
  color: #a0a0a0;
}
</style>
