import { Typography } from "@material-tailwind/react";

const DashboardTitle = ({ section, heading, children }) => {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
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