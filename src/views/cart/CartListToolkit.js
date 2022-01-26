import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartForm from "./CartForm";
import {
    doGetCart,
    doAddQty,
    doMinusQty,
    doDeleteCart,
    doAddCart,
    doSetDisplay
} from "../../features/cartSlice";

export default function CartListToolkit() {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cartStore.carts);
    const category = useSelector((state) => state.cartStore.category);
    const subCategory = useSelector((state) => state.cartStore.subCategory);
    const totalQty = useSelector((state) => state.cartStore.totalQty);
    const totalHarga = useSelector((state) => state.cartStore.totalHarga);
    const display = useSelector((state) => state.cartStore.display);

    // const [display, setDisplay] = useState(false);
    const [values, setValues] = useState({
        prod_name: undefined,
        prod_price: 0,
        prod_qty: 0,
        category: undefined,
        subCategory: undefined,
    });

    const [productCheck, setProductCheck] = useState([]);

    const addQty = (id) => {
        const payload = { id };
        dispatch(doAddQty(payload));
    };

    const minusQty = (id) => {
        const payload = { id };
        dispatch(doMinusQty(payload));
    };

    const deleteCart = (id) => {
        const payload = { id };
        dispatch(doDeleteCart(payload));
    };

    const handleOnChange = (name) => (event) => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const onSelectChange = (e) => {};

    const onCheckItem = (item) => () => {};

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            prodId: Math.round(Math.random() * 10),
            name: values.prod_name,
            price: values.prod_price,
            qty: values.prod_qty,
            subTotal: values.prod_price * values.prod_qty,
            category: values.category,
            subCategory: values.subCategory,
        };

        dispatch(doAddCart(payload));
        dispatch (doSetDisplay(false))
    };

    return (
        <div>
            <h2>List Of Cart</h2>
            <button onClick={() => dispatch(doSetDisplay(true))}>Add Product</button>
            <>
                {display === true ? (
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
                        <table>
                            <th>Select</th>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>SubTotal</th>
                            <th colSpan={3}>Action</th>
                            <tbody>
                                {(carts || []).map((cart) => (
                                    <tr key={cart.prodId}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                onChange={onCheckItem(cart)}
                                                checked={
                                                    productCheck[cart.prodId]
                                                }
                                            />
                                        </td>
                                        <td>{cart.prodId}</td>
                                        <td>{cart.name}</td>
                                        <td>{cart.category}</td>
                                        <td>
                                            {new Intl.NumberFormat("ID").format(
                                                cart.price
                                            )}
                                        </td>
                                        <td>{cart.qty}</td>
                                        <td>
                                            {new Intl.NumberFormat("ID").format(
                                                cart.subTotal
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    addQty(cart.prodId)
                                                }
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    minusQty(cart.prodId)
                                                }
                                            >
                                                -
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    deleteCart(cart.prodId)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3>
                            Total Harga : Rp.{" "}
                            {new Intl.NumberFormat("ID").format(totalHarga)}
                        </h3>
                        <h3>Total Qty : {totalQty}</h3>
                        <button>Checkout</button>
                    </>
                )}
            </>
        </div>
    );
}
