import { Button, Card, CardBody } from '@material-tailwind/react'

import cau from '../../assets/agency/cau.png'
import aitrics from '../../assets/agency/aitrics.png'
import kit from '../../assets/agency/kit.png'
import vuno from '../../assets/agency/vuno.png'
import yonse from '../../assets/agency/yonse.png'
import zoivision from '../../assets/agency/zoivision.png'

const CoworkerCard = ({ onClickMore }) => {
  
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-6">
          <Card
            shadow={true}
            color="transparent"
            className="px-10 w-80 h-48 justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardBody
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <img src={zoivision} alt="logo" className="w-full " />
            </CardBody>
          </Card>
          <Card
            shadow={true}
            className="px-10 w-80 h-48 justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <img src={vuno} alt="logo" className="w-full " />
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Card
            shadow={true}
            className="px-10 w-80 h-48 justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardBody
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <img src={cau} alt="logo" className="w-full " />
            </CardBody>
          </Card>
          <Card
            shadow={true}
            className="px-10 w-80 h-48 justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <img src={yonse} alt="logo" className="w-full " />
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Card
            shadow={true}
            className="px-10 w-80 h-48 justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <img src={kit} alt="logo" className="w-full " />
          </Card>
          <Card
            shadow={true}
            className="px-10 w-80 h-48 justify-center"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <img src={aitrics} alt="logo" className="w-full " />
          </Card>
        </div>
      </div>
      <Button
        className="mt-6 mx-auto flex"
        variant="outlined"
        onClick={() => onClickMore('/team#institution')}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        see all co-working
      </Button>
    </>
  )
}

export default CoworkerCard;