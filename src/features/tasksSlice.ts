import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksList } from '../interfaces/Tasksinterfaces';

const initialState: TasksList = {
  tasks: [],
  filteredTasks: [],
  filter: 'all',
  sortedTasks: [],
  sort: 'all',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
      state.filteredTasks = action.payload;
    },
    addTaskToStore(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
      state.filteredTasks.push(action.payload);
    },
    removeTaskFromStore(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      state.filteredTasks = state.filteredTasks.filter(task => task.id !== action.payload)
    },
    updateTaskInStore(state, action: PayloadAction<Task>) {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        state.filteredTasks[index] = action.payload;
      }
    },
    filterTaskInStore(state, action: PayloadAction<string>) {
      state.filter = action.payload; 
      if (action.payload === 'completed') {
        state.filteredTasks = state.tasks.filter(task => task.state === 'completed');
      } else if (action.payload === 'incomplete') {
        state.filteredTasks = state.tasks.filter(task => task.state === 'incomplete');
      } else if (action.payload === 'inprogress') {
        state.filteredTasks = state.tasks.filter(task => task.state === 'inprogress')
      } else {
        state.filteredTasks = state.tasks; 
      }
    },
    sortTasksInStore(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      if (state.sort === 'title'){
        state.sortedTasks = [...state.tasks].sort((a,b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
      } else if (state.sort === 'createdAt') {
        state.sortedTasks = [...state.tasks].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } else if (state.sort === 'priority') {
        state.sortedTasks = [...state.tasks].sort((a, b) => b.priority - a.priority);
      } else {
        state.sortedTasks = state.tasks;
      }
      }
    }
  },
});

export const { setTasks, addTaskToStore, removeTaskFromStore, updateTaskInStore, filterTaskInStore, sortTasksInStore } = tasksSlice.actions;
export default tasksSlice.reducer;
