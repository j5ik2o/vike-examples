import { useAppDispatch, useAppSelector } from "../../renderer/hooks";
import { decrement, increment, selectCount } from "../../renderer/store";

const Page = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const incrementF = () => dispatch(increment());
  const decrementF = () => dispatch(decrement());

  return (
    <>
      <h1>Redux-Controlled Counter</h1>
      Count: {count}. <button onClick={incrementF}>++</button>{" "}
      <button onClick={decrementF}>--</button>
    </>
  );
};

export default Page;
