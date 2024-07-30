
import Image from 'next/image'

import { CustomActionButtonType } from '@/app/lib/types'

export default function CustomActionButton({icon, text}: CustomActionButtonType) {
  return (
    <button className="hover:opacity-70  flex items-center gap-1 text-sm self-start text-white">
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
