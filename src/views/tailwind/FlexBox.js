import React from "react";

export default function FlexBox() {
    return (
        <>
            <h3>Flex Box</h3>
            <div className=" flex bg-slate-400 justify-center ">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center ">
                    1
                </div>
            </div>
            <h3>Flex Box</h3>
            <div className=" flex bg-slate-400 justify-around ">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center ">
                    1
                </div>
            </div>
            <div className=" flex bg-slate-400 mt-5">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center ">
                    1
                </div>
            </div>
            <div className=" flex bg-slate-400 mt-5 justify-end ">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center ">
                    1
                </div>
            </div>
            <div className=" flex bg-slate-400 mt-5 flex-row  ">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center basis-1/4 ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center basis-1/4">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center basis-1/2 ">
                    1
                </div>
            </div>
            <div className=" flex bg-slate-400 mt-5 ">
                <div className=" box-border h-32 p-4 border-4 bg-violet-500 text-center w-full ">
                    1
                </div>
                <div className=" box-border h-32 p-4 border-4 bg-violet-500 text-center w-full ">
                    1
                </div>
                <div className=" box-border h-32 p-4 border-4 bg-violet-500 text-center  w-full ">
                    1
                </div>
            </div>
            <div className=" flex bg-slate-400 mt-5 flex-col justify-center items-center  ">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center  ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center ">
                    1
                </div>
            </div>
            <div className=" flex bg-slate-400 mt-5 flex-wrap ">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center ">
                    1
                </div>
            </div>
            <div className=" flex bg-slate-400 mt-5 flex-wrap ">
                <div className=" box-border h-32 w-32 p-4 border-4 bg-violet-500 text-center flex-auto ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-red-600 text-center flex-auto  ">
                    1
                </div>
                <div className=" box-border h-32 w-32 p-4 border-4 bg-orange-500 text-center flex-auto ">
                    1
                </div>
            </div>
        </>
    );
}
