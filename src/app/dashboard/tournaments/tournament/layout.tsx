'use client'

import Image from "next/image";

import Left from '@/../public/left-icon.svg';
import CODMain from '@/../public/cod-img-main.png';
import TrophyGold from '@/../public/trophy-gold.svg'
import Calendar from '@/../public/calendar-icon.svg'
import GamepadDark from '@/../public/gamepad-dark-icon.svg'

import CustomButton from "@/app/ui/dashboard/custom-button";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const leaderboardURL = '/dashboard/tournaments/tournament/leaderboard'
    const fixturesURL = '/dashboard/tournaments/tournament/fixtures'

    return(
        <div>
            <Link href={'/dashboard/tournaments'}>
                <div className="hover:opacity-70 cursor-pointer flex gap-2 mb-2">
                    <Image src={Left} alt="left" />
                    <span className="text-white font-bold">Back</span>
                </div>
            </Link>

            <div>
                <Image src={CODMain} alt='cod main' />

                <h3 className="my-4 font-bold text-2xl text-white">Call of duty</h3>

                <div className="bg-[#242424] w-fit p-2 rounded-full flex items-center gap-1 my-2 text-xs ">
                    <Image src={TrophyGold} alt="trophy icon" />
                    <span>N10,000</span>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>

                <div className="flex gap-8 text-xs my-4">
                    <div className="flex gap-1 items-center">
                        <Image src={Calendar} alt="calendar" />
                        <span>10 Feb 2023</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src={Calendar} alt="calendar" />
                        <span>Free-to-play</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src={Calendar} alt="calendar" />
                        <span>4v4</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src={Calendar} alt="calendar" />
                        <span>10/48</span>
                    </div>
                </div>

                <CustomButton icon={GamepadDark} text="Join tournament" width="not-full" />
            </div>

            <div>
                <h3 className="my-4 font-bold text-2xl text-white">
                    Tournament Information
                </h3>

                <div className="flex gap-2 my-4">
                    <Link
                        href={leaderboardURL}
                        className={`px-4 py-2 text-xs ${pathname === leaderboardURL ? 'bg-[#3B3B3B] text-white' : ''}`}
                    >
                        Leaderboard
                    </Link>

                    <Link
                        href={fixturesURL}
                        className={`px-4 py-2 text-xs ${pathname === fixturesURL ? 'bg-[#3B3B3B] text-white' : ''}`}
                    >
                        Fixture
                    </Link>

                </div>

                <div className="">{children}</div>
            </div>

        </div>
    )
}