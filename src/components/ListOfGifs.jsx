import Gif from "./Gif"
import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'


export default function ListOfGifs( {params} ) {//eslint-disable-line

  const {keyword} = params //eslint-disable-line


  const [gifs, setGifs] = useState([]);

    useEffect(function() {
        getGifs({ keyword }).
        then(gifs => setGifs(gifs))
    },[keyword]) 


  return <div>
  {
      gifs.map(({id, title, url}) =>
        <Gif 
            key={id} 
            id={id}
            title={title}
            url={url}
        />
      )
  }
    
  </div>
  
  
}
