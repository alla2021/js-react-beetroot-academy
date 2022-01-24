import React from "react";
import App from "../../App";
// import Search from '../../components/Search/Search';

function Homepage() {
  return (
    <>
      <main>
        <section className="users-app">
          <div className="container">
            <App />
          </div>
        </section>
      </main>
    </>
  );
}

export default Homepage;
