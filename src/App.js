import React from 'react';
import { useState } from 'react';
import reactDom from 'react-dom';
import Source from './Source.js';
import "./Style.css";
import MovieList from './Movie';

// function MovieList(props) {
//   const { sname, title, Production_companies, Box_office_collections } = props;
//   return <>
//     <img width="250px" src={sname}></img>
//     <h3 >{title}</h3>
//     <span>{Production_companies}</span>
//     <span>{Box_office_collections}</span>
//   </>

// }
function card(val) {
  return <div className="frontpage">
    <MovieList sname={val.sname} />
    <MovieList title={val.title} />
    <MovieList Production_companies={val.Production_companies} />
    <MovieList Box_office_collections={val.Box_office_collections} />
  </div>
}


function App() {
  return (<div width="250" className="forntpage">
    {/* <h1>MovieList</h1>
    <div className="every">
      <MovieList sname={Source[0].sname} />
      <MovieList title={Source[0].title} />
      <MovieList Production_companies={Source[0].Production_companies} />
      <MovieList Box_office_collections={Source[0].Box_office_collections} />
    </div>
    
    <div className="every">
      <MovieList sname={Source[1].sname} />
      <MovieList title={Source[1].title} />
      <MovieList Production_companies={Source[1].Production_companies} />
      <MovieList Box_office_collections={Source[1].Box_office_collections} />
    </div>
    <div className="every">
      <MovieList sname={Source[2].sname} />
      <MovieList title={Source[2].title} />
      <MovieList Production_companies={Source[2].Production_companies} />
      <MovieList Box_office_collections={Source[2].Box_office_collections} />
    </div>
    <div className="every">
      <MovieList sname={Source[3].sname} />
      <MovieList title={Source[3].title} />
      <MovieList Production_companies={Source[3].Production_companies} />
      <MovieList Box_office_collections={Source[3].Box_office_collections} />
    </div>
    <div className="every">
      <MovieList sname={Source[4].sname} />
      <MovieList title={Source[4].title} />
      <MovieList Production_companies={Source[4].Production_companies} />
      <MovieList Box_office_collections={Source[4].Box_office_collections} />
    </div> */}
    {Source.map(card)}
  </div >
  );
}

export default App;
