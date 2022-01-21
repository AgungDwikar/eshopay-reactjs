import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    doGetCat,
    doAddQty,
    doMinQty,
    doDeleteQty,
} from "../../redux/actions/cartAction";

export default function CartList() {
    const carts = useSelector((state) => state.carts);
    const totalHarga = useSelector((state) => state.totalHarga);
    const totalQty = useSelector((state) => state.totalQty);
    const productCheck = useSelector ((state) => state.productCheck);

    const dispatch = useDispatch();

    // total harga dan total wty lebih baik taro di INIT_STATE
    // const [totalHarga, setTotHarga] = useState(0);

    // const [totalQty, setTotalQty] = useState(0);

    const [display, setDisplay] = useState(false);

    // state untuk wrap semua value
    const [values, setValues] = useState({
        prod_name: undefined,
        prod_price: 0,
        prod_qty: 0,
        category: undefined,
        subCategory: undefined,
    });

    // menampung product
    // const [productCheck, setProductCheck] = useState([]);

    // dibawah ini adalah sebuah function
    const upPordQty = (id) => {
        const payload = { id };
        dispatch(doAddQty(payload));
    };

    const minPordQty = (id) => {
        const payload = { id };
        dispatch(doMinQty(payload));
    };

    const deleteCart = (id) => {
        const payload = { id };
        dispatch(doDeleteQty(payload));
    };

    const handleOnChange = (name) => (event) => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    // funtion submit
    const onSubmit = (e) => {};

    const onSelectChange = (e) => {};

    const onCheckItem = (item) => () => {};

    return (
        <div>
            <h2>List Of Cart</h2>
            <button onClick={() => setDisplay(true)}>add product</button>
            <>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>select</th>
                            <th>prodId</th>
                            <th>name</th>
                            <th>category</th>
                            <th>price</th>
                            <th>qty</th>
                            <th>subTotal</th>
                            <th colSpan={3}>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {(carts || []).map((crt) => (
                            <tr key={crt.prodId}>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={onCheckItem(crt)}
                                        checked={productCheck[crt.prodId]}
                                    ></input>
                                </td>
                                <td>prodId : {crt.prodId}</td>
                                <td>name : {crt.name}</td>
                                <td>category : {crt.category}</td>
                                <td>
                                    price :{" "}
                                    {new Intl.NumberFormat("ID").format(
                                        crt.price
                                    )}
                                </td>
                                <td>qty : {crt.qty}</td>
                                <td>
                                    subTotal :{" "}
                                    {new Intl.NumberFormat("ID").format(
                                        crt.subTotal
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => upPordQty(crt.prodId)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => minPordQty(crt.prodId)}
                                    >
                                        -
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteCart(crt.prodId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>
                    Total Harga : Rp
                    {new Intl.NumberFormat("ID").format(totalHarga)}
                </h3>
                <h3>Total Qty : {totalQty}</h3>
                <button>checkout</button>
            </>
        </div>
    );
}
