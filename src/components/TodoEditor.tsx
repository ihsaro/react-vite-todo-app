import { SaveOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import * as React from "react";

const TodoEditor: React.FC = () => {
    type Priority = {
        value: number;
        label: string;
    };

    const priorities: Array<Priority> = [
        {
            value: 0,
            label: "Low",
        },
        {
            value: 1,
            label: "Medium",
        },
        {
            value: 2,
            label: "High",
        },
    ];

    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Task name required!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
                <Input.TextArea placeholder="Enter more details" />
            </Form.Item>

            <Form.Item>
                <Row gutter={25}>
                    <Col>
                        <Form.Item name="done">
                            <Checkbox>Mark as done</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="priority">
                            <Select
                                showSearch
                                style={{ width: 160 }}
                                placeholder="Select a priority"
                                optionFilterProp="children"
                                filterOption={(input: string, option: any) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={priorities}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    <SaveOutlined />
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TodoEditor;
