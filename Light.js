"use strict";

class Light extends Device{
	constructor( model, someLocation ) {
		super( model, someLocation );
		this._currentBright = 50;
		this._memoryBright = 0;
		this.MAX_BRIGHT = 100;
		this.MIN_BRIGHT = 0;
	}
	get currentBright() {
		return this._currentBright;
	}
	increaseBright() {
		if( this._currentBright < this.MAX_BRIGHT ) {
			this._currentBright++;
		}
	}
	decreaseBright() {
		if( this._currentBright > this.MIN_BRIGHT ) {
			this._currentBright--;
		}
	}
	lightOnOff() {
		if( this._currentBright != 0 ) {
			this._memoryBright = this._currentBright;
			this._currentBright = 0;
		} else {
			this._currentBright = this._memoryBright;		
		}	
	}
}