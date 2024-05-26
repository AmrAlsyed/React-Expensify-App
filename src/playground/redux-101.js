import {configureStore, createSlice} from '@reduxjs/toolkit'

// Old way without createSlice :

// const reducer = (state= {count: 0}, actions) => {
// switch(actions.type) {
//     case 'INCREMENT' :
//         return {
//             count: count++
//         }
//     case 'DECREMENT' :
//         return {
//             count: state.count - actions?.decrementBy || state.count - 1 
//         }
//     case 'RESET': 
//         return {
//             count: 0
//         }
//     default:
//         return state;
// }
// }

// const store = configureStore({
//     reducer
// });

// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 10
// })
// console.log(store.getState())
// store.dispatch({
//     type: "DECREMENT"
// })
// console.log(store.getState())

const counterSlice = createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers: {
        increment(state, action) {
           
            state.count += action.payload?.incrementBy || 1
        },
        decrement(state, action ) {
            state.count -= action.payload?.decrementBy || 1;
        },
        reset(state) {
            state.count = 0;
        },
        set(state, action) {
            state.count = action.payload.count
        }
    }
})


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(counterSlice.actions.increment({incrementBy: 5}))

store.dispatch(counterSlice.actions.increment())

store.dispatch(counterSlice.actions.reset())

store.dispatch(counterSlice.actions.decrement({decrementBy: 10}))
store.dispatch(counterSlice.actions.decrement())
store.dispatch(counterSlice.actions.set({count: 101}))
