import React from "react";

interface ImageResponse {
  url : string
}

interface ICard {
  children: React.ReactNode
  copy: string
  title: string,
  headline: string,
  image: ImageResponse | null,
}

export default function Card({
  children,
  copy,
  headline,
  image,
  title,
}: ICard) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {image && <img src={image.url} className="card-img-top" alt={title}></img>}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{headline}</h6>
        <p className="card-text">{copy}</p>
        {children}
      </div>
    </div>
  )
}
