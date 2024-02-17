export default function Project({ links }) {
  return (
    <div className="flex-row col-2 p-4">
      <div className="card-use p-0">
        {links.map((link) => link)}
      </div>
    </div>
  );
}