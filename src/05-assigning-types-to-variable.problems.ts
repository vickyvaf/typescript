// Assigning Types to Variables

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */

/**
 * Menambahkan types ke variable
 */

const defaultUser: User = {
  id: 1,
  firstName: "vicky",
  lastName: "adi",
  isAdmin: true,
};

const getUserId = (user: User) => {
  return user.id;
};

const result5 = getUserId(defaultUser);
console.log(result5);
