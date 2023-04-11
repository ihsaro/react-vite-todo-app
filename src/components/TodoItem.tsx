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

    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    return (
        <>
            <Card
                title={props.title}
                extra={<PriorityIndicator priority={props.priority} />}
                size="small"
            >
                <Checkbox
                    className="m-2"
                    checked={props.done}
                    onChange={(e) => {
                        todoContext.handleEditTodo({
                            ...props,
                            done: e.target.checked,
                        });
                    }}
                >
                    Mark as done
                </Checkbox>
                <Popover
                    placement="top"
                    content={props.description}
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
                        todoContext.handleRemoveTodo(props);
                    }}
                ></Button>
            </Card>
            {isModalOpen && (
                <Modal
                    title="Edit todo"
                    open={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    footer={null}
                >
                    <TodoEditor
                        mode="EDIT"
                        todo={props}
                        onSavePostAction={() => setIsModalOpen(false)}
                    />
                </Modal>
            )}
        </>
    );
};

export default TodoItem;
