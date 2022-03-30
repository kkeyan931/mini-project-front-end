const state = {
  studentsDetails: [],
  showEditStudent: false,
  currentEditStudent: {},
  showStudentEditButton: true,
};

const getters = {
  allStudentsDetails: (state) => state.studentsDetails,
  showEditStudent: (state) => state.showEditStudent,
  currentEditStudent: (state) => state.currentEditStudent,
  showStudentEditButton: (state) => state.showStudentEditButton,
};

const actions = {
  async fetchStudentsDetails({ commit }) {
    const response = await fetch("api/students");
    const data = await response.json();
    data.sort((a, b) => {
      return a.fullName.localeCompare(b.fullName);
    });
    commit("setStudentsDetails", data);
  },
  async addStudent({ commit }, newStudent) {
    const res = await fetch("api/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    const data = await res.json();

    commit("newStudent", data);
  },
  async updateStudent({ commit }, updatedStudent) {
    const res = await fetch(`api/students/${updatedStudent.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    });
  },
  async deleteStudent({ commit }, student) {
    if (confirm("Are you sure?")) {
      const res = await fetch(`api/students/${student.id}`, {
        method: "DELETE",
      });
    }
  },
  toggleEditStudent({ commit }, currentStudent) {
    commit("toggleEditStudent", currentStudent);
  },
  toggleStudentEditButton({ commit }) {
    commit("toggleStudentEditButton");
  },
};

const mutations = {
  setStudentsDetails: (state, studentsDetails) =>
    (state.studentsDetails = studentsDetails),
  newStudent: (state, studentDetail) => {
    state.studentsDetails.unshift(studentDetail);
  },

  toggleEditStudent: (state, currentStudent) => {
    if (currentStudent) {
      state.currentEditStudent = state.studentsDetails.find((student) => {
        if (currentStudent !== null && student.id === currentStudent.id) {
          return true;
        }
      });
    }
    state.showEditStudent = !state.showEditStudent;
  },
  toggleStudentEditButton: (state) => {
    state.showStudentEditButton = !state.showStudentEditButton;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
