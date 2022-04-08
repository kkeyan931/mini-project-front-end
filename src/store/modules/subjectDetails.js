const state = {
  subjectsDetails: [],
  showEditSubject: false,
  currentEditSubject: {},
  showSubjectEditButton: true,
  allSubjectsTitle:[],
};

const getters = {
  allSubjectsDetails: (state) => state.subjectsDetails,
  showEditSubject: (state) => state.showEditSubject,
  currentEditSubject: (state) => state.currentEditSubject,
  showSubjectEditButton: (state) => state.showSubjectEditButton,
  allSubjectsTitle: (state)=>state.allSubjectsTitle,
};

const actions = {
  async fetchSubjectsDetails({ commit }) {
    const response = await fetch("https://www.mini-project.learnlinuxfree.tech/subjects");
    const data = await response.json();
    commit("setSubjectsDetails", data);
  },
  async addSubject({ commit }, newSubject) {
    const res = await fetch("https://www.mini-project.learnlinuxfree.tech/subjects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newSubject),
    });

    const data = await res.json();

    commit("newSubject", data);
  },
  async updateSubject({ commit }, updatedSubject) {
    const res = await fetch(
      `https://www.mini-project.learnlinuxfree.tech/subjects/${updatedSubject.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedSubject),
      }
    );
  },
  async deleteSubject({ commit }, subject) {
    if (confirm("Are you sure?")) {
      const res = await fetch(`https://www.mini-project.learnlinuxfree.tech/subjects/${subject.id}`, {
        method: "DELETE",
      });
    }
  },
  toggleEditSubject({ commit }, subject) {
    commit("toggleEditSubject", subject);
  },
  toggleSubjectEditButton({ commit }) {
    commit("toggleSubjectEditButton");
  },
  getAllSubjectsTitles({commit}){
      let subjectTitles=[];
      for(let subject of state.subjectsDetails){
          subjectTitles.push(subject.subjectTitle);
      }

      commit("getAllSubjectsTitles",subjectTitles);
  }
};

const mutations = {
  setSubjectsDetails: (state, subjectsDetails) =>
    (state.subjectsDetails = subjectsDetails),

  newSubject: (state, subjectDetail) =>
    state.subjectsDetails.unshift(subjectDetail),

  toggleEditSubject: (state, currentSubject) => {
    if (currentSubject) {
      state.currentEditSubject = state.subjectsDetails.find((subject) => {
        if (currentSubject !== null && subject.id === currentSubject.id) {
          return true;
        }
      });
    }
    state.showEditSubject = !state.showEditSubject;
  },
  toggleSubjectEditButton: (state) => {
    state.showSubjectEditButton = !state.showSubjectEditButton;
  },
  getAllSubjectsTitles: (state,subjectTitles) => {
      state.allSubjectsTitle = subjectTitles;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
