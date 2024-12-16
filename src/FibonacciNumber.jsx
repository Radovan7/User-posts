const fibonacciNumberArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const FibonacciNumber = (props) => {
    let arrayIndex;
    if (props.arrayIndexProp) {
        arrayIndex = props.arrayIndexProp;
    }
    if (props.arrayIndexPropAaaa) {
        arrayIndex = props.arrayIndexPropAaaa;
    }

    // let arrayIndex = props.arrayIndexProp;
    // arrayIndex = props.arrayIndexPropAaaa;
    console.log("Index elementa koji se trazi: ", props.arrayIndexProp)
  return (
    <div>
        {fibonacciNumberArray[arrayIndex]}
    </div>
  );
};

export default FibonacciNumber;
