"use strict";

class SmartHouse {
	constructor( owner ) {
		this._owner = owner;
		this._devices = new Set();
	}
	addDevice( device ) {		
			this._devices.add( device );		
	}
	deleteDeviceByID( id ) {
		for ( let device of this._devices ) {
			if ( device.getID() == id ) {
				this._devices.delete( device );
				return device.getID();
			}
		}
	}
	deleteDevicesByGroup( groupName ) {
		let arr = [];
		for ( let device of this._devices ) {
			if ( device.constructor.name === groupName ) {
				arr.push(device.getID());
				this._devices.delete( device );
			}
		}
		return arr;
	}
	deleteDevicesByLocation( loc ) {
		let arr = [];
		for ( let device of this._devices ) {
			if ( device.getLocation() === loc ) {
				this._devices.delete( device );
				arr.push(device.getID());
			}
		}
		return arr;
	}
	deleteAllDevices() {
		let arr = [];
		for ( let device of this._devices ) {
			arr.push(device.getID());
			this._devices.delete( device );
		}
		return arr;
	}
}
