

import store from './store'
const actions = {
	changeUserInfo(info){
		store.dispatch({
			type:'CHANGE_USER_INFO',
			info:info
		})
	},
	exit(){
		store.dispatch({
			type:'EXIT'
		})
	}
}

export default actions