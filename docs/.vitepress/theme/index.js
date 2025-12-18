import DefaultTheme from 'vitepress/theme'
import './custom.css'
import LinkedInPosts from './components/LinkedInPosts.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LinkedInPosts', LinkedInPosts)
  }
}
