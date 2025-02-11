"use client"

import HtmlQuestion from "@/components/HtmQuestions"

export default function quiz() {

    const nextQuiz = () => {
        console.log("next")
    }

    const prevQuiz = () => {
        console.log("prev")
    }



    return (
        <>
            <main className="bg-gray-900 h-screen flex justify-center items-center border p-10">

                <div className="text-center w-[50em]">
                    <div className="py-6">
                        <h1 className="text-white text-4xl border-b-violet-700 border-4 border-x-0 border-t-0">HTML QUIZ</h1>
                    </div>
                   <HtmlQuestion />

                    <div className="flex justify-between items-center">
                        <button className="text-white border px-4 py-2 rounded hover:bg-violet-700" onClick={prevQuiz}>Prev</button>
                        <button className="text-white border px-4 py-2 rounded bg-violet-700" onClick={nextQuiz}>Next</button>
                    </div>



                </div>
            </main>

        </>
    )
}



