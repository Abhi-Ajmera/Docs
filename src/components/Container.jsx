import { useEffect } from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocument } from '../features/docsSlice';

const Container = () => {
  const docs = useSelector((state) => state.Documents.DocsArray);
  // console.log(docs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDocument());
  }, [dispatch]);

  return (
    <div className='fixed h-full z-[3] flex flex-shrink-0 w-full mx-4 gap-4 overflow-scroll no-scrollbar flex-wrap mb-4 max-sm:justify-center max-sm:mx-0'>
      {docs.map((doc) => (
        <Card
          key={doc.id}
          data={doc}
        />
      ))}
    </div>
  );
};

export default Container;
