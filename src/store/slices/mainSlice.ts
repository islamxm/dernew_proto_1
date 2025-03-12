import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Category } from "../../models"

type InitState = {
  activeCategory: {
    id: string,
    type?: Category
  } | null
}
const initialState:InitState = {
  activeCategory: null
}


const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateActiveCategory: (state, action: PayloadAction<InitState['activeCategory'] | null>) => {
      state.activeCategory = action.payload
    }
  }
})

const {reducer, actions} = mainSlice
export const {updateActiveCategory} = actions
export default reducer