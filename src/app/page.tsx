import NavBar from '@/components/navigation/NavBar';
import { Suspense } from 'react';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col-reverse">
            <main />
            <Suspense fallback={null}>
                <NavBar />
            </Suspense>
        </div>
    );
}
