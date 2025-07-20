import { notFound } from "next/navigation";

const reviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
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
