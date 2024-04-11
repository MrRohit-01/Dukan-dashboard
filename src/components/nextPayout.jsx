export const NextPayout = ({ title, amount, orders,date,time }) => {
  return (<>
  <div className="w-1/5 ">
    <div className="bg-blue-700 rounded-t-lg shadow text-white h-auto">
      <div className="flex pt-2 ">
        <div className=" pt-1 pb-4 text-sm pr-2 pl-2" >
          {title}
          </div>
          <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex  justify-between pl-2 pb-2 pr-2 ">
        <div className="font-bold text-2xl">₹{amount}</div>

        <div className=" text-sm content-center">
          {orders ? (
            <div className="text-white underline font-normal cursor-pointer">
              {orders} order(s)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </div>
      <div className="flex justify-between bg-blue-666 
rounded-b-lg text-white pb-1 pt-1 text-sm">
        <div className="pl-2 ">Next Payment Date:</div>
        <div className="pr-2">{date},{time}</div>
      </div>
      </div>
      </>
  );
};
