import { createSlice } from "@reduxjs/toolkit";
import {
  getCategory,
  getCategoryById,
  getProduct,
  getBrand,
} from "../api/todos/todos";



const home = createSlice({
  name: "home",
  initialState: {
    posts: [],
    postsId: [],
    product: [],
    brands: []
  },

  reducers: {
    handlModal: (state, action) => {
      state.modal = true;
    },
    handlModal1: (state, action) => {
      state.modal = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, actions) => {
      console.log(actions.payload);
      state.posts = actions.payload;
    });
    builder.addCase(getCategory.rejected, (state, actions) => {
      console.log(error);
    });
    builder.addCase(getCategoryById.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(getCategoryById.fulfilled, (state, actions) => {
      console.log(actions.payload);
      state.postsId = actions.payload;
    });
    builder.addCase(getCategoryById.rejected, (state, actions) => {
      console.log(error);
    });
     builder.addCase(getProduct.pending, (state, actions) => {
       state.loading = true;
     });
     builder.addCase(getProduct.fulfilled, (state, actions) => {
       console.log(actions.payload);
       state.product = actions.payload;
     });
     builder.addCase(getProduct.rejected, (state, actions) => {
       console.log(error);
     });
    builder.addCase(getBrand.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(getBrand.fulfilled, (state, actions) => {
      console.log(actions.payload);
      state.brands = actions.payload;
    });
    builder.addCase(getBrand.rejected, (state, actions) => {
      console.log(error);
    });

    // Подписчики
  },
});

export default home.reducer;
export const { handlModal, handlModal1 } = home.actions;
