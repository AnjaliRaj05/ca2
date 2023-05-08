// import React, { useState } from 'react';

// function Q4() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);

//   function handleUsernameChange(event) {
//     setUsername(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (username === 'myusername' && password === 'mypassword') {
//       setLoggedIn(true);
//     } else {
//       setError('Incorrect username or password');
//     }
//   }

//   if (loggedIn) {
//     return (
//       <div>
//         <h2>Welcome, {username}!</h2>
//       </div>
//     );
//   }
//   // code for next questions
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" value={username} onChange={handleUsernameChange} />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={handlePasswordChange} />
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Q4;

//
// import React, { useState, useEffect } from 'react';

// function DataDisplay() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h2>Data Display</h2>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DataDisplay;
import React, { useState } from 'react'

function Q4() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [validData, setValidData] = useState(false)

  function validateData(username, password) {
    if (!(username && username.length > 5)) {
      return false
    }
    if (!(password && password.length > 7)) {
      return false
    }
    return true
  }
  function usernameChangeHandler(evnt) {
    setUsername(evnt.target.value);
    if (!validateData(username, password)) {
      setValidData(false)
    } else {
      setValidData(true)
    }
  }
  function passwordChangeHandler(evnt) {
    setpassword(evnt.target.value);
    if (!validateData(username, password)) {
      setValidData(false)
    } else {
      setValidData(true)
    }
  }

  function onLogin() {
    /*
    username>5
    password>7
    */
    if (!validateData(username, password)) {
      setValidData(false)
    } else {
      setValidData(true)
    }
  }
  return <>
    {!validData && <div>
      <div>
        <label>Username</label>
        <input onChange={usernameChangeHandler} type='text' placeholder='type your username' />
      </div>

      <div>
        <label>password</label>
        <input onChange={passwordChangeHandler} type='password' placeholder='**************' />
      </div>
      <button onClick={onLogin} >Login</button>
    </div>}
    {!validData && <p>Invalid Username/password</p>}
    {validData && <p>welcome {username}</p>}
  </>
}

export default Q4