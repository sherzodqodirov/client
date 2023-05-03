import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getOnePlanesData} from "../../services/planeServices";

export const getPlane = createAsyncThunk('GET_PLANE', async (id, thunkAPI) => {
    try {
        return await getOnePlanesData(id)
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
})

const oneplaneSlice = createSlice({
    name: "oneplane",
    initialState: {
        data: null,
        isloading: false,
        iserror: false,
        message: ""
    },
    extraReducers: (builder) => {
        builder.addCase(getPlane.pending, (state, actions) => {
            state.isloading = true
        });
        builder.addCase(getPlane.fulfilled, (state, actions) => {
            state.isloading = false
            state.data = actions.payload
        })
        builder.addCase(getPlane.rejected, (state, actions) => {
            state.isloading = false
            state.data = null
            state.iserror=true
            state.message=actions.payload
        })
    }
})
const {reducer, actions} = oneplaneSlice
export default reducer