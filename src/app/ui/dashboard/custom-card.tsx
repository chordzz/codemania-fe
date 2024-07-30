import Image from "next/image";

import COD from '@/../public/cod-img-off.png'
import Calendar from '@/../public/calendar-icon.svg'
import Trophy from '@/../public/trophy-icon.svg'
import GamepadDark from '@/../public/gamepad-dark-icon.svg'
import Gamepad from '@/../public/gamepad-icon.svg'

import CustomButtonInv from "@/app/ui/dashboard/custom-button-inv";
import CustomButton from "@/app/ui/dashboard/custom-button";
import Link from "next/link";

export default function CustomCard() {
  return (
    <div className="flex flex-col bg-[#1C1C1C] w-[320px] mt-6">
        <Image 
        src={COD}
        alt="call of duty image"
        />
        <div className="p-2 h-[273px]">
        <h4 className="text-white text-lg">Call of duty</h4>
        <div className="flex flex-wrap gap-2 text-xs mt-2">
            <div className="flex gap-2 items-center w-[45%]">
            <Image src={Calendar} alt="calendar" />
            <span>10 Feb 2023</span>
            </div>
            <div className="flex gap-2 items-center w-[45%]">
            <Image src={Calendar} alt="calendar" />
            <span>Free-to-play</span>
            </div>
            <div className="flex gap-2 items-center w-[45%]">
            <Image src={Calendar} alt="calendar" />
            <span>4v4</span>
            </div>
            <div className="flex gap-2 items-center w-[45%]">
            <Image src={Calendar} alt="calendar" />
            <span>10/48</span>
            </div>
        </div>
        <div className="bg-[#242424] w-fit p-2 rounded-full flex items-center gap-1 my-2 text-xs ">
            <Image src={Trophy} alt="trophy icon" />
            <span>N10,000</span>
        </div>
        <Link href={'/dashboard/tournaments/tournament/fixtures'} >
          <CustomButton icon={GamepadDark} text="Join tournament" width="full" />
        </Link>
        <div className="my-1"></div>
        <Link href={'/dashboard/tournaments/tournament/leaderboard'} >
          <CustomButtonInv icon={Gamepad} text="View details" width="full" />
        </Link>
        </div>
    </div>
  )
}