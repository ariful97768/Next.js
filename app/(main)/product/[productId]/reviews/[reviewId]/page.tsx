import { notFound } from "next/navigation";
function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}
const reviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const random: number = getRandomInt(2);
  console.log(random);
  if (random === 1) {
    throw new Error("Error while loading ");
  }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      details of product {productId}, review {reviewId}
    </div>
  );
};

export default reviewDetails;
