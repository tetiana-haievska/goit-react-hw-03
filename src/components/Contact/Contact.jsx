
export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li >
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}