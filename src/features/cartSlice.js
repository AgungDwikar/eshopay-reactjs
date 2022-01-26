import { createSlice } from "@reduxjs/toolkit";

const listOfCart = [
    {
        prodId: 1,
        name: "Dell",
        price: 1500,
        qty: 1,
        subTotal: 1500,
        category: "Komputer",
        subCategory: "",
    },
    {
        prodId: 2,
        name: "T-Shirt",
        price: 500,
        qty: 1,
        subTotal: 500,
        category: "Fashion",
        subCategory: "",
    },
    {
        prodId: 3,
        name: "Samsung",
        price: 3500,
        qty: 1,
        subTotal: 3500,
        category: "Handphone",
        subCategory: "",
    },
];

export const cartSlice = createSlice({
    // membuat atribut, atribut name miripn denga yang di constan
    // name akan dikirim ke redux store
    name: "cart",
    initialState: {
        carts: [...listOfCart],
        totalHarga: 0,
        totalQty: 0,
    },
    // membuat action type denganreducers
    reducers: {
        doGetCart: (state) => {
            return state;
        },
        doAddQty: (state, action) => {
            const carts = [
                ...state.carts.map((cart) => {
                    if (action.payload.id === cart.prodId) {
                        cart.qty = cart.qty + 1;
                        cart.subTotal = cart.price * cart.qty;
                        return cart;
                    } else {
                        return cart;
                    }
                }),
            ];
            const totalHarga = carts.reduce(
                (total, el) => total + el.subTotal,
                0
            );
            const totalQty = carts.reduce((total, el) => total + el.qty, 0);
            state.carts = carts;
            state.totalHarga = totalHarga;
            state.totalQty = totalQty;
        },
        doMinusQty: (state, action) => {
            const carts = [
                ...state.carts.map((cart) => {
                    if (action.payload.id === cart.prodId) {
                        if (cart.qty === 1) {
                            cart.qty = 1;
                        } else {
                            cart.qty = cart.qty - 1;
                        }
                        cart.subTotal = cart.price * cart.qty;
                        return cart;
                    } else {
                        return cart;
                    }
                }),
            ];
            const totalHarga = carts.reduce(
                (total, el) => total + el.subTotal,
                0
            );
            const totalQty = carts.reduce((total, el) => total + el.qty, 0);
            state.carts = carts;
            state.totalHarga = totalHarga;
            state.totalQty = totalQty;
        },
        doDeleteCart: (state, action) => {
            const carts = [
                ...state.carts.filter((el) => el.prodId !== action.payload.id),
            ];
            state.carts = carts;
            state.totalHarga = state.carts.reduce(
                (sum, el) => sum + el.subTotal,
                0
            );
            state.totalQty = state.carts.reduce((sum, el) => sum + el.qty, 0);
        },
        doAddCart: (state, action) => {
            state.carts = [...state.carts, action.payload];
            state.totalHarga = [...state.carts, action.payload].reduce(
                (sum, el) => sum + el.subTotal,
                0
            );
            state.totalQty = [...state.carts, action.payload].reduce(
                (sum, el) => sum + el.qty,
                0
            );
        },
        doSetDisplay : (state) => {
            return state;
        },
    },
});

// kita extract satu satu reducernya
export const { doGetCart, doMinusQty, doAddQty, doDeleteCart, doAddCart, doSetDisplay } =
    cartSlice.actions;
export default cartSlice.reducer;
