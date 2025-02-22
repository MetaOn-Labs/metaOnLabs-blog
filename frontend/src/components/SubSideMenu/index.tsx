interface Props {
  title: string,
  menuList: {name: string, url: string}[]
}
const SubSideMenu = (props: Props) => {
  const {title, menuList} = props;

  return (
    <div className="fixed w-64 top-[150px] px-4 pb-4 lg:block md:hidden sm: hidden">
      <div>
        <div className="text-center px-4 pb-3 border-b border-gray-600">
          <h1 className="uppercase text-gray-600 m-0 text-xl font-bold">{title}</h1>
          <span className="text-gray-500 text-sm font-semibold">GSAL</span>
        </div>
      </div>
      <div className="">
        <ul className="m-0 text-center list-none">
          {menuList.map(menu => <li key={menu.name} className="text-xs pb-[1px] border-b border-gray-400 leading-8 font-semibold">
            <a href={menu.url}>{menu.name}</a>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default SubSideMenu
