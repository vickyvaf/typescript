// Assigning Types to Variables

interface User5 {
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

const defaultUser5: User5 = {
  id: 1,
  firstName: "vicky",
  lastName: "adi",
  isAdmin: true,
};

const getUserId5 = (user: User5) => {
  return user.id;
};

const result5 = getUserId5(defaultUser5);
console.log(result5);
