import { useAppDispatch, useAppSelector } from "../../renderer/hooks";
import {decrement, increment, selectCount, set} from "../../renderer/store";
import {useEffect} from "react";
import {usePageContext} from "../../renderer/usePageContext";

const Page = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const incrementF = () => dispatch(increment());
  const decrementF = () => dispatch(decrement());

  // const pageContext = usePageContext();
  // useEffect( () => {
  //     console.log(`useEffect: ${JSON.stringify(pageContext.PRELOADED_STATE)}`);
  //     dispatch(set(pageContext.PRELOADED_STATE.value));
  // }, []);

  return (
    <>
      <h1>Redux-Controlled Counter</h1>
      Count: {count}. <button onClick={incrementF}>++</button>{" "}
      <button onClick={decrementF}>--</button>
    </>
  );
};

export default Page;
