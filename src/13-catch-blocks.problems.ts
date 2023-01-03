// Use any type

const tryCatchDemo = (state: "fail" | "succeed") => {
  // First Solution
  // try {
  //   if (state === "fail") {
  //     throw new Error("Failure!");
  //   }
  // } catch (e: any) {
  //   return e.message;
  // }

  // Second Solution
  // try {
  //   if (state === "fail") {
  //     throw new Error("Failure!");
  //   }
  // } catch (e) {
  //   return (e as Error).message;
  // }

  // Third Solution
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};

tryCatchDemo("fail");
