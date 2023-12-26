import { configureStore } from '@reduxjs/toolkit'
import contact from './contactSlice';
import goals from './goolsSlice';
import services from './serviceSlice';
import testmonials from './testmonialsSlice';
import tools from './toolsSlice';
import trainers from './trainersSlice';
import trainee from './traineeSlice';

const store = configureStore({
    reducer: {
        contact,    
        goals,
        services,
        testmonials,
        tools,
        trainers,
        trainee
    }
})

export default store;