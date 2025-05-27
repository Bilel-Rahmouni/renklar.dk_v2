import { facebook, instagram } from "../assets";
import house from "../assets/house.jpg";
import property from "../assets/property.jpg";
import rental from "../assets/rental.png";
import cleaningoffice from "../assets/cleaningoffice.png";
import commerce from "../assets/commerce.png"; 
import WashingCar from "../assets/Washing-a-Car.jpeg";
import window from "../assets/window.jpg";
import gardening from "../assets/gardening.jpg";

export const navigationPersonal = [
  {
    id: "0",
    title: "Vores service",
    url: "#services",
  },
  {
    id: "1",
    title: "Prissætning",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Om os",
    url: "#about",
  },
  {
    id: "3",
    title: "Kontakt os",
    url: "#contact",
  },
  {
    id: "4",
    title: "Blogs",
    url: "/blogs-personal",
  },
];
export const navigationBusiness = [
  {
    id: "0",
    title: "Vores service",
    url: "#services",
  },
  {
    id: "1",
    title: "Om os",
    url: "#about",
  },
  {
    id: "2",
    title: "Kontakt os",
    url: "#contact",
  },
  {
    id: "3",
    title: "Blogs",
    url: "/blogs-business",
  },
];
export const navigationCars = [
  {
    id: "0",
    title: "Vores service",
    url: "#services",
  },
  {
    id: "1",
    title: "Prissætning",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Om os",
    url: "#about",
  },
  {
    id: "3",
    title: "Kontakt os",
    url: "#contact",
  },
  {
    id: "4",
    title: "Blogs",
    url: "/blogs-cars",
  },    
];
export const pricingPersonal = [
  {
    id: "0",
    title: "Hjem",
    img: house,
    description: "Forvandler hjem til oaser med pletfrie rum.",
    price: "240",
    features: ["Hovedrengøringen."],
    bg: "#1877F2",
  },
  {
    id: "1",
    title: "Flytning",
    img: property,
    description: "Designet til at afhjælpe stressen ved at flytte.",
    price: "280",
    features: ["Hovedrengøringen."],
    bg: "#FF98E2",
  },
  // {
  //   id: "2",
  //   title: "Vinduespudsning",
  //   img: window,
  //   description: "Professionel vinduespolering for et krystalklart udsyn.",
  //   price: "150",
  //   features: ["Indvendig og udvendig rengøring", "Fjernelse af kalkaflejringer", "Polering af vinduesrammer"],
  //   bg: "#2ABBA7",
  // },
  // {
  //   id: "3",
  //   title: "Bilrengøring",
  //   img: WashingCar,
  //   description: "Komplet bilvask og polering for en skinnende bil.",
  //   price: "200",
  //   features: ["Udvendig vask", "Indvendig rengøring", "Polering og voks"],
  //   bg: "#F0284A",
  // },
  // {
  //   id: "4",
  //   title: "Havearbejde",
  //   img: gardening,
  //   description: "Professionel havearbejde for et smukt og velplejet udemiljø.",
  //   price: "180",
  //   features: [
  //     "Græsslåning og beskæring",
  //     "Fjernelse af ukrudt",
  //     "Plantning og vedligeholdelse"
  //   ],
  //   bg: "#6FCF97",
  // },
];
export const pricingBusiness = [
  {
    id: "0",
    title: "Erhverv",
    description: "Forhøjelse af brands med skinnende, indbydende rum.",
    price: "240",
    img: commerce,
    features: [
      "Fleksibel planlægning.",
      "Sanitetsmiljø.",
      "Konkurrencedygtige priser.",
    ],
    bg: "#2ABBA7",
  },
  {
    id: "1",
    title: "Kontor",
    img: cleaningoffice,
    description: "Forøg produktiviteten med rene arbejdsomgivelser.",
    price: null,
    features: ["Desinficer overflader.", "Skræddersyede rengøringsplaner."],
    bg: "#F0284A",
  },
  {
    id: "2",
    title: "Ejendom",
    img: rental,
    description: "Bekvem og stressfri løsning for et rent lejemål.",
    price: null,
    features: ["Hovedrengøringen.", "Vask.", "Oprydning."],
    bg: "#858DFF",
  },
  // {
  //   id: "3",
  //   title: "Bilflåde",
  //   img: WashingCar,
  //   description: "Professionel rengøring af firmabiler og flåder.",
  //   price: "200",
  //   features: [
  //     "Regelmæssig vask af firmabiler",
  //     "Indvendig og udvendig rengøring",
  //     "Polering og voks",
  //     "Fleksibel aftaleplan"
  //   ],
  //   bg: "#4A90E2",
  // },
  // {
  //   id: "4",
  //   title: "Havearbejde",
  //   img: gardening,
  //   description: "Professionel vedligeholdelse af grønne områder for virksomheder.",
  //   price: "180",
  //   features: [
  //     "Græsslåning og beskæring",
  //     "Fjernelse af ukrudt",
  //     "Plantning og vedligeholdelse"
  //   ],
  //   bg: "#6FCF97",
  // },
];  
export const pricingCars = [
  {
    id: "0",
    title: "Car Wash",
    img: WashingCar,
    description: "Bekvem og stressfri løsning for et rent lejemål.",
    price: "100",
    features: ["Hovedrengøringen.", "Vask.", "Oprydning."],
    bg: "#858DFF",
  },
];  
export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/renklar.dk/",
  },
  {
    id: "1",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61559722000605#",
  },
];
export const faq = [
  {
    id: "0",
    question:
      "Er det nødvendigt at forpligte sig til en langvarig servicekontrakt?",
    answer: `Slet ikke. Vores tjenester er skræddersyet til at 
      imødekomme dine specifikke behov og designet til at integrere problemfrit i din travle 
      tidsplan.Vi kræver ikke langsigtede kontrakter eller forpligtelser.
      Dog har du muligheden for at vælge en langvarig kontrakt, hvis du foretrækker det.`,
  },
  {
    id: "1",
    question:
      "Hvad er det mindste antal timer, der kræves for at fuldføre rengøringsopgaverne?",
    answer: "Vores mindste opgavevarighed er fastsat til 1 time.",
  },
  {
    id: "2",
    question: "Leverer I rengøringsmidlerne?",
    answer: `Det afhænger af dine behov. Vi anbefaler at vi bruge dine egne rengøringsmidler for 
      at sikre kendskab, personliggørelse og bekvemmelighed. Hvis 
      du har specifikke præferencer eller krav, er vi glade for at 
      imødekomme dem for at sikre din tilfredshed. Hvis det er nødvendigt,
    kan vi bruge vores rengøringsprodukter.`,
  },
  {
    id: "3",
    question: "Hvad er inkluderet i almindelig rengøring?",
    answer: `Køkken
      Aftørring af bordplader og overflader.
      Rengøring og desinficering af vasken.
     Aftørring af skabsfacader.
      Aftørring af borde og stole.
      Rengøring af komfur og emhætte.
      Fjernelse af synlig spindelvæv.
      Fejning og gulvvask.

      Badeværelse
      Skrubning og desinficering af toilettet.
      Rengøring og desinficering af vasken, hanen og bordpladen.
      Aftørring af spejle og andre glasoverflader.
      Rengøring og desinficering af bruser eller badekar.
      Fjernelse af sæberester og kalkaflejringer fra brusedøre.
      Rengøring og desinficering af badeværelsesgulvet, inklusive bag toilettet og omkring armaturer.
      Rengøring og desinficering af eventuelle ekstra overflader, såsom hylder eller skabe.
      Fjernelse af synlig spindelvæv.

      Stue: Støvning og aftørring af alle overflader, herunder møbler, hylder og elektronik.
      Støvsugning eller fejning af gulvene.
      Rengøring og polering af eventuelle glasoverflader som spejle og sofaborde.
      Fjernelse af synligt spindelvæv.

      Soveværelser: Aftørring af alle overflader, herunder møbler, natborde og lamper.
      Støvsugning eller fejning af gulvene.
      Rengøring af eventuelle spejle eller glasoverflader.
      Tømning og rengøring af eventuelle skraldespande.
      Fjernelse af synlig spindelvæv.
    
      Gang: Aftørring af eventuelle overflader.
      Støvsugning eller fejning af gulvene, herunder eventuelle tæpper eller løbere.
      Rengøring af eventuelle spejle eller glasoverflader.
      Fjernelse af synligt spindelvæv.`,
  },
  {
    id: "4",
    question: "Leverer I rengøringsartiklerne?",
    answer: `Det afhænger af dine behov. Vi kan bruge vores rengøringsprodukter, 
      men vi kan også bruge dine egne rengøringsartikler for at sikre fortrolighed,
      personalisering og bekvemmelighed. Hvis du har specifikke præferencer eller krav,
      er vi glade for at imødekomme dem for at sikre din tilfredshed.`,
  },
  {
    id: "5",
    question: "Hvad kan jeg se frem til under min første aftale?",
    answer: `Vi vil være ved din dør på det aftalte tidspunkt, 
      fuldt udstyret med alt nødvendigt rengøringsudstyr til en omfattende
      rengøringssession i dit hjem eller på dit kontor. (Vi kan også bruge dit udstyr.)
      Den første aftale tager typisk mest tid, da vi skal lære det nye miljø at kende
      og grundigt gå i gang med rengøringsprocessen.`,
  },
  {
    id: "6",
    question: "Er der noget, du skal forberede før vores ankomst?",
    answer: `Den optimale forberedelse indebærer at rydde op så meget som 
      muligt for at lette adgangen for rengøringspersonalet. Dette gør det
      muligt for dem at koncentrere sig om effektivt at fjerne støv
      og snavs. For eksempel vil det være en fordel at fjerne legetøj eller andre genstande fra gulvet på forhånd.`,
  },
  {
    id: "7",
    question:
      "Kan jeg forvente at have den samme rengøringsperson for hver besøg?",
    answer: `Absolut. Du kan regne med kontinuerligt med den samme rengøringsperson 
      eller team tildelt hver besøg. Vi forstår betydningen af at have en kendt
      og pålidelig person eller team til at håndtere dine rengøringsbehov. Uanset om det er en enkelt arbejder eller et par rengøringsfolk, vil du have med det samme team at
gøre hver gang. I tilfælde af sygdom eller uventede
      kriser vil vi kontakte dig med det samme, for at aftale nærmere.`,
  },
  {
    id: "8",
    question: "Er min tilstedeværelse påkrævet under rengøringsprocessen?",
    answer: `Nogle kunder vælger at planlægge rengøringsaftaler, mens de er 
      på arbejde eller beskæftiget andre steder i løbet af dagen, mens andre
      foretrækker at være til stede derhjemme under rengøringssessionen. Valget
      er helt op til dig. Vær sikker på, at uanset dine præferencer, er vi dedikerede
      til at levere førsteklasses rengøringsservice, der opfylder dine forventninger.`,
  },
  {
    id: "9",
    question: "Hvad er prisen for rengøringsservice?",
    answer: `Prisen afhænger altid af bygningens størrelse, tæppe størrelse, kæledyr og om du har brug for at vi rengøre ekstra genstande.
      Vores timesats er 195 DKK + moms. Ved månedlig rengøring eller engangsrengøring er timeprisen 243.75 kr. + moms.
      Gennem vores kampagne kan du få 30% rabat på den første rengøring.`,
  },
  {
    id: "10",
    question: "Hvordan kan jeg spare penge med servicefradraget?",
    answer: `Hvis du hyrer private rengøringstjenester, kan du potentielt spare betydeligt på dine rengøringsudgifter.

      Den nylige stigning i fradraget for rengøring er Giver markante ændringer og tilbyder en imponerende 26% reduktion af rengøringsomkostningerne.
      Fra januar 2024 stiger dette fradrag til 11.900 DKK om året for hver person over 18 år, der bor på adressen.
    
      For eksempel, hvis dit boligareal er på 70 kvadratmeter, kan en standard rengøringstjeneste koste
       dig 390 DKK (inkl. moms). Men med fradraget i spil, falder den pris til blot 288.6 DKK (inkl. moms).

      Dette kan give betydelige besparelser for dig samtidig med at du opretholder et skinnende rent bo miljø.

      Læs mere om fradraget her:https://skat.dk/borger/fradrag/servicefradrag/servicefradrag`,
  },
  {
    id: "11",
    question: "Hvad dækker servicefradraget?",
    answer: `Almindelig rengørings
      Vask og tørring af overflader i hjemmets
      Rengøring af toilet og bads
      Støvsugning, gulvvask og rengørings
      Opvask, vask og strygning af tøjs
      Rengøring eller vask af tæpper, gardiner, persienner osv.`,
  },
  {
    id: "12",
    question: "Hvem kan få servicefradraget?",
    answer: `Uanset om du er boligejer eller lejer din bolig, er du berettiget til dette fradrag. 
      Alt du behøver er at være registreret i folkeregistret på den specifikke adresse og være mindst 18 år gammel.
      Desuden behøver du ikke at overse eller godkende rengøringsprocessen.
      Ved at vælge en certificeret rengøringsservice som renklar.dk fjernes eventuelle administrative byrder eller behovet for papirarbejde.
      Hvis du deler din bolig med andre, såsom medstuderende i et fælles bofællesskab,
      kan I nemt dele fradraget mellem jer. Foretag blot betalingen elektronisk for at sikre korrekt dokumentation;
      kontant betaling er ikke berettiget. Det er afgørende, at alle samboende er officielt registrerede beboere på adressen for at kvalificere sig.`,
  },
  {
    id: "13",
    question: "Er det muligt at aflyse en planlagt rengøringsaftale?",
    answer: `Ja, 24 timer før den tidligere aftalte aftale. Hvis du aflyser aftalen 
      mindre end 24 timer før, vil vi opkræve 200 DKK + moms af prisen på den tidligere aftalte service.`,
  },
  {
    id: "14",
    question:
      "Hvordan kommer I ind i mit hjem til planlagte rengøringsaftaler?",
    answer: `Du kan give os en nøgle.
      Du kan vælge at efterlade en nøgle et bestemt sted.
      Du har mulighed for at dele alarmkoden med os.
      Du kan lade døren være ulåst på den planlagte rengøringsdag.`,
  },
  {
    id: "15",
    question: "Hvad hvis jeg ikke er tilfreds med min rengøring?",
    answer: `At sikre din tilfredshed er vores største prioritet. 
      Derfor har vi en tilfredshedsgaranti. Hvis du har klager, skal du blot kontakte os inden for 24 timer efter rengøringen.
      Vi vil hurtigst muligt arrangere et opfølgningsbesøg for at adressere eventuelle områder, der ikke levede op til dine forventninger.
      Denne opfølgende rengøringsservice tilbydes uden ekstra omkostninger.`,
  },
  {
    id: "16",
    question: "Hvornår og hvordan skal jeg betale for rengøringsservicen?",
    answer: `Hvis du bestiller rengøringsservice til tiden, sender vi dig fakturaen lige efter, 
      at servicen er udført. Hvis du har kontinuerlig service fra os, sender vi dig fakturaen efter hver rengøring i den første måned,
      og derefter sender vi fakturaer en gang om måneden. Du kan betale med bankoverførsel. Vi accepterer ikke kontanter.`,
  },
];
export const reviews = [
  {
    name: "Anna",
    rating: "5 ud af 5 stjerner",
    date: "20. aug. 2024",
    location: "DK",
    text: `En klar anbefaling…
          Jeg brugte renklar.dk til slutrengøring af mit køkken og badeværelse i forbindelse med en flytning. Nikolett vendte hurtigt tilbage på min henvendelse og de trådte til med kort varsel. Kommunikationen var god under hele forløbet og resultatet var skinnende flot til en meget fornuftig pris. Jeg vil helt klart anbefale at bruge renklar.dk!`,
  },
  {
    name: "Astrid",
    rating: "5 ud af 5 stjerner",
    date: "14. aug. 2024",
    location: "DK",
    text: `Fair price, effective work, friendly staff. Loveee and strong recommend!`,
  },
  {
    name: "Ida",
    rating: "5 ud af 5 stjerner",
    date: "25. jun. 2024",
    location: "DK",
    text: `The cleaning service is exceptional and cheap, which I think is the best option you can find in Aarhus. My room was really dirty and in a mess before the cleaning, but now the dirt was cleaned very well quickly. The staff was very friendly! Highly recommend!`,
  },
];
