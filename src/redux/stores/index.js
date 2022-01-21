import { createStore } from "redux";
import cartReducer from "../reducers/cartReducer";

// create store
// redux store sebagai databasenya
// dan tabelnya adalah cartreducer di folder reducers
const store = createStore(cartReducer)

export default store;