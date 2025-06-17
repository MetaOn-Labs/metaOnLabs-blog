import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import { Youtubes } from '../../data/Media'
import useGetYoubuteThumbnail from '../../util/useGetYoubuteThumbnail'
import { useNavigate } from 'react-router-dom'

const YoutubeThumbnail = ({ img, name }) => {
  const image = useGetYoubuteThumbnail(img)
  const onClick = (url: string) => {
    window.open(url)
  }
  return (
    <Card
      shadow={false}
      className="border border-gray-300"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        className="pb-0"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <img src={image} alt={img} className="min-w-[280px] w-full" />
        <div className="flex justify-between mt-5 hover:cursor-pointer" onClick={() => onClick(img)}>
          <Typography
            className="mb-2 hover:decoration-solid"
            color="blue-gray"
            variant="h6"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {name}
          </Typography>
        </div>
      </CardBody>
    </Card>
  )
}

const YoutubeThumbnailCard = () => {
  const navigate = useNavigate()

  const onClickMore = (url: string) => {
    navigate(url)
  }
  return (
    <>
      <div className="hidden md:flex-row md:gap-8 md:overflow-x-scroll md:flex">
        {Youtubes.map((youtube) => (
          <YoutubeThumbnail img={youtube.url} name={youtube.title} key={youtube.code} />
        ))}
      </div>
      <Button
        className="mt-6 mx-auto flex md:hidden"
        variant="outlined"
        onClick={() => onClickMore('/media#youtube')}
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        see all youtube
      </Button>
    </>
  )
}

export default YoutubeThumbnailCard
