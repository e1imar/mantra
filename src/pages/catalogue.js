import CardList from '../components/mantra/presentational/CardList';
import axios, {endpoints} from "../utils/axios";
import PropTypes from "prop-types";

const Catalogue = ({products}) => <CardList cardList={products} />

export async function getStaticProps() {
  const {data} = await axios.get(endpoints.product.list, {params: {size: 20}})
  return {props: {products: data.results}}
}

Catalogue.propTypes = {
  products: PropTypes.array
}

export default Catalogue;
