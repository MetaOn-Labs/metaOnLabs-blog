import moon from '../../assets/concept/moon2.jpeg'
import yu from '../../assets/concept/yu.jpeg'
import kim from '../../assets/concept/kim.jpeg'
import park from '../../assets/concept/park.png'
import { Avatar, Card, Typography } from '@material-tailwind/react'

const CardContainer = ({ cards }) => (
  <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
    {cards.map((card) => (
      <Card color="transparent" shadow={false} className="text-center" key={card.id} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Avatar
          src={card.imgUrl}
          alt={card.title}
          size="xxl"
          variant="rounded"
          className="h-full w-full shadow-lg shadow-gray-500/25" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        />
        <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
          {card.title}
        </Typography>
        <Typography className="font-bold text-blue-gray-500">{card.content}</Typography>
      </Card>
    ))}
  </div>
)

const TeamCard = () => {
  const cardsData = [
    { id: 1, title: 'KyongMin Moon', content: 'M.D Ph.d', imgUrl: moon },
    { id: 2, title: 'Jieon Kim', content: 'AI ∙ Software', imgUrl: kim },
    { id: 3, title: 'Yeongju Yu', content: 'Software', imgUrl: yu },
    { id: 4, title: 'Sanghwan park', content: 'Software', imgUrl: park },
  ]

  return <CardContainer cards={cardsData} />
}

export default TeamCard
