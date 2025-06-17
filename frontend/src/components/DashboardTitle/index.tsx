import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

interface Props {
  section: string,
  heading: string,
  children?: ReactNode
}

const DashboardTitle = ({ section, heading, children }: Props) => {
  return (
    <div className="mx-auto w-full px-4 text-center">
      <Typography variant="lead" className="font-bold" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{section}</Typography>
      <Typography variant="h2" color="blue-gray" className="my-3 font-extrabold" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {children}
      </Typography>
    </div>
  );
}

export default DashboardTitle