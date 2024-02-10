import Add from "./Add";
import Increment from "./Increment";
import Todos from "./Todos";

const Show = () => {
  return (
    <div>
      Todo List
      <Increment />
      <h1>........</h1>
      <Add />
      <Todos />
    </div>
  );
};

export default Show;
