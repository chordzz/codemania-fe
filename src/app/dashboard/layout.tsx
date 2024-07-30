import Image from 'next/image'

import NavLinks from '../ui/dashboard/side-nav';
import TopNav from '../ui/dashboard/top-nav';

import Logout from '@/../public/logout-icon.svg'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen w-screen flex flex-col bg-[#0F0F0F] text-[#7E7F7F]">
            <TopNav />

            <div className="mt-[90px] flex grow flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64 bg-[#242424] p-6 text-xs">
                    <div className='flex flex-col h-full justify-between'>
                        <NavLinks />
                        <button className={`hover:opacity-70  flex items-center gap-2 px-4 py-3 text-xs bg-[#5F0A07] text-white font-bold self-start w-full`}>
                            <Image
                                src={Logout}
                                alt=''
                            />
                            <span className='uppercase'>
                                Log - Out
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}