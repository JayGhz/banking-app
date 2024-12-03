// Layout for main components
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
        </main>
    );
}
