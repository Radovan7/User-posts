import { useEffect, useState } from "react";

const Number = (props) => {
  const [numberToShow, setNumberToShow] = useState(props.initialNumber);
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    setNumberToShow(10); // 0.0002sekunde
    console.log("klasicno izvrsavanje");
  }, []);

  const handleAddClick = () => {
    console.log("dodato");
    setNumberToShow(numberToShow + 1);
    console.log(numberToShow);
  };

  const handleReduceClick = () => {
    setNumberToShow(numberToShow - 1);
    console.log("smanjeno");
  };

  return (
    <div>
      <div>{numberToShow}</div>
      <button onClick={handleAddClick}>Povecaj za 1</button>
      <br />
      <button onClick={handleReduceClick}>Smanji za 1</button>
    </div>
  );
};

export default Number;
