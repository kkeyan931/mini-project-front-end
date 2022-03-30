const state = {
  showEditMarks: false,
  currentEditStudentMarks: {},
  showMarksEditButton: true,
};

const getters = {
  showEditMarks: (state) => state.showEditMarks,
  currentEditStudentMarks: (state) => state.currentEditStudentMarks,
  showMarksEditButton: (state) => state.showMarksEditButton,
};

const actions = {
  toggleEditMarks({ dispatch, commit, getters, rootGetters }, currentStudent) {
    commit("toggleEditMarks", { currentStudent, rootGetters });
  },
  toggleMarksEditButton({ commit }) {
    commit("toggleMarksEditButton");
  },
};

const mutations = {
  toggleEditMarks: (state, { currentStudent, rootGetters }) => {
    if (currentStudent) {
      state.currentEditStudentMarks =
        rootGetters.allStudentsDetails.find((student) => {
          if (currentStudent !== null && student.id === currentStudent.id) {
            return true;
          }
        });
    }
    state.showEditMarks = !state.showEditMarks;
  },
  toggleMarksEditButton: (state) => {
    state.showMarksEditButton = !state.showMarksEditButton;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
