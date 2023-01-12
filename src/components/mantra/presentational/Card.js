import Image from 'next/image';

export default function Card({ stickerName, title, price, image = 'https://themantra.ru/media/products/Mind_350.jpg' }) {
  return (
    <li className="card">
      <div className="img">
        <p className="card__sticker">
          {stickerName}
        </p>
        <div className="thumb-wrapper">
          <Image height="100px" width="100px" className="bg" src={image} />
        </div>
      </div>

      <h4 className="card__title light"> {title} </h4>
      <p className="card__price medium">
        {price} Р
      </p>
    </li>
  )
};
