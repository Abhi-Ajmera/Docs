import Card from './Card';

const Container = ({ docs, fetchData }) => {
  return (
    <div className='fixed z-[3] my-0 h-full flex flex-shrink-0 items-start w-full mx-4 gap-4 overflow-scroll no-scrollbar flex-wrap mb-4 max-sm:justify-center max-sm:mx-0'>
      {docs.map((doc) => (
        <Card
          key={doc.id}
          data={doc}
          fetchData={fetchData}
        />
      ))}
    </div>
  );
};

export default Container;
