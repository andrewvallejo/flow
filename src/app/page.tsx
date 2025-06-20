import Image from 'next/image';
import NavBar from '@/components/navigation/NavBar';
import { Suspense } from 'react';

export default function Home() {
    return (
        <div className={`relative flex min-h-screen flex-col overflow-hidden`}>
            <main className="flex flex-1 flex-col items-center justify-center gap-2 p-4">
                <Image
                    draggable="false"
                    src="/flow-hollow.svg"
                    alt="Flow Logo"
                    width={156}
                    height={156}
                />
                <h1 className="text-[3rem] font-thin text-white opacity-40">
                    Flow
                </h1>
            </main>
            <Suspense fallback={null}>
                <NavBar />
            </Suspense>
        </div>
    );
}
