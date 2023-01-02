interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

const defaultUser2: User2 = {
  id: 1,
  firstName: "vicky",
  lastName: "adi",
  role: "super-admin",
  posts: [
    {
      id: 1,
      title: "Makan bakso",
    },
    {
      id: 2,
      title: "Tidur",
    },
  ],
};

console.log(defaultUser2);
