import * as ActionType from '../constans/CategoryConstant'

// inisial state, untuk template
const INIT_STATE = {
    // ini adalah templatenya
    // dibawah untuk menampung data dari api
    category : [],
    isLoading : false,
    isRefresh : false
}

// dibawah ini adalah tabelnya
// memiliki dua paramater state untuk menmapung init state, dan action untukn menghandle ventnnya
const CategoryReducer = (state = INIT_STATE, action ) => {
    switch (action.type) {
        case ActionType.GET_CATEGORY_REQUEST:
            // menggunkan spreed operator
          return {
              ...state,
              isLoading : true
          }
        case ActionType.GET_CATEGORY_SUCCEED:
            // menggunkan spreed operator
          return applyGetCategorySucceed(state, action)
    
        default:
            return state
    }
}

// membuat function
const applyGetCategorySucceed = (state, action) => {
    return {
        ...state,
        category : action.payload,
        isLoading : false,
        isRefresh : false
    }
}

export default CategoryReducer