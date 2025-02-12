"use client"
import Link from "next/link";

export default function result() {
    return (
        <>
            <main className="bg-gray-900 h-screen flex justify-center items-center p-10">

                <div className="text-center w-[50em]">
                    <div className="py-6">
                        <h1 className="text-white text-4xl rounded border-b-violet-700 border-4 border-x-0 border-t-0">HTML QUIZ Result</h1>
                    </div>
                    

                    <div className="border px-2 py-6">
                        <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 p-2">
                            <div className="text-white font-bold ">
                                Username
                            </div>
                            <div className="text-white">
                               Muzamil Baig
                            </div>
                        </div>
                        <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 p-2">
                            <div className="text-white font-bold ">
                                Total Quiz Points:
                            </div>
                            <div className="text-white">
                                50
                            </div>
                        </div>
                        <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 p-2">
                            <div className="text-white font-bold">
                                Total Question:
                            </div>
                            <div className="text-white">
                                25
                            </div>
                        </div>
                        <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 p-2">
                            <div className="text-white font-bold">
                                Total Attempts:
                            </div>
                            <div className="text-white">
                                03
                            </div>
                        </div>
                        <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 p-2">
                            <div className="text-white font-bold">
                                Total Earn Points:
                            </div>
                            <div className="text-white">
                                03
                            </div>
                        </div>
                        <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 p-2">
                            <div className="text-white font-bold">
                                Quiz Result:
                            </div>
                            <div className="text-violet-800 border bg-white rounded-full p-1 font-bold">
                                100
                            </div>
                        </div>
                    </div>

                    
                    <div className="py-6">
                        <Link href={"/quiz"} className="text-white border px-4 py-2 rounded hover:bg-violet-700" type="submit">Again Test</Link>
                    </div>

                </div>
            </main>
        </>
    )
}