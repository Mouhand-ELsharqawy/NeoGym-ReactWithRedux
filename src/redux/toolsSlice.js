import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const allTools = createAsyncThunk("allTools/tools", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{

        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await res.data;
        return data;

    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const addTool = createAsyncThunk("addTool/tools", async(tooldata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{

        const res = await axios.post('http://localhost:3005/tools',tooldata);
        const data = await res.data;
        return data;

    }catch(error){
        return rejectWithValue(error.message)
    }
})
export const getOneTool = createAsyncThunk("getOneTool/tools", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.data;
        return data;

    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const updateTool = createAsyncThunk("updateTool/tools", async(id,tooldata,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.patch('http://localhost:3005/tools/'+id,tooldata)
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

export const deleteTool = createAsyncThunk("deleteTool/tools", async(id,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        await axios.delete('http://localhost:3005/tools/'+id)
        return id;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

const toolSlice = createSlice({
    name: "tools",
    initialState: { isLoading: false, tools: [], error: null },
    extraReducers: {
        [allTools.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [allTools.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.tools = action.payload;
        },
        [allTools.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addTool.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [addTool.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.tools.push(action.payload);
        },
        [addTool.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneTool.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneTool.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.tools = action.payload;
        },
        [getOneTool.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [updateTool.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [updateTool.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.tools[action.payload.id] = action.payload;
        },
        [updateTool.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteTool.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteTool.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.tools = state.tools.filter(el => el.id !== action.payload);
        },
        [deleteTool.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default toolSlice.reducer;