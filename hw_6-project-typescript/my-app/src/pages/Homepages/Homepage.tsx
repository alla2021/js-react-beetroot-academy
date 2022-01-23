import React from "react";
import ListHooks from "../../components/ListHooks/ListHooks";
// import Search from '../../components/Search/Search';

function Homepage() {
  return (
    <>
      <main>
        <section className="users-app">
          <div className="container">
            <ListHooks />
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
