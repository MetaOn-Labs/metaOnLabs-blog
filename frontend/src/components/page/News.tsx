import Carousel from "../Carousel/Carousel";

const News = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2024/11/21/16/18/ai-generated-9214142_1280.jpg'
  ]
  return (
    <main className="space-y-9 mb-20">
      <Carousel images={images} />
      <section className="xl:w-[1170px] lg:w-[970px] md:w-[750px] sm:w-[450px] mx-auto">
        <div className="flex">
          <div className="w-1/4 px-4 pb-4 lg:block md:hidden sm: hidden">
            <div>
              <div className="text-center px-4 pb-3 border-b border-gray-600">
                <h1 className="uppercase text-gray-600 m-0 text-xl">Menu</h1>
                <span className="text-gray-500 text-sm">GSAL</span>
              </div>
            </div>
            <div className="">
              <ul className="m-0 text-center list-none">
                <li className="text-xs pb-[1px] border-b border-gray-400 leading-8">
                  <a>menu1</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4">
            <div className="border-b border-gray-400">
              <h2 className="text-lg text-gray-600">
                <span className="inline-block h-4 w-4 rounded-full clear-both mr-2 border-4 border-gray-400"></span>
                News
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

export default News;
