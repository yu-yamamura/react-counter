import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Button, Card, CardContent, Statistic } from 'semantic-ui-react';
import './Counter.css';

type InjectedProps = {
  count: number;
  increment: () => void;
  reset: () => void;
};
type Props = { max: number; };

const withCounter =
  (WrappedComponent: (props: Props & Partial<InjectedProps>) => ReactElement) =>
  ({ max }: Props) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((previousCount) => previousCount + 1);
    const reset = useCallback(() => setCount(0), []);

    useEffect(() => {
      if (count > max) reset();
    }, [count, max, reset]);

    return (
      <WrappedComponent
        max={max}
        count={count}
        reset={reset}
        increment={increment}
      />
    );
  };

const Counter = ({
  max,
  count = 0,
  increment = () => undefined,
  reset = () => undefined,
}: Props & Partial<InjectedProps>) => (
  <div className="container">
    <header>
      <h1>カウンター</h1>
    </header>
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count / max</Statistic.Label>
        <Statistic.Value>
          {count} / {max}
        </Statistic.Value>
      </Statistic>
      <CardContent>
        <div className="ui two buttons">
          <Button color="red" onClick={reset} data-testid="reset">
            Reset
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default withCounter(Counter);
