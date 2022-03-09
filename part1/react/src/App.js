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
      {props.part} {props.exercises}
    </p>
  );
}

/**
 * Renders the course parts and the corresponding numbers of exercises
 */
const Content = (props) => {
  return (
    <div>
      <Part part={props.courseData.part1} exercises={props.courseData.exercises1} />
      <Part part={props.courseData.part2} exercises={props.courseData.exercises2} />
      <Part part={props.courseData.part3} exercises={props.courseData.exercises3} />
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
  const course = 'Half Stack application development'
  const courseData = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component',
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  }
  const total = courseData.exercises1 + courseData.exercises2 + courseData.exercises3;

  return (
    <div>
      <Header course={course} />
      <Content courseData={courseData} />
      <Total total={total} />
    </div>
  );
}

export default App;
