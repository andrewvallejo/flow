import NavBar from '@/components/navigation/NavBar';
import { Suspense } from 'react';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="h-full w-full flex-1 bg-[var(--color-main-background)]"></main>
            <footer>
                <Suspense fallback={null}>
                    <NavBar />
                </Suspense>
            </footer>
        </div>
    );
}
