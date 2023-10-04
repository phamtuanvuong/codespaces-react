// const initState = [
//     { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//     { id: 2, name: "Learn ReactJS", completed: false, priority: "High" },
//     { id: 3, name: "Learn NodeJS", completed: false, priority: "Low" }
// ];

// const todoListReducer = (state = initState, action) => {
//     /*
//         {
//             type: 'todiList/addTodo',
//             payload: { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//         }
//     */
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/toggleTodoStatus":
//             console.log(action.payload);
//             return state.map((todo) =>
//                 todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo
//             );
//         default:
//             return state;
//     }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
        { id: 2, name: "Learn ReactJS", completed: false, priority: "High" },
        { id: 3, name: "Learn NodeJS", completed: false, priority: "Low" }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find((t) => t.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        }
    }
});
