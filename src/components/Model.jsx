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
				className='bg-slate-800 text-white p-8 rounded-[40px] space-y-4 sm:w-[75vw] w-screen relative'
				onSubmit={formik.handleSubmit}
			>
				<div
					className='absolute  -top-10 right-0 md:-top-6 md:-right-6'
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
					className='block w-full rounded-3xl border-0 py-1.5 px-4 text-white bg-gray-800 ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset'
				/>
				<div className='rounded-3xl overflow-hidden'>
					<JoditEditor
						onChange={(e) => setNotes(e)}
						value={notes}
						required
						className='text-black px-2 py-2'
					/>
				</div>
				<button
					type='submit'
					className='flex w-full justify-center rounded-3xl bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500'
				>
					Save
				</button>
			</form>
		</div>
	);
};
export default Model;
