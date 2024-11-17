export interface Task {
    id: number;
    title: string;
    description: string;
    state: string;
    createdAt: string;
    priority: number;
}

export interface TasksList {
    tasks: Task[];
    filteredTasks: Task[];
    filter: string;
    sortedTasks: Task[];
    sort: string;
}
