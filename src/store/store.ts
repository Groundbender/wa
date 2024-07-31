import { configureStore } from '@reduxjs/toolkit'
import  createSagaMiddleware  from 'redux-saga'
import { rootWatcher } from './sagas/rootWatcher'
import weatherReducer from './slices/weatherSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    weather: weatherReducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware) 
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch