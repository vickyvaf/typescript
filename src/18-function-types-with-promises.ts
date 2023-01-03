// Typing Async Functions

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

const createThenGetUser = async (createUser: () => Promise<string>, getUser: (id: string) => Promise<User>): Promise<User> => {
  const userId = await createUser();

  const user = await getUser(userId);

  return user;
};

async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "LOL",
      lastName: "LOL2"
    })
  );
};
