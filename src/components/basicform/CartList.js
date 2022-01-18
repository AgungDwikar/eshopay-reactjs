import React, { useState, useEffect } from "react";
import CartForm from "./CartForm";

export default function CartList() {
    const listOfCart = [
        {
            prodId: 1,
            name: "topi",
            price: 9000000,
            qty: 1,
            subTotal: 9000000,
            category: "Fashion",
            subCategory: "",
        },
        {
            prodId: 2,
            name: "antigores",
            price: 7000000,
            qty: 1,
            subTotal: 7000000,
            category: "Komputer",
            subCategory: "",
        },
        {
            prodId: 3,
            name: "samsung",
            price: 12000000,
            qty: 1,
            subTotal: 12000000,
            category: "Handphone",
            subCategory: "",
        },
    ];

    const listOfSubCategory = [
        { subname: "Baju Muslim", category: "Fashion" },
        { subname: "Kaos", category: "Fashion" },
        { subname: "Tablet", category: "Handphone" },
        { subname: "Casing", category: "Handphone" },
        { subname: "hardisk", category: "Komputer" },
        { subname: "Memory DDR3", category: "Komputer" },
    ];

    const [category] = useState(["Fashion", "Komputer", "Handphone"]);

    const [carts, setCarts] = useState(listOfCart);

    const [subCategory, setSubCategory] = useState([]);

    const [totalHarga, setTotHarga] = useState(0);

    const [totalQty, setTotalQty] = useState(0);

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
    const [productCheck, setProductCheck] = useState([]);

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

    // dibawah ini adalah sebuah function
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

    // form di pindahkan ke child komponent tidak usah di pakai lagi oke
    // const renderForm = () => {
    //     return (
    //         <form onSubmit={onSubmit}>
    //             <div>
    //                 <label>product name : </label>
    //                 <input
    //                     type="text"
    //                     placeholder="input name"
    //                     onChange={handleOnChange("prod_name")}
    //                 />
    //             </div>
    //             <div>
    //                 <label>product price : </label>
    //                 <input
    //                     type="number"
    //                     placeholder="input price"
    //                     onChange={handleOnChange("prod_price")}
    //                 />
    //             </div>
    //             <div>
    //                 <label>product qty : </label>
    //                 <input
    //                     type="number"
    //                     placeholder="input qty"
    //                     onChange={handleOnChange("prod_qty")}
    //                 />
    //             </div>
    //             <div>
    //                 <label>category :</label>
    //                 <select onChange={onSelectChange}>
    //                     <option>choose category</option>
    //                     {category.map((value, index) => (
    //                         <option key={index}> {value} </option>
    //                     ))}
    //                 </select>
    //             </div>
    //             <div>
    //                 <label>sub category :</label>
    //                 <select>
    //                     {subCategory.map((value, index) => (
    //                         <option key={index}> {value.subname} </option>
    //                     ))}
    //                 </select>
    //             </div>
    //             <div>
    //                 <button type="submit">submit</button>
    //                 <button onClick={() => setDisplay(false)}>cancel</button>
    //             </div>
    //         </form>
    //     );
    // };

    // function untuk handle perubahan dimana ketika kita mengetik maka valuenya akan merefresh

    const handleOnChange = (name) => (event) => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    // funtion submit
    const onSubmit = (e) => {
        e.preventDefault();
        setCarts([
            ...carts,
            {
                prodId: Math.round(Math.random() * 10),
                name: values.prod_name,
                price: values.prod_price,
                qty: values.prod_qty,
                subTotal: values.prod_price * values.prod_qty,
                category: values.category,
                subCategory: values.subCategory,
            },
        ]);
        setDisplay(false);
    };

    const onSelectChange = (e) => {
        const value =
            e.target.selectedIndex !== 0
                ? e.target.options[e.target.selectedIndex].value
                : null;
        setValues({ ...values, category: value });

        const categoryFilter = [
            ...listOfSubCategory.filter((v) => v.category === value),
        ];
        setSubCategory(categoryFilter);
    };

    const onCheckItem = (item) => () => {
        console.log(item);
        setProductCheck([
            ...productCheck,
            {
                prodId: item.prodId,
                name: item.prod_name,
                price: item.prod_price,
                qty: item.prod_qty,
                subTotal: item.prod_price * item.prod_qty,
                category: item.category,
                subCategory: item.subCategory,
            },
        ]);
    };

    return (
        <div>
            <h2>List Of Cart</h2>
            <button onClick={() => setDisplay(true)}>add product</button>
            {display === true ? (
                <CartForm
                    onSubmitForm={onSubmit}
                    handleOnChange={handleOnChange}
                    onSelectChange={onSelectChange}
                    categoryds={category}
                    subCategory={subCategory}
                    setDisplay={setDisplay}
                />
            ) : (
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
                                            onClick={() =>
                                                upPordQty(crt.prodId)
                                            }
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                minPordQty(crt.prodId)
                                            }
                                        >
                                            -
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteCart(crt.prodId)
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
                        Total Harga : Rp
                        {new Intl.NumberFormat("ID").format(totalHarga)}
                    </h3>
                    <h3>Total Qty : {totalQty}</h3>
                    <button>checkout</button>
                </>
            )}
        </div>
    );
}
