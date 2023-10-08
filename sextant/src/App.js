
import './App.css';
import Heading from './components/Heading';
import Child from './components/Child';
import Adress from './components/Adress';

function App() {
  return (
    <div className="App">
     <Heading name="Sextant"/>
     <Child name="IPv4 Adress">
        <Adress url='https://api.ipify.org?format=json'/>
     </Child>
     <Child name="IPv6 Adress">
        <Adress url='https://api64.ipify.org?format=json'/>
     </Child>
    </div>
  );
}

export default App;
