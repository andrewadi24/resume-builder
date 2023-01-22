import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Templates from './Components/Templates';
function App() {
  return (
    <div className="App">
      <div className='left'>
        <Form></Form>
      </div>
      <div className='right'>
        <Templates></Templates>
      </div>
    </div>
  );
}

export default App;
