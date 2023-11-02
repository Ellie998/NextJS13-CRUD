export default async function Post(props) {
  const result = await fetch(
    `https://react-router-practice-19b77-default-rtdb.firebaseio.com/topics/${props.params.id}.json`
  );
  const data = await result.json();

  return (
    <>
      <h2>{data.title}</h2>
      {data.description}
    </>
  );
}
