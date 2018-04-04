"use strict";

let newID = new ManageID();

class Device {
	constructor( model, someLocation ) {	
	this._id = newID.id;
	this._model = model;
	this._loc = someLocation;
	this._on = false;
	}
	get on() {
		return this._on;
	}
	pushOnOff() {
		if( this._on ) {
			this._on = false;
		} else {
			this._on = true;
		}
	}
	get loc() {
		return this._loc;
	}
	set loc( someLocation ) {
		this._location = someLocation;
	}
	get id() {
		return this._id;
	}
	get model() {
		return this._model;
	}
}