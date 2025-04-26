import { createSlice } from '@reduxjs/toolkit';

const widgetSlice = createSlice({
    name: 'widgets',
    initialState: require('../data/widgetConfig.json'),
    reducers: {
        addWidget: (state, action) => {
            const { category, widget } = action.payload;
            const categoryObj = state.find(cat => cat.category === category);
            categoryObj.widgets.push(widget);
        },
        removeWidget: (state, action) => {
            const { category, widgetId } = action.payload;
            const categoryObj = state.find(cat => cat.category === category);
            categoryObj.widgets = categoryObj.widgets.filter(w => w.id !== widgetId);
        }
    }
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
