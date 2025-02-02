export default function SearchBox({ filter, onChange }) {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search contacts..."
        />
      </label>
    </div>
  );
}
