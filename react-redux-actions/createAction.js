"use strict";
var nextActionId = 1000;

const createAction = function(t){
	let actionId = nextActionId++;
	let actionType = 'action' + actionId;

	var f = function(){
		let action = typeof t === 'function' ? t.apply(null, arguments) : {payload: _getData(arguments)};
		action.type = actionType;

		return action;
	}

	f.type = actionType;

	return f;
}

const _getData =(params) => {
	var args = Array.prototype.slice.call(params);

	if(args.length == 0)
		return undefined
	else if(args.length == 1)
		return args[0]
	else
		return args;
}

exports["default"] = createAction;
module.exports = exports["default"];
