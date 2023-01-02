// Denote an Optional Property  ->  " ? "

/* 
Saya tidak mau menambahkan last name
Caranya dengan menambahkan optional property -> last?: string
*/

type GetNametype = {
  first: string;
  last?: string;
};

const getName = (params: GetNametype) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

const result3 = getName({ first: "vicky" });
console.log(result3);
