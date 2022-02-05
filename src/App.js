// import logo from './logo.svg';
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
// import MainLayout from './layout/MainLayout';
// import Counter from './components/basic/Counter';
// import CounterArrow from './components/basic/CounterArrow';
// import CounterHook from './components/basic/CounterHook';
// import ParentComponent from './components/parentchild/ParentComponent';
// import ParentName from './components/parentchild/ParentName';
// import EmployeeList from './components/parentchild/EmployeeList';
// import CartListItem from './components/parentchild/CartListItem';
// import CartList from './components/basicform/CartList';
// import CartList from './views/cart/CartList';
// import CartListToolkit from './views/cart/CartListToolkit';
// import Categories from './views/category/Categories';
// memanggil database store redux
// import store from './redux/stores';
// jangan lupa panggil penghubungnya yaitu provider
// import { Provider } from 'react-redux';
import Routes from "./Routes";

function App() {
    return (
        // untuk mengwrap dua komponents harus menggunakan tanda seperti ini <> atau fragment
        // <>
        // {/* <Counter/>
        // <CounterArrow/>
        // <CounterHook/> */}
        // {/* <CartListItem/> */}
        // {/* <CartList/> */}

        //   {/* <CartList/> */}
        //   {/* <CartListToolkit/> */}
        //   {/* <Categories/> */}
        //   <MainLayout/>

        // </>
        <Routes />
    );
}

export default App;
