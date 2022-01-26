import * as ActionType from "../constant";

export const doGetCart = (payload) => ({
    type: ActionType.GET_CART,
    // payload untuk mengirimkan data dari viewnya
    payload,
});

export const doOnSubmit = (payload) => ({
    type: ActionType.ON_SUBMIT,
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
});
export const doSetDisplay = (payload) => ({
    type: ActionType.DISPLAY,
    payload,
});
export const doHandleOnChange = (payload) => ({
    type: ActionType.HANDLE_ONCHANGE,
    payload,
});
export const doOnSelectChange = (payload) => ({
    type: ActionType.ON_SELECTCHANGE,
    payload,
});
export const doOnCheckItem = (payload) => ({
    type: ActionType.ON_CHECKITEM,
    payload,
});
export const doTotalHargaList = (payload) => ({
    type: ActionType.TOTAL_HARGALIST,
    payload,
});

export const doTotalQtyList = (payload) => ({
    type: ActionType.TOTAL_QTYLIST,
    payload,
});

export const doSetDisplayItems = (payload) => ({
    type: ActionType.DISPLAY_ITEMS,
    payload,
});
export const doTotalHarga = (payload) =>({
    type : ActionType.TOTAL_HARGA,
    payload
})

export const doTotalQty = (payload) =>({
    type : ActionType.TOTAL_QTY,
    payload
})