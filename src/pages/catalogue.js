import CardList from '../components/mantra/presentational/CardList';
import { useState } from 'react';

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

  {
    id: 3,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },
  {
    id: 4,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },

  {
    id: 5,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },
  {
    id: 6,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },

  {
    id: 7,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },
  {
    id: 8,
    price: 990,
    title: 'Львиная Грива (Lion\'s Mane Mushroom)',
    sticker: 'Новинка',
  },
];

const Catalogue = () => {
  const [catalogue] = useState(cardList);

  // useEffect(() => {
  //   axiosInstance.get(urls.catalogue.get).then(({ data }) => {
  //     setCatalogue(data);
  //   }).catch(() => {
  //     setCatalogue([]);
  //   });
  // }, [])
  // console.log(data);

  return (
    <CardList cardList={catalogue} />
  )
}

export default Catalogue;
