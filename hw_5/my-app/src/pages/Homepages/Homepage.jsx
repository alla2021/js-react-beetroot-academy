import React from 'react';
// import Content from '../../components/Content/Content';
import List from '../../components/List/List';
import ListHooks from '../../components/ListHooks/ListHooks';
import Form from '../../components/Form/Form';


function Homepage() {
  return (
    <>
      <main>   
            <Form />
            <List />
            <ListHooks />
      </main>
    </>
  );
}

export default Homepage;