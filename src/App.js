import {Header }from './components/Header'
import {Balance} from './components/Balance'
import {Incomeexpenses } from './components/Incomeexpenses';
import {TrannsactionList}from './components/TrannsactionList';
import {AddTransaction}from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
         <Header/>
      <div className='contianer'>
        <Balance/>
        <Incomeexpenses/>
        <TrannsactionList/>
        <AddTransaction/>
      </div>
      </GlobalProvider>
    

  );
}

export default App;
