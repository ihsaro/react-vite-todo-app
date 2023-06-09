import { ConfigProvider, theme } from "antd";
import * as React from "react";
import Home from "~/pages/Home";
import { ThemeContext } from "~/contexts/ThemeContext";
import {
    initialState,
    TodoProps,
    TodoReducer,
} from "~/store/reducers/TodoReducer";
import { add, edit, remove } from "~/store/actions/TodoAction";
import { TodoContext } from "~/contexts/TodoContext";

const App: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const [todos, dispatch] = React.useReducer(TodoReducer, initialState);

    const handleAddTodo = (payload: TodoProps) => {
        dispatch(add(payload));
    };

    const handleEditTodo = (payload: TodoProps) => {
        dispatch(edit(payload));
    };

    const handleRemoveTodo = (payload: TodoProps) => {
        dispatch(remove(payload));
    };

    const { defaultAlgorithm, darkAlgorithm } = theme;

    React.useEffect(() => {
        const isDarkMode = localStorage.getItem("dark_mode");

        if (
            isDarkMode !== undefined &&
            isDarkMode !== null &&
            (isDarkMode === "true" || isDarkMode === "false")
        ) {
            setDarkMode(JSON.parse(isDarkMode));
        }
    }, []);

    return (
        <ConfigProvider
            theme={{
                algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
                token: {
                    fontFamily: "Montserrat",
                    colorPrimary: "#138585",
                },
                components: {},
            }}
        >
            <ThemeContext.Provider
                value={{
                    darkMode: darkMode,
                    setDarkMode: setDarkMode,
                }}
            >
                <TodoContext.Provider
                    value={{
                        todos,
                        handleAddTodo,
                        handleEditTodo,
                        handleRemoveTodo,
                    }}
                >
                    <Home />
                </TodoContext.Provider>
            </ThemeContext.Provider>
        </ConfigProvider>
    );
};

export default App;
