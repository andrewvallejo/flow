import NavBar from '@/components/navigation/NavBar';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="h-full w-full flex-1 bg-[var(--color-main-background)]"></main>
            <footer>
                <NavBar />
            </footer>
        </div>
    );
}
