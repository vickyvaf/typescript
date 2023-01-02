// Function Return Type Annotations

interface User8 {
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

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */

const makeUser = (): User8 => {
  return {
    id: 1,
    firstName: "vicky",
    lastName: "adi",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "Makan",
      },
    ],
  };
};

const result8 = makeUser();
console.log(result8);
