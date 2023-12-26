import  { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const allTestimonials = createAsyncThunk("allTestimonial/testimonial", async(_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = await res.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
})

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState: { isLoading: false, testimonial: [], error: null },
    extraReducers: {
        [allTestimonials.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null;
        },
        [allTestimonials.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.testimonial = action.payload;
        },
        [allTestimonials.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default testimonialSlice.reducer