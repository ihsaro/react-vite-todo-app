import * as React from "react";

import { Col, Layout, Row, Switch, Typography } from "antd";
import { TodoEditor, TodoList } from "~/components";
import { useThemeContext } from "~/contexts/ThemeContext";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const Home: React.FC = () => {
    const { darkMode, setDarkMode } = useThemeContext();

    return (
        <Layout className="-m-2 min-h-screen">
            <Header className="bg-inherit">
                <Title className="text-center">Todo or not Todo</Title>
            </Header>
            <Content className="h-full p-20">
                <Row gutter={150}>
                    <Col md={12} xs={24}>
                        <TodoEditor mode="CREATE" />
                    </Col>
                    <Col md={12} xs={24}>
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
