import './App.css';
import Todo from './components/todo';
import { Provider } from 'react-redux';
import {Store} from "./app/Store";

function App() {

  return (
    <>
  <Provider Store={Store}>
    <Todo/>
  </Provider>
    </>
  );
}

export default App
