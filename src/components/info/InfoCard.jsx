const InfoCard = ({ title, price }) => {
  return (
    <div className="info__card">
      <h3> {title}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti
        molestiae dolorem vel iste dolores laudantium voluptatum eos cupiditate
        blanditiis!
      </p>
      <p>
        <b>Price: {price} $</b>
      </p>
      <button type="button">Купить</button>
    </div>
  );
};

export default InfoCard;
