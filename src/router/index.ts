import { createMemoryHistory, createRouter } from 'vue-router'
import Aboutme from '../view/Aboutme.vue'
import Contact from '../view/Contact.vue'
import WorkExperience from '../view/WorkExperience.vue'
import Project from '../view/Project.vue'
import Certificate from '../view/Certificate.vue'
import Educations from '../view/Educations.vue'
const routes = [
  { path: '/', component: Aboutme },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Project },
  { path: '/experience', component: WorkExperience },
  { path: '/certificate', component: Certificate },
  { path: '/edu', component: Educations }

]
const router = createRouter({
  linkActiveClass: 'bg-yellow-300 transition ease-in-out delay-50 hover:bg-transparent rounded text-neutral-800',
  history: createMemoryHistory(),
  routes,
})

export default router
