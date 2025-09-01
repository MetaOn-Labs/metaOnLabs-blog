import moon from '../../assets/concept/moon2.jpeg'
import yu from '../../assets/concept/yu.jpeg'
// import kim from '../../assets/concept/kim.png'
import park from '../../assets/concept/park.jpeg'
import jang from '../../assets/concept/jang.png'
import kim_cau from '../../assets/concept/kim_cau.png'
import woo_cau from '../../assets/concept/woo_cau.png'
import { Avatar, Card, Typography } from '@material-tailwind/react'

const CardContainer = ({ cards }) => (
  <div className="mt-24  md:flex md:overflow-x-scroll xl:grid xl:gap-12 gap-x-24 xl:grid-cols-6">
    {cards.map((card) => (
      <Card color="transparent" shadow={false} className="text-center" key={card.id} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onResize={undefined} onResizeCapture={undefined}>
        <Avatar
          src={card.imgUrl}
          alt={card.title}
          size="xxl"
          variant="rounded"
          className="h-full md:w-72 xl:w-full shadow-lg shadow-gray-500/25 sm:w-60 mx-auto" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onResize={undefined} onResizeCapture={undefined} />
        <Typography variant="h5" color="blue-gray" className="mt-6 mb-1" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {card.title}
        </Typography>
        <Typography className="font-bold text-blue-gray-500" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{card.content}</Typography>
      </Card>
    ))}
  </div>
)

const TeamCard = () => {
  const cardsData = [
    { id: 1, title: 'KyongMin Moon', content: 'M.D Ph.d', imgUrl: moon },
    { id: 6, title: 'Donghoon Kim', content: 'M.D', imgUrl: kim_cau},
    { id: 7, title: 'SooHyun Woo', content: 'M.D', imgUrl: woo_cau},
    // { id: 2, title: 'Badagreen', content: 'AI ∙ Software', imgUrl: kim },
    { id: 3, title: 'YeongJu Yu', content: 'Software', imgUrl: yu },
    { id: 4, title: 'SangHwan Park', content: 'Software', imgUrl: park },
    { id: 5, title: 'youngIn Jang', content: 'AI', imgUrl: jang },
  ]

  return <CardContainer cards={cardsData} />
}

export default TeamCard
