import React from 'react'

const Card = (props) => {
 const { img, name, ratings, isVelcro, isFreeReturn } = props.details;
  return (
    <div className='card'>
    <div className='card-logo'>
        <img className='card-img' src={img}></img>
    </div>
    <div className='details-container' style={{ marginLeft: '20px' }}>
        <span className='store-name' style={{ fontSize: "28px", fontWeight: "bold" }}>{name}</span>
        <span className='rating'style={{ fontSize: "28px", fontWeight: "bold", marginLeft: "10px" }}>{`${ratings} stars`}</span>
        {isVelcro ? <div className='velcrose--tag'>Velcrose</div> : null}
        {isFreeReturn ? <div className='free-return-tag'>Free Return</div> : null}
        <button onClick={() => { props.cardButtonClick(ratings, isVelcro, name) }}>Check Price</button>
    </div>
</div>
  )
}

export default Card