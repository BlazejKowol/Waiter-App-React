import AllTables from "../../Features/AllTables/AllTables";

const Home = () => {
  return (
    <>
    <section>
        <div className="d-flex justify-content-between my-4">
            <h1 className="h2">All tables</h1>
        </div>
        <AllTables />
    </section>
    </>
  );
};

  export default Home;