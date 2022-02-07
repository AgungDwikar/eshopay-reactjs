import * as ActionType from "../constans/CategoryConstant"

export const doCategoryRequest = () => ({
    type: ActionType.GET_CATEGORY_REQUEST
});

export const doCategorySucceed = (payload) => ({
    type: ActionType.GET_CATEGORY_SUCCEED,
    payload,
});

export const doCategoryFailed = (payload) => ({
    type: ActionType.GET_CATEGORY_FAILED,
    payload,
});