import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addTask } from '../../api/taskAPI';
import { addTaskToStore } from '../../features/tasksSlice';
import { Task } from '../../interfaces/Tasksinterfaces';
import style from './style/AddTaskForm.module.sass'

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    try {
      const addedTask = await addTask(newTask);
      dispatch(addTaskToStore(addedTask));
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className={style.wrapper}>
      <h2>Add New Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTaskTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTaskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default AddTaskForm;