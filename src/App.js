import './App.css';
import Counter from './components/basic/Counter';
import CounterArrow from './components/basic/CounterArrow';
import CounterHook from './components/basic/CounterHook';
import ParentComponent from './components/parentchild/ParentComponent';
import ParentName from './components/parentchild/ParentName';
import EmployeeList from './components/parentchild/EmployeeList';
import CartListItem from './components/parentchild/CartListItem';
// import CartList from './components/basicform/CartList';
import CartList from './views/cart/CartList';
// memanggil database store redux
import store from './redux/stores';
// jangan lupa panggil penghubungnya yaitu provider
import { Provider } from 'react-redux';

function App() {
  return (
    // untuk mengwrap dua komponents harus menggunakan tanda seperti ini <> atau fragment
    <>
    {/* <Counter/>
    <CounterArrow/>
    <CounterHook/> */}
    {/* <CartListItem/> */}
    {/* <CartList/> */}

    <Provider store={store}>
      <CartList/>
    </Provider>
    </>

  );
}

export default App;
