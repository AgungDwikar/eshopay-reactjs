import * as ActionType from '../constans/ProductConstant'

// inisial state, untuk template
const INIT_STATE = {
    // ini adalah templatenya
    // dibawah untuk menampung data dari api
    products : [],
    isLoading : false,
    isRefresh : false
}

// dibawah ini adalah tabelnya
// memiliki dua paramater state untuk menmapung init state, dan action untukn menghandle ventnnya
const ProductReducer = (state = INIT_STATE, action ) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_REQUEST:
            // menggunkan spreed operator
          return {
              ...state,
              isLoading : true
          }
        case ActionType.GET_PRODUCT_SUCCEED:
            // menggunkan spreed operator
          return applyGetProdutSucceed(state, action)
        //   add product
        case ActionType.ADD_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.ADD_PRODUCT_SUCCEED: {
            return applyAddProductSucceed(state, action)
        }
        case ActionType.DELETE_PRODUCT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: false
            }
        }
        case ActionType.DELETE_PRODUCT_SUCCEED: {
            return applyDeleteProductSucceed(state,action)
        }
    
        default:
            return state
    }
}

// membuat function get product
const applyGetProdutSucceed = (state, action) => {
    return {
        ...state,
        products : action.payload,
        isLoading : false,
        isRefresh : false
    }
}

// membuat function add product
// state untuk menyimpan datanya dan action ini yaitu event yang dikirim dari frontend
const applyAddProductSucceed = (state, action) => {
    let { payload } = action;
    payload = {...payload, category : {cate_id : payload.cate_id,cate_name:''}}
    return {
        ...state,
        products: [...state.products, payload],
        isLoading: false,
        isRefresh : true
    }
}

// membuat fungsion delete product
const applyDeleteProductSucceed = (state, action) => {
    const { payload } = action;
    const filterProduct= state.products.filter(el => el.prod_id !== payload)
    return {
        ...state,
        products : [...filterProduct],
        isLoading: false,
        isRefresh : true
    }
}

export default ProductReducer