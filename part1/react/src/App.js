/**
 * Renders the entire app
 */
function App() {
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

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

/**
 * Renders the name of the course
 */
 function Header(props) {
  return (
    <h1>{props.course.name}</h1>
  );
}

/**
 * Renders the course parts and the corresponding numbers of exercises
 */
 function Content(props) {
  return (
    <div>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  );
}

/**
 * Renders a course and its corresponding number of exercises
 */
 function Part(props) {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
}

/**
 * Renders the total number of exercises
 */
 function Total(props) {
  const total = props.course.parts.reduce((previousValue, currPart) => (
                                            previousValue + currPart.exercises
                                          ), 0);
  return (
    <p>Number of exercises {total}</p>
  );
}

export default App;
