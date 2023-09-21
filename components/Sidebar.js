/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Sidebar({ setOpen }) {
  const router = useRouter();
  useEffect(() => {
    // router on route change complete

    router.events.on("routeChangeComplete", () => {
      setOpen(false);
    });
  }, [router]);
  return (
    <div className="fixed inset-0 h-full w-full bg-black/50 z-20 flex">
      <div className="h-full w-[80%] bg-[#ECECEC]">
        <div className="p-5">
          <div className="flex items-center justify-end">
            <button onClick={() => setOpen(false)}>
              <Icon height={40} icon="basil:cross-outline" />
            </button>
          </div>
          <Link className="block" href="/shop?tab=kitchen">
            <div className="mt-8 h-[80px] bg-[#011630] flex items-center text-white">
              <img
                src="https://res.cloudinary.com/dccmraknj/image/upload/v1693840583/cabinet-photos/Rectangle_96_l9wc7w.png"
                alt=""
                className="w-[100px] object-cover h-[80px]"
              />
              <div className="w-full h-full flex items-center justify-center text-sm font-semibold">
                Kitchen Cabinets
              </div>
            </div>
          </Link>
          <Link className="block" href="/shop?tab=bathroom">
            <div className="mt-4 h-[80px] bg-[#011630] flex items-center text-white">
              <img
                src="https://res.cloudinary.com/dccmraknj/image/upload/v1693841042/cabinet-photos/Rectangle_98_l4jygt.png"
                alt=""
                className="w-[100px] object-cover h-[80px]"
              />
              <div className="w-full h-full flex items-center justify-center text-sm font-semibold">
                Bathroom Vanities
              </div>
            </div>
          </Link>

          <div className="my-7 w-full bg-black h-[1px]"></div>

          <div className="flex items-center space-x-2">
            <Icon icon="material-symbols:call" height={20} />
            <span>+1 8005805355</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
