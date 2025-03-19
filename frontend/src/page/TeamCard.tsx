import moon from '../../assets/concept/moon2.jpeg'
import yu from '../../assets/concept/yu.jpeg'
import kim from '../../assets/concept/kim.jpeg'
import park from '../../assets/concept/park.png'

const Card = (props) => (
  <div className="flex-shrink-0 w-[250px] bg-white shadow-md cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg m-4">
    <img 
      src={props.imgUrl} 
      alt={props.alt || 'Image'} 
      className="w-[250px] h-[250px] object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800">{props.title}</h2>
      <p className="text-sm text-gray-600">{props.content}</p>
      <span className="text-sm text-gray-600">{props.content}</span>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="flex overflow-x-auto bg-gray-100 text-gray-800 p-4 shadow-inner scrollbar-hide">
    {props.cards.map((card) => (
      <Card 
        key={card.id} // 각 카드에 고유 key 추가
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl} 
      />
    ))}
  </div>
);

const TeamCard = () => {
  const cardsData = [
    {id: 1, title: 'KyongMin Moon', content: 'M.D Ph.d', imgUrl: moon},
    {id: 2, title: 'Jieon Kim', content: 'AI ∙ Software', imgUrl: kim},
    {id: 3, title: 'Yeongju Yu', content: 'Software', imgUrl: yu},
    {id: 4, title: 'Sanghwan park', content: 'Software', imgUrl: park},
  ];
  
  return (
    <div className="text-gray-200">
      <CardContainer cards={cardsData} />
    </div>
  );
};

export default TeamCard