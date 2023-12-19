import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export const addDocumentToFirestore = createAsyncThunk('Docs/addDocument', async ({ title, notes, isCompleted }) => {
  const docRef = await addDoc(collection(db, '/Docs'), { title, notes, isCompleted });
  const newDoc = { id: docRef.id, title, notes, isCompleted };
  return newDoc;
});

export const fetchDocumentToFirestore = createAsyncThunk('Docs/fetchDocument', async () => {
  const query = await getDocs(collection(db, '/Docs'));
  const docs = query.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docs;
});

export const docsSlice = createSlice({
  name: 'Documents',
  initialState: {
    DocsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDocumentToFirestore.fulfilled, (state, action) => {
      state.DocsArray.push(action.payload);
    });
    builder.addCase(fetchDocumentToFirestore.fulfilled, (state, action) => {
      state.DocsArray = action.payload;
    });
  },
});

export default docsSlice.reducer;
