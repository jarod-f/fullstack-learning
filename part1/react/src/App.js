/**
 * Renders the name of the course
 */
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
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
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  );
}

/**
 * Renders the total number of exercises
 */
const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };
  const total = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={total} />
    </div>
  );
}

export default App;
