import { Button, Card, Checkbox, Col, Popover, Row } from "antd";
import * as React from "react";
import PriorityIndicator from "~/components/PriorityIndicator";

interface Props {
    title: string;
    description?: string;
    done: boolean;
    priority: 0 | 1 | 2;
}

const TodoItem: React.FC<Props> = (props) => {
    return (
        <Card
            title={props.title}
            extra={<PriorityIndicator priority={2} />}
            size="small"
        >
            <Row align="middle" gutter={10}>
                <Col>
                    <Checkbox checked={props.done}>Mark as done</Checkbox>
                </Col>
                <Col>
                    <Popover placement="top" content={props.description} trigger="click">
                        <Button type="primary" ghost>View details</Button>
                    </Popover>
                </Col>
                <Col>
                    <Button danger ghost>Edit</Button>
                </Col>
            </Row>
        </Card>
    );
};

export default TodoItem;
