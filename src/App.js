import './App.css';
import Counter from './components/basic/Counter';
import CounterArrow from './components/basic/CounterArrow';
import CounterHook from './components/basic/CounterHook';
import ParentComponent from './components/parentchild/ParentComponent';
import ParentName from './components/parentchild/ParentName';
import EmployeeList from './components/parentchild/EmployeeList';
import CartListItem from './components/parentchild/CartListItem';

function App() {
  return (
    // untuk mengwrap dua komponents harus menggunakan tanda seperti ini <> atau fragment
    <>
    {/* <Counter/>
    <CounterArrow/>
    <CounterHook/> */}
    <CartListItem/>
    </>

  );
}

export default App;
