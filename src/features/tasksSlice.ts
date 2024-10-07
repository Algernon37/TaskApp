import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksList } from '../interfaces/Tasksinterfaces';

const initialState: TasksList = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    addTaskToStore(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    removeTaskFromStore(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskInStore(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { setTasks, addTaskToStore, removeTaskFromStore, updateTaskInStore } = tasksSlice.actions;
export default tasksSlice.reducer;
