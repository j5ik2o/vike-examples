import {decrement, increment, incrementAsync, selectCount} from "../../renderer/counterSlice";
import { useAppDispatch, useAppSelector } from "../../renderer/hooks";

const Page = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const incrementF = () => dispatch(increment());
  const decrementF = () => dispatch(decrement());
  const incrementAsyncF = () => dispatch(incrementAsync(1));

  console.log(`count = ${count}`);

  return (
    <>
      <h1>Redux-Controlled Counter</h1>
      <span>Count: {count}.</span>
      <button onClick={incrementF}>++</button>{" "}
      <button onClick={decrementF}>--</button>{" "}
      <button onClick={incrementAsyncF}>++(async)</button>
    </>
  );
};

export default Page;
