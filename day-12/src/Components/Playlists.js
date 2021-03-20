import React from 'react'
// import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { Link } from 'react-router-dom'
import "../App.css"

const Playlists = props => {
  console.log(props.limiter)
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: 'Top Hits Tamil',
      img:
        'https://i.pinimg.com/564x/09/65/61/096561e53e9f13f0b5146fe1576b3e6f.jpg',
      desc: 'Description',
    },
    {
      id: 102,
      category_id: 3,
      name: 'Trending Tamil',
      img:
        'https://i.pinimg.com/564x/84/9b/c7/849bc7dc6344f2cd29ffdf2b67b588e5.jpg',
      desc: 'Description',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Sound Track 1',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Description',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Top 50 Songs',
      img:
        'https://i.pinimg.com/564x/a5/a6/ee/a5a6ee6b9cfff53c010c2b9d400cb10e.jpg',
      desc: 'Description',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Top Hits Hindi',
      img:
        'https://i.pinimg.com/564x/30/07/5e/30075ef517e8b96178c59a87d566739e.jpg',
      desc: 'Description',
    },
    {
      id: 106,
      category_id: 2,
      name: 'Top Hits Telugu ',
      img:
        'https://i.pinimg.com/564x/9b/7a/d3/9b7ad344cdb287efb377408e646e31a4.jpg',
      desc: 'Description',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Melodies Telugu',
      img:
        'https://i.pinimg.com/564x/e1/3b/be/e13bbe2007083a99123683c9986a87ab.jpg',
      desc: 'Description',
    },
  ]

  let matchedPlaylists = dataPlaylists
    .filter(playlist => playlist.category_id === props.category_id)
    .slice(0, props.limiter)

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist, id) => (
        <Link to={`/playlist/` + playlist.id} key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Playlists