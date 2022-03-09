import React from 'react'



function Displaydetails(props) {
  const { Title, Year, Poster, Runtime, Actors, Director, Genre, Plot } = props.info;

  const back = () => {
    props.setflag(false)

  }

  return (
    <>
      <div className='show-details'>
        <div className='info-box'>
          <div className='box-pop'>
            <img className='poster-head' src={Poster} alt="No Image Available" />
          </div>
        </div>
        <div className='info'>
          <p> <b>{Title}</b></p>
          <p> <b>Genre-</b>{Genre}</p>
          <p> <b>Actors-</b> {Actors} </p>
          <p> <b>Directors-</b> {Director} </p>
          <p> <b>Year-</b> {Year} </p>
          <p> <b>Plot-</b> {Plot} </p>
          <button className="buttonClass" onClick={back}>Close</button>
        </div>
      </div>

    </>
  )
}
export default Displaydetails
