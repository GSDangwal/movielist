import React from 'react';


function MovieList(props) {
  return <div className="movies">
    <img width="250px" src={props.sname}></img>
    <h3 >{props.title}</h3>
    <span>{props.Production_companies}</span>
    <span>{props.Box_office_collections}</span>
  </div>

}
export default MovieList;

