import { createSlice } from "@reduxjs/toolkit";

type InitQuestionType = {
    quest: string[]
    answer: string[],
    trace: number, 
}

const initQuestion:InitQuestionType = {
    quest: [],
    answer: [],
    trace: 0, 
}

const questionsQuiz = createSlice({
    name: "Questions",
    initialState: initQuestion,
    reducers: {
            startExamAction: (state, action) => {
              state.quest = action.payload
            }
    },
})

export const {startExamAction} = questionsQuiz.actions


export default questionsQuiz.reducer
