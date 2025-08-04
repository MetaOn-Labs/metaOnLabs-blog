import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import useGetYoubuteThumbnail from '../../util/useGetYoubuteThumbnail'
import { useEffect, useState } from 'react'
import { YoutubeItem } from '../../interface/request'
import BlogAPI from '../../api'

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

const YoutubeThumbnailCard = ({ onClickMore }) => {
  const [isYoutubeRecord, setIsYoutubeRecord] = useState<YoutubeItem[]>([])

  const fetchYoutubeData = async () => {
    try {
      const retv = await BlogAPI.fetchYoutubeList()
      setIsYoutubeRecord(retv)
    } catch (error) {
      console.log('news fail : ', error)
    }
  }

  useEffect(() => {
    fetchYoutubeData()
  }, [])

  return (
    <>
      <div className="hidden md:flex-row md:gap-8 md:overflow-x-scroll md:flex">
        {isYoutubeRecord.slice(0, 5).map((youtube) => (
          <YoutubeThumbnail img={youtube.youtubue_link} name={youtube.youtube_title} key={youtube.id} />
        ))}
      </div>
      <Button
        className="hidden mt-6 mx-auto md:flex"
        variant="outlined"
        onClick={() => onClickMore('/media/youtube')}
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
