import React, { useState } from "react";

function Q3() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/2/200/300",
    "https://picsum.photos/id/3/200/300",
    "https://picsum.photos/id/4/200/300",
    "https://picsum.photos/id/5/200/300"
  ];

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Q3;

// import React, { useState } from "react";

// function Checklist() {
//   const [options, setOptions] = useState([
//     { id: 1, label: "Option 1", checked: false },
//     { id: 2, label: "Option 2", checked: false },
//     { id: 3, label: "Option 3", checked: false },
//     { id: 4, label: "Option 4", checked: false },
//   ]);

//   const handleCheck = (id) => {
//     const updatedOptions = options.map((option) =>
//       option.id === id ? { ...option, checked: !option.checked } : option
//     );
//     setOptions(updatedOptions);
//   };

//   return (
//     <div>
//       <h3>Select options:</h3>
//       <ul>
//         {options.map((option) => (
//           <li key={option.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={option.checked}
//                 onChange={() => handleCheck(option.id)}
//               />
//               {option.label}
//             </label>
//           </li>
//         ))}
//       </ul>
//       <h3>Selected options:</h3>
//       <ul>
//         {options
//           .filter((option) => option.checked)
//           .map((option) => (
//             <li key={option.id}>{option.label}</li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default Checklist;
