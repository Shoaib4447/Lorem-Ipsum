import { useState } from "react";
import data from "./data";

const App = () => {
  const [text, setText] = useState(data);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (amount > 8) amount = 8;
    if (amount <= 0) amount = 1;

    setText(data.slice(0, amount));
  };

  return (
    <section className='section'>
      <div className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form onSubmit={handleSubmit} className='lorem-form '>
          <label htmlFor='amount'>Paragraph:</label>
          <input
            className=''
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className='btn' type='submit'>
            Generate
          </button>
        </form>
        <article className='lorem-text'>
          {text.map((textPara, textIndex) => (
            <p key={textIndex}>{textPara}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default App;
