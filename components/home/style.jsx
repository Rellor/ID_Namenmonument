import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";
import Footer from "../main/footer";

const Index = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-cover bg-project-donker bg-center bg-[url('/ButtonbannerStyling2.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-24 bottom-36 absolute text-6xl text-center font-bold">
        Stijl
      </h1>
    </div>

    {/* Uitleg style */}
    <div className="w-full my-8">
      <div className="w-1/2 m-auto pb-4">
        <h2 className="text-2xl font-bold pb-4">Styling</h2>
        <p>
          Omdat <b>Ontmoet: het verleden</b> gaat over het verleden en verloren
          geschiedenis wouden wij dit gevoel reflecteren in ons ontwerp.
          <br />
          <br />
          Het kleuren palette is gebaseerd op aardelijke warme kleuren, dit
          geeft een gevoel van menselijkheid in het ontwerp.
          <br />
          <br />
          De interactieve elementen en mensen hebben een lichte kleur in
          contrast met de donkere achtergrond, hierdoor is duidelijke te zien
          welke delen de gebruiker kan bekijken en gebruiken.
          <br />
          <br />
          De enige onderdelen die geen kleur hebben zijn de visualisaties van
          het totale geschatte aantal van mensen dat to slaaf gemaakt was en
          waar geen infomratie meer beshcikbaar van is. DIt deel is zwart
          gemaakt omdat dit een heel belangrijk stuk informatie is in de context
          van ons ontwerp en de geschiedenis, het moet een zware impact geven op
          de gebruiker zodat duidelijk wordt gemaakt wat voor effect de slaven
          handel had op mensen en hun geschiedenis
        </p>
      </div>
      {/* kleuren */}
      <h2 className="w-1/2 text-2xl font-bold py-4 m-auto">Kleur</h2>
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
      <h2 className="w-1/2 text-2xl font-bold py-4 m-auto">typografie</h2>
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
    <Footer />
  </div>
);

export default Index;
