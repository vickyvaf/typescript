// Working with Object Params

// First Solution
// const objectParams = (params: { first: number; second: number }) => {
//   return params.first + params.second;
// };

// Second Solution adding type
// type ObjectParams = {
//   first: number;
//   second: number;
// };

// const objectParams = (params: ObjectParams) => {
//   return params.first + params.second;
// };

// Third Solution adding interface
interface ObjectParams {
  first: number;
  second: number;
}

const objectParams = (params: ObjectParams) => {
  return params.first + params.second;
};

const result2 = objectParams({ first: 3, second: 9 });
console.log(result2);
