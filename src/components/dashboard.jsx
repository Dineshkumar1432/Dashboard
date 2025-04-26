import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget } from '../store/widgetslice';

function Dashboard() {
    const categories = useSelector(state => state.widgets);
    const dispatch = useDispatch();

    return (
        <div>
            {categories.map(category => (
                <div key={category.category}>
                    <h3>{category.category}</h3>
                    {category.widgets.map(widget => (
                        <div key={widget.id}>
                            <span>{widget.name}: {widget.text}</span>
                            <button onClick={() => dispatch(removeWidget({ category: category.category, widgetId: widget.id }))}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
