import { combineReducers } from "redux";
import CategoryReducer from "./CategroyReducer";
import ProductReducer from "./ProductReducer";

// combine reducer berfungsi untuk membukus semua reducer
const rootReducer = combineReducers({
    // di bawah ini adalah alias yang mana semua product reducer disimpan ke product state
    productState: ProductReducer,
    categoryState: CategoryReducer,
});

export default rootReducer;
