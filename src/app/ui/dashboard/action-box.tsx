import Image from "next/image";

import { ActionContainerType } from "@/app/lib/types";

export default function ActionContainer({header, subHeader, actionComponent: ActionComponent, width, graphic}: ActionContainerType) {
    return (
        <div className={`flex items-center justify-between bg-[#1C1C1C] py-8 px-6 ${width === 'full' ? 'w-full' : 'w-1/2'}`}>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-2xl font-bold">
              {header}
            </h3>
            <p className="font-normal">
              {subHeader}
            </p>

            {ActionComponent}

          </div>
          <Image
            src={graphic}
            alt="icon"
          />
        </div>
    );
}