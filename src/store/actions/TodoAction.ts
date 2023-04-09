import { TodoActionType as ActionType } from "~/store/actions/TodoActionType";
import { TodoAction, TodoProps } from "~/store/reducers/TodoReducer";

export const add = (payload: TodoProps): TodoAction => {
    return {
        type: ActionType.ADD,
        payload,
    };
};

export const edit = (payload: TodoProps): TodoAction => {
    return {
        type: ActionType.EDIT,
        payload,
    };
};

export const remove = (payload: TodoProps): TodoAction => {
    return {
        type: ActionType.REMOVE,
        payload,
    };
};
