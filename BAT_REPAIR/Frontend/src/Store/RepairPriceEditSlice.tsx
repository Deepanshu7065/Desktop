import { createSlice } from "@reduxjs/toolkit"

const RepairPriceEditSlice = createSlice({
    name: "repairPriceEdit",
    initialState: {
        id: ""
    },
    reducers: {
        setRepairPriceEdit: (state, action) => {
            state.id = action.payload
        }
    }
})

export const { setRepairPriceEdit } = RepairPriceEditSlice.actions
export default RepairPriceEditSlice.reducer