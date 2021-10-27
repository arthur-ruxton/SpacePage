const SpaceCard = ({
  title,
  url,
  imageUrl,
  summary,
 
}) => {
  return (
    <div className='cardsDiv'>
      <div className='cardText'>
        <h2><a href={url}> {title}</a> </h2>
        <p> {summary} </p>
      </div>
      <picture>
        <img src={imageUrl} alt={title} />
      </picture>
    </div>
  )
}

export default SpaceCard