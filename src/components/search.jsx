export const Search = () => {
  return (
    <>
    <div className="flex justify-between p-5 pr-10 ">
      <div className="relative max-w-96 flex ">
        <input
          placeholder="Search features, tutorials, etc."
          className="focus:outline-none w-full bg-white border border-gray-200 rounded-sm p-2 pl-7"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 absolute opacity-60 translate-y-3.5 translate-x-2"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex gap-3 text-center">
      <div className="flex border text-sm r pt-0 pb-0 pr-2 cursor-pointer pl-3 mt-1 rounded">
      <div className="pt-2">Sort</div>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1 mt-1 pt-2  ">
  <path stroke-linecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg></div>
</div>
      <div className="border pl-2 pr-2 h-9 mt-1 cursor-pointer rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-1 pt-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</div>
      </div>
    </div>
    </>
  );
};
