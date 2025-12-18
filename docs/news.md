# News & Updates

<style>
.news-item {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.news-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid #e9ecef;
  align-self: start;
}

.news-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.news-image a {
  display: block;
  line-height: 0;
}

.news-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.news-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.news-title a:hover {
  color: #3b82f6;
  text-decoration: underline;
}

.news-date {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.news-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.news-links a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.news-links a:hover {
  color: #2563eb;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .news-item {
    grid-template-columns: 1fr;
  }
}
</style>

## Latest News

<div class="news-item">
<div class="news-image">
<a href="https://www.nature.com/nature/volumes/640/issues/8060" target="_blank">
<img src="/images/news/2025-03-12-nature-spatial-awareness.png" alt="Nature Spatial Awareness Research" />
</a>
</div>
<div class="news-content">
<div class="news-title"><a href="https://doi.org/10.1038/s41586-025-08668-x" target="_blank">Spatial immune scoring system predicts hepatocellular carcinoma recurrence</a></div>
<div class="news-date">March 12th, 2025</div>
<div class="news-links">

**Singapore researchers develop AI tool to predict liver cancer recurrence**
- [Eureka Alert](https://www.eurekalert.org/news-releases/1091898)
- [SG Press Centre](https://www.sgpc.gov.sg/detail?url=/media_releases/astar/press_release/P-20250721-1)

**AI system developed in Singapore could help predict liver cancer recurrence**
- [Straits Times](https://www.straitstimes.com/singapore/health/ai-system-developed-in-singapore-could-help-predict-liver-cancer-recurrence)
- [Singapore General Hospital](https://www.sgh.com.sg/news/patient-care/ai-system-developed-in-singapore-could-help-predict-liver-cancer)

**本地研发人工智能评分系统 提前预测肝癌患者复发风险**
- [联合早报](https://www.zaobao.com.sg/news/singapore/story20250721-7179016)

**Whole in one**
- [A*STAR Research](https://research.a-star.edu.sg/articles/features/whole-in-one/)

</div>
</div>
</div>

---

## LinkedIn Updates

<div style="margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: #2c3e50; margin-bottom: 1.5rem;">
    Follow <a href="https://www.linkedin.com/in/joe-yeong/" target="_blank" style="color: #0077b5; text-decoration: none; font-weight: bold;">Joe Yeong</a> on LinkedIn for the latest updates:
  </p>
  
  <ClientOnly>
    <div id="linkedin-posts-container" style="display: grid; gap: 2rem; margin-top: 2rem;">
      <!-- LinkedIn posts will be embedded here -->
    </div>
  </ClientOnly>
</div>

<style>
.linkedin-post-wrapper {
  margin: 1.5rem 0;
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
</style>

<script>
// LinkedIn Post URLs or Activity IDs
// Option 1: Use full post URLs (easier)
// Option 2: Use activity IDs in format: urn:li:activity:ACTIVITY_ID
//
// To get a post URL:
// 1. Visit https://www.linkedin.com/in/joe-yeong/
// 2. Click on the three dots (...) on a post
// 3. Select "Copy link to post"
// 4. Paste the URL here
//
// The script will automatically extract the activity ID from the URL

(function() {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const linkedinPosts = [
    // Add LinkedIn post URLs or activity IDs here (latest 10 posts)
    // Examples:
    // 'https://www.linkedin.com/posts/joe-yeong_activity-7123456789012345678-...',
    // 'urn:li:activity:7123456789012345678',
  ];

  // Function to extract activity ID from LinkedIn post URL
  function extractActivityId(urlOrId) {
    // If it's already in urn format, return as is
    if (urlOrId.startsWith('urn:li:activity:')) {
      return urlOrId;
    }
    
    // Extract activity ID from URL
    // LinkedIn URLs can be in formats like:
    // https://www.linkedin.com/posts/username_activity-ACTIVITY_ID-...
    // https://www.linkedin.com/feed/update/urn:li:activity:ACTIVITY_ID
    const urlMatch = urlOrId.match(/activity-(\d+)/);
    if (urlMatch) {
      return `urn:li:activity:${urlMatch[1]}`;
    }
    
    const urnMatch = urlOrId.match(/urn:li:activity:(\d+)/);
    if (urnMatch) {
      return urlOrId;
    }
    
    return null;
  }

  // Function to create LinkedIn post embed
  function createLinkedInPostEmbed(activityId) {
    const wrapper = document.createElement('div');
    wrapper.className = 'linkedin-post-wrapper';
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.linkedin.com/embed/feed/update/${activityId}`;
    iframe.height = '400';
    iframe.width = '100%';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.title = 'Embedded LinkedIn post';
    
    wrapper.appendChild(iframe);
    return wrapper;
  }

  // Embed all posts
  function embedLinkedInPosts() {
    const container = document.getElementById('linkedin-posts-container');
    if (!container) return;
    
    if (linkedinPosts.length === 0) {
      container.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: #6c757d; background: #f8f9fa; border-radius: 8px;">
          <p style="margin-bottom: 0.5rem;"><strong>No LinkedIn posts configured yet.</strong></p>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">
            To add posts, visit <a href="https://www.linkedin.com/in/joe-yeong/" target="_blank" style="color: #0077b5;">Joe Yeong's LinkedIn</a>, 
            copy the post URLs, and add them to the linkedinPosts array in this file.
          </p>
        </div>
      `;
      return;
    }
    
    linkedinPosts.forEach(postUrlOrId => {
      const activityId = extractActivityId(postUrlOrId);
      if (activityId) {
        const embed = createLinkedInPostEmbed(activityId);
        container.appendChild(embed);
      } else {
        console.warn('Invalid LinkedIn post URL or ID:', postUrlOrId);
      }
    });
  }

  // Initialize when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', embedLinkedInPosts);
  } else {
    embedLinkedInPosts();
  }
})();
</script>

---

*This page will be regularly updated with the latest news from the Joe Yeong Laboratory.*
