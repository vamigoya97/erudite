// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <h1>PUTA LA WEA EL WEN AWEONAO</h1>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useEasybase } from '../node_modules/easybase-react';
import { useState, useEffect } from 'react';
import Container from './components/Container';

function App() {

  const [easybaseData, setEasybaseData] = useState([]);
  const { db, e } = useEasybase();

  const mounted  = async() => {
    const ebData = await db("POLAR-VIEWS").return().all();
    setEasybaseData(ebData);
  }

  // const post  = async() => {
  //   await db('POLAR-VIEWS').where({
  //     'mediaoutlet': 'fox'
  //   }).set({
  //     'trust': 420
  //   }).one()
  // }

  const [query, setQuery] = useState('');
  const searchBarFilter = data => {

    var dataArray = [];
    var index = 0;

    for (var elem in data) {
      if (query === '') {
        dataArray.splice(index, 0, data[elem]);
      }
      else if (data[elem].caption.toLowerCase().includes(query.toLowerCase())) {
        dataArray.splice(elem, 1, data[elem]);
      }
      index++;
    };

    return dataArray;
  }

  useEffect(() => {

    // post();
    mounted();

  }, []);

  let count = 0;
  return (
    <div className="App">
      <div className='header'>
          <h1>SWCTM </h1>
          <p>Here is where the explanation and mission of website will be</p>
          <form>
            <input type='text' placeholder='enter words' onChange={event => setQuery(event.target.value)} />
          </form>
      </div>
      <Container key={count++} data={searchBarFilter(easybaseData)} db={db} e={e} />
    </div>
  );
}

export default App;