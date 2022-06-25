import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(counterReducer)

const App = () => {

    return (
        <div>
            {Object.entries(store.getState()).map(a => <p id={a[0]}>{a[0]}: {a[1]}</p>)}
            
            <button onClick={e => store.dispatch({ type: 'GOOD' })}>Good</button>

            <button onClick={e => store.dispatch({ type: 'OK' })}>OK</button>

            <button onClick={e => store.dispatch({ type: 'BAD' })}>Bad</button>

            <button onClick={e => store.dispatch({ type: 'ZERO' })}>Reset to 0</button>
        </div>
    )
}

const renderApp = () => {
    root.render(<App />)
}

renderApp()
store.subscribe(renderApp)