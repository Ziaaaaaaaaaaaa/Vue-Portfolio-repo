import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    projectsData: [],
    educationData: [],
    skillsData: [],
    testimonialsData: [],
  },
  getters: {
  },
  mutations: {
    setState(state, projects){
      state.projectsData = projects
    },
    setStateEducation(state, education){
      state.educationData = education
    },
    setStateSkills(state, skills){
      state.skillsData = skills
    },
    setStateTestimonials(state, testimonials){
      state.testimonialsData = testimonials
    }
  },
  actions: {
    async fetchData({commit}){
      const fetchedData = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
      commit('setState', fetchedData.data.projects)
    },
    async fetchDataEducation({commit}){
      const fetchDataEducation = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
      commit('setStateEducation', fetchDataEducation.data.education)
    },
    async fetchDataSkills({commit}){
      const fetchDataSkills = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
      commit('setStateSkills', fetchDataSkills.data.skills)
    },
    async fetchDataTestimonials({commit}){
      const fetchDataTestimonials = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
      commit('setStateTestimonials', fetchDataTestimonials.data.testimonials)
    }
  },
  modules: {
  }
})
