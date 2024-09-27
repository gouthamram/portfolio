// app/layout.tsx
import './globals.css'; // Tailwind CSS import
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Use the Header component */}
        <Header />

        {/* Main content */}
        <main className="flex-grow p-8">{children}</main>

        {/* Footer always at the bottom */}
        <Footer />
      </body>
    </html>
  );
}