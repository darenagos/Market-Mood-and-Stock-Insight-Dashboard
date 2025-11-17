type Props = {
  title?: string;
};

export default function Header({ title = "Market Mood Dashboard" }: Props) {
  return (
    <header className="p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
