{
  // Promise

  type Something = { something: string };
  //   simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      // make target es6 or else you get error
      const data: Something = { something: "something" };

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  //   calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };

  showData();

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  getToDo();

  // PRACTICE:
  type SomethingP = { SomethingP: string };
  const CreatePromiseP = (): Promise<SomethingP> => {
    return new Promise<SomethingP>((resolve, reject) => {
      const data: SomethingP = { SomethingP: "something Practice" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load Practice");
      }
    });
  };
  const showDataP = async () => {
    const data = await CreatePromiseP();
    console.log(data);
    return data;
  };
  showDataP();

  const getToDoP = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data: Todo = await response.json();
    console.log(data);
    return data;
  };

  getToDoP();
  //
}
