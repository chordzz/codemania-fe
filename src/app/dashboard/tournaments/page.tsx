import Image from "next/image";

import User from '@/../public/user-icon.svg'
import GameImg from '@/../public/game-img.png'
import Play from '@/../public/play-icon.svg'
import Sort from '@/../public/sort-icon.svg'
import Filter from '@/../public/filter-icon.svg'
import COD from '@/../public/cod-img-off.png'
import Calendar from '@/../public/calendar-icon.svg'
import Trophy from '@/../public/trophy-icon.svg'
import GamepadDark from '@/../public/gamepad-dark-icon.svg'
import Gamepad from '@/../public/gamepad-icon.svg'

import ActionContainer from "@/app/ui/dashboard/action-box";
import CustomButton from "@/app/ui/dashboard/custom-button";
import CustomActionButton from "@/app/ui/dashboard/custom-action";
import CustomFilter from "@/app/ui/dashboard/custom-filter";
import CustomButtonInv from "@/app/ui/dashboard/custom-button-inv";
import CustomCard from "@/app/ui/dashboard/custom-card";

export default function Page() {
    return (
      <div className="w-full h-full">
        <section>
          <ActionContainer 
            width="full"
            header="Setup your profile"
            subHeader="Complete your information to get access to tournaments and other premium features"
            actionComponent={<CustomButton icon={User} text="Complete profile" width="not-full"/>}
            graphic={GameImg}
          />

          <div className="flex mt-6 gap-6">
            <ActionContainer 
              width="half"
              header="Continue playing"
              subHeader="Start or resume tournaments you have registered for"
              actionComponent={<CustomActionButton icon={Play} text="Continue playing"/>}
              graphic={GameImg}
            />

            <ActionContainer 
              width="half"
              header="Quick match"
              subHeader="Create a tournament and invite friends to play"
              actionComponent={<CustomActionButton icon={Play} text="Let's go"/>}
              graphic={GameImg}
            />
          </div>
        </section>
        <section className="">
          <div className="flex justify-between items-center my-6">
            <h3 className="text-white text-2xl font-bold">
              Tournaments
            </h3>

            <div className="filters flex gap-4">
              <CustomFilter icon={Sort} text="Sort by" />
              <CustomFilter icon={Filter} text="Filter" />
            </div>
          </div>

          <div className="pb-6 flex flex-wrap justify-between ">
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </div>
        </section>

      </div>
    );
}