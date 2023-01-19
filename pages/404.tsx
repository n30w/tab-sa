export default function Custom404() {
  return (
    <h1 className="text-2xl text-center">Hmmm... that page was not found.</h1>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: true,
  };
}
