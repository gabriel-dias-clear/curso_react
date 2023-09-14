
import React, { useRef, useEffect } from 'react';

function Ref() {

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);


  const handleClick = () => {

    console.log(myRef.current.value);
  };

  return (
    <div>

      <input type="text" ref={myRef} />

      <button onClick={handleClick}>Clique-me</button>
    </div>
  );
}

export default Ref;
