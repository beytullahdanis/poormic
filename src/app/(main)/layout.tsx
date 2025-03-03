export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <header>header component</header>
            {children}
        </section>
    )
}