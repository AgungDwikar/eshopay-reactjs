import * as ActionType from "../constant";

export const doGetCat = (payload) => ({
    type: ActionType.GET_CART,
    // payload untuk mengirimkan data dari viewnya
    payload,
});

export const doAddQty = (payload) => ({
    type: ActionType.ADD_QTY,
    payload,
});

export const doMinQty = (payload) => ({
    type: ActionType.MIN_QTY,
    payload,
});
export const doDeleteQty = (payload) => ({
    type: ActionType.DELETE_QTY,
    payload,
})
