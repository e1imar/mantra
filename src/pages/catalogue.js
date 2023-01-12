import CardList from '../components/mantra/presentational/CardList';

const cardList = [
  {
    id: 1,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },
  {
    id: 2,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },
];

const Catalogue = () => {

  return (
    <>
      <h1>Catalogue page</h1>
      <CardList cardList={cardList} />
    </>
  )
}

export default Catalogue;
