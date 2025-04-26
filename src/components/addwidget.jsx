import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/widgetslice';

function AddWidgetModal({ category }) {
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');
    const dispatch = useDispatch();

    const handleAddWidget = () => {
        const newWidget = {
            id: Date.now(),
            name: widgetName,
            text: widgetText
        };
        dispatch(addWidget({ category, widget: newWidget }));
    };

    return (
        <div>
            <h4>Add Widget</h4>
            <input type="text" placeholder="Widget Name" onChange={e => setWidgetName(e.target.value)} />
            <input type="text" placeholder="Widget Text" onChange={e => setWidgetText(e.target.value)} />
            <button onClick={handleAddWidget}>Add</button>
        </div>
    );
}

export default AddWidgetModal;
