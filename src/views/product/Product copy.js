import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import Page from "../../components/commons/Page";
import apiProduct from "../../api/apiProduct";
import config from "../../config/config";
import { Menu, Transition } from "@headlessui/react";

import {
    DotsVerticalIcon,
    DuplicateIcon,
    PhotographIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
} from "@heroicons/react/solid";

const columns = [
    { name: "Product Name" },
    { name: "Description" },
    { name: "Price" },
    { name: "Stock" },
    { name: "Aksi" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Product() {
    // berpindah halaman dengan navigate
    let navigate = useNavigate();
    // 1.create state products
    const [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(false);

    // 2.declare useeffect product, non  depedency
    // array di kosongkan artinya useeffect akan mentriger 1 kali saat page di ekskusi di web
    // function harus menggunakan tanda kurung
    // apiproduct bersifat asyncronus maka mengget datanya harus menggunakan then
    useEffect(() => {
        apiProduct.findAll().then((result) => {
            setProducts(result);
            setLoading(true);
        });
    }, []);

    return (
        <>
            <Page
                title="product" titleButton="create"
                onClick={() => navigate("/dashboard/product/new")}
            >
                <div className="hidden mt-8 sm:block">
                    <div className="align-middle inline-block min-w-full border-b border-gray-200">
                        {loading === true ? (
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-t border-gray-200">
                                        {(columns || []).map((col, index) => (
                                            <th
                                                key={index}
                                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                <span>{col.name}</span>
                                            </th>
                                        ))}
                                        <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {products &&
                                        products.map((prod) => (
                                            <tr key={prod.prod_id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img
                                                                className="h-10 w-10 rounded-full"
                                                                src={`${config.urlImage}/${prod.prod_url_image}`}
                                                                alt={
                                                                    prod.prod_url_image
                                                                }
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {prod.prod_name}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {
                                                                    prod
                                                                        .category
                                                                        .cate_name
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {prod.prod_desc}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-justify">
                                                    Rp.{" "}
                                                    {new Intl.NumberFormat(
                                                        "ID"
                                                    ).format(prod.prod_price)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-90 text-justify">
                                                    {new Intl.NumberFormat(
                                                        "ID"
                                                    ).format(prod.prod_stock)}
                                                </td>
                                                <td className="pr-6">
                                                    <Menu
                                                        as="div"
                                                        className="relative flex justify-center items-start"
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                                    <span className="sr-only">
                                                                        Open
                                                                        options
                                                                    </span>
                                                                    <DotsVerticalIcon
                                                                        className="w-5 h-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                </Menu.Button>
                                                                <Transition
                                                                    show={open}
                                                                    as={
                                                                        Fragment
                                                                    }
                                                                    enter="transition ease-out duration-100"
                                                                    enterFrom="transform opacity-0 scale-95"
                                                                    enterTo="transform opacity-100 scale-100"
                                                                    leave="transition ease-in duration-75"
                                                                    leaveFrom="transform opacity-100 scale-100"
                                                                    leaveTo="transform opacity-0 scale-95"
                                                                >
                                                                    <Menu.Items
                                                                        static
                                                                        className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                                                    >
                                                                        <div className="py-1">
                                                                            <Menu.Item>
                                                                                {({
                                                                                    active,
                                                                                }) => (
                                                                                    <Link
                                                                                        to="#"
                                                                                        className={classNames(
                                                                                            active
                                                                                                ? "bg-gray-100 text-gray-900"
                                                                                                : "text-gray-700",
                                                                                            "group flex items-center px-4 py-2 text-sm"
                                                                                        )}
                                                                                    >
                                                                                        <PencilAltIcon
                                                                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        Edit
                                                                                    </Link>
                                                                                )}
                                                                            </Menu.Item>
                                                                        </div>
                                                                        <div className="py-3">
                                                                            <Menu.Item>
                                                                                {({
                                                                                    active,
                                                                                }) => (
                                                                                    <Link
                                                                                        to="#"
                                                                                        className={classNames(
                                                                                            active
                                                                                                ? "bg-gray-100 text-gray-900"
                                                                                                : "text-gray-700",
                                                                                            "group flex items-center px-4 py-2 text-sm"
                                                                                        )}
                                                                                    >
                                                                                        <PhotographIcon
                                                                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        Upload
                                                                                        Images
                                                                                    </Link>
                                                                                )}
                                                                            </Menu.Item>
                                                                        </div>
                                                                        <div className="py-1">
                                                                            <Menu.Item>
                                                                                {({
                                                                                    active,
                                                                                }) => (
                                                                                    <Link
                                                                                        to="#"
                                                                                        // onClick={() => {
                                                                                        //     if (window.confirm("Delete this record ?"))
                                                                                        //         onDelete(data.prod_id)
                                                                                        // }}
                                                                                        className={classNames(
                                                                                            active
                                                                                                ? "bg-gray-100 text-gray-900"
                                                                                                : "text-gray-700",
                                                                                            "group flex items-center px-4 py-2 text-sm"
                                                                                        )}
                                                                                    >
                                                                                        <TrashIcon
                                                                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                        Delete
                                                                                    </Link>
                                                                                )}
                                                                            </Menu.Item>
                                                                        </div>
                                                                    </Menu.Items>
                                                                </Transition>
                                                            </>
                                                        )}
                                                    </Menu>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        ) : (
                            // <div className="text-blue-700 font-bold py-2 rounded mt-5 flex">
                            //     process...
                            // </div>
                            <button className="bg-blue-600 p-3 rounded-full flex space-x-3 mt-5">
                                <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                                <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                                <div className=" w-5 h-5 bg-blue-400 rounded-full animate-bounce "></div>
                            </button>
                        )}
                    </div>
                </div>
            </Page>
        </>
    );
}
