import CardList from '../components/mantra/presentational/CardList';
import axios, {endpoints} from "../utils/axios";

const Catalogue = ({products}) => {
  return (
    <CardList cardList={products} />
  )
}

export async function getStaticProps() {
  const {data} = await axios.get(endpoints.product.list)
  return {props: {products: data.results}}
}

export default Catalogue;
