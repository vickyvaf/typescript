// Working with Object Params

const objectParams = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

const result2 = objectParams({ first: 3, second: 9 });
console.log(result2);
