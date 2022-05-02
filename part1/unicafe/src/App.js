import { useState } from 'react'

const Title = ({text}) => <><h1>{text}</h1></>;

const Button = ({handleClick, text}) => <><button onClick={handleClick}>{text}</button></>;


const StatisticsItem = ({name, value}) => {
  return(<><td>{name}</td>
  <td>{value}</td>
  </>);
}

const Statistics = ({good,neutral,bad}) => {
  

  const feedbackSum = () => good+neutral+bad;

  if(feedbackSum() === 0)
    return(<div>
        <p>No feedback given</p>
    </div>);

  const feedbackAverage = () => {
    let total = feedbackSum();

    return((good-bad)/total);
  }

  const positivePercent = () => {
    let total = feedbackSum();
    if(total === 0)
      return 0

    return(100*good/total);
  }

  return(<div>
      <table>
        <tbody>
          <tr><StatisticsItem name="Good" value={good} /></tr>
          <tr><StatisticsItem name="Neutral" value={neutral} /></tr>
          <tr><StatisticsItem name="Bad" value={bad} /></tr>
          <tr><StatisticsItem name="Total feedback" value={feedbackSum()} /></tr>
          <tr><StatisticsItem name="Average feedback" value={feedbackAverage()} /></tr>
          <tr><StatisticsItem name="Positive" value={positivePercent()+"%"} /></tr>
        </tbody>
      </table>
    </div>
  );
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log("Hello");
    setGood(good + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <Title text="Give feedback" />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
