import type { TProduct } from "../../types/product";

type Props = {
  reviews: TProduct["reviews"];
};

/**
 * Displays a scrollable list of customer reviews for a product.
 *
 * If no reviews are available, nothing is rendered.
 * Each review includes:
 * - Username
 * - Star rating out of 5
 * - Description
 *
 * @param {Props} props - The product's review list
 * @returns {JSX.Element | null} The rendered review section, or nothing if empty
 */
export function ProductReviews({ reviews }: Props) {
  if (!reviews?.length) return null;

  return (
    <div className="mb-5">
      <h2 className="text-lg font-medium font-semibold mb-3">Reviews</h2>
      <ul className="max-h-[100px] overflow-y-auto pr-2 border border-gray-300 rounded p-2">
        {reviews.map((review) => (
          <li key={review.id}>
            <p className="font-main font-semibold text-sm mb-1">
              {review.username}
            </p>
            <p className="text-sm text-gray-600 mb-1">{review.rating}/5</p>
            <p className="text-sm text-gray-600 italic mb-5 max-w-md">
              "{review.description}"
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
