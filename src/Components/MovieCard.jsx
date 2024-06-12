import React from "react";

const MovieCard = ({movieImg , movieTitle })=>{

    return(

        <div className="movieCard">
              <div className="cardItem">

                <div className="cardimg">
                   <img src={movieImg} alt="" />
                </div>
                <div className="cardTitle">
                  <div className="titleOpecity"></div>
                      <p>{movieTitle}</p>
                </div>

              </div>
        </div>
    )
}

export default MovieCard