interface PillProps {
  label: string;
  active?: boolean;
}

export default function Pill({ label, active }: PillProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full border text-sm transition 
        ${active ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"}
      `}
    >
      {label}
    </button>
  );
}
