import { decrement, increment } from "../../renderer/counterSlice";
import { useAppDispatch, useAppSelector } from "../../renderer/hooks";

const Page = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const incrementF = () => dispatch(increment());
  const decrementF = () => dispatch(decrement());

  console.log(`count = ${count}`);

  return (
    <>
      <h1>Redux-Controlled Counter</h1>
      Count: {count}. <button onClick={incrementF}>++</button>{" "}
      <button onClick={decrementF}>--</button>
    </>
  );
};

export default Page;
