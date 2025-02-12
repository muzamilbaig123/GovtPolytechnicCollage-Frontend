import { useState } from "react"
import { questions } from "@/app/utils/htmlquiz";


export default function HtmlQuestion() {

    const [selectedAnswer, setSelectedAnswer] = useState("");



    return (
        <>
       <div className="pb-6 text-white text-left">
      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <h3 className="mb-3 text-lg">{q.question}</h3>
          <ul>
            {q.options.map((opt) => (
              <li key={opt.id} className="mb-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt.id}
                    checked={selectedAnswer === opt.id}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    className="mr-2"
                  />
                  {opt.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
        </>
    )
}