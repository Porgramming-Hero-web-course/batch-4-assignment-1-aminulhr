interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (profile: Profile, updates: Partial<Profile>) => {
  for (const update in updates) {
    const key = update as keyof Profile;
    (profile[key] as any) = updates[key];
  }
  return profile;
};
const myProfile: Profile = { name: "Alice", age: 20, email: "alice@example" };
// const updatedProfile = updateProfile(myProfile, { name: "roki" });
console.log(myProfile);
