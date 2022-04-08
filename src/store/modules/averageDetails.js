const state = {
    averageDetails:{}
};

const getters = {
    averageDetails: (state) => state.averageDetails,
};

const actions = {
    async getAverageDetails({commit}){
        const response = await fetch("https://www.mini-project.learnlinuxfree.tech/average");
        const data = await response.json();
        commit("getAverageDetails",data);
    }
};

const mutations = {
    getAverageDetails : (state,data)=>{
        state.averageDetails = data;
    }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
