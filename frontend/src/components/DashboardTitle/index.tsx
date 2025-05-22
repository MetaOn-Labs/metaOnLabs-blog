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
      <Typography variant="lead" className="font-bold">{section}</Typography>
      <Typography variant="h2" color="blue-gray" className="my-3 font-extrabold">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
}

export default DashboardTitle