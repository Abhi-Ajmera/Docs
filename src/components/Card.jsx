import { XCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { db } from '../firebase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import parse from 'html-react-parser';

const Card = ({ data, fetchData }) => {
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'Docs', id));
    fetchData();
  };

  const handleUpdate = async (id, isCompleted) => {
    await updateDoc(doc(db, 'Docs', id), {
      isCompleted: isCompleted === true ? false : true,
    });
    fetchData();
  };

  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      className='mb-4 relative w-56 h-64 rounded-[40px] bg-slate-900 text-white p-4 overflow-hidden'
    >
      <XCircleIcon
        width={26}
        height={26}
        className='absolute top-2 right-2 cursor-pointer text-white hover:text-slate-400'
        onClick={() => handleDelete(data.id)}
      />

      <div className='flex gap-2 justify-center items-center border-b-2 pb-1'>
        <p className='text-xl font-medium'>{data.title}</p>
      </div>
      <div className='text-justify text-xs mt-3 font-medium leading-tight'>{parse(data.notes)}</div>
      <div
        onClick={() => handleUpdate(data.id, data.isCompleted)}
        className={`w-full absolute left-0 hover:cursor-pointer bottom-0 h-10 flex justify-center gap-2 items-center ${
          !data.isCompleted ? 'bg-blue-800 hover:bg-blue-600' : 'bg-green-800 hover:bg-green-600'
        }`}
      >
        {!data.isCompleted && <FaCheck size={12} />}
        {!data.isCompleted ? (
          <button className='text-sm'>Mark as Done</button>
        ) : (
          <button className='text-sm'>Completed</button>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
