import React from 'react'

export default function card(props) {
  return (
    <div>
        <div> <h2 className="jobSection">Featured Job List</h2></div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.name}</p>
        <p>{props.policy}</p>
        <p>{props.location}</p>
        <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount}) + </span>
        <button>{props.view}</button>
        <button>{props.button}</button>
      </div>
    </div>
  )
}
