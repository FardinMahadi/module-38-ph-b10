export default function Singer({ singer }) {
  return (
    <div>
      <h4>Singer: {singer.name}</h4>
      <p>Age: {singer.age}</p>
    </div>
  );
}
