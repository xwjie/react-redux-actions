"use strict";
const createReducer = function(defaultState){
	let handlers =[];
	let beforeHandles = [];
	let afterHandles = [];

	const handleAction = (actionFunc, handlerFunc) =>{
		handlers.push({
			type: actionFunc.type,
			handler: handlerFunc
		});
	};

	const before = (handlerFunc) =>{
		beforeHandles.push(handlerFunc);
	};

	const after = (handlerFunc) =>{
		afterHandles.push(handlerFunc);
	};

	const reducer = (state , action) => {
		console.log('before handle state', state);
		//console.log('action', action);

		let newState = (state === undefined ? defaultState: state);

		handlers.map( handle =>{
			console.log('handle', handle);

			if(action.type === handle.type){
				beforeHandles.map( f =>{
					newState = f(newState);
				});

				newState = handle.handler(state, action);

				afterHandles.map( f =>{
					newState = f(newState);
				});

			}
		});

		console.log('after handle state', state);

		return newState;
	};

	return {
		handleAction,
		before,
		after,
		reducer
	};
}

exports["default"] = createReducer;
module.exports = exports["default"];
