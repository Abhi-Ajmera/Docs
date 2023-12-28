import { useFormik } from 'formik';
import { db } from './../firebase/index';
import { collection, addDoc } from 'firebase/firestore';
import { XCircleIcon } from '@heroicons/react/24/outline';
import JoditEditor from 'jodit-react';
import { useState } from 'react';

const Model = ({ open, setOpen, fetchData }) => {
  const [notes, setNotes] = useState();
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: async ({ title }, { resetForm }) => {
      const docRef = collection(db, '/Docs');
      await addDoc(docRef, {
        title,
        notes,
        isCompleted: false,
      });
      setOpen(false);
      setNotes('');
      resetForm();
      fetchData();
    },
  });

  return (
    <div
      className={`z-10 absolute justify-center items-center ${
        open === true ? 'flex' : 'hidden'
      } flex-col justify-center h-[calc(100vh-90px)] w-screen bg-[#201d1dd3]`}
    >
      <form
        className='bg-slate-800 text-white p-8 rounded-md space-y-4 sm:w-[75vw] w-screen relative'
        onSubmit={formik.handleSubmit}
      >
        <div
          className='absolute -top-14 right-0 md:-top-10 md:-right-10'
          onClick={() => setOpen(false)}
        >
          <XCircleIcon
            width={32}
            height={32}
            style={{ cursor: 'pointer', color: 'white' }}
          />
        </div>
        <input
          name='title'
          type='text'
          placeholder='Title'
          onChange={formik.handleChange}
          value={formik.values.title}
          required
          className='block w-full rounded-md border-0 py-1.5 px-1.5 text-white bg-gray-800 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset'
        />
        <JoditEditor
          onChange={(e) => setNotes(e)}
          value={notes}
          required
          className='text-black'
        />

        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500'
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default Model;
