export default async function Post(props) {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${props.params.id}.json`,
    { cache: "no-store" }
  );
  const data = await result.json();

  return (
    <>
      <h2>{data.title}</h2>
      {data.description}
    </>
  );
}
