import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const allServices = createAsyncThunk("allService/services", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})


export const addService = createAsyncThunk("addService/services", async(servicedata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try{
        const res = await axios.post('http://localhost:3005/service',servicedata);
        const data = res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getOneService = createAsyncThunk("oneService/services", async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const updateService = createAsyncThunk("updateService/services", async(id,servicedata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try{
        const res = await axios.patch('http://localhost:3005/service/'+id,servicedata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const deleteService = createAsyncThunk("deleteService/service", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try{
        await axios.delete('http://localhost:3005/service/'+id);
        return id;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

const serviceSlice = createSlice({
    name: "services",
    initialState: { isLoading: false, services: [], error: null },
    extraReducers: {
        [allServices.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [allServices.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.services = action.payload;
        },
        [allServices.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addService.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addService.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.services.push(action.payload);
        },
        [addService.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneService.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneService.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.services = action.payload;
        },
        [getOneService.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateService.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateService.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.services[action.payload.id] = action.payload;
        },
        [updateService.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteService.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteService.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.services = state.services.filter(el => el.id !== action.payload);
        },
        [deleteService.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default serviceSlice.reducer