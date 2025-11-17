import type { ReactNode } from "react";
import { Header } from "../components";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header title="Market Mood & Stock Insights" />
      <main className="p-6">{children}</main>
    </div>
  );
}
