import { Button, Card, Checkbox, Popover } from "antd";
import * as React from "react";
import PriorityIndicator from "~/components/PriorityIndicator";
import { TodoContext } from "~/contexts/TodoContext";
import { TodoProps } from "~/store/reducers/TodoReducer";

interface Props extends TodoProps {}

const TodoItem: React.FC<Props> = (props) => {
    const todoContext = React.useContext(TodoContext);

    const [todo, setTodo] = React.useState<TodoProps>(props);

    return (
        <Card
            title={todo.title}
            extra={<PriorityIndicator priority={todo.priority} />}
            size="small"
        >
            <Checkbox
                className="m-2"
                checked={todo.done}
                onChange={(e) => {
                    setTodo({ ...todo, done: e.target.checked });
                    todoContext.handleEditTodo({ ...todo, done: e.target.checked });
                }}
            >
                Mark as done
            </Checkbox>
            <Popover
                placement="top"
                content={todo.description}
                trigger="click"
            >
                <Button className="m-2" type="primary" ghost>
                    View details
                </Button>
            </Popover>
            <Button className="m-2" danger ghost>
                Edit
            </Button>
        </Card>
    );
};

export default TodoItem;
