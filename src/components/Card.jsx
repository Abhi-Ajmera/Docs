import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Card = ({ doc }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      className='mb-4 relative w-56 h-64 rounded-[40px] bg-slate-900 text-white p-4 overflow-hidden'
    >
      <div className='flex gap-2 justify-center items-center border-b-2 pb-1'>
        <p className='text-xl font-medium'>{doc.title}</p>
      </div>
      <p className='text-justify text-xs mt-3 font-medium leading-tight'>{doc.notes}</p>
      <div
        className={`w-full absolute left-0 bottom-0 h-10 flex justify-center gap-2 items-center ${
          !doc.isCompleted ? 'bg-blue-800' : 'bg-green-800'
        }`}
      >
        {!doc.isCompleted && <FaCheck size={12} />}
        {!doc.isCompleted ? (
          <button className='text-sm'>Mark as Read</button>
        ) : (
          <button className='text-sm'>Completed</button>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
