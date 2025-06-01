import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Cambia esto por la URL real de tu backend
const API_URL = 'http://localhost:3001';
localStorage.setItem("token", "laClaveMasSeguraDelMundoMundial");

const getAuthHeader = () => ({
  Authorization: `${localStorage.getItem("token")}`,
});

// --- Thunks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch(`${API_URL}/getTasks`, {
    headers: getAuthHeader(),
  });
  return await response.json();
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await fetch(`${API_URL}/addTask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    body: JSON.stringify(task),
  });
  return await response.json();
});
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await fetch(`${API_URL}/removeTask/${id}`, {
    method: 'DELETE',
    headers: getAuthHeader(),
  });
  return id;
});

// --- Slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (_, action) => action.payload)
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((task) => task._id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
