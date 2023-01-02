// Delineate Types a Value Can Be

interface User6 {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */

  /**
   * Menambahkan Union supaya ada pilihan bisa di buat terpisah dengan membuat types
   */
  role: Role;
}

type Role = "admin" | "user" | "super-admin";

const defaultUser6: User6 = {
  id: 1,
  firstName: "vicky",
  lastName: "adi",
  role: "super-admin",
};

console.log(defaultUser6);
