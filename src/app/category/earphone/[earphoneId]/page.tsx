export async function generateStaticParams() {
  const products = await fetch("https://api.example.com/products").then((res) =>
    res.json()
  );
  return products.map((product) => ({
    productId: product.id.toString(), // Ensure the parameter is a string
  }));
}

export default function ProductDetailPage({ params }) {
  return <section>{params}</section>;
}
