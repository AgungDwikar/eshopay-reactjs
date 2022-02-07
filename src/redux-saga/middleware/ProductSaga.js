import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";
import apiProduct from "../../api/apiProduct";
import {
    doGetProductFailed,
    doGetProductSucceed,
    doAddProductSucceed,
    doProductFailed,
    doDeleteSucceed,
    doDeleteFailed
} from "../actions/ProductAction";

// pakai generator *
function* handleGetProduct() {
    try {
        // fungsi yield untuk mentriger functin berikutnya
        const result = yield call(apiProduct.findAll);
        // dogetproduct succeed memiliki parameter payload
        yield put(doGetProductSucceed(result));
    } catch (error) {
        yield put(doGetProductFailed(error));
    }
}

function* handleAddProduct(action) {
    const {payload} = action;
    try {
        const result = yield call(apiProduct.addProduct,payload);
        yield put(doAddProductSucceed(result.data));
    } catch (error) {
        yield put(doProductFailed(error));
    }
}

function* handleDeleteProduct(action) {
    const {payload} = action;
    try {
        const result = yield call(apiProduct.deleteRow,payload);
        yield put(doDeleteSucceed(payload));
    } catch (error) {
        yield put(doDeleteFailed(error));
    }
}

export { handleGetProduct,handleAddProduct, handleDeleteProduct };
