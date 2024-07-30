
import Image from 'next/image'

import { CustomFilterType } from '@/app/lib/types'

import Down from '@/../public/down-icon-gray.svg'

export default function CustomFilter({icon, text}: CustomFilterType) {
  return (
    <button className="flex gap-2 p-2 items-center text-white text-xs self-start bg-[#1C1C1C]">
        <Image
            src={icon}
            alt=''
        />
        <span>
            {text}
        </span>
        <Image
            src={Down}
            alt='arrow down icon'
        />
    </button>
  )
}
