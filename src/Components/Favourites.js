import React, { Component } from 'react'
import {movies} from './getMovies'

export default class Favorites extends Component {
  constructor(){
    super();
    this.state={
      genres:[],
      currGen:'All Genres'
    }
  }
  render() {
    const movie = movies.results;
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    let temp = [];
    movie.forEach((movieObj)=>{
      if(!temp.includes(genreids[movieObj.genre_ids[0]])){
        temp.push(genreids[movieObj.genre_ids[0]])
      }
    })
    temp.unshift("All Genres");
    // this.setState({
    //   genres:[...temp]
    // })
    return (
      <div>
        <>

        <div className='main'>
            <div className='row'>
                <div className='col-3'>
                    <ul className="list-group favourites-genres">
                      {
                        temp.map((genre)=>(
                          this.state.currGen == genre ?
                          <li className="list-group-item" style={{background:'#8f2d14', color:'white', fontWeight:'bold'}}>{genre}</li>:
                          <li className="list-group-item" style={{background:'white', color:'#8f2d14'}}>{genre}</li>
                          ))   
                      }
                       
                    </ul>
                </div>

                <div className='col-9 favourites-table'>
                  <div className='row'>
                    <input type='text' className='input-group-text col' placeholder='Search'></input>
                    <input type='number' className='input-group-text col' placeholder='Count'></input>
                  </div>

                  <div className='row'>
                  <table className="table">
                      <thead>
                        <tr>
                          
                          <th scope="col">Title</th>
                          <th scope="col">Genres</th>
                          <th scope="col">Popularity</th>
                          <th scope="col">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          movie.map((movieObject)=>(
                            <tr>
                            <td><img src={`https://image.tmdb.org/t/p/original${movieObject.backdrop_path}`} alt={movieObject.title} style={{width:'4rem'}}/>{movieObject.original_title}</td>
                            <td>{genreids[movieObject.genre_ids[0]]}</td>
                            <td>{movieObject.popularity}</td>
                            <td>{movieObject.vote_average} </td>
                            <td><button type="button" className="btn btn-danger">delete</button></td>
                          </tr>
                          ))
                        }
                        
                      </tbody>
                    </table>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
                </div>
            </div>
        </div>       
        </>
      </div>
    )
  }
}
