function greeter(person: string) {
	return "Hello, " + person;
}
//let user = "little bobby drop tables";
let user  = [0,1,2]; // causes type error

document.body.textContent = greeter(user);
