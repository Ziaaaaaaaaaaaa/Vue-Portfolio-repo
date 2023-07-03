import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    projectsData: [],
    educationData: [],
    skillsData: []
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
    }
  },
  modules: {
  }
})
