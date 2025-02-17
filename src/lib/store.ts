import { configureStore } from '@reduxjs/toolkit'
import questioReducer from "@/lib/slices/question/question" 
import resultReducer from "@/lib/slices/question/question" 

export const makeStore = () => {
  return configureStore({
    reducer: {
      question: questionQuizs,
      result: resultReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']