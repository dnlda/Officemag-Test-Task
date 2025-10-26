interface ProductCardProps {
  image: string;
  description: string;
}

const ProductCard = ({ image, description }: ProductCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #979797",
        overflow: "hidden",
        background: "white",
        maxWidth: "300px",
        flexShrink: 0,
      }}
    >
      <div style={{ width: "100%", height: "250px", overflow: "hidden" }}>
        <img src={image} alt={description} />
      </div>
      <div style={{ padding: "16px" }}>
        <p
          style={{
            color: "#666",
            fontSize: "0.9rem",
            margin: "0 0 12px 0",
            lineHeight: "1.4",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
