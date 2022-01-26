import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";
import Footer from "../main/footer";

const Index = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-contain bg-top bg-norepeat bg-bottom bg-[url('/ButtonBannerScreens.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-24 bottom-36 absolute text-6xl text-center font-bold">
        ONTWERP UITLEG
      </h1>
    </div>

    {/* Uitleg schermen */}
    <div className="w-full flex">
      <div className="w-4/5 m-auto">
        {/* Stukje foto rechts */}
        <div className="w-full flex pt-4 pt-4">
          <div className="w-1/2 px-4">
            <h2 className="text-2xl font-bold">Persoonlijke verhalen</h2>
            <p>
              In de database zitten enorm veel mensen, en als je te ver weg
              kijkt dan lijken al deze mensen op data. Wij vonden het belangrijk
              dat de gebruiker begrijpt dat dit niet alleen stukken data zijn
              maar echte mensen die een geschiedenis hadden, daarom kan je van
              elke persoon die in de tentoonstelling zit kort lezen wie ze waren
              en een kort verhaal (als dat verhaal beshcikbaar is.) Alhoewel er
              niet van elke persoon veel informatie beschikbaar is was het toch
              belangrijk voor ons om te laten zien dat elke persoon wel een
              geschiedenis had.
            </p>
          </div>
          <div className="w-1/2 self-center">
            <Image
              className="w-24 drop-shadow-md"
              src="/Scherm1.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
        </div>

        {/* stukje foto links */}
        <div className="w-full flex pt-4">
          <div className="w-1/2 self-center">
            <Image
              className="w-24"
              src="/Scherm2.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
          <div className="w-1/2 px-6">
            <h2 className="text-2xl font-bold">Filteren</h2>
            <p>
              Omdat er zo veel data beschikbaar is moet er een manier zijn voor
              de gebruiker om informatie op te zoeken die belangrijk is voor
              hun. Er zijn vele kenmerken aan ieder persoon gebonden die veel
              informatie geven, daarom besloten wij dat deze informatie gebruikt
              zou kunnen worden om te kunnen zoeken en filteren.
              <br />
              <br />
              Via het filtersysteem kan de gebruiker op zekere kenmerken, zoals
              land van herkomst, leeftijd, datum van inschrijving, beroep en
              eigenaar filteren.
              <br />
              <br />
              Omdat er een een groot scala aan plaatsen is en dit als een van de
              hoofdfilters wordt gebruikt, kan de gebruiker deze apart
              selecteren.
            </p>
          </div>
        </div>

        {/* Stukje foto rechts */}
        <div className="w-full flex pt-4 px-4">
          <div className="w-1/2 pr-6">
            <h2 className="text-2xl font-bold">Van klein naar groot</h2>
            <p>
              Omdat er zo veel mensen in de tentoonstelling zijn moesten wij een
              oplossing bedenken hoe wij een volledig beeld laten zien. Niet
              alleen van de mensen in de tentoonstelling maar alle mensen die
              tot slaaf gemaakt waren. Hiervoor bedachten wij ieder persoon
              individueel af te beelden met een simpele vorm. Het concept begon
              met pixels, maar uiteindlijk zijn het abstracte iconen van mensen
              geworden, om duidelijk te maken dat het nog om mensen gaat. Als
              inspiratie bron hebben wij oude muurtekeningen gebruikt.
              <br />
              <br />
              De gebruiker kan in en uit zoomen. Met in inzoomen kan gekeken
              worden naar persoonlijke informatie over de tot slaaf gemaakten.
              Bij het uitzoomen krijgt de gebruiker een beeld van de hoeveelheid
              data.
              <br />
              <br />
              Als je steeds verder en verder uitzoomt worden uiteindelijk alle
              indivuele mensen bij elkaar toegevoegd als een groep, deze groep
              wordt dan vergeleken met de mensen in de database en dan
              vergeleken met het totaal aantal mensen dat tot slaaf gemaakt was.
              <br />
              <br />
              Bezoekers kunnen nu niet alleen persoonlijke verhalen bekijken,
              maar ze kunnen nu ook de complete schaal zien van geschiedenis die
              niet meer bestaat.
            </p>
          </div>
          <div className="w-1/2 self-center">
            <Image
              className="w-24"
              src="/Scherm3.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
        </div>

        {/* stukje foto links */}
        <div className="w-full flex pt-4">
          <div className="w-1/2 self-center">
            <Image
              className="w-24"
              src="/Scherm4.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
          <div className="w-1/2 px-6">
            <h2 className="text-2xl font-bold">
              Hoe zet je iedereen in beeld?
            </h2>
            <p>
              Omdat de databases die wij gebruiken heel veel mensen bevatten en
              wij zoveel mogelijk van hun willen afbeelden moesten wij een
              manier bedenken hoe zoveel stukken informatie kunnen laten zien
              terwijl wij nog steeds het geheel laten zien.
              <br />
              <br />
              Wij dachten dus eraan om beeld te creeren dat de gebruiker (bijna)
              alles kan zien, bijvoorbeeld door elke individuele persoon af te
              beelden als 1 object, dit zou kunnen als een vorm, abstracte
              tekening of als een pixel.
              <br />
              <br />
              Deze manier van afbeelden werkt niet alleen om specifieke mensen
              te laten zien maar ook het complete beeld van wat voor effect de
              slaven handel had op de geschidenis van zoveel mensen.
            </p>
          </div>
        </div>

        {/* Stukje foto rechts */}
        <div className="w-full flex pt-4 px-4">
          <div className="w-1/2 pr-6">
            <h2 className="text-2xl font-bold">
              Hoe zorg je voor de emotionele impact?
            </h2>
            <p>
              Vanaf het begin was dit al een onderdeel waar wij een oplossing
              voor wilden bedenken. Wij zijn vooral bezig geweest met de droge
              data, maar achter die data zit echte mensen.
              <br />
              <br />
              Alhoewel van sommige tot slaaf gemaakten er een echt verhaal, is
              dit een heel kleine groep, terwijl wij willen dat de bezoeker met
              elke tot slaaf gemaakte sympathie kan krijgen.
              <br />
              <br />
              Daarom besloten wij ons te richten op de missende data. Het
              aantaal slaaf gemaakte mensen bij onze databases is 165,000, maar
              het totaal aantal tot slaaf gemaakte mensen is 1,5 miljoen. Als
              dit visueel vergeleken wordt met elkaar kan dit een zeer grote
              impact hebben.
            </p>
          </div>
          <div className="w-1/2 self-center">
            <Image
              className="w-24"
              src="/Scherm5.png"
              alt="Picture of the author"
              width="1920"
              height="1080"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
