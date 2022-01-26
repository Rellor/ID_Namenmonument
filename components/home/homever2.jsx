import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";
import Footer from "../main/footer";

const Index2 = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-contain bg-right bg-no-repeat bg-project-donker bg-bottom bg-[url('/topbannerstatic.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-14 bottom-28 absolute text-4xl text-center font-bold">
        Ontmoet: het verleden
      </h1>
      <p className="text-white p-2 bg-tropen-rood left-14 bottom-14 absolute text-center font-medium">
        Lisa Roelvink - Aaron Smits - Bas de Roller
      </p>
    </div>

    {/* Intro project en uitleg */}
    <div className="w-full mt-4 flex">
      <div className="w-7/12 p-14 bg-tropen-rood">
        <h3 className="text-2xl text-white font-medium pb-5">Het project</h3>
        <p className="text-white">
          Het tropenmuseum vindt het belangrijk dat bezoekers van het museum
          meer ontdekken over diverse culturen van de wereld en de menselijke
          kwaliteiten daarvan. Het tropen museum wil ook bezoekers een
          openbaring geven over delen van onze geschiedenis en leven waar niet
          vaak over wordt gepraat.
          <br />
          <br />
          Een tentoonstelling die binnenkort gaat plaatsnemen bij het museum is
          een over het slaven verleden van de VOC handel, specifiek gaat het
          over alle mensen uit indonesie die tijdens deze periode tot slaaf zijn
          gemaakt en wat voor effect dat had op hun geschiedenis.
          <br />
          <br />
          Het tropenmuseum heeft aan ons gevraagd of wij een unieke interactieve
          ervaring kunnen creeren waarin bezoekers de geschiedenis van deze
          slaven kunnen bekijken en een openbaring krijgen over de impact die
          dit had op andere mensen.
          <br />
          <br />
          Voor dit project kregen wij als basis 2 databases over alle slaaf
          gemaakte mensen waar informatie bekend van was, gecombineerd was dit
          ongeveer 165,000, terwijl het aantal geschatten tot slaaf gemaakten
          van de voc 1,5 miljoen was.
          <br />
          <br />
          Dus met deze databases moesten wij erachter komen hoe wij hieruit een
          interactieve ervaring maken waarbij de gebruiker meer te weten kan
          komen over het verleden en verbinden met tot slaaf gemaakte mensen van
          vroeger.
        </p>
      </div>
      <div className="self-center w-5/12 pl-4">
        <div className="mr-auto">
          <video loop width="1920" height="1080" controls>
            <source src="/interactiefscherm.mp4" />
          </video>
          <div className="align-bottom flex mt-2">
            <video loop width="1920" height="1080" controls>
              <source src="/Eindprototype.mov" />
            </video>
          </div>
        </div>
      </div>
    </div>

    {/* buttons */}
    <div className="pt-4 flex">
      <Link href="/screens">
        <div className="bg-[url('/ButtonBannerScreens.png')] bg-contain bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Uitleg schermen
          </h3>
        </div>
      </Link>
      <Link href="/designgoals">
        <div className="bg-[url('/ButtonbannerGoals.png')] mx-4 bg-contain bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Design doelen
          </h3>
        </div>
      </Link>
      <Link href="/style">
        <div className="bg-[url('/ButtonBannerStyling.png')] bg-cover bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Styling
          </h3>
        </div>
      </Link>
    </div>

    {/* project uitleg */}
    <div className="w-full mt-4 flex">
      <div className="w-2/3 m-auto">
        <div className="w-4/5 m-auto">
          <h2 className="text-2xl font-medium pb-4">De oplossing</h2>
          <p>
            Wat wij uiteindelijk hebben gemaakt is Ontmoet: het verleden, een
            interactieve museums ervaring waarbij de gebruiker het slaven
            verleden van de voc kan ontdekken via persoonlijke verhalen van
            mensen die tot slaaf gemaakt waren.
            <br /> <br />
            Met Ontmoet: het verleden kan je de persoonlijke informatie van tot
            slaaf gemaakte mensen bekijken en de complete schaal van de slaven
            handel van de voc bekijken door in-en-uit te zoomen, filteren en de
            persoonlijke geschiedenis van deze mensen te lezen
          </p>

          <h2 className="text-2xl font-medium py-4">De flow</h2>
          <p>
            Ontmoet: het verleden is een
            <br />
            <br />
            Eerst begin je met een willekeurige naam te krijgen, hierdoor wordt
            je verbonden met een tot slaaf gemaakte.
            <br />
            <br />
            Over deze persoon lees je dan de informatie die ove hun beschikbaar
            is, zoals hoe oud ze waren, wanneer ze ingeschreven waren, hun
            sterfdatum, waare ze vandaan komen en andere informatie die relevant
            is, er wordt alleen zoveel informatie getoondt als dat er
            beschikbaar is van de persoon zelf, als er informatie mist wordt dat
            duidelijk getoondt.
            <br />
            <br />
            Vanuit hier kan de gebruiker gebaseerd op deze persoon verder
            exploreren op filters waarbij ze interessante informatie kunne
            ontdekken, bijvoorbeeld hou oud mensen uit zekere landen waren,
            welke beroepen ze hadden en op welke datum ze waren in geschreven.
          </p>
        </div>
      </div>
      <div className="pl-4 w-2/5">
        {/* links */}
        <div className="m-auto w-1/2 p-4 pt-24">
          <div className="w-full">
            <h2 className="text-2xl font-bold">Bronnen</h2>
            <p className="pt-4">
              Hier zijn alle links te vinden naar de locaties van onze schetsen,
              code en inspiratie.
            </p>
          </div>
          <div className="flex pt-4">
            <a
              className="px-2"
              href="https://github.com/Rellor/ID_Namenmonument"
            >
              <Image
                className="w-12"
                src="/github.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
              />
            </a>
            <a
              className="px-2"
              href="https://www.figma.com/file/OChXVlMBfiRqMGEc56rUUY/Namenmonument-werkbestand"
            >
              <Image
                className="w-12"
                src="/figma.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
              />
            </a>
            <a
              className="px-2"
              href="https://miro.com/app/board/uXjVObENVjc=/?invite_link_id=244899130024"
            >
              <Image
                className="w-12"
                src="/miro.png"
                alt="Picture of the author"
                width="1500"
                height="1500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Index2;
