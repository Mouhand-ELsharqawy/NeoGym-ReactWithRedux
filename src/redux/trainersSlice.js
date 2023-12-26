import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const allTrainer = createAsyncThunk('allTrainer/trainer', async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const addTrainer = createAsyncThunk('addTrainer/trainer', async(trainerdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/trainer',trainerdata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getOneTrainer = createAsyncThunk('getOneTrainer/trainer', async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const updateTrainer = createAsyncThunk('updateTrainer/trainer', async(id,trainerdata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/trainer/'+id,trainerdata)
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const deleteTrainer = createAsyncThunk('deleteTrainer/trainer', async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/trainer/'+id)
        return id;
    }catch(error){
        return rejectWithValue(error.message)
    }
})



const trainerSlice = createSlice({
    name: "trainer",
    initialState: { isLoading: false, trainers: [], error: null },
    extraReducers: {
        [allTrainer.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [allTrainer.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainers = action.payload;
        },
        [allTrainer.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addTrainer.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addTrainer.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainers.push(action.payload);
        },
        [addTrainer.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneTrainer.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneTrainer.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainers = action.payload;
        },
        [getOneTrainer.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateTrainer.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateTrainer.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainers[action.payload.id] = action.payload;
        },
        [updateTrainer.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteTrainer.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteTrainer.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainers = state.trainers.filter(el => el.id !== action.payload)
        },
        [deleteTrainer.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default trainerSlice.reducer;