import Navigation from "../components/navigation/navigation.component";
import "../styles/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <header className="text-white bg-indigo-700">
          <Navigation />
        </header>
        <main className="container flex-grow mb-3 py-3 lg:w-3/5">{children}</main>
        <footer
          className="text-center w-100 pb-3"
        >
          <span className="opacity-60">
            Powered by Vercel, using next.js, sanity.io
          </span>
        </footer>
      </body>
    </html>
  );
}
