import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Meus Estudos</h1>
      <div className="space-x-4">
        <Link href="/">Início</Link>
        <Link href="/dashboard">Painel</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}