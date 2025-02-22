interface Props {
  title: string
  page: string
}
const PageTitle = (props: Props) => {
  const { title, page } = props
  return (
    <div className="border-b border-gray-400 mt-8 flex justify-between">
      <div className="flex">
        <span className="inline-block h-4 w-4 rounded-full clear-both mt-2 mr-2 border-4 border-gray-400"></span>
        <h2 className="text-lg text-gray-600 font-bold mr-3 uppercase pb-1">{title}</h2>
      </div>
      <span className="inline-block uppercase font-bold text-gray-400 ml-2 pl-2 text-lg">{page}</span>
    </div>
  )
}

export default PageTitle
