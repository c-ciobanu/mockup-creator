const state = {
	components: []
};

const getters = {};

const actions = {};

const mutations = {
	addComponent(state, {name, props}) {
		state.components.push({name, props});
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
