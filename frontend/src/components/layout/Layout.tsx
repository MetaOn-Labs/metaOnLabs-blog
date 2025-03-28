export const SectionLayout = (props: {children: React.ReactNode}) => {
  return (
    <section className="layout">{props.children}</section>
  )
};

export const Layout = (props: {children: React.ReactNode}) => {
  return (
    <div>{props.children}</div>
  )
};