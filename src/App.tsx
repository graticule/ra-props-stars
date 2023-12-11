import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <>
      <Stars count={1}></Stars>
      <Stars count={4}></Stars>
      <Stars />
      <Stars count={7}></Stars>
    </>
  )
}

export default App
