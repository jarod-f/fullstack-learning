import { useState } from 'react';

/****************************************************************
 *                   App Code Local Functions                   *
 ****************************************************************/
/**
 * Renders the name of the course
 */
const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
}

/**
 * Renders a course and its corresponding number of exercises
 */
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
}

/**
 * Renders the course parts and the corresponding numbers of exercises
 */
const Content = (props) => {
  return (
    <div>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  );
}

/**
 * Renders the total number of exercises
 */
const Total = (props) => {
  const total = props.course.parts.reduce((previousValue, currPart) => (
                                            previousValue + currPart.exercises
                                          ), 0);
  return (
    <p>Number of exercises {total}</p>
  );
}

/****************************************************************
 *                 Example Code Local Functions                 *
 ****************************************************************/
const Hello = ({ name, age }) => {
  const birthYear = () => new Date().getFullYear()- age;

  return(
    <div>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {birthYear()}</p>
    </div>
  );
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (  
  <button onClick={onClick}>
    {text}
  </button>
)

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        <p>This app is used by pressing the above buttons.</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Button press history: {allClicks.join(' ')}</p>
      </div>
    );
  }
}


/****************************************************************
 *                        App Definition                        *
 ****************************************************************/
const App = () => {
  /**
   * App code local variables
   */
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  const TextDivider = () => 
    <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>;

  /**
   * Example code local variables
   */
  const [ counter, setCounter ] = useState(0);

  const incrementByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decrementByOne = () => setCounter(counter - 1);
  
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });
  const [allClicks, setAll] = useState([]);
  
  const [value, setValue] = useState(0);

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAll(allClicks.concat('L'));
  }
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    setAll(allClicks.concat('R'));
  }

  const getSayHelloClickHandler = (name) => () => console.log(`Hello ${name}`);

  const setToValue = (newValue) => setValue(newValue);

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

      <TextDivider />

      <Display counter={counter} />
      <Button onClick={incrementByOne} text='plus' />
      <Button onClick={setToZero} text='zero' />
      <Button onClick={decrementByOne} text='minus' />

      <TextDivider />

      {clicks.left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {clicks.right}
      <History allClicks={allClicks} />

      <TextDivider />

      <Button onClick={getSayHelloClickHandler('Sab')} text='Sab' />
      <Button onClick={getSayHelloClickHandler('John')} text='John' />
      <Button onClick={getSayHelloClickHandler('Kyle')} text='Kyle' />

      <TextDivider />
      
      <Display counter={value} />
      <Button onClick={() => setToValue(1000)} text='Thousand' />
      <Button onClick={() => setToValue(0)} text='Zero' />
      <Button onClick={() => setToValue(value + 1)} text='Increment' />
    </div>
  );
}

export default App;
