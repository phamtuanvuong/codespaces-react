import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const searchStatusSelector = (state) => state.filters.status;
export const searchPrioritySelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

//due to the dependency of getting todolistSelector and searchTextSelector => use createSelector for simple code
export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    searchStatusSelector,
    searchPrioritySelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return priorities.length
                    ? todo.name
                          ?.toLowerCase()
                          .includes(searchText.toLowerCase()) &&
                          priorities.includes(todo.priority)
                    : todo.name
                          ?.toLowerCase()
                          .includes(searchText.toLowerCase());
            }

            return (
                todo.name?.toLowerCase().includes(searchText.toLowerCase()) &&
                (status !== "All" && status === "Completed"
                    ? todo.completed
                    : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    }
);
