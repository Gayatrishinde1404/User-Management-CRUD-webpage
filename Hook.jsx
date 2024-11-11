
{ /* import { useState } from "react";

const Hook = () => {
  const [Count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#ffffff");

  const incCount = () => {
    setCount(Count + 1);
  };

  const decCount = () => {
    setCount(Count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const changeBackground = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh" }} className="p-5">
      <button className="bg-green-600 text-white rounded-md p-4 mt-2" onClick={incCount}>
        Increament
      </button>
      <h1 className="text-4xl text-black my-3">{Count}</h1>
      <button className="bg-red-600 text-white rounded-md p-4 mx-3" onClick={decCount}>
        Decreament
      </button>
      <button className="bg-blue-600 text-white rounded-md p-4 mt-2 mx-3" onClick={resetCount}>
        Reset
      </button>
      <button className="bg-purple-600 text-white rounded-md p-4 mt-2 mx-3" onClick={changeBackground}>
        Change Background
      </button>
    </div>
  );
};*/}

import { useState } from "react";
const Hook = () => {
    const [Students, setStudent] = useState([{id: 1, name: "Gayatri", Cource: "Mern"}]);

     const addStudent = () => {
          setStudent([...Students, ])
     }

    return(
      <>
      <h1>Hello from Hook</h1>
      {
        Students.map((std) => {
            return(
              <>
              <h1>Id : {std.id}</h1>
              <h1>Name : {std.name}</h1>
              <h1>Cource : {std.Cource}</h1>

              <button className="bg-black text-white p-2 rounded-md shadow-md mt-5" onClick={addStudent}>Add Student</button>
              </>
            )
        })
      }
      </>
    );
}
export default Hook;









