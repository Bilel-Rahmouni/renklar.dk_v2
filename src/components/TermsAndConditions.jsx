import React from "react";

// A functional component for each section to improve readability
const Section = ({ title, children }) => (
  <section className="mb-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div className="mt-2">{children}</div>
  </section>
);

const TermsAndConditions = () => {
  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">
          Renklar.dk I/S Vilkår og Betingelser
        </h1>
      </header>

      <Section title="1. Definitioner">
        <p>“Virksomheden” – betyder renklar.dk I/S.</p>
        <p>
          “Rengøringspersonale” – betyder den person eller virksomhed, der
          udfører rengøringsydelser på vegne af Virksomheden.
        </p>
        <p>
          “Kunde” – betyder den person, virksomhed eller selskab sammen med
          enhver datter- eller associeret virksomhed, som modtager
          rengøringsydelser fra Virksomheden.
        </p>
        <p>
          “Ydelse” – betyder de rengøringsydelser, der udføres på vegne af
          Virksomheden.
        </p>
        <p>
          “Rengøringsbesøg” – betyder besøget på Kundens serviceadresse af
          Rengøringspersonale for at udføre Ydelsen.
        </p>
      </Section>

      <Section title="2. Kontrakt">
        <p>
          2.1. Disse Vilkår og Betingelser repræsenterer en kontrakt mellem
          renklar.dk I/S og Kunden.
        </p>
        <p>
          2.2. Kunden accepterer, at enhver brug af Virksomhedens ydelser,
          herunder bestilling af ydelser via telefon eller e-mail, udgør Kundens
          accept af disse Vilkår og Betingelser.
        </p>
        <p>
          2.3. Medmindre andet er aftalt skriftligt, skal disse Vilkår og
          Betingelser have forrang over eventuelle andre forretningsbetingelser
          eller indkøbsbetingelser fremsat af Kunden.
        </p>
        <p>
          2.4. Ingen ændring eller modifikation af disse Vilkår og Betingelser
          er gyldig, medmindre den er godkendt skriftligt af en direktør i
          Virksomheden.
        </p>
        <p>
          2.5. Virksomheden opererer med en minimumsafgift på 1 time pr.
          rengøringsbesøg.
        </p>
      </Section>

      <Section title="3. Betaling">
        <p>
          3.1. Alt arbejde udført af Virksomheden på din anmodning, hvad enten
          det er eksperimentelt eller ej, vil blive faktureret i
          overensstemmelse hermed. Ethvert arbejde udført af Virksomheden på
          vegne af Kunden udføres på basis af, at Kunden har fuldt ud godkendt
          sådant arbejde, uanset om vi har modtaget en officiel ordre, forudsat
          at der er bevis for skriftlig eller mundtlig bekræftelse på at
          fortsætte, herunder brev, eller e-mail korrespondance mellem parterne.
        </p>
        <p>
          3.2. Som vederlag for udførelsen af rengøringsydelsen betaler du et
          fast gebyr pr. rengøringsbesøg. Gebyret pr. rengøringsbesøg fremgår af
          det skriftlige tilbud sendt af renklar.dk I/S – eller af det fornyede
          tilbud modtaget – i forbindelse med afsnit 7 om ændringer i
          rengøringsydelserne.
        </p>
        <p>
          3.3. Den første måned vil du modtage en faktura efter hvert
          rengøringsbesøg, og fra den anden måned beregnes betalingen for
          rengøringsydelsen periodisk fra den 16. i en måned til den 15. i den
          følgende måned og faktureres månedligt den 20. i opgørelsesmåneden. Du
          skal selv være opmærksom på, om du modtager fakturaen – nogle gange
          lander fakturaen i en spamfilter eller 'uønsket post'.
        </p>
        <p>3.4. Vi leverer tjenester på en engangs- og fastbasis.</p>
        <p>
          3.5. Ethvert ekstra arbejde, der anmodes om, og som ikke er dækket i
          den oprindelige brief, vil blive tilbudt separat og tilføjet til den
          oprindelige faktura. 15 dages varsel er påkrævet for at afbryde
          tjenesten.
        </p>
        <p>
          3.6. Alle priser for rengøringsydelser gennemgås hvert år og justeres
          i overensstemmelse med inflation eller andre rimelige omstændigheder.
        </p>
        <p>
          3.7. Alle priser er angivet i danske kroner (DKK). Ved bestilling af
          tjenesten via e-mail er alle gældende afgifter og moms inkluderet i de
          anførte priser.
        </p>
        <p>
          3.8. Fakturaer fra Virksomheden forfalder til betaling ved modtagelse,
          med den endelige betalingsfrist den 5. i den efterfølgende måned. Ved
          for sen betaling vil der blive sendt en rykkerskrivelse, sammen med et
          rykkergebyr på 65,- DKK pr. rykker. Hvis en faktura forbliver ubetalt
          efter tre rykkerskrivelser, vil sagen blive henvist til retslig
          inkasso uden yderligere varsel. Derudover vil der blive beregnet
          renter fra forfaldsdatoen, indtil fakturaen er betalt, til en sats
          svarende til den referencekurs, der gælder på ethvert tidspunkt, i
          henhold til loven om renter og andre faktorer relateret til forsinket
          betaling, med et årligt gebyr på 7%.
        </p>
      </Section>

      {/* Repeat similar <Section> components for other sections... */}

      <Section title="16. Vores Garanti">
        <p>
          16.1. Virksomheden har opbygget sin forretning og omdømme ved at
          tilbyde sine kunder den bedst mulige rengøringsservice. Ikke desto
          mindre forstår Virksomheden, at da dens medarbejdere er mennesker,
          begår de nogle gange fejl.
        </p>
        {/* Continue with the remaining content for section 16 */}
      </Section>
    </div>
  );
};

export default TermsAndConditions;
