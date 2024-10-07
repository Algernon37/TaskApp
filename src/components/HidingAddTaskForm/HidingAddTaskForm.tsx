import React, { useState } from 'react';
import AddTaskForm from '../../components/AddTaskForm/AddTaskFrom';
import { Button } from 'react-bootstrap';
import style from './style/HidingAddTaskForm.module.sass'

const HidingAddTaskFrom: React.FC = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <div className={style.wrapper}>
            {showForm ? (
                <AddTaskForm />
            ) : (
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => setShowForm(true)} 
                >
                    Create Task
                </Button>
            )}
        </div>
    )
}


export default HidingAddTaskFrom;
