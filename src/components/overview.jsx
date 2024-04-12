export const Overview=()=>{
  return (
    <><div className="flex justify-between pt-10 pr-5 pl-5 pb-5">
      <div className="text-lg font-medium">Overview</div>
      <div>
<form className="max-w-sm mx-auto">
  <select id="months" className="bg-white-444 text-sm  border-current shadow-sm">
    <option selected>This month</option>
    <option value="1M">Previous month</option>
    <option value="Jan">January</option>
    <option value="Feb">February</option>
    <option value="Mar">March</option>
  </select>
</form>
</div>
      </div>
    </>
  )
}