import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increaseCounter, decreaseCounter } from "../store/counterReducer";

const CounterPage = () => {
  const [changeBy, setChangeBy] = useState(1);
  const val = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const onIncrase = () => {
    dispatch(increaseCounter(Number(changeBy)));
  };

  const onDecrase = () => {
    dispatch(decreaseCounter(Number(changeBy)));
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <div className="w-full flex justify-center items-center gap-4">
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={onDecrase}
        >
          -
        </button>
        <span>{val}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={onIncrase}
        >
          +
        </button>
      </div>
      <div>
        <input
          type="number"
          className="w-30 bg-slate-300 px-2 py-1 rounded-md"
          value={changeBy}
          onChange={(e) => setChangeBy(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CounterPage;
