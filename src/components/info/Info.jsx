import InfoCard from "./InfoCard";

const Info = () => {
  const array = [
    { title: "Jordan", price: 20 },
    { title: "Nike", price: 10 },
    { title: "Addidas", price: 80 },
  ];
  return (
    <section className="info">
      <div className="container">
        <div className="info__row">
          {array.map((item, inx) => {
            return (
              <InfoCard key={item.inx} title={item.title} price={item.price} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Info;
