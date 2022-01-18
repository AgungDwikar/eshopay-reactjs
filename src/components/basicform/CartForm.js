import React from "react";

function CartForm(props) {
    return (
        <form onSubmit={props.onSubmitForm}>
            <div>
                <label>product name : </label>
                <input
                    type="text"
                    placeholder="input name"
                    onChange={props.handleOnChange("prod_name")}
                />
            </div>
            <div>
                <label>product price : </label>
                <input
                    type="number"
                    placeholder="input price"
                    onChange={props.handleOnChange("prod_price")}
                />
            </div>
            <div>
                <label>product qty : </label>
                <input
                    type="number"
                    placeholder="input qty"
                    onChange={props.handleOnChange("prod_qty")}
                />
            </div>
            <div>
                <label>category :</label>
                <select onChange={props.onSelectChange}>
                    <option>choose category</option>
                    {props.categoryds.map((value, index) => (
                        <option key={index}> {value} </option>
                    ))}
                </select>
            </div>
            <div>
                <label>sub category :</label>
                <select>
                    {props.subCategory.map((value, index) => (
                        <option key={index}> {value.subname} </option>
                    ))}
                </select>
            </div>
            <div>
                <button type="submit">submit</button>
                <button onClick={() => props.setDisplay(false)}>cancel</button>
            </div>
        </form>
    );
}

export default CartForm;
