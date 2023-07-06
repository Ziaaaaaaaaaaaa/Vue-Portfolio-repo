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
      try {
        const fetchedData = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
      commit('setState', fetchedData.data.projects)
      } catch (error) {
        alert(error);
      }
      
    },
    async fetchDataEducation({commit}){
      try {
        const fetchDataEducation = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
        commit('setStateEducation', fetchDataEducation.data.education)
      } catch (error) {
        alert(error);
      }

    },
    async fetchDataSkills({commit}){
      try {
        const fetchDataSkills = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
        commit('setStateSkills', fetchDataSkills.data.skills)
      } catch (error) {
        alert(error);
      }
    },
    async fetchDataTestimonials({commit}){
      try {
        const fetchDataTestimonials = await axios.get('https://ziaaaaaaaaaaaa.github.io/Json-Portfolio-Server/portfolio.json')
        commit('setStateTestimonials', fetchDataTestimonials.data.testimonials)
      } catch (error) {
        alert(error);
      }
    }
  },
  modules: {
  }
})
