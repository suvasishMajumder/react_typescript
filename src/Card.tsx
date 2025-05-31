type CardProps = {
  cardTitle: string;
  cardImg: string;
  cardContent: string;
  style:React.CSSProperties;
  onclickcard: () => void;
};

const Card = ({style,onclickcard,cardTitle,cardImg,cardContent}:CardProps) => {
  return (
    <div style={style} className="h-[30rem] hover:text-shadow-violet-950 space-y-2 p-5 w-80 rounded-xl shadow-2xl bg-blue-200" onClick={onclickcard}>
        <img src={cardImg} className="h-1/2 object-cover w-full" alt="" />
      <h3 className="text-3xl text-center">{cardTitle}</h3>
      <p className="">{cardContent}</p>
    </div>
  );
};

export default Card;
