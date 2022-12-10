export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(satelliteType: string): boolean {
		console.log("Running isSpaceDebris")
		if (satelliteType === "Space Debris") {
			return true;
		}
   }

}

// TODO 3a: fix isSpaceDebris check
