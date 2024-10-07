import { Task } from '../interfaces/Tasksinterfaces';

interface TasksList {
    tasks: Task[];
}

const API_URL = './Tasks.json';

const sendRequest = async (task: Task, method: string): Promise<Task> => {
    const response = await fetch(API_URL, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    return response.json();
};

export const fetchTasks = async (): Promise<TasksList> => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addTask = async (task: Task): Promise<Task> => {
    return sendRequest(task, 'POST');
};

export const deleteTask = async (task: Task): Promise<Task> => {
    return sendRequest(task, 'DELETE');
};

export const editTask = async (task: Task): Promise<Task> => {
    return sendRequest(task, 'PATCH');
};
