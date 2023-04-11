import * as React from "react";
import { TodoContext } from "~/contexts/TodoContext";
import { TodoProps } from "~/store/reducers/TodoReducer";
import TodoItem from "./TodoItem";
import { Col, Row } from "antd";

const TodoList: React.FC = () => {
    const todoContext = React.useContext(TodoContext);

    React.useEffect(() => {
        console.log(todoContext.todos[0]);
    }, [todoContext.todos]);

    return (
        <Row gutter={25}>
            {todoContext.todos.map((todo: TodoProps) => (
                <Col key={`todo-${todo.id}`} className="mt-5" xs={24} lg={12}>
                    <TodoItem
                        id={todo.id}
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
