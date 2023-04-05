import { Card } from "antd";
import * as React from "react";

interface Props {
    priority: 0 | 1 | 2;
}

const PriorityIndicator: React.FC<Props> = (props) => {
    return (
        <div
            className={`p-2 ${
                props.priority === 2
                    ? "bg-red-500"
                    : props.priority === 1
                    ? "bg-orange-500"
                    : props.priority === 0
                    ? "bg-green-500"
                    : "bg-gray-500"
            } w-5 h-5 rounded-full`}
        ></div>
    );
};

export default PriorityIndicator;
