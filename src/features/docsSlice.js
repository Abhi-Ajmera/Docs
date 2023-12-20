import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

// add Documents
export const addDocument = createAsyncThunk('addDoc', async ({ title, notes, isCompleted }) => {
  const docRef = await addDoc(collection(db, '/Docs'), { title, notes, isCompleted });
  const newDoc = { id: docRef.id, title, notes, isCompleted };
  return newDoc;
});

// fetch Documets
export const fetchDocument = createAsyncThunk('fetchDoc', async () => {
  const querySnapshot = await getDocs(collection(db, '/Docs'));
  let newData = [];
  querySnapshot.forEach((doc) => {
    newData.push({ id: doc.id, ...doc.data() });
  });
  return newData;
});

// Delete document
export const deleteDocument = createAsyncThunk('deleteDoc', async (id) => {
  await deleteDoc(doc(db, 'Docs', id));
  return id;
});

// update document
export const updateDocument = createAsyncThunk('updateDoc', async (id, isCompleted) => {
  await updateDoc(doc(db, 'Docs', id), {
    isCompleted: isCompleted === true ? false : true,
  });
  return id, isCompleted;
});

export const docsSlice = createSlice({
  name: 'Documents',
  initialState: {
    DocsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDocument.fulfilled, (state, action) => {
      state.DocsArray.push(action.payload);
    });
    builder.addCase(fetchDocument.fulfilled, (state, action) => {
      state.DocsArray = action.payload;
    });
    builder.addCase(deleteDocument.fulfilled, (state, action) => {
      state.DocsArray = state.DocsArray.filter((book) => book.id !== action.payload);
    });
    builder.addCase(updateDocument.fulfilled, (state, action) => {
      state.DocsArray = state.DocsArray.filter((book) => book.id == action.payload, id).map((doc) => {
        doc.isCompleted === action.payload.isCompleted;
      });
    });
  },
});

export default docsSlice.reducer;
