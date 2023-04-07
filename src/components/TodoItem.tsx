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
            extra={<PriorityIndicator priority={props.priority} />}
            size="small"
        >
            <Checkbox className="m-2" checked={props.done}>
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
            <Button className="m-2" danger ghost>
                Edit
            </Button>
        </Card>
    );
};

export default TodoItem;
