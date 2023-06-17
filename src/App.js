import './App.css';
import Content from './component/Content';
import Map from './component/map/Map';

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <h1>IP Address Tracker</h1>
        <form className='form' action="">
          <input className='form-input' type="text" placeholder='Search for and IP address or domain' />
          <button className='btn'><img src="./images/icon-arrow.svg" alt="" /></button>
        </form>
      </div>

      <Content />

      <Map  />



    </div>
  );
}

export default App;
