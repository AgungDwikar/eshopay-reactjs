import * as ActionType from "../constans/ProductConstant";

// do get tidak mengrimkan daata payload
export const doGetProductRequest = () => ({
    type: ActionType.GET_PRODUCT_REQUEST,
});
// akan menmpung data dari api
export const doGetProductSucceed = (payload) => ({
    type: ActionType.GET_PRODUCT_SUCCEED,
    payload
});
export const doGetProductFailed = (payload) => ({
    type: ActionType.GET_PRODUCT_FAILED,
    payload
});
// add product
export const doAddProductRequest = (payload) => ({
    type: ActionType.ADD_PRODUCT_REQUEST,
    payload,
});

export const doAddProductSucceed = (payload) => ({
    type: ActionType.ADD_PRODUCT_SUCCEED ,
    payload,
});

export const doProductFailed = (payload) => ({
    type: ActionType.GET_PRODUCT_FAILED ,
    payload,
});
export const doDeleteRequest = (payload) => ({
    type: ActionType.DELETE_PRODUCT_REQUEST,
    payload,
});

export const doDeleteSucceed = (payload) => ({
    type: ActionType.DELETE_PRODUCT_SUCCEED,
    payload,
});

export const doDeleteFailed = (payload) => ({
    type: ActionType.DELETE_PRODUCT_FAILED,
    payload,
});
