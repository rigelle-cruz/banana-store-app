import connection from './connection'
import { getAllProducts } from './shop'

export interface Featured {
  id: number
  name: string
  price: number
  imgSrc: string
}

export async function getFeaturedById(
  featuredArr: number[],
  db = connection
): Promise<Featured[]> {
  const allProducts = await getAllProducts(db)
  const featuredProducts: Featured[] = []

  for (let i = 0; i < allProducts.length; i++) {
    featuredArr.forEach((productId) => {
      if (productId === allProducts[i].id) {
        const featuredProduct = {
          id: allProducts[i].id,
          name: allProducts[i].name,
          price: allProducts[i].price,
          imgSrc: allProducts[i].imgSrc,
        }
        featuredProducts.push(featuredProduct)
      }
    })
  }

  return featuredProducts
}
