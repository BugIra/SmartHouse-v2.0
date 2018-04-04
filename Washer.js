"use strict";

class Washer extends Device {
	constructor( model, someLocation ) {
		super( model, someLocation );
		this._start = false;
		this._temperature = 40;
		this._time = 0;
		this._spin = 0;
		this._regime = "";
		this._memory = 0;
	}
	get start() {
		return this._start;
	}
	get temperature() {
		return this._temperature;
	}
	set temperature( temp ) {
		this._temperature = temp;
	}
	get time() {
		return this._time;
	}
	set time( time ) {
		this._time = time;
	}
	get spin() {
		return this._spin;
	}
	set spin( spin ) {
		this._spin = spin;
	}
	get regime() {
		return this._regime;
	}
	get memory() {
		return this._memory;
	}
	set memory( time ) {
		this._memory = time;
	}
	set regime( regime ) {
		switch( regime ) {
			case "Baby":
				this._regime = "baby";
				this._temperature = 40;
				this._time = 120;
				this._spin = 600;
				this._memory = 120;
				break;
			case "Cotton":
				this._regime = "cotton";
				this._temperature = 90;
				this._time = 100;
				this._spin = 800;
				this._memory = 100;
				break;
			case "Wool":
				this._regime = "wool";
				this._temperature = 30;
				this._time = 60;
				this._spin = 600;
				this._memory = 60;
				break;
			case "Delicate":
				this._regime = "delicate";
				this._temperature = 30;
				this._time = 50;
				this._spin = 400;
				this._memory = 50;
				break;
			case "Quick":
				this._regime = "quick";
				this._temperature = 40;
				this._time = 45;
				this._spin = 800;
				this._memory = 45;
				break;
		}
	}
	pushPause() {
		if( this._start == false ) {
			this._start = true;
		} else {
			this._start = false;
		}
	}
}