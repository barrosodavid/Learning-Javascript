const App = () => {
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  const partsItems = props.course.parts.map((part) => <Part name={part.name} exercises={part.exercises}></Part>); 
  return (
    <div>
      {partsItems}
    </div>
  );
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  );
}

const Total = (props) => {
  console.log(props.course.parts);
  let count = 0;
  props.course.parts.forEach(part => count+=part.exercises);
  return (
    <>
      <p>Number of exercises: {count}</p>
    </>
  )
}

export default App;
