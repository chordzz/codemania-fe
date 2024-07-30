import Link from "next/link";
import Image from "next/image";

import Logo from '@/../public/gamer-2-logo.svg'
import SearchIcon from '@/../public/search-icon.svg'
import NotificationIcon from '@/../public/notification-icon.svg'
import Avatar from '@/../public/avatar-icon.svg'
import TokenIcon from '@/../public/token-icon.svg'
import DownIcon from '@/../public/down-icon.svg'

export default function TopNav() {
    return (
        <div className="bg-[#121212] fixed h-[90px] border-b border-[rgba(36, 36, 36, 1)] flex items-center justify-between gap-8 w-[100%] px-6 py-4">
            <div className=''>
                <Link href="/dashboard/tournaments">
                    <Image
                        src={Logo}
                        alt="Picture of the author"
                    />
                </Link>
            </div>

            <div className=' flex items-center justify-between w-[78%]'>
                <div className='w-[45%]'>
                    <label className="relative block">
                        <input name='nav-search' type="text" placeholder="Search tournament, player name or player tag" className="bg-[#1C1C1C] h-[48px] text-[14px] pl-10 w-full" />

                        <button className="absolute left-2 inset-y-0 flex items-center justify-center rounded-r-md cursor:pointer">
                            <Image 
                                src={SearchIcon}
                                alt="search"
                            />
                        </button>
                            
                    </label>
                </div>

                <div className='flex items-center gap-6 text-[#E5E4E4]'>
                    <Image 
                        src={NotificationIcon}
                        alt='notification bell'
                    />

                    <div className='flex items-center'>
                        <Image 
                            src={TokenIcon}
                            alt='token'
                        />
                        <span className='text-[14px]'>20,000</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image 
                            src={Avatar}
                            alt='avatar'
                        />

                        <div className='flex flex-col items-start'>
                            <span className='text-[12px]'>Akinola Olalekan</span>
                            <button className='flex items-center gap-1 justify-between text-[10px] bg-[#40610F] px-2'>
                                Online
                                <Image 
                                    src={DownIcon}
                                    alt='down arrow'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
  