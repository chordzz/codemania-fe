
import Dash from '@/../public/dash-colored.svg'
import Down from '@/../public/down-colored.svg'
import Up from '@/../public/up-colored.svg'
import Image from 'next/image'


const tableData = [
    {
        rank: 1,
        name: "Adebayo Oyeleye",
        played: 20,
        wins: 20,
        losses: 0,
        ratio: '100%',
        points: 49,
        icon: Up,
    },

    {
        rank: 2,
        name: "iBROMOVIC109",
        played: 20,
        wins: 19,
        losses: 1,
        ratio: '98%',
        points: 47,
        icon: Down,
    },

    {
        rank: 3,
        name: "Drillz",
        played: 20,
        wins: 17,
        losses: 3,
        ratio: '92%',
        points: 46,
        icon: Dash,
    },

    {
        rank: 4,
        name: "Bigbadderwolf",
        played: 20,
        wins: 12,
        losses: 8,
        ratio: '55%',
        points: 39,
        icon: Up,
    },

    {
        rank: 5,
        name: "Pinky",
        played: 20,
        wins: 10,
        losses: 6,
        ratio: '50%',
        points: 34,
        icon: Up,
    },

    {
        rank: 6,
        name: "demolaoflag",
        played: 20,
        wins: 8,
        losses: 14,
        ratio: '48%',
        points: 30,
        icon: Down,
    },
]


export default function Page() {

    return(
        <div className='mt-4 max-w-full'>
            <table className="table-auto min-w-[650px] w-full overflow-x-scroll">
                <thead className="bg-[#242424] text-[#7E7F7F] text-xs font-thin text-left">
                    <tr>
                        <th className="pl-4 py-4">Placement</th>
                        <th className="pl-4 py-4 w-[40%]">Player</th>
                        <th className="pl-4 py-4">Games played</th>
                        <th className="pl-4 py-4">Wins</th>
                        <th className="pl-4 py-4">Losses</th>
                        <th className="pl-4 py-4">W/L ratio</th>
                        <th className="pl-4 py-4">Points</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-white">
                    {
                        tableData.map( item =>
                            <tr key={item.name} className='items-center bg-[#1C1C1C]'>
                                <td className="pl-4 py-4 border-b border-[#2E2E2E] flex items center gap-2">
                                    <Image src={item.icon} alt='arrow direction icon' />
                                    <span>{item.rank}</span>
                                </td>
                                <td className="pl-4 py-4 border-b border-[#2E2E2E] w-[30%]">{item.name}</td>
                                <td className="pl-4 py-4 border-b border-[#2E2E2E]">{item.played}</td>
                                <td className="pl-4 py-4 border-b border-[#2E2E2E]">{item.wins}</td>
                                <td className="pl-4 py-4 border-b border-[#2E2E2E]">{item.losses}</td>
                                <td className="pl-4 py-4 border-b border-[#2E2E2E]">{item.ratio}</td>
                                <td className="pl-4 py-4 border-b border-[#2E2E2E]">{item.points}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
                </table>
        </div>
    )
}