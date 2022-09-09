import React, { Component } from 'react'
import {movies} from './getMovies'


export default class  extends Component {

  constructor(){
    super(); 
    this.state = {
      hover:'',
      pageArr:[1]
    }
  }
  render() {
    let movie=movies.results;
    return (
      <>
      {
        movie.length == 0 ?
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
       </div>:
       <div>
        <h3 className='text-center'><strong>Trending</strong></h3>
       <div className='movies-list'>
        {
        movie.map((movieObject)=>(
           <div className="card movies-card" onMouseEnter={()=> this.setState({hover:movieObject.id})} onMouseLeave={()=> this.setState({hover:''})} >
           <img src={`https://image.tmdb.org/t/p/original${movieObject.backdrop_path}`}   alt={movieObject.title} classNameName="card-img-top movies-img"/>
           {/* <div className="card-body"> */}
             <h1 className="card-title movies-title">{movie.original_title}</h1>
             {/* <p className="card-text banner-text">{movie.overview}</p> */}
             <div className='button-wrapper' style={{display:'flex' , width:'100%' ,justifyContent:'center'}}>
             {
                this.state.hover==movieObject.id &&
                <a  className="btn btn-primary movies-button">Add to favorites</a>
              }
             
             </div>
           {/* </div> */}
          </div>
        ))
        }
       </div>
       <div style={{display:'flex' , justifyContent:'center'}}>
          <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            {
              this.state.pageArr.map((value)=>(
                <li class="page-item"><a class="page-link" href="#">{value}</a></li>
              ))
            }
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
          </nav>
          </div>
       </div> 
      }
      </>
    )
  }
}
