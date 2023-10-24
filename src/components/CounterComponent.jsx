import React from "react";
import useCounter from "./useCounter.js";
import { Button } from "@chakra-ui/react";

const CounterComponent = () => {
  const { count, increment, decrement } = useCounter(0, 1);
  return (
    <div>
      <Button onClick={decrement}>-</Button>
      <span> {count} </span>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default CounterComponent;
