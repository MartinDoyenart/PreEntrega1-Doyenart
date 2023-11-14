import React from "react";
import useCounter from "./useCounter.js";
import { Button } from "@chakra-ui/react";

const CounterComponent = ({ quantity, setQuantity }) => {
  const { count, increment, decrement } = useCounter({
    initialValue: quantity,
    step: 1,
  });

  React.useEffect(() => {
    setQuantity(count);
  }, [count, setQuantity]);

  return (
    <div>
      <Button onClick={decrement}>-</Button>
      <span> {count} </span>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default CounterComponent;
