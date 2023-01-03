// Selectively Construct Types from Other Types

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

// Omit ==> menghilangkan
// type MyType = Omit<User, "lastName">; 

// Pick ==> mengambil
type MyType = Pick<User, "id" | "firstName">; 

type tests14 = [MyType, { firstName: string; lastName: string }];
