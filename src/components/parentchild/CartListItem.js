import React, { useState, useEffect } from "react";

export default function CartListItem() {
    const listOfCart = [
        { prodId: 1, name: "del", price: 9000000, qty: 1, subTotal: 9000000 },
        { prodId: 2, name: "asus", price: 7000000, qty: 1, subTotal: 7000000 },
        {
            prodId: 3,
            name: "acer",
            price: 12000000,
            qty: 1,
            subTotal: 12000000,
        },
    ];

    const [carts, setCarts] = useState(listOfCart);

    const [totalHarga, setTotHarga] = useState(0);

    const [totalQty, setTotalQty] = useState(0);

    // component didmount
    useEffect(() => {
        const totalSubTotal = carts.reduce((sum, el) => sum + el.subTotal, 0);
        setTotHarga(totalSubTotal);

        const totalSubQty = carts.reduce((sum, el) => sum + el.qty, 0);
        setTotalQty(totalSubQty);
    }, [carts]);

    useEffect(() => {
        const totalSubTotal = carts.reduce((sum, el) => sum + el.subTotal, 0);
        setTotHarga(totalSubTotal);

        const totalSubQty = carts.reduce((sum, el) => sum + el.qty, 0);
        setTotalQty(totalSubQty);
    }, [carts]);

    const upPordQty = (id) => {
        setCarts([
            ...carts.map((crt) => {
                if (id === crt.prodId) {
                    crt.qty = crt.qty + 1;
                    crt.subTotal = crt.price * crt.qty;
                    return crt;
                } else {
                    return crt;
                }
            }),
        ]);
    };

    const minPordQty = (id) => {
        setCarts([
            ...carts.map((crt) => {
                if (id === crt.prodId) {
                    if (crt.qty === 1) {
                        crt.qty = 1;
                    } else {
                        crt.qty = crt.qty - 1;
                    }

                    crt.subTotal = crt.price * crt.qty;
                    return crt;
                } else {
                    return crt;
                }
            }),
        ]);
    };

    const deleteCart = (id) => {
        // const cartFilter = carts.filter(el => el.price !== id)
        // setCarts=(cartFilter)
        setCarts([...carts.filter((el) => el.prodId !== id)]);
    };

    return (
        <div>
            <h2>List Of Cart</h2>
            <table border={1}>
                <thead>
                    <th>prodId</th>
                    <th>name</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>subTotal</th>
                    <th colSpan={3}>action</th>
                </thead>

                <tbody>
                    {(carts || []).map((crt) => (
                        <tr key={crt.prodId}>
                            <td>prodId : {crt.prodId}</td>
                            <td>name : {crt.name}</td>
                            <td>
                                price :{" "}
                                {new Intl.NumberFormat("ID").format(crt.price)}
                            </td>
                            <td>qty : {crt.qty}</td>
                            <td>
                                subTotal :{" "}
                                {new Intl.NumberFormat("ID").format(
                                    crt.subTotal
                                )}
                            </td>
                            <td>
                                <button onClick={() => upPordQty(crt.prodId)}>
                                    +
                                </button>
                            </td>
                            <td>
                                <button onClick={() => minPordQty(crt.prodId)}>
                                    -
                                </button>
                            </td>
                            <td>
                                <button onClick={() => deleteCart(crt.prodId)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>
                Total Harga : Rp{new Intl.NumberFormat("ID").format(totalHarga)}
            </h3>
            <h3>Total Qty : {totalQty}</h3>
        </div>
    );
}
