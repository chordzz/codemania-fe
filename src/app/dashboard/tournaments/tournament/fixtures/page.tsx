import Image from "next/image";

import Fixtures from '@/../public/fixtures-img.png'

export default function Page() {
    return(
        <div className="mt-4 max-w-full">
            <div>
                <Image src={Fixtures} alt="fixtures" />
            </div>
        </div>
    )
}