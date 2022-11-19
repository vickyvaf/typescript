// Tipe data pada balikan function

function getName(): string {
  return "Vicky";
}

function getAge(): number {
  return 18;
}

function printName(): void {
  console.log("my name is Vicky");
}

// Argument
//
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(10, 5);

//
function getFullName(firstName: string, middleName: string, lastName: string): string {
  return firstName + " " + middleName + " " + lastName;
}

const getMyName = getFullName("Vicky", "Adi", "Firmansyah");
