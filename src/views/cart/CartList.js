import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "./CartForm";
import {
    doOnSubmit,
    doAddQty,
    doMinQty,
    doDeleteQty,
    doSetDisplay,
    doHandleOnChange,
    doOnSelectChange,
    doOnCheckItem,
    doSetDisplayItems,
    // doTotalHargaList,
    // doTotalQtyList,
    // doTotalHarga,
    // doTotalQty
} from "../../redux/actions/cartAction";
import TableList from "./TableList";
import ListCheckout from "./ListCheckout";

export default function CartList() {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.carts);
    let totalHarga = useSelector((state) => state.totalHarga);
    let totalQty = useSelector((state) => state.totalQty);
    let totalHargaList = useSelector((state) => state.totalHargaList);
    let totalQtyList = useSelector((state) => state.totalQtyList);
    let productCheck = useSelector((state) => state.productChecked);
    const category = useSelector((state) => state.category);
    const subCategory = useSelector((state) => state.subCategory);
    const display = useSelector((state) => state.display);
    const displayItems = useSelector((state) => state.displayItems);
    const values = useSelector((state) => state.values)
    // total harga dan total wty lebih baik taro di INIT_STATE
    // const [totalHarga, setTotHarga] = useState(0);
    // const [totalQty, setTotalQty] = useState(0);
    // const [subCategory, setSubCategory] = useState([]);

    // state untuk wrap semua value

    // menampung product
    // const [productCheck, setProductCheck] = useState([]);

    // dibawah ini adalah sebuah function
    const addQty = (id) => {
        const payload = { id };
        dispatch(doAddQty(payload));
    };

    const minusQty = (id) => {
        const payload = { id };
        dispatch(doMinQty(payload));
    };

    const deleteCart = (id) => {
        const payload = { id };
        dispatch(doDeleteQty(payload));
    };

    const handleOnChange = (name) => (event) => {
        console.log(event.target.value);
        const payload = { name, event };
        dispatch(doHandleOnChange(payload));
    };

    // funtion submit
    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            prodId: Math.round(Math.random() * 10),
            name: values.prod_name,
            price: parseFloat(values.prod_price),
            qty: parseInt(values.prod_qty, 10),
            subTotal: values.prod_price * values.prod_qty,
            category: values.category,
            subCategory: values.subCategory
          };
        dispatch(doOnSubmit(payload));
        dispatch(doSetDisplay(false));
    };

    const onSelectChange = (e) => {
        const payload = { e };
        dispatch(doOnSelectChange(payload));
    };

    const onCheckItem = (item) => (event) => {
        let status = event.target.checked;
        const dataCheck = [status, item];
        const hasil = productCheck.filter((el) => el.prodId === item.prodId);
        console.log("value of checkbox : ", status);
        console.log(hasil.length);

        const index = productCheck.indexOf(item.prodId);

        if (dataCheck[0] === true && hasil.length === 0) {
            const payload = { item };
            dispatch(doOnCheckItem(payload));
        } else {
            productCheck.splice(index, 1);
        }
        dispatch(doSetDisplay(false));
    };

    return (
        <div>
            <h2>List Of Cart</h2>
            <button onClick={() => dispatch(doSetDisplay(true))}>
                add product
            </button>
            {display ? (
                <CartForm
                    onSubmitForm={onSubmit}
                    handleOnChange={handleOnChange}
                    onSelectChange={onSelectChange}
                    categoryds={category}
                    subCategory={subCategory}
                    setDisplay={display}
                />
            ) : (
                <>
                    <TableList
                        listItems={carts}
                        onCheckItem={onCheckItem}
                        productCheck={productCheck}
                        addQty={addQty}
                        minusQty={minusQty}
                        deleteCart={deleteCart}
                        totalHarga={totalHarga}
                        totalQty={totalQty}
                    />
                    <button onClick={() => dispatch(doSetDisplayItems(true))}>
                        checkout
                    </button>
                    {displayItems ? (
                        <ListCheckout
                            listItems={productCheck}
                            totalHarga={totalHargaList}
                            totalQty={totalQtyList}
                        />
                    ) : null}
                </>
            )}
        </div>
    );
}
