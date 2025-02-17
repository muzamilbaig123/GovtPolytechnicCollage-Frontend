"use client"
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function HomePage() {

    const [name, setName] = useState("");

    const formHandler = (e:FormEvent) => {
        e.preventDefault();
    }


    return (
        <>
            <main className="bg-gray-900 h-screen flex justify-center items-center p-10">

                <div className="text-center w-[50rem]">
                    <div className="py-6">
                        <h1 className="text-white text-4xl border-b-violet-700 border-4 border-x-0 border-t-0">Govt Polytechnic Institute For Women</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum optio nesciunt eos iste neque beatae distinctio cum deserunt dignissimos ut dolorem, unde fugiat quaerat nemo culpa laborum magnam obcaecati.
                    </p>
                    <div className="pb-6">
                        <ol className="text-white text-left" start={1}>
                            <li>1. You Will be asked 10 question one after another.</li>
                            <li>2. 10 points is awarded for the correct answer.</li>
                            <li>3. Each Question has three option. you can choose only one question.</li>
                            <li>4. You Can Review and Change Answer before the quiz finish.</li>
                            <li>5. The result will be decleard at the end of the quiz.</li>
                        </ol>
                    </div>

                    <div>
                        <form onSubmit={formHandler}>
                            <input type="text" placeholder="Enter Name" className="border-b-violet-700 border-4 border-x-0 border-t-0 py-2 px-6 rounded " value={name} onChange={((e) => {setName(e.target.value)})} />
                        </form>
                    </div>

                    <div className="py-6">
                        <Link href={"/quiz"} className="text-white border px-4 py-2 rounded hover:bg-violet-700" type="submit">Start Test</Link>
                    </div>

                </div>
            </main>

        </>
    )
}