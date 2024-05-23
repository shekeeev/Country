import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CountriesModules } from "../Modules"
import { authApi } from "../../Axios"

type NewsState = {
    loading: boolean
    error: null | string | undefined
    countriesSlice: CountriesModules[]
}

const initialState: NewsState = {
    error: null,
    loading: false,
    countriesSlice: [],

}

export const fetchByContries = createAsyncThunk<CountriesModules[], void, { rejectValue: string }>(
    'countriesSlice/fetchByContries',
    async (_, { rejectWithValue }) => {
        const res = await authApi.addCountries()
        // console.log(res)
        if (res.status !== 200) {
            return rejectWithValue('Server Error')
        }
        return res.data
    })

const countriesSlice = createSlice({
    name: 'countriesSlice',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByContries.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByContries.fulfilled, (state, action) => {
            state.countriesSlice = action.payload
            state.loading = false
        })

        addCase(fetchByContries.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No News!'
            } else {
                state.error = action.payload
            }
        })
    }

})

export default countriesSlice.reducer
