import * as React from "react";

import { Col, Layout, Row, Switch, Typography } from "antd";
import { TodoEditor, TodoItem, TodoList } from "~/components";
import { useThemeContext } from "~/contexts/ThemeContext";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const Home: React.FC = () => {
    const { darkMode, setDarkMode } = useThemeContext();

    return (
        <Layout className="fixed top-0 left-0 w-full h-full">
            <Header className="bg-inherit">
                <Title className="text-center">Todo or not Todo</Title>
            </Header>
            <Content className="p-20">
                <Row gutter={150}>
                    <Col md={12}>
                        <TodoEditor />
                    </Col>
                    <Col md={12}>
                        <TodoList />
                    </Col>
                </Row>
            </Content>
            <Footer>
                <Row gutter={20}>
                    <Col>
                        <Text>
                            Toggle dark mode (Currently{" "}
                            {darkMode ? "ON" : "OFF"})
                        </Text>
                    </Col>
                    <Col>
                        <Switch
                            checked={darkMode}
                            onChange={() => {
                                localStorage.setItem(
                                    "dark_mode",
                                    `${!darkMode}`
                                );
                                setDarkMode(!darkMode);
                            }}
                        />
                    </Col>
                </Row>
            </Footer>
        </Layout>
    );
};

export default Home;
