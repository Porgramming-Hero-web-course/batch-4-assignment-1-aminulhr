type Person = {
  name: string;
  age: number;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30 };

console.log(getProperty(person, "name"));
