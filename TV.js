"use strict";

class TV extends Device {
	constructor( model, someLocation ) {
		super( model, someLocation );
		this._currentChanel = 0;
		this._currentVolume = 20;
		this.MIN_CHANNEL = 0;
		this.MAX_CHANNEL = 99;
		this.MIN_VOLUME = 0;
		this.MAX_VOLUME = 100;
		this._timer = 0;
		
	}
	get model() {
		return this._model;
	}
	get currentChannel() {
		return this._currentChanel;
	}
	get currentVolume() {
		return this._currentVolume;
	}
	nextChannel() {
		if( this._currentChanel == this.MAX_CHANNEL ) {
			this._currentChanel = this.MIN_CHANNEL;
		} else {
			this._currentChanel++;
		}
	}
	previousChannel() {
		if( this._currentChanel == this.MIN_CHANNEL ) {
			this._currentChanel = this.MAX_CHANNEL;
		} else {
			this._currentChanel--;
		}
	}
	increaseVolume() {
		if( this._currentVolume < this.MAX_VOLUME ) {
			this._currentVolume++;
		}
	}
	decreaseVolume() {
		if( this._currentVolume > this.MIN_VOLUME ) {
			this._currentVolume--;
		}
	}
}