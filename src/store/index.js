import { createStore } from 'vuex'
import studentDetails from './modules/studentDetails.js'
import subjectDetails from './modules/subjectDetails.js'
import marksDetails from './modules/marksDetails.js'
import averageDetails from './modules/averageDetails.js'

export default createStore({
  modules: {
    studentDetails,
    subjectDetails,
    marksDetails,
    averageDetails
  }
})
