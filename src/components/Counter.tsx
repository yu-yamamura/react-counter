import React from "react";
import { Button, Card, CardContent, Statistic } from "semantic-ui-react";
import { useCounter } from "../hooks/useCounter";
import "../styles/components/Counter.css";

type Props = {
  max: number;
  count: number;
  increment: () => void;
  reset: () => void;
};

type ContainerProps = { max: number };

const Component = ({ max, count, increment, reset }: Props) => (
  <div className="container">
    <header>
      <h1>カウンター</h1>
    </header>
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count / max</Statistic.Label>
        <Statistic.Value data-testid="count-and-max">
          {count} / {max}
        </Statistic.Value>
      </Statistic>
      <CardContent>
        <div className="ui two buttons">
          <Button color="red" onClick={reset} data-testid="reset">
            Reset
          </Button>
          <Button color="green" onClick={increment} data-testid="increment">
            +1
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const CounterComponent = ({ max }: ContainerProps) => {
  const { count, increment, reset } = useCounter(10);

  return (
    <Component max={max} count={count} increment={increment} reset={reset} />
  );
};

export default CounterComponent;
