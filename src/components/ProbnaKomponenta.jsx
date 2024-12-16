import React, { useState } from "react";

export const ProbnaKomponenta = () => {

  const [inputPolje, setInputPolje] = useState("");
    
  const [x, setX] = useState("");

  const handleSubmit = (event) => {
    console.log("prva forma je poslata");
    console.log("vrednost input polja je u sledecoj liniji");
    console.log(inputPolje);
    setX(inputPolje);
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  const handleChangeInput = (event) => {
    console.log( event.target.value );
    console.log("input je promenjen!");
    setInputPolje( event.target.value );
  }

  return (
    <div>
      <h1>Vrednost od X je: {x}</h1>

      <form>
        <input name="inputPolje" onChange={handleChangeInput} />
        <button onClick={handleClick} type="submit">
          Setuj X
        </button>
      </form>
    </div>
  );
};
