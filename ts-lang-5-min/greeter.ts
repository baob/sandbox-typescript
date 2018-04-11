interface Person {
  firstName: string;
  lastName: string;
}


function greeter(person: Person) {
    return "hello " + person.firstName + " " + person.lastName ;
}

let user = { firstName: "jane", lastName: "user" }

document.body.innerHTML = greeter(user);

