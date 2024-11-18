/*
import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Usamos useMemo para memorizar el cálculo de la suma
  const totalSum = useMemo(() => {
    console.log('Calculando la suma...');
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]); // Dependencia: se recalcula solo si 'numbers' cambia

  return (
    <div>
      <h2>Ejemplo de useMemo</h2>
      <p>Suma total de números: {totalSum}</p>
      <button className="px-4 py-2 rounded-md bg-red-600 text-white" onClick={() => setCount(count + 1)}>
        Incrementar count (actual: {count})
      </button>
      <button className="px-4 py-2 rounded-md bg-red-600 text-white" onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Agregar número a la lista
      </button>
    </div>
  );
}

export default ExpensiveCalculationComponent;
*/


import React, { useState } from 'react';

const ExpensiveCalculationComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const totalSum = numbers.reduce((sum, num) => sum + num, 0);
  console.log('Calculando la suma...');

  return (
    <div>
      <h2>Expensive Calculation (sin useMemo)</h2>
      <p>Suma total de números: {totalSum}</p>
      <button className="px-4 py-2 rounded-md bg-red-600 text-white mx-2" onClick={() => setCount(count + 1)}>
        Incrementar count (actual: {count})
      </button>
      <button className="px-4 py-2 rounded-md bg-red-600 text-white mx-2" onClick={() => setNumbers([...numbers, numbers.length + 1])}>
        Agregar número a la lista
      </button>
    </div>
  );
};

export default ExpensiveCalculationComponent;
