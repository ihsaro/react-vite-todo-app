import { TodoActionType as ActionType } from "~/store/actions/TodoActionType";

export interface TodoProps {
    id: number;
    title: string;
    description?: string;
    priority: 0 | 1 | 2;
    done: boolean;
}

export interface TodoAction {
    type: ActionType;
    payload: TodoProps;
}

export const initialState: Array<TodoProps> = [];

export const TodoReducer = (
    state: Array<TodoProps> = initialState,
    action: TodoAction
) => {
    switch (action.type) {
        case ActionType.ADD:
            action.payload.id = state.length + 1;
            return [...state, action.payload];
        case ActionType.EDIT:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};
