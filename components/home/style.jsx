import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";

const Index = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-cover bg-project-donker bg-center bg-[url('/ButtonbannerStyling2.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-24 bottom-36 absolute text-6xl text-center font-bold">
        Style
      </h1>
    </div>

    {/* Uitleg style */}
    <div className="w-full my-8">
      {/* kleuren */}
      <div className="w-full flex">
        <div className="font-bold uppercase w-1/5 pb-16/100 mr-2 my-4 bg-project-donker">
          <p className="text-white text-center">#1B0A08</p>
        </div>
        <div className="font-bold uppercase w-1/5 pb-16/100 mx-2 my-4 bg-project-secondary">
          <p className="text-center">#FEFAF3</p>
        </div>
        <div className="font-bold uppercase w-1/5 pb-16/100 mx-2 my-4 bg-project-button">
          <p className="text-center">#BFAC4B</p>
        </div>
        <div className="font-bold uppercase w-1/5 pb-16/100 mx-2 my-4 bg-project-button2">
          <p className="text-white text-center">#331F19</p>
        </div>
        <div className="font-bold uppercase w-1/5 pb-16/100 ml-2 my-4 bg-project-button3">
          <p className="text-white text-center">#706C68</p>
        </div>
      </div>
      <div className="w-4/5 m-auto my-8">
        <div>
          <div className="font-Koh text-6xl pb-4 font-bold flex w-full">
            <p className="w-2/12">H1</p>
            <p className="w-8/12">Koh Santepheap bold</p>
            <p className="w-2/12">120px</p>
          </div>
        </div>
        <div>
          <div className="font-Koh text-h2 pb-4 font-bold flex w-full">
            <p className="w-2/12">H2</p>
            <p className="w-8/12">Koh Santepheap bold</p>
            <p className="w-2/12">42px</p>
          </div>
        </div>
        <div>
          <div className="font-Koh text-4xl pb-4 flex w-full">
            <p className="w-2/12">P</p>
            <p className="w-8/12">Koh Santepheap regular</p>
            <p className="w-2/12">36px</p>
          </div>
        </div>
        <div>
          <div className="font-Koh text-p pb-4 flex w-full">
            <p className="w-2/12">P</p>
            <p className="w-8/12">
              Koh Santepheap regular/<b>bold</b>
            </p>
            <p className="w-2/12">22px</p>
          </div>
        </div>
        <div>
          <div className="font-Koh text-p pb-4 font-bold flex w-full">
            <p className="w-2/12">Button</p>
            <p className="w-8/12 text-white">
              <span className="px-4 py-1 bg-project-button rounded-lg">
                Koh Santepheap bold
              </span>
            </p>
            <p className="w-2/12">36px</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
