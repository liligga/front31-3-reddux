import { useSelector, useDispatch } from "react-redux";

const CounterPage = () => {
  const val = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrase = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>{val}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={onIncrase}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
