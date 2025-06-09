function Header() {
  return (
    <header className="">
    <div className="bg-[#f6f7fa] px-10 py-3 ">
      <div className="max-w-[1000px] mx-auto flex justify-between items-center flex-col xs:flex-row  ">
        <div id="part1">
          <ul className="flex gap-2 text-[#8d94ad] font-light">
            <li>Tap.az</li>
            <li>Bina.az</li>
            <li>Boss.az</li>
          </ul>
        </div>
        <div id="part2">
          <ul className=" flex flex-wrap justify-center gap-2 text-[#8d94ad]">
            <li className="text-black">Dəstək: (012) 526-47-47</li>
            <li>Yardım</li>
            <li>RU</li>
            <li onClick="likedSepet()"><i className="fa-solid fa-heart"></i> Seçilmişlər</li>
            <li><i className="fa-solid fa-user"></i> Giriş</li>
          </ul>
        </div>
        <div id="likedStuff" className="hidden bg-white absolute w-[500px] h-full p-3 right-0 top-18 xs:top-12 shadow-2xl z-[1000] overflow-x-scroll">
          <div className=" flex justify-around items-center gap-3">
            <i onClick="xmark()" className="fa-solid fa-xmark text-[25px] absolute left-3 top-3"></i>
            <p className="font-bold underline text-[20px]">Seçilmişlər</p>
            <button onClick="deleteAll()" className="bg-[#7ed321] text-white rounded-[7px] p-[10px] hover:bg-[#85c01f] hover: cursor-pointer">Delete All</button>
          </div>
          <div id="likedDiv"></div>
          <div className="bg-[#f6f7fa] fixed bottom-0">
            <p>Mahsul sayi:</p>
            <p>Ümümi qiymet:</p>
            <p>Ümumi endirimli qiymat:</p>
            <p>Ümumi endirim:</p>
          </div>
          </div>
      </div>
    </div>
    <div className=" bg-[#ca1016] text-white px-10 py-3 ">
      <div className="max-w-[1000px] mx-auto flex justify-center items-center flex-wrap xs:justify-between">
        <nav className="flex flex-wrap justify-center items-center gap-2">
          <a href="/index.html" className="font-bold text-xl">TURBO.AZ</a>
          <a>Bütün elanlar</a>
          <a>Dilerlər</a> 
          <a>Avtokataloq</a>
          <a>Moto</a>
          <a>Ehtiyat hissələr və aksesuarlar</a>
          <a>İcarə</a>
        </nav>
        <button className="bg-[#7ed321] rounded-[7px] p-[10px] hover:bg-[#85c01f] hover: cursor-pointer "><i className="border-2 rounded-[60%] p-[1px] fa-solid fa-plus"></i> Yeni elan </button>
      </div>
    </div>
    <div id="filter" className="bg-[#ebedf2] p-7">
      <div className="max-w-[1000px] w-[100%] mx-auto flex flex-wrap gap-3">
        <div className="flex w-[100%] gap-4 justify-center flex-wrap xs:flex-nowrap s:justify-between">
          <select id="marka" name="brand" onChange="handleSelect(this)" className="min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] h-[46px] p-[5px] xs:w-[25%] bg-white border-[1px] border-[#dfe3e8] rounded-[7px] text-[#8d94ad]">
          <option>Marka</option>
        </select>
  
        <select id="model" name="model" onChange="handleSelect(this)" className="min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] h-[46px] p-[5px] xs:w-[25%] bg-[#f5f6f9] border-[1px] border-[#dfe3e8] rounded-[7px] text-[#8d94ad]">
          <option>Model</option>
        </select>
        
        <div className="min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] xs:w-[25%] h-[46px] p-x-[10px] bg-white border-[1px] border-[#dfe3e8] rounded-[7px] flex justify-center">
          <button className="max-w-[70px] w-[100%] text-[#8d94ad] cursor-pointer" type="submit">Hamısı</button>
          <button className="max-w-[70px] w-[100%] text-[#8d94ad] cursor-pointer border-[#dfe3e8] border-x-[1px]" type="submit">Yeni</button>
          <button className="max-w-[91px] w-[100%] text-[#8d94ad] cursor-pointer" type="submit">Sürülmüş</button>
        </div>

        <select id="city" name="city" onChange="handleSelect(this)" className="min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] h-[46px] p-[5px] xs:w-[25%] bg-white border-[1px] border-[#dfe3e8] rounded-[7px] text-[#8d94ad]">
          <option>Şəhər</option>
        </select>
        </div>
        <div className="flex w-[100%] gap-4 justify-center flex-wrap xs:flex-nowrap s:justify-between">
          <div className="flex min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] xs:w-[25%] ">
          <input className=" w-[100%] h-[46px] p-[10px] bg-white border-[1px] border-[#dfe3e8] rounded-l-[7px] text-[#8d94ad]" type="text" placeholder="Qiymet, min." />
          <input className=" w-[100%] h-[46px] p-[10px] bg-white border-[1px] border-[#dfe3e8] rounded-r-[7px] text-[#8d94ad]" type="text" placeholder="maks. " />
        </div>
        <div className="flex justify-between min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] xs:w-[25%] gap-3">
          <select id="val" name="val" onChange="handleSelect(this)" className="max-w-[85px] min-w-[50px] w-[100%] bg-white h-[46px] border-[1px] border-[#dfe3e8] rounded-[7px] cursor-pointer"><option>AZN</option></select>
          <button className="max-w-[70px] min-w-[50px] w-[100%] bg-white h-[46px] border-[1px] border-[#dfe3e8] rounded-[7px] cursor-pointer hover:border-[#000] duration-[.4s]">Kredit</button>
          <button className="max-w-[70px] min-w-[50px] w-[100%] bg-white h-[46px] border-[1px] border-[#dfe3e8] rounded-[7px] cursor-pointer hover:border-[#000] duration-[.4s]">Barter</button>
        </div>
        <select id="banType" name="banType" onChange="handleSelect(this)" className="min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] xs:w-[25%] h-[46px] p-[5px]  bg-white border-[1px] border-[#dfe3e8] rounded-[7px] text-[#8d94ad] cursor-pointer">
          <option>Ban növü</option>
        </select>

        <div className="flex min-w-[170px] w-[100%] 2xs:w-[50%] 2xs:max-w-[230px] xs:w-[25%]">
          <select id="il" name="year" onChange="handleSelect(this)" className=" w-[100%] h-[46px] p-[5px]  bg-white border-[1px] border-[#dfe3e8] rounded-l-[7px] text-[#8d94ad] cursor-pointer">
            <option>İl, min.</option>
          </select>
          <select id="maks" name="year" onChange="handleSelect(this)" className="w-[100%] h-[46px] p-[5px]  bg-white border-[1px] border-[#dfe3e8] rounded-r-[7px] text-[#8d94ad] cursor-pointer">
            <option>maks.</option>
          </select>
        </div>
        </div>
        <div className="flex w-[100%] gap-4 justify-between items-center p-y-3">
          <div>
            <p>Bu gün: <span className="text-[#4b88f9] cursor-pointer"> 1291 yeni elan</span></p>
          </div>
          <div className=" flex justify-between items-center gap-5 xs:w-[40%]">
            <a onClick="sifirla()" className="text-[#8d94ad] cursor-pointer">Sıfırla</a>
            <a className="text-[#ca1016] cursor-pointer">Daha çox filt <i className="fa-solid fa-angle-down"></i></a>
            <button className="max-w-[200px] min-w-[100px] w-[100%] h-[50px] bg-[#ca1016] text-white rounded-[7px] hover:bg-[#b80c13]">Elanları göster</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
