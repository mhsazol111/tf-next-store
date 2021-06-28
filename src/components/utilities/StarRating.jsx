// Source https://codepen.io/pen/

const Star = ({ marked, starId }) => (
  <span data-star-id={starId} className="text-yellow-300" role="button">
    {marked ? '\u2605' : '\u2606'}
  </span>
);

const StarRating = ({ value }) => {
  const rating = parseInt(value, 10) || 0;

  return (
    <div>
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} key={`star_${i + 1}`} marked={rating >= i + 1} />
      ))}
    </div>
  );
};

export default StarRating;
