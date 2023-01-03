//  Assigning Dynamic Keys to an Object

const createCache = () => {
  const cache: Record<string, string> = {};
  
  const add = (id: string, value: string) => {
    cache[id] = value;
  };
  
  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

const cache = createCache();

cache.add("1", "LOL");
cache.add("2", "LOL2");

console.log(cache.cache[2]);
