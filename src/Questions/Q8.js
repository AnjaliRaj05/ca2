import React, { useState } from 'react';

function Q8() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = { name, email };
    setSubmittedData([...submittedData, data]);
    setName('');
    setEmail('');
  }

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Data</h2>
      {submittedData.map((data, index) => (
        <div key={index}>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Q8;

// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// function Q8() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//       const json = await response.json();
//       const labels = json.map(item => item.id);
//       const values = json.map(item => item.completed ? 1 : 0);
//       setData({
//         labels,
//         datasets: [
//           {
//             label: 'Completed',
//             data: values,
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1,
//           },
//         ],
//       });
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <Line data={data} />
//     </div>
//   );
// }

// export default Q8;
