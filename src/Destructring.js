// // import React from "react";

// // const Person = ({ name, age, gender }) => {
// //   return (
// //     <div>
// //       <p>Name: {name}</p>
// //       <p>Age: {age}</p>
// //       <p>Gender: {gender}</p>
// //     </div>
// //   );
// // };

// // const Destructring = () => {
// //   const person = { name: "John", age: 25, gender: "Male" };

// //   // Destructure the person object
// //   const { name, age, gender } = person;

// //   return (
// //     <div>
// //       <h1>Person Details</h1>
// //       <Person name={name} age={age} gender={gender} />
// //     </div>
// //   );
// // };

// // export default Destructring;

// import React from 'react'

// function Destructring() {

//     const person =["Mango","Banana","Litchi"]
//     const[Fruit1, ,Fruit3] = person;
//   return (
//     <div>
//       <h1>Destructring Details </h1>
//       <h1>{Fruit1}</h1>
//       <h1>{Fruit3}</h1>
//     </div>
//   )
// }

// export default Destructring

import React from 'react'

export default function Destructring() {
  const numbers=[1,2,3,4,5];
  // destructring
  const [first,second,...rest]=numbers
  return (
    <div>
      {/* console.log(first);
      console.log(second);
      console.log(rest); */}
      <h1>{first}</h1>
      <h1>{second}</h1>
      <h1>{rest}</h1>
    </div>
  )
}
