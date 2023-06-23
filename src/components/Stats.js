export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked * 100) / numItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          <em>you got everything ready to go ✈️</em>
        ) : (
          <em>
            You have {numItems} items on your list, and you already packed{" "}
            {percentage}%{" "}
          </em>
        )}
      </em>
    </footer>
  );
}
