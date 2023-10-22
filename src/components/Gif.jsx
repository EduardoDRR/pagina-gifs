import './gif.css'

function Gif({title, id, url}) { //eslint-disable-line
  return (
    <a href={`#${id}`} className="Gif">
      <div key={id}>
                <h4>{title}</h4>
                <img alt={title} src={url}/> 
            </div>  
    </a>
  )
}

export default Gif
