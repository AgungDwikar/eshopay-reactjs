import React, { useEffect, useState } from "react";
import Page from "../../components/commons/Page";
import { useNavigate, NavLink, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiProduct from "../../api/apiProduct";
import apiCategory from "../../api/apiCategory";

const listCondition = ["New", "Second", "Refurbish"];

export default function AddProduct(props) {
    let navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [previewImg, setPreviewImg] = useState();
    const [uploaded, setUploaded] = useState(false);

    // gnakan empty array biar di ekskusi satu kali
    useEffect(() => {
        apiCategory
            .list()
            .then((data) => setCategories(data))
            .catch((error) => console.log(error.message));
    }, []);

    const validationSchema = Yup.object().shape({
        prod_name: Yup.string("enter product name").required(
            "product name is required"
        ),
        prod_price: Yup.number().min(1).default(0),
        prod_stock: Yup.number().min(1).default(0),
        prod_desc: Yup.string("enter product description").required(
            "product description is required"
        ),
    });

    // atribut formik yang harus di deklarasikan
    const formik = useFormik({
        initialValues: {
            prod_name: "",
            prod_price: 0,
            prod_stock: 0,
            prod_desc: "",
            prod_expire: "",
            prod_weight: 0,
            prod_cate_id: "",
            prod_brand: "",
            prod_condition: "",
            prod_rating: 0,
            prod_views: 0,
            prod_user_id: 1,
            prod_images: "",
            prod_url_image: undefined,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            values.prod_expire = startDate;
            // alert(values);
            let payload = new FormData();
            payload.append("prod_name", values.prod_name);
            payload.append("prod_price", values.prod_price);
            payload.append("prod_stock", values.prod_stock);
            payload.append("prod_cate_id", parseInt(values.prod_cate_id));
            payload.append("prod_rating", 0);
            payload.append("prod_views", 0);
            payload.append("prod_desc", values.prod_desc);
            payload.append("prod_user_id", parseInt(values.prod_user_id));
            payload.append("prod_images", values.prod_images);

            // post with api
            apiProduct.addProduct(payload).then((response) => {
                toast.success(response.message);
            });

            // call navigate back to product list
            navigate("/dashboard/product", { state: { refresh: true } });
        },
    });

    // membuat fun ction untuk onchangesubmit file
    // menggunakan high order function
    const uploadOnChange = (name) => (event) => {
        let reader = new FileReader();
        // kalau kita mengirimkan file itu ada di index ke 0
        let file = event.target.files[0];

        // kirim empty parameter
        reader.onloadend = () => {
            formik.setFieldValue("prod_images", file);
            setPreviewImg(reader.result);
        };
        reader.readAsDataURL(file);
        setUploaded(true);
    };

    // membuat function untuk remove image
    // gunakan prevent default agar tidak apload image otomatis
    const onClearImage = (event) => {
        event.preventDefault();
        setUploaded(false);
        setPreviewImg(null);
    };

    return (
        <>
            <Page
                title="Add Product"
                titleButton="Back"
                onClick={() => navigate(-1)}
            >
                <div className="mt-5 md:mt-10 md:col-span-2 ">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-10 py-5 bg-white sm:p-6">
                                {/* bikin grid */}
                                <div className="sm:flex-1 lg:grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="prod_name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="prod_name"
                                            id="prod_name"
                                            placeholder="input product name"
                                            value={formik.values.prod_name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete="prod_name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {formik.touched.prod_name &&
                                        formik.errors.prod_name ? (
                                            <span className="mt-2 text-sm text-red-600">
                                                {formik.errors.prod_name}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="col-span-6 row-start-2 sm:col-span-3">
                                        <label
                                            htmlFor="prod_desc"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Product Description
                                        </label>
                                        <textarea
                                            id="prod_desc"
                                            name="prod_desc"
                                            value={formik.values.prod_desc}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="product description"
                                            defaultValue={""}
                                        />
                                        {formik.touched.prod_desc &&
                                        formik.errors.prod_desc ? (
                                            <span className="mt-2 text-sm text-red-600">
                                                {formik.errors.prod_desc}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="col-span-6 row-start-3 sm:col-span-1">
                                        <label
                                            htmlFor="prod_price"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            name="prod_price"
                                            id="prod_price"
                                            value={formik.values.prod_price}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete="prod_price"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {formik.touched.prod_price &&
                                        formik.errors.prod_price ? (
                                            <span className="mt-2 text-sm text-red-600">
                                                {formik.errors.prod_price}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="col-span-6 row-start-3 sm:col-span-1">
                                        <label
                                            htmlFor="prod_stock"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Product stock
                                        </label>
                                        <input
                                            type="text"
                                            name="prod_stock"
                                            id="prod_stock"
                                            value={formik.values.prod_stock}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete="prod_stock"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {formik.touched.prod_stock &&
                                        formik.errors.prod_stock ? (
                                            <span className="mt-2 text-sm text-red-600">
                                                {formik.errors.prod_stock}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="col-span-6 row-start-3 sm:col-span-1">
                                        <label
                                            htmlFor="prod_condition"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Condition
                                        </label>
                                        <select
                                            name="prod_condition"
                                            id="prod_condition"
                                            value={formik.values.prod_condition}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete="prod_condition"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        >
                                            {/* looping select listcondition */}
                                            {listCondition.map(
                                                (value, index) => (
                                                    <option
                                                        value={value}
                                                        key={index}
                                                    >
                                                        {value}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-span-6 row-start-4 sm:col-span-1">
                                        <label
                                            htmlFor="prod_cate_id"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Catgeory
                                        </label>
                                        <select
                                            name="prod_cate_id"
                                            id="prod_cate_id"
                                            value={formik.values.prod_cate_id}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete="prod_cate_id"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        >
                                            {/* looping select listcondition */}
                                            {(categories || []).map(
                                                (value, index) => (
                                                    <option
                                                        value={value.cate_id}
                                                        key={index}
                                                    >
                                                        {value.cate_name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-span-6 row-start-4 sm:col-span-1">
                                        <label
                                            htmlFor="prod_brand"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Product brand
                                        </label>
                                        <input
                                            type="text"
                                            name="prod_brand"
                                            id="prod_brand"
                                            value={formik.values.prod_brand}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="input product brand"
                                            autoComplete="prod_brand"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 row-start-4 sm:col-span-1">
                                        <label
                                            htmlFor="prod_expire"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Expire
                                        </label>
                                        <DatePicker
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            selected={startDate}
                                            onChange={(date) =>
                                                setStartDate(date)
                                            }
                                        />
                                    </div>
                                    <div className="col-span-6 col-start-4 row-span-2 sm:col-span-1 lg:col-span-3  ">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Cover brand
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                {uploaded === false ? (
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <>
                                                        <img
                                                            src={previewImg}
                                                            alt="images"
                                                            className="mx-auto h-48 w-48"
                                                        />
                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                for="image"
                                                                className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                            >
                                                                <span
                                                                    className="ml-4"
                                                                    onClick={
                                                                        onClearImage
                                                                    }
                                                                >
                                                                    Remove
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </>
                                                )}

                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="prod_url_image"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>upload file</span>
                                                        <input
                                                            type="file"
                                                            name="prod_url_image"
                                                            id="prod_url_image"
                                                            accept="image/*"
                                                            onChange={uploadOnChange(
                                                                "file"
                                                            )}
                                                            className="sr-only"
                                                        />
                                                    </label>
                                                    <p className="pl-1">
                                                        or drag and drop
                                                    </p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                        {formik.touched.prod_url_image &&
                                        formik.errors.prod_url_image ? (
                                            <span className="mt-2 text-sm text-red-600">
                                                {formik.errors.prod_url_image}
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="button"
                                    onClick={formik.handleSubmit}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate("/dashboard/product", {
                                            state: { refresh: true },
                                        })
                                    }
                                    className="inline-flex ml-3 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Page>
        </>
    );
}
