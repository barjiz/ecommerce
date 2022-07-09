import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



export const LazyImage = (props) => {
  return (

    <LazyLoadImage
      width={props.width}
      height={props.height}
      src={props.src}
      onClick={props.onClick}
    />
  )
}
