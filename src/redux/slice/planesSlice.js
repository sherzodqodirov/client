import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPlanesData} from "../../services/planeServices";

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
    try {
        return await getPlanesData()
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

const planesSlice = createSlice({
    name: "planedata",
    initialState: {
        planes: null,
        isloading: false,
        iserror: false,
        message: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getPlanes.pending, (state, actions) => {
            state.isloading = true
        });
        builder.addCase(getPlanes.fulfilled, (state, actions) => {
            state.isloading = false
            state.planes = actions.payload
        })
        builder.addCase(getPlanes.rejected, (state, actions) => {
            state.isloading = false
            state.planes = null
            state.iserror=true
            state.message=actions.payload
        })
    }
})
const {reducer, actions} = planesSlice
export default reducer