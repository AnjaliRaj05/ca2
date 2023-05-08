import React, { useState } from 'react';

export default function Problem3() {
    const [queue, setQueue] = useState([]);

  const enqueue = (item) => {
    setQueue([...queue, item]);
  };

  const dequeue = () => {
    if (queue.length === 0) {
      alert('Queue is empty');
      return;
    }
    const [removed, ...remaining] = queue;
    setQueue(remaining);
  };
  return (
    <div>
      <h2> this is problem3 interface2 </h2>
      <h3>Queue Implementation</h3>
      <p>Queue: {queue.join(', ')}</p>
      <button onClick={() => enqueue(prompt('Enter item to enqueue:'))}>
        Enqueue
      </button>
      <button onClick={dequeue}>Dequeue</button>
    </div>
  )
}
