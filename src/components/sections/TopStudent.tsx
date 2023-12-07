import { studentData } from "../../lib/data/student";
import { GiShoppingBag } from "react-icons/gi";
import Image from "next/image";

const TopStudent = () => {
  return (
    <div className="relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[50vh]">
      <h1>Top Student</h1>
      <ul>
        {studentData.map((order, id) => (
          <li
            key={id}
            className="rouded-lg my-3 flex cursor-pointer items-center bg-slate-50 p-2 hover:bg-[#1B5299]"
          >
            <div className="rounded-lg  p-2">
            <Image 
              src="/assets/images/me.png"
              alt="logo"
              width={60}
              height={50}
              className=""
            />
            </div>
            {/* Order info */}
            <div className="pl-4">
              <p className="font-bold text-slate-700">{order.status}</p>
              <p className="text-sm text-slate-400">{order.name.first}</p>
            </div>
            <p className="absolute right-6 text-sm md:hidden lg:flex">
              {order.age}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TopStudent