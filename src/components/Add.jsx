import { PlusIcon } from '@heroicons/react/24/outline';
const Add = ({ open, setOpen }) => {
  return (
    <>
      <div className=' text-white absolute bottom-10 right-10 z-10'>
        <p
          className='text-white bg-green-700 w-12 h-12 rounded-full p-2 cursor-pointer hover:bg-green-800'
          onClick={() => {
            open === true ? setOpen(false) : setOpen(true);
          }}
        >
          <PlusIcon style={{ color: 'white' }} />
        </p>
      </div>
    </>
  );
};
export default Add;
