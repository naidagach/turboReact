import { useState } from "react"
import { data } from "../data"

function Main() {

  const [count, setCount] = useState(8)

  function showMore() {
    setCount(x => x + 8)
  }
  return (
    <main>
      <div className="bg-[#f1f3f7] p-7 border-b-[1px] border-[#eaebf2]">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="font-medium uppercase text-[18px]">Premium Elanlar</h1>
        </div>
      </div>
      <div className="bg-[#f5f6f9] p-7">
        <div id="article" className="max-w-[1000px] mx-auto flex justify-center flex-wrap gap-3">
          {data.slice(0, count).map((item) => (
            <article
              key={item.id}
              className="max-w-[235px] w-[100%] xs:w-[50%] m:w-[25%] overflow-hidden relative">
              <div className="h-[180px] rounded-t-[8px] overflow-hidden relative">
                <i
                  onClick={() => addToBasket(item.id)}
                  className="fa-regular fa-heart text-white text-2xl absolute right-2 top-2 cursor-pointer"
                ></i>
                <img
                  className="w-full h-full object-cover"
                  src={item.images[0]}
                  alt="avto"
                />
              </div>
              <div className="bg-white p-3 rounded-b-[8px]">
                <h2 className="font-bold">
                  {item.price} {item.currency}
                </h2>
                <h6>
                  {item.brand} {item.model}
                </h6>
                <p>
                  {item.year}, {item.engine || ""}, {item.odometer}
                  {item.odometerUnit}
                </p>
                <span>
                  {item.city}, {item.dates}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="text-center p-3">
        <button
          onClick={showMore}
          className="bg-[#85c01f] cursor-pointer text-white px-3.5 py-1.5 rounded-[5px]">
          + 8 əlavə et!
        </button>
      </div>
    </main>
  )
}

export default Main
