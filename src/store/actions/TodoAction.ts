import { TodoActionType as ActionType } from "~/store/actions/TodoActionType";
import { TodoAction, TodoProps } from "~/store/reducers/TodoReducer";

export const add = (payload: TodoProps): TodoAction => {
    return {
        type: ActionType.ADD,
        payload,
    };
};
