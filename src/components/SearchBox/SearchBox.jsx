
export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div >
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="Search contacts..."
        />
      </label>
    </div>
  );
}