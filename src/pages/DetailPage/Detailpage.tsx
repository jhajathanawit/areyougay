const Detailpage = () => {
  return (
    <div className="flex flex-col items-center pt-10 h-screen w-screen space-y-4 bg-pink-100">
      <div className="flex items-center w-screen gap-4 p-2 rounded bg-pink-200 lg:w-1/2 lg:h-auto">
        <iframe
          width="1250"
          height="703"
          src="https://www.youtube.com/embed/kqNrhzTnD44?autoplay=1"
          title="จอมขวัญ - โก๊ะ นิพนธ์ Slowed"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="font-bold text-3xl">OK YOU GAY</h1>
    </div>
  );
};
export default Detailpage;
