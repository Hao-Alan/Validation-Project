import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../../ComponentsToDoList/Container";

import { TodoListDarkTheme } from "../../Themes/TodoListDarkTheme";
import { TodoListLightTheme } from "../../Themes/TodoListLightTheme";
import { TodoListPrimaryTheme } from "../../Themes/TodoListPrimaryTheme";
import { Dropdown } from "../../ComponentsToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsToDoList/Heading";
import { Input, Label } from "../../ComponentsToDoList/TextField";
import { Button, button } from "../../ComponentsToDoList/Button";
import {
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
} from "../../ComponentsToDoList/Table";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../../features/counter/counterSlice";

const BaiTapToDoList = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const renderTodoList = () => {
    return count.taskList
      .filter((task) => task.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{item.taskName}</Th>
            <Th className="text-end">
              <Button>
                <i class="fa fa-edit"></i>
              </Button>
              <Button>
                <i class="fa fa-check"></i>
              </Button>
              <Button>
                <i class="fa fa-trash-alt"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  const renderCompleteList = () => {
    return count.taskList
      .filter((task) => !task.done)
      .map((item, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{item.taskName}</Th>
            <Th className="text-end">
              <Button>
                <i class="fa fa-trash-alt"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  return (
    <div>
      <ThemeProvider theme={count.theme}>
        <Container className="w-75 mt-3">
          XIN CHAO MOI NGUOI
          <Dropdown>
            <option value="1">Dark Themes</option>
            <option value="2">Light Themes</option>
            <option value="3">Primary Themes</option>
          </Dropdown>
          <hr />
          <Heading3 className="mt-3">TO DO LIST</Heading3>
          <Label>Task Name </Label>
          <Input />
          <Button className="ms-3">
            {" "}
            <i class="fa fa-plus"></i> Add task
          </Button>
          <Button className="ms-3">
            {" "}
            <i class="fa fa-upload"></i> Delete task
          </Button>
          <hr />
          <Heading3 className="mt-3">TASK TO DO </Heading3>
          <Table>
            <Tbody>{renderTodoList()}</Tbody>
          </Table>
          <hr />
          <Heading3 className="mt-3">TASK COMPLETE </Heading3>
          <Table>
            <Tbody>{renderCompleteList()}</Tbody>
          </Table>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default BaiTapToDoList;
