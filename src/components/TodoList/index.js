import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./todosSlice";

export default function TodoList() {
    const dispatch = useDispatch();
    const [priorityValue, setPriorityValue] = useState("Medium");
    const [inputValue, setInputValue] = useState("");

    const todoList = useSelector(todosRemainingSelector);

    const handleAddButtonClick = () => {
        console.log(priorityValue);
        dispatch(
            todoListSlice.actions.addTodo({
                id: uuidv4(),
                name: inputValue,
                priority: priorityValue,
                completed: false
            })
        );
        setInputValue("");
        setPriorityValue("Medium");
    };

    const handlePriorityChange = (value) => {
        setPriorityValue(value);
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Select
                        defaultValue="Medium"
                        value={priorityValue}
                        onChange={handlePriorityChange}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
