import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Welcome</h2>
        <p className="mb-4">
          This is the homepage for the Market Mood and Stock Insight Dashboard.
        </p>
        <p className="text-sm text-slate-600">
          Add your dashboard components and charts here.
        </p>
      </section>
    </MainLayout>
  );
}
