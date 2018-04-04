"use strict";

class ManageID{
	constructor(){
		this._id = 0;
	}
	get id() {
		return this._id++;
	}
}
