// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    );
  }