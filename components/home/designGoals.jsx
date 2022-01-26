import Image from "next/image";
import Link from "next/link";
import Header from "../main/nav";
import Footer from "../main/footer";

const Index = () => (
  <div className="App w-full m-auto p-4">
    <Header />
    {/* Titel en namen */}
    <div className="relative text-white h-128 w-full bg-contain bg-project-donker bg-right bg-no-repeat bg-bottom bg-[url('/ButtonbannerGoals.png')]">
      <h1 className="uppercase text-tropen-rood bg-white p-2 left-24 bottom-36 absolute text-6xl text-center font-bold">
        Design doelen en vragen
      </h1>
    </div>

    {/* Uitleg schermen */}
    <div className="w-full flex">
      <div className="w-4/5 m-auto my-8">
        {/* Stukje foto rechts */}
        <div className="w-2/3 m-auto pt-4">
          <h2 className="text-2xl font-bold">• Filteren</h2>
          <p className="mt-4">
            {" "}
            Omdat er zo veel data beschikbaar is moet er een manier zijn voor de
            gebruiker om informatie op te zoeken die belangrijk is voor hun. Er
            zijn vele kwaliteiten die aan elke persoon zijn gebonden die veel
            informatie geven, daarom besloten wij dat deze informatie gebruikt
            zou kunnen worden om te kunnen zoeken en filteren. Via het
            filtersysteem kan de gebruiker op zekere kwaliteiten, zoals land van
            herkomst, leeftijd, hun familie boom en andere filters sorteren.
          </p>

          <h2 className="text-2xl font-bold pt-4">• Van klein naar groot</h2>
          <p className="mt-4">
            {" "}
            Omdat er zo veel mensen in de tentoonstelling zijn moesten wij
            erachter hoe wij een volledig beeld laten zien, niet alleen van de
            mensen in de tentoonstelling maar alle mensen die tot slaaf gemaakt
            waren. hierdoor bedachten wij eraan om elke persoon individueel af
            te beelden met een simpele vorm, eerst dachten wij pixels maar
            uiteindlijk zijn het abstracte iconen van mensen, om duidelijk te
            maken dat het nog om mensen gaat.
            <br />
            <br />
            De gebruiker kan in en uit zoomen, gedetaileerd bekijken hoe
            iedereen heet of uitzoomen om een groot beeld te krijgen.
            <br />
            <br />
            Als je steeds verder en verder uitzoomt worden uiteindelijk alle
            indivuele mensen bij elkaar toegevoegd als een groep, deze groep
            wordt dan vergeleken met de mensen in de database en dan vergeleken
            met het totaal aantal mensen dat tot slaaf gemaakt was.
            <br />
            <br />
            Bezoekers kunnen nu niet alleen persoonlijke verhalen bekijken van
            andere maar e kunnen nu ook de complete schaal zien van geschiedenis
            die niet meer bestaat.
          </p>

          <h2 className="text-2xl font-bold pt-4">• Persoonlijke verhalen</h2>
          <p className="mt-4">
            In de database zitten enorm veel mensen, en als je te ver weg kijkt
            dan lijken al deze mensen op data. Wij vonden het belangrijk dat de
            gebruiker begrijpt dat dit niet alleen stukken data zijn maar echte
            mensen die een geschiedenis hadden, daarom kan je van elke persoon
            die in de tentoonstelling zit kort lezen wie ze waren en een kort
            verhaal (als dat verhaal beshcikbaar is.) Alhoewel er niet van elke
            persoon veel informatie beschikbaar is was het toch belangrijk voor
            ons om te laten zien dat elke persoon wel een geschiedenis had.
          </p>

          <h2 className="text-2xl font-bold pt-4">
            • Hoe zet je iedereen in beeld?
          </h2>
          <p className="mt-4">
            Omdat de databases die wij gebruiken heel veel mensen bevatten en
            wij zoveel mogelijk van hun willen afbeelden moesten wij een manier
            bedenken hoe zoveel stukken informatie kunnen laten zien terwijl wij
            nog steeds het geheel laten zien. Wij dachten dus eraan om beeld te
            creeren dat de gebruiker (bijna) alles kan zien, bijvoorbeeld door
            elke individuele persoon af te beelden als 1 object, dit zou kunnen
            als een vorm, abstracte tekening of als een pixel. Deze manier van
            afbeelden werkt niet alleen om specifieke mensen te laten zien maar
            ook het complete beeld van wat voor effect de slaven handel had op
            de geschidenis van zoveel mensen.
          </p>

          <h2 className="text-2xl font-bold pt-4">
            • Hoe geef je de emotionele impact?
          </h2>
          <p className="mt-4">
            In het begin was dit al een onderdeel waar wij een oplossing voor
            wouden bedenken, wij zijn vooral bezig met data maar achter die data
            zit echte mensen. Alhoewel van sommige tot slaaf gemaakten er een
            echt verhaal, is dit een heel kleine groep, terwijl wij willen dat
            de bezoeker met elke tot slaaf gemaakte sympathie kan krijgen.
            Daarom besloten wij ons te richten op de missende data. Het aantaal
            slaaf gemaakte mensen bij onze databases is 165,000, maar het totaal
            aantal tot slaaf gemaakte mensen is 1,5 miljoen. Als dit visueel
            vergeleken wordt met elkaar kan dit een zeer grote impact hebben.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
