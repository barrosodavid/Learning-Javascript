const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 7
    },
    {
      name: 'Using props to pass data',
      exercises: 10
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const partsItems = props.parts.map((part) => <Part name={part.name} exercises={part.exercises}></Part>); 
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
  let count = 0
  props.parts.forEach(part => {
    count += part.exercises;
  });
  return (
    <>
      <p>Number of exercises: {count}</p>
    </>
  )
}

export default App;
