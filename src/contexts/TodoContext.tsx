import * as React from "react";
import { TodoProps } from "~/store/reducers/TodoReducer";

interface Props {
    todos: Array<TodoProps>;
    handleAddTodo: (payload: TodoProps) => void;
}

export const TodoContext = React.createContext<Props>({
    todos: [],
    handleAddTodo: () => {},
});

export const useTodoContext = () => React.useContext(TodoContext);
