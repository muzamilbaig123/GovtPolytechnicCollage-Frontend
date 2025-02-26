import { configureStore } from '@reduxjs/toolkit'
import questionReducer from "./slices/question/question" 
import resultReducer from "./slices/result/result" 


export const makeStore = () => {
  return configureStore({
    reducer: {
      questionRed: questionReducer,
      resultRed: resultReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']