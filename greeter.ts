function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

class Student {
	fullName: string;
	constructor(
		public firstName: string,
		public middleName: string,
		public lastName: string,
	) {
		this.fullName = firstName + " " + middleName + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

//let user = "little bobby drop tables";
//let user  = [0,1,2]; // causes type error
//let user = { firstName: "Bobby", lastName: "Tables" };
let user = new Student ("Bobby", "D", "Tables");

document.body.textContent = greeter(user);
