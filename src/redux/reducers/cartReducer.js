import { ADD_QTY, GET_CART, MIN_QTY, DELETE_QTY } from "../constant";

const listOfCart = [
    {
        prodId: 1,
        name: "topi",
        price: 9000000,
        qty: 1,
        subTotal: 9000000,
        category: "Fashion",
        subCategory: "",
    },
    {
        prodId: 2,
        name: "antigores",
        price: 7000000,
        qty: 1,
        subTotal: 7000000,
        category: "Komputer",
        subCategory: "",
    },
    {
        prodId: 3,
        name: "samsung",
        price: 12000000,
        qty: 1,
        subTotal: 12000000,
        category: "Handphone",
        subCategory: "",
    },
];

// inisialisasi state global
// yang berkaitan dengan data taro di sini
const INIT_STATE = {
    carts: [...listOfCart],
    totalHarga: 0,
    totalQty : 0,
    productCheck : [],
};

// mebuat reducernya
// reduser mempunyai dua parameter
// table cart = table state.carts
const cartReducer = (state = INIT_STATE, action) => {
    // action adalah aksi yang akan dilakukan
    // action type seperti query
    // select * from carts
    switch (action.type) {
        case GET_CART:
            return { ...state };
        case ADD_QTY:
            // functions
            return applyAddQty(state, action);
        case MIN_QTY:
            return applyMin_Qty(state, action);
        case DELETE_QTY:
            return applyDeleteQty(state, action);
        default:
            return state;
    }
};

const applyAddQty = (state, action) => {
    // extract payload dari actions
    const { payload } = action;
    return {
        ...state,
        carts: [
            ...state.carts.map((crt) => {
                if (payload.id === crt.prodId) {
                    crt.qty = crt.qty + 1;
                    crt.subTotal = crt.price * crt.qty;
                    return crt;
                } else {
                    return crt;
                }
            }),
        ],
    };
};
const applyMin_Qty = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        carts: [
            ...state.carts.map((crt) => {
                if (payload.id === crt.prodId) {
                    if (crt.qty === 1) {
                        crt.qty = 1;
                    } else {
                        crt.qty = crt.qty - 1;
                    }

                    crt.subTotal = crt.price * crt.qty;
                    return crt;
                } else {
                    return crt;
                }
            }),
        ],
    };
};

const applyDeleteQty = (state, action) => {
    const {payload} = action;
    return {
        ...state,
        carts : [...state.carts.filter((el) => el.prodId !== payload.id)]
    }
}

export default cartReducer;
