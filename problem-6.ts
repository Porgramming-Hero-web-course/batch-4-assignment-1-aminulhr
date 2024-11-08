interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (person: Profile, updates: Partial<Profile>) => {
  for (const update in updates) {
    const key = update as keyof Profile;
    (person[key] as any) = updates[key];
  }
  return person;
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
