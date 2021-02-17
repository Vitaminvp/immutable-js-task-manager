// Core
import { fromJS } from 'immutable';

const toggleTodo1 = (todos, id) => ({
    ...todos,
    [ id ]: { ...todos[ id ], completed: !todos[ id ].completed },
});

const toggleTodo2 = (todos, id) => {
    return todos.update(id, (todo) => {
        return todo.update('completed', (completed) => !completed);
    });
};

const todos = {};

[ ...Array(500000).keys() ].forEach((item) => {
    todos[ item ] = {
        todo:      `Task ${item}`,
        completed: false,
    };
});

console.time('native JavaScript object');
toggleTodo1(todos, '250000');
console.timeEnd('native JavaScript object');

const immutableTodos = fromJS(todos);

console.time('Immutable Map');
toggleTodo2(immutableTodos, '250000');
console.timeEnd('Immutable Map');
