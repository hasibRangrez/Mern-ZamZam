import { useParams } from 'react-router-dom';

const ProductSreen = () => {
  const params = useParams();
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default ProductSreen;
