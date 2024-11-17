import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Form } from 'react-bootstrap';
import { filterTaskInStore } from '../../features/tasksSlice';

const TaskFilter: React.FC = () => {
    const filter = useSelector((state: RootState) => state.tasks.filter);
    const dispatch = useDispatch();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = e.target.value;
        dispatch(filterTaskInStore(selectedFilter));
    };

    return (
        <Form.Group controlId="task-filter">
            <Form.Label>Filter tasks:</Form.Label>
            <Form.Control
                as="select"
                value={filter}
                onChange={() => handleFilterChange}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </Form.Control>
        </Form.Group>
    );
};

export default TaskFilter;