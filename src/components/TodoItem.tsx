import { Button, Card, Checkbox, Modal, Popover } from "antd";
import * as React from "react";
import PriorityIndicator from "~/components/PriorityIndicator";
import { TodoContext } from "~/contexts/TodoContext";
import { TodoProps } from "~/store/reducers/TodoReducer";
import TodoEditor from "./TodoEditor";
import { DeleteOutlined } from "@ant-design/icons";

interface Props extends TodoProps {}

const TodoItem: React.FC<Props> = (props) => {
    const todoContext = React.useContext(TodoContext);

    const [todo, setTodo] = React.useState<TodoProps>(props);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    return (
        <>
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
                        todoContext.handleEditTodo({
                            ...todo,
                            done: e.target.checked,
                        });
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
                <Button
                    className="m-2"
                    danger
                    ghost
                    onClick={() => setIsModalOpen(true)}
                >
                    Edit
                </Button>
                <Button
                    icon={<DeleteOutlined />}
                    shape="round"
                    className="m-2"
                    danger
                    onClick={() => {
                        todoContext.handleRemoveTodo(todo);
                    }}
                >
                </Button>
            </Card>
            <Modal
                title="Edit todo"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <TodoEditor
                    mode="EDIT"
                    todo={todo}
                    onSavePostAction={() => setIsModalOpen(false)}
                />
            </Modal>
        </>
    );
};

export default TodoItem;
