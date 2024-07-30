
import Image from 'next/image'

import { CustomButtonType } from '@/app/lib/types'

export default function CustomButton({icon, text, width}: CustomButtonType) {
  return (
    <button className={`hover:opacity-70 flex items-center gap-2 px-4 py-3 text-sm bg-[#8BC72F] text-black font-bold self-start ${width === 'full' ? 'w-full' : ''} justify-center`}>
        <Image
            src={icon}
            alt=''
        />
        <span>
            {text}
        </span>
    </button>
  )
}
