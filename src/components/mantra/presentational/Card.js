const Card = () => (
  <li className="card">
    <div className="img">
      <p className="card__sticker">
        {stickerName}
      </p>
      <div className="thumb-wrapper">
        <img className="bg" />
      </div>
    </div>

    <h4 className="card__title light"> {card.title} </h4>
    <p className="card__price medium">
      {card.price} Р
    </p>
  </li>
)
