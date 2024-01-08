import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";

export const getCategory = createAsyncThunk(
  "home/getCategory",
  async function () {
    try {
      const { data } = await axiosRequest.get(
        "http://65.108.148.136:8072/Category/get-categories"
      );

      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getBrand = createAsyncThunk("home/getBrand", async function () {
  try {
    const { data } = await axiosRequest.get("Brand/get-brands");
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCategoryById = createAsyncThunk(
  "home/getCategoryById",
  async function (id) {
    try {
      const { data } = await axiosRequest.get(
        `http://65.108.148.136:8072/Category/get-category-by-id?id=${id}`
      );

      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProduct = createAsyncThunk(
  "home/getProduct",
  async function () {
    try {
      const { data } = await axiosRequest.get(
        "http://65.108.148.136:8072/Product/get-products"
      );
      console.log(data);
      return data.data.products;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "home/deleteUser",
  async function (id, { dispatch }) {
    try {
      const { data } = await axios.delete(
        `http://65.108.148.136:8072/Brand/delete-brand?id=${id}`,
      );
      dispatch(getBrand());
    } catch (error) {
      console.log(error);
    }
  }
);