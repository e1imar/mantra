import { useRouter } from 'next/router';

const ProductById = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <h1>
      Product with {id}
    </h1>
  )
};

export default ProductById;
