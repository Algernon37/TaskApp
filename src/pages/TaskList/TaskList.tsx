import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../features/tasksSlice';
import { fetchTasks } from '../../api/taskAPI';
import TaskItem from '../TaskItem/TaskItem';
import TaskSorter from '../../components/TaskSorter/TaskSorter';
import TaskFilter from '../../components/TaskFilter/TaskFilter';
import { RootState } from '../../store/store';
import { TasksList } from '../../interfaces/Tasksinterfaces';
import HidingAddTaskFrom from '../../components/HidingAddTaskForm/HidingAddTaskForm';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);


    useEffect(() => {
        const loadTasks = async () => {
            const tasksData: TasksList = await fetchTasks();
            dispatch(setTasks(tasksData.tasks));
        };

        loadTasks();
    }, [dispatch]);


    return (
        <div>
            <TaskFilter />
            <TaskSorter />
            <HidingAddTaskFrom/>
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                    //key={task.id}
                    //task={task}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;