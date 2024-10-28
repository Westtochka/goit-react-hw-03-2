const List = ({ data, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button>Хочу ще</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
