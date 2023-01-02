// Mark a Function Parameter as Optional

/* 
Saya tidak mau menambahkan last name
Caranya dengan menambahkan optional property -> last?: string
*/

const getName2 = (first: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

const result4 = getName2("vicky");
console.log(result4);
