function greeter(person: string) {
	return "Hello, " + person;
}

interface Person {
	firstName: string;
	lastName: string;
}

//let user = "little bobby drop tables";
//let user  = [0,1,2]; // causes type error
let user = { firstName: "Bobby", lastName: "Tables" };

document.body.textContent = greeter(user);
