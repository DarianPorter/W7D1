

const allTodos = (state) => {
    let arr = [];
    Object.keys(state.todos).map((i)=>{
        arr.push(state.todos[i]);
    });
    return arr;
};

export default allTodos;