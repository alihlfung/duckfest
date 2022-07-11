import './ImageCard.css';

function ImageCard({path, user, caption}) {
  return (
    <div className="ImageCard">
      <img src={path} alt={caption}/>
      <div>
        <p><strong>{user}</strong></p>
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default ImageCard
