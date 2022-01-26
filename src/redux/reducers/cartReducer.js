import {
    ADD_QTY,
    GET_CART,
    MIN_QTY,
    DELETE_QTY,
    ON_SUBMIT,
    DISPLAY,
    HANDLE_ONCHANGE,
    ON_SELECTCHANGE,
    ON_CHECKITEM,
    TOTAL_HARGALIST,
    TOTAL_QTYLIST,
    DISPLAY_ITEMS,
    GET_CATEGORY,
    GET_SUBCATEGORY,
    TOTAL_HARGA,
    TOTAL_QTY,
} from "../constant";

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

const category = ["Fashion", "Komputer", "Handphone"];

const listOfSubCategory = [
    { subname: "Baju Muslim", category: "Fashion" },
    { subname: "Kaos", category: "Fashion" },
    { subname: "Tablet", category: "Handphone" },
    { subname: "Casing", category: "Handphone" },
    { subname: "Laptop", category: "Komputer" },
    { subname: "Memory DDR3", category: "Komputer" },
];

// inisialisasi state global
// yang berkaitan dengan data taro di sini
const INIT_STATE = {
    carts: [...listOfCart],
    totalHarga: 0,
    totalQty: 0,
    category: [...category],
    subCategory: [...listOfSubCategory],
    values: {
        prod_name: undefined,
        prod_price: 0,
        prod_qty: 0,
        category: undefined,
        subCategory: undefined,
    },
    productChecked: [],
    totalHargaList: 0,
    totalQtyList: 0,
    display: false,
    displayItems: false,
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
        case GET_CATEGORY:
            return { ...state };
        case GET_SUBCATEGORY:
            return { ...state };
        case ON_SUBMIT:
            return applyOnSubmit(state, action);
        case ADD_QTY:
            // functions
            return applyAddQty(state, action);
        case MIN_QTY:
            return applyMin_Qty(state, action);
        case DELETE_QTY:
            return applyDeleteQty(state, action);
        case DISPLAY:
            return applySetDisplay(state, action);
        case HANDLE_ONCHANGE:
            return applyHandleOnChange(state, action);
        case ON_SELECTCHANGE:
            return applyOnSelectChange(state, action);
        case ON_CHECKITEM:
            return applyOnCheckItem(state, action);
        case TOTAL_HARGALIST:
            return applyTotalHargaList(state, action);
        case TOTAL_QTYLIST:
            return applyTotalQtyList(state, action);
        case DISPLAY_ITEMS:
            return applySetDisplayItems(state, action);
        case TOTAL_HARGA:
            return applyTotalHarga(state, action);
        case TOTAL_QTY:
            return applyTotalQty(state, action);
        default:
            return state;
    }
};

const applyOnSubmit = (state, action) =>  {
   
    const { payload } = action;
    return {
        ...state,
        carts: [...state.carts, payload],
        totalHarga: [...state.carts, payload].reduce(
            (sum, el) => sum + el.subTotal,
            0
        ),
        totalQty: [...state.carts, payload].reduce(
            (sum, el) => sum + el.qty,
            0
        ),
    };
};

const applyAddQty = (state, action) => {
    // extract payload dari actions
    const { payload } = action;
    return {
        ...state,
        carts : [...state.carts.map(cart => {
            if (payload.id === cart.prodId) {
                cart.qty = cart.qty + 1;
                cart.subTotal = (cart.price * cart.qty)
                return cart;
            } else {
                return cart;
            }
        })],
        totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
        totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0),
    };
};
const applyMin_Qty = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        carts: [
            ...state.carts.map((cart) => {
                if (payload.id === cart.prodId) {
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
        ],
        totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
        totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0),
    };
};

const applyDeleteQty = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        carts: [...state.carts.filter((el) => el.prodId !== payload.id)],
        totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
        totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0),
    };
    
};

const applySetDisplay = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        display: payload,
    };
};

const applyHandleOnChange = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        values: { ...state.values, [payload.name]: payload.event.target.value },
    };
};

const applyOnSelectChange = (state, action) => {
    const { payload } = action;

    const value =
        payload.e.target.selectedIndex !== 0
            ? payload.e.target.options[payload.e.target.selectedIndex].value
            : null;

    const categoryFilter = [
        ...state.subCategory.filter((v) => v.category === value),
    ];
    return {
        ...state,
        values: { ...state.values, category: value },
        subCategory: categoryFilter,
    };
};

const applyOnCheckItem = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        productChecked: [
            ...state.productChecked,
            {
                prodId: payload.item.prodId,
                name: payload.item.name,
                price: payload.item.price,
                qty: payload.item.qty,
                subTotal: payload.item.price * payload.item.qty,
                category: payload.item.category,
                subCategory: payload.item.subCategory,
            },
        ],
    };
};

const applyTotalHargaList = (state, action) => {
    return {
        ...state,
        totalHargaList: state.productChecked.reduce(
            (sum, el) => sum + el.subTotal,
            0
        ),
    };
};

const applyTotalQtyList = (state, action) => {
    return {
        ...state,
        totalQtyList: state.productChecked.reduce((sum, el) => sum + el.qty, 0),
    };
};

const applySetDisplayItems = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        displayItems: payload,
    };
};
const applyTotalHarga = (state, action) => {
    return {
        ...state,
        totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
    };
};

const applyTotalQty = (state, action) => {
    return {
        ...state,
        totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0),
    };
};

export default cartReducer;
