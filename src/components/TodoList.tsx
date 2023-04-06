import * as React from "react";
import { TodoContext } from "~/contexts/TodoContext";
import { TodoProps } from "~/store/reducers/TodoReducer";
import TodoItem from "./TodoItem";
import { Col, Row } from "antd";

const TodoList: React.FC = () => {
    const todoContext = React.useContext(TodoContext);

    return (
        <Row gutter={25}>
            {todoContext.todos.map((todo: TodoProps, index: number) => (
                <Col span={12}>
                    <TodoItem
                        key={`todo-${index}`}
                        title={todo.title}
                        description={todo.description}
                        priority={todo.priority}
                        done={todo.done}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default TodoList;
