//
// const todoReducer = (state, action) => {
//     switch (action.type) {
//         case 'saveData':
//             const here_name = (reference.current).name;
//             // const here_name = 'Surya';
//             const here_id = (reference.current).id;
//             // const here_id = 124;
//
//             console.log(`here_name = ${here_name} , here_id : ${here_id}`)
//
//             console.log("After updating ref dude in function")
//             console.log([...state, {id: here_id, name: here_name}])
//
//             // return [...state, {id: here_id, name: here_name}]
//             return [...state, ...reference.current]
//         // return [reference.current]
//         default:
//             return state;
//     }
// }
//
// export default todoReducer;