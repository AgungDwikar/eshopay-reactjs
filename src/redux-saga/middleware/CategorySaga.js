import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";
import apiCategory from "../../api/apiCategory";
import {
    doCategorySucceed,
    doCategoryFailed,
} from "../actions/CategoryAction";

// pakai generator
function* handleGetCategory() {
    try {
        // fungsi yield untuk mentriger functin berikutnya
        const result = yield call(apiCategory.list);
        // dogetproduct succeed memiliki parameter payload
        yield put(doCategorySucceed(result));
    } catch (error) {
        yield put(doCategoryFailed(error));
    }
}

export { handleGetCategory };
