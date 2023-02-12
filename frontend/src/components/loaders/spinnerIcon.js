export const FullpageSpinnerLoader = () => {
  return (
    <section className="fixed top-0 left-0 bottom-0 w-[100%] h-[100vh] z-[4000]  bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
      <svg
        className="loader z-[2000] ease-linear rounded-full border-8 border-t-primaryColor border-t-8 border-gray-200  h-16 w-16 ..."
        viewBox="0 0 24 24"
      ></svg>
    </section>
  );
};
