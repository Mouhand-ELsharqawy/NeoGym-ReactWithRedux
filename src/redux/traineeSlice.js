import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const allTrainee = createAsyncThunk('allTrainee/trainee', async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})


export const addTrainee = createAsyncThunk('addTrainee/trainee', async(traineedata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/trainee',traineedata)
        const data = res.data;
        return data;

    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const getOneTrainee = createAsyncThunk('getOneTrainee/trainee', async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const updateTrainee = createAsyncThunk('updateTrainee/trainee', async(id,traineedata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/trainee/'+id,traineedata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const deleteTrainee = createAsyncThunk('deleteTrainee/trainee', async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/trainee/'+id);
        return id;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

const traineeSlice = createSlice({
    name: "trainee",
    initialState: { isLoading: false, trainee: [], error: null },
    extraReducers: {
        [allTrainee.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [allTrainee.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainee = action.payload
        },
        [allTrainee.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addTrainee.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addTrainee.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainee.push(action.payload);
        },
        [addTrainee.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneTrainee.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneTrainee.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainee = action.payload
        },
        [getOneTrainee.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateTrainee.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateTrainee.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainee[action.payload.id] = action.payload
        },
        [updateTrainee.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteTrainee.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteTrainee.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.trainee = state.trainee.filter(el => el.id !== action.payload);
        },
        [deleteTrainee.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default traineeSlice.reducer;