import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6505d1a6ef808d3c66f080d8.mockapi.io/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/cars`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
