const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className='text-zinc-300 font-extrabold uppercase lg:text-6xl text-5xl -translate-y-10 lg:text-center text-left px-6 -mb-16 lg:mb-0'>
      {title}
    </div>
  );
};

export default SectionHeader;
