import React from 'react';

interface Props {
  img: string;
  alt: string;
  caption?: string;
}

function Figure({ img, alt, caption }: Props) {
  return (
    <figure>
      <img src={img} alt={alt} style={{ marginBottom: 0 }} />
      {caption && (
        <figcaption style={{ textAlign: 'center' }}>{caption}</figcaption>
      )}
    </figure>
  );
}

export default Figure;