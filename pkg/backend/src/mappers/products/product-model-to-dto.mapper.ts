import Product from '../../database/models/product.model';
import getProductDto, { ProductDto } from '../../dto/products/product.dto';

const productModelToDtoMapper = (product: Product): ProductDto => {
  const { id, name, sku, price, desc, productAttributes, productInventory } = product;
  const { size, color, season } = productAttributes;
  const { quantity } = productInventory;

  return getProductDto({
    id,
    name,
    sku,
    price,
    desc,
    size,
    color,
    season,
    quantity,
  });
};

export default productModelToDtoMapper;
