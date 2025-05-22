import { Card, CardBody, Typography } from '@material-tailwind/react'
import { Youtubes } from '../../data/Media'
import useGetYoubuteThumbnail from '../../util/useGetYoubuteThumbnail'

const YoutubeThumbnail = ({ img, name }) => {
  const image = useGetYoubuteThumbnail(img)
  const onClick = (url: string) => {
    window.open(url)
  }
  return (
    <Card shadow={false} className="border border-gray-300" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardBody className="pb-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <img src={image} alt={img} className="min-w-[280px] w-full" />
        <div className="flex justify-between mt-5 hover:cursor-pointer" onClick={() => onClick(img)}>
          <Typography className="mb-2 hover:decoration-solid" color="blue-gray" variant="h6">
            {name}
          </Typography>
        </div>
      </CardBody>
    </Card>
  )
}

const YoutubeThumbnailCard = () => {
  return (
    <div className="flex flex-col gap-8 md:overflow-x-scroll md:flex-row">
      {Youtubes.map((youtube) => (
        <YoutubeThumbnail img={youtube.url} name={youtube.title} key={youtube.code} />
      ))}
    </div>
  )
}

export default YoutubeThumbnailCard
