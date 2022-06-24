import {createStore} from 'redux'

const App = () => {

  const reducer = (state = 0, action) => {

  }
  const store = createStore(reducer)

  return (
    <div>
      a
    </div>
  );
}

export default App;
