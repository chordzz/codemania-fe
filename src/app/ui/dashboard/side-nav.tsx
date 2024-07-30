'use client';


import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Gamepad from '@/../public/gamepad-icon.svg'
import Leaderboard from '@/../public/leaderboard-icon.svg'
import TokenGray from '@/../public/token-grey-icon.svg'
import Bet from '@/../public/bet-icon.svg'
import VideoIcon from '@/../public/video-icon.svg'
import Community from '@/../public/community-icon.svg'
import Image from 'next/image';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {
        name: 'Tournaments', 
        href: '/dashboard/tournaments', 
        icon: Gamepad 
    },
    {
        name: 'Leaderboard',
        href: '/dashboard/leaderboard',
        icon: Leaderboard,
    },
    { 
        name: 'Token Shop',
        href: '/dashboard/token-shop',
        icon:  TokenGray
    },
    { 
        name: 'Live Betting',
        href: '/dashboard/live-betting',
        icon:  Bet
    },
    { 
        name: 'Content Locker',
        href: '/dashboard/content-locker',
        icon:  VideoIcon
    },
    { 
        name: 'Community',
        href: '/dashboard/community',
        icon:  Community
    },
];

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <div>
      {links.map((link) => {
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-2 p-2 text-center mb-2 hover:opacity-40 ${pathname === link.href || pathname.startsWith(link.href) ? 'bg-[#3B3B3B] text-white': ''}`}
          >
            <Image
                src={link.icon}
                alt={`${link.name} icon`}
            />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
