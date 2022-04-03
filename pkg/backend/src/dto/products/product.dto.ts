export interface ProductDto {
  id: number;
  name: string;
  price: number;
  sku: string;
  desc: string;
  size: string;
  color: string;
  season: string;
  quantity: number;
}

const getProductDto = ({
  id,
  name,
  price,
  sku,
  desc,
  size,
  color,
  season,
  quantity,
}: ProductDto): ProductDto => {
  return {
    id,
    name,
    sku,
    price,
    desc,
    size,
    color,
    season,
    quantity,
  };
};

export default getProductDto;
