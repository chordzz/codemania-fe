
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      <Link href={'/dashboard/tournaments'}>
        <button className="px-8 py-4 bg-green-500">Click to go to Dashboard</button>
      </Link>
    </main>
  );
}
