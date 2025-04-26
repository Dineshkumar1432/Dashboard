import { configureStore } from '@reduxjs/toolkit';
import widgetReducer from './widgetslice';

export default configureStore({
    reducer: {
        widgets: widgetReducer
    }
});
