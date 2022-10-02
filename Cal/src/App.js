import { useState } from 'react'
function App() {
  // useState can only use in top of func component, can't uae in class component, if, loop,
  // they called in the same order
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  // the first thing in the array is always the current state, and the second thing is the func that allows to update
  // thar current state


  const ops = ['/', '*', '+', '-', '.'];


  const updateCalc = vaLue => {
    if (
      (ops.includes(vaLue) && calc === '') ||
      (ops.includes(vaLue) && ops.includes(calc.slice(-1)
      ))// if the last vaLue is ops, and calc has nothing 
      // or ops had vaLue is an operartor and last vaLue was also an operator
    ) {
      return; // return and not do anything
    }
    setCalc(calc + vaLue);

    if (!ops.includes(vaLue)) {
      setResult(eval(calc + vaLue).toString());

    }
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    } return digits
  }
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1); // everything but the last one
    setCalc(value)
  }

  const clearAll = () => {
    if (calc === '') {
      return;
    }
    const valueClear = [];
    setCalc(valueClear)
  }


  return (
    <div className="App"> {/* App with calculator */}
      <div className="calculators">{/* calculators w/ display, operators, digits */}
        <div className="display">
          {result ? <span>({result})</span> : ''} {calc || '0'}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={clearAll}>C</button>
        </div>
        <div className="digits">
          {createDigits()}
          {/* dont need to create that much button */}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => calculate('=')}>=</button>
        </div>
      </div>
    </div>

  );
}

export default App;
