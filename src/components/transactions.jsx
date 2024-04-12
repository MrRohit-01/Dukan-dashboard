export const Transactions=({payouts,refunds})=>{
  return (
    <><div className="flex flex-col p-2 ">
      <div className="flex p-3 gap-2 text-md font-semibold">
        <div className="">Transactions</div>
        <div className=" text-xl font-medium">|</div>
        <div className="">This Month</div>
      </div>
      <div className=" flex p-2 gap-3 pl-3 text-sm">
        <button className="bg-gray-300 p-2 pr-4 pl-4 rounded-full">Payout({payouts})</button>
      <button className="bg-blue-600 text-white-444 p-2 pr-4 pl-4  rounded-full">Refunds({refunds})</button>
      </div></div>
      <button></button>
    </>
  )
}