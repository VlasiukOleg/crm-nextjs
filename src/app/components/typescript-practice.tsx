type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Oleg',
};

// --------------------------------------

type Coordinate = [number, number];

type UserWithCoords = {
  id: number;
  name: string;
  coordinate: Coordinate;
};

const userWithCoords: UserWithCoords = {
  id: 10,
  name: 'Alex',
  coordinate: [100, 200],
};

// --------------------------------------------

enum AnimalsId {
  cat = 'cat',
  dog = 'dog',
  fish = 'fish',
}

type Animal = {
  [AnimalsId.cat]: {
    meow: () => string;
  };
  [AnimalsId.dog]: {
    bark: () => string;
  };
  [AnimalsId.fish]: {
    swim: () => string;
  };
};

let cat: Animal[AnimalsId.cat] = {
  meow: () => 'Meow! I am a cat',
};

// ---------------------------------------------

function greet(name?: string) {
  name ? console.log('Hello', name) : console.log('Hello');
}

greet('Oleg');
greet();

// -------------------------------------------------------

let arr: Array<string | number> = [1, 'Oleg'];

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve('Done!');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

// -------------------------
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge({ firstName: 'Alisa' }, { age: 28 });

// merged.age;

type Person = {
  nam: string;
};

type AdditionFields = {
  age: number;
};

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge<Person, AdditionFields>({ nam: 'Alisa' }, { age: 28 });

// ----------------------------------------------------------
type Length = {
  length: number;
};

function getLength<T extends Length>(string: T) {
  return string.length;
}

getLength('Alex');
getLength([0, 5, 10]);

// ----------------------------
function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

arrayLogger(['Hello', 'World']); // Ok
// arrayLogger([1, 2, 3]); // Error

// --------------

type Person1 = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person1;

function getPerson(person: Person1, key: PersonKeys) {
  return person[key];
}

const john: Person1 = {
  name: 'Alex',
  age: 38,
  location: 'Ukraine',
};

// -----------------------------------------
function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]; // Type 'U' cannot be used to index type 'T'
}

extractValue({ name: 'John' }, 'name');

// ---------------------------------------------

type NewUser = {
  id: number;
  name: string;
  email: string;
  register: boolean;
};

function createUser(data: Partial<NewUser>): NewUser {
  const defaultUser: NewUser = {
    id: Date.now(),
    name: '',
    email: '',
    register: false,
  };

  return { ...defaultUser, ...data };
}

// ------------------------------------------------
enum UserRoles {
  Admin = 'admin',
  Manager = 'manager',
  Employee = 'employee',
}

type userRolesStatutes = Record<UserRoles, boolean>;

const userRoleStatuses: userRolesStatutes = {
  [UserRoles.Admin]: true,
  [UserRoles.Manager]: false,
  [UserRoles.Employee]: false,
};
