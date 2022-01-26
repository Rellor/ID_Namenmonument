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
        <h3 className="text-2xl text-white font-bold pb-5">Het project</h3>
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
          <div className="mt-4 bg-project-donker">
            <Image
              src="/banner.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
        </div>
      </div>
    </div>

    {/* project uitleg */}
    <div className="w-full mt-8 flex">
      <div className="w-2/3 m-auto">
        <div className="w-full m-auto">
          <h2 className="text-2xl font-bold pb-4">De oplossing</h2>
          <div className="flex">
            <p>
              Wat wij uiteindelijk hebben gemaakt is{" "}
              <b>Ontmoet: het verleden</b>, een interactieve museum ervaring
              waarbij de gebruiker het verleden van de VOC kan ontdekken via
              persoonlijke verhalen van mensen die tot slaaf gemaakt waren.
            </p>
            <p>
              Met <b>Ontmoet: het verleden</b> kan je de persoonlijke informatie
              van tot slaaf gemaakte mensen bekijken en de complete schaal van
              de slaven handel van de VOC bekijken door in-en-uit te zoomen,
              filteren en de persoonlijke geschiedenis van deze mensen te lezen.
            </p>
          </div>

          <div className="align-bottom flex my-8">
            <video loop width="1920" height="1080" controls>
              <source src="/Eindprototype.mov" />
            </video>
          </div>

          <h2 className="text-2xl font-bold pb-4 mb-4">Uitleg concept</h2>
          <p>
            In de installatie kan er in en uit gezoomd worden op de data
            waardoor de verhoudingen van de hoeveelheid tot slaaf gemaakte
            mensen goed zichtbaar wordt.
            <br />
            <br />
            Eerst begin je met een willekeurige naam te krijgen, hierdoor wordt
            je verbonden met een tot slaaf gemaakte.
            <br />
            <br />
            Over deze persoon lees je dan de informatie die over hen beschikbaar
            is, zoals hoe oud ze waren, wanneer ze ingeschreven waren, hun
            inschrijfdatum, waar ze vandaan komen en andere informatie die
            relevant is. Er wordt alleen zoveel informatie getoondt als dat er
            beschikbaar is van de persoon zelf. Als er informatie mist wordt dat
            duidelijk getoondt.
            <br />
            <br />
            Vanuit hier kan de gebruiker gebaseerd op deze persoon verder
            exploreren door filters waarbij ze interessante informatie kunnen
            ontdekken. Bijvoorbeeld hoe oud mensen uit zekere landen waren,
            welke beroepen ze hadden en op welke datum ze waren in geschreven.
            <br />
            <br />
            Wanneer de installatie langer dan 1 minuut niet wordt gebruikt, gaat
            de installatie terug naar het startscherm met de titel en de
            verhalen.
          </p>

          <h2 className="text-2xl font-bold py-8 ">Toekomst beeld</h2>
          <p>
            Wij hopen dat de installatie zich blijft ontwikkelen doordat er meer
            data bekend wordt en kan worden ingevoerd. Doordat de onbekende data
            ook is gevisualiseerd is hier alle ruimte voor.
          </p>
        </div>
      </div>
    </div>

    {/* buttons */}
    <div className="pt-8 flex justify-center">
      <Link href="/screens">
        <div className="mr-2 bg-[url('/ButtonBannerScreens.png')] bg-contain bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Ontwerp uitleg
          </h3>
        </div>
      </Link>
      <Link href="/style">
        <div className="ml-2 bg-[url('/ButtonBannerStyling.png')] bg-cover bg-center bg-no-repeat w-1/3 h-60 bg-project-donker relative">
          <h3 className="absolute bottom-10 left-10 text-tropen-rood bg-white text-xl font-bold p-2 uppercase">
            Styling
          </h3>
        </div>
      </Link>
    </div>

    <div className="pt-8 justify-center">
      {/* links */}
      <div className="justify-center m-auto w-2/3 py-8 flex">
        <div className="w-1/3">
          <h2 className="text-2xl font-bold">Bronnen</h2>
          <p className="pt-4">
            Hier zijn alle links te vinden naar de locaties van onze schetsen,
            code en inspiratie.
          </p>
        </div>
        <div className="w-1/3 flex pt-4">
          <a
            className="px-2 w-1/4"
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
            className="px-2  w-1/4"
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
            className="px-2  w-1/4"
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
    <Footer />
  </div>
);

export default Index2;
