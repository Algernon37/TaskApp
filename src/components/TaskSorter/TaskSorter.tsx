import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortTasksInStore } from '../../features/tasksSlice';
import { Form } from 'react-bootstrap';

const TaskSorter: React.FC = () => {
    const [sortCriteria, setSortCriteria] = useState<string>('');
    const dispatch = useDispatch();
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSort = e.target.value;
        setSortCriteria(selectedSort);
        dispatch(sortTasksInStore(selectedSort))
    }
    return (
        <Form.Group>
            <Form.Label>Sort task by:</Form.Label>
            <Form.Control as='select' value={sortCriteria} onChange={() => handleSortChange}>
                <option value="">Select Sort</option>
                <option value="title">Title</option>
                <option value="createdAt">Date Created</option>
                <option value="priority">Priority</option>
            </Form.Control>
        </Form.Group>   
    );
}

export default TaskSorter;