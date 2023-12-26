import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allGoal = createAsyncThunk("allGoals/goals", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const addGoal = createAsyncThunk("addGoal/goals", async(goaldata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.post('http://localhost:3005/goals',goaldata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const getOneGoal = createAsyncThunk("getOneGoal/goals", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const updateGoal = createAsyncThunk("updateGoal/goals", async(id,goaldata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/goals/'+id,goaldata);
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const deleteGoal = createAsyncThunk("deleteGoal/goals", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/goals/'+id);
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const goalslice = createSlice({
    name: "goals",
    initialState: { isLoading: false, goals: [], error: null },
    extraReducers: {
        [allGoal.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [allGoal.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.goals = action.payload;
        },
        [allGoal.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addGoal.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addGoal.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.goals.push(action.payload);
        },
        [addGoal.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneGoal.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneGoal.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.goals = action.payload;
        },
        [getOneGoal.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateGoal.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateGoal.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.goals[action.payload.id] = action.payload;
        },
        [updateGoal.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteGoal.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteGoal.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.goals = state.goals(el => el.id !== action.payload);
        },
        [deleteGoal.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default goalslice.reducer;