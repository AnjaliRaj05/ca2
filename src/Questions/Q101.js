// import React from 'react'

// function Q101() {
//   return React.createElement("ul", null, [
//     React.createElement("li", null, ["Michael Jackson"]),
//     React.createElement("li", null, ["The weekend"]),
//     React.createElement("li", null, ["Shakira"]),
//     React.createElement("li", null, ["Britney Spears"]),
//   ])
// }

// export default Q101

import React from 'react';

function Q101() {
  const names = ["Michael Jackson", "The Weekend", "Shakira","Britney Spears"];
  const nameElements = names.map((name) =>
    React.createElement("li", { key: name }, name)
  );

  return (
    <div>
      <h2>List of Names:</h2>
      <ul>{nameElements}</ul>
    </div>
  );
}

export default Q101;
