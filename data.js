// Wetsvoorstellen data
// Laatste update: maart 2026

const partijen = {
    TK: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "FvD", "CU", "SGP", "DENK", "Volt", "JA21", "BIJ1"],
    EK: ["BBB", "GL-PvdA", "VVD", "CDA", "PVV", "D66", "SP", "CU", "PvdD", "FvD", "SGP", "Volt", "50PLUS", "JA21", "OPNL"]
};

const wetsvoorstellen = [
    // ===== IN BEHANDELING =====
    {
        id: 1,
        titel: "Wet toekomst pensioenen (invoeringswet)",
        beschrijving: "Aanvullende regels voor de overgang naar het nieuwe pensioenstelsel, inclusief transitieplan-eisen voor pensioenfondsen. Deze wet regelt de precieze voorwaarden waaronder pensioenfondsen hun deelnemers moeten informeren over de gevolgen van de overstap, de manier waarop het invaren van bestaande rechten plaatsvindt, en welke bezwaarprocedures er openstaan.",
        kamer: "eerste-kamer",
        status: "behandeling",
        fase: "commissie",
        tags: ["Pensioenen", "Financiën"],
        datum: "2026-03-10",
        indiener: "Minister van Sociale Zaken en Werkgelegenheid",
        dossier: "36.067",
        tijdlijn: [
            { label: "Ingediend bij Tweede Kamer", datum: "2025-06-15", done: true },
            { label: "Aangenomen door Tweede Kamer", datum: "2025-11-20", done: true },
            { label: "Commissiebehandeling Eerste Kamer", datum: "2026-03-10", active: true },
            { label: "Plenair debat Eerste Kamer", datum: null },
            { label: "Stemming Eerste Kamer", datum: null }
        ]
    },
    {
        id: 2,
        titel: "Spreidingswet asielopvang",
        beschrijving: "Wet die gemeenten verplicht om asielzoekers op te vangen, met een verdeelsleutel op basis van inwoneraantal en sociaaleconomische factoren. De wet introduceert een systeem waarbij het COA, in overleg met provincies, opvangplekken over gemeenten verdeelt. Gemeenten die weigeren kunnen via een aanwijzing van de staatssecretaris gedwongen worden mee te werken.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "plenair",
        tags: ["Migratie", "Gemeenten"],
        datum: "2026-03-18",
        indiener: "Staatssecretaris van Justitie en Veiligheid",
        dossier: "36.333",
        tijdlijn: [
            { label: "Ingediend bij Tweede Kamer", datum: "2025-09-22", done: true },
            { label: "Commissiebehandeling", datum: "2026-01-15", done: true },
            { label: "Plenair debat", datum: "2026-03-18", active: true },
            { label: "Stemming Tweede Kamer", datum: null },
            { label: "Behandeling Eerste Kamer", datum: null }
        ]
    },
    {
        id: 3,
        titel: "Wet betaalbare huur",
        beschrijving: "Regulering van de middenhuur door het woningwaarderingsstelsel uit te breiden naar huurwoningen tot €1.100 per maand. Verhuurders worden verplicht om bij nieuwe huurcontracten het puntenstelsel toe te passen. De wet bevat ook een hardheidsclausule voor situaties waarin de huurprijs niet kostendekkend zou zijn voor de verhuurder.",
        kamer: "eerste-kamer",
        status: "behandeling",
        fase: "commissie",
        tags: ["Wonen", "Huur"],
        datum: "2026-02-25",
        indiener: "Minister van Binnenlandse Zaken en Koninkrijksrelaties",
        dossier: "36.496",
        tijdlijn: [
            { label: "Ingediend bij Tweede Kamer", datum: "2025-05-10", done: true },
            { label: "Aangenomen door Tweede Kamer", datum: "2025-12-19", done: true },
            { label: "Commissiebehandeling Eerste Kamer", datum: "2026-02-25", active: true },
            { label: "Plenair debat Eerste Kamer", datum: null }
        ]
    },
    {
        id: 4,
        titel: "Wet digitale overheidsdiensten",
        beschrijving: "Modernisering van digitale overheidscommunicatie en het recht op digitale toegang tot overheidsdiensten voor alle burgers. De wet verplicht overheden om binnen 3 jaar al hun diensten ook digitaal aan te bieden, met garanties voor burgers die niet digitaal vaardig zijn. Er komt een digitale identiteit die bij alle overheden bruikbaar is.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "commissie",
        tags: ["Digitalisering", "Overheid"],
        datum: "2026-03-05",
        indiener: "Staatssecretaris van Binnenlandse Zaken en Koninkrijksrelaties",
        dossier: "36.512",
        tijdlijn: [
            { label: "Ingediend bij Tweede Kamer", datum: "2025-11-01", done: true },
            { label: "Commissiebehandeling", datum: "2026-03-05", active: true },
            { label: "Plenair debat", datum: null },
            { label: "Stemming", datum: null }
        ]
    },
    {
        id: 5,
        titel: "Klimaatwet herziening 2026",
        beschrijving: "Aanscherping van de klimaatdoelen: CO₂-reductie van 60% in 2030 ten opzichte van 1990 en klimaatneutraliteit in 2045. De wet introduceert ook bindende tussendoelen per sector (industrie, mobiliteit, landbouw, gebouwde omgeving) en een onafhankelijke klimaatautoriteit die toeziet op naleving.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "plenair",
        tags: ["Klimaat", "Milieu"],
        datum: "2026-03-20",
        indiener: "Minister van Klimaat en Energie",
        dossier: "36.571",
        tijdlijn: [
            { label: "Ingediend bij Tweede Kamer", datum: "2025-10-15", done: true },
            { label: "Commissiebehandeling", datum: "2026-01-28", done: true },
            { label: "Plenair debat", datum: "2026-03-20", active: true },
            { label: "Stemming", datum: null }
        ]
    },
    {
        id: 6,
        titel: "Wet aanpak ondermijning",
        beschrijving: "Uitbreiding van bevoegdheden voor burgemeesters en het OM om ondermijnende criminaliteit tegen te gaan, inclusief preventief sluiten van panden. Burgemeesters krijgen de bevoegdheid om bij een ernstig vermoeden van ondermijnende activiteiten een pand voor maximaal 6 maanden te sluiten. Het OM kan sneller beslag leggen op verdacht vermogen.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "stemming",
        tags: ["Veiligheid", "Justitie"],
        datum: "2026-03-22",
        indiener: "Minister van Justitie en Veiligheid",
        dossier: "36.589",
        tijdlijn: [
            { label: "Ingediend bij Tweede Kamer", datum: "2025-08-30", done: true },
            { label: "Commissiebehandeling", datum: "2025-12-10", done: true },
            { label: "Plenair debat", datum: "2026-03-04", done: true },
            { label: "Stemming gepland", datum: "2026-03-25", active: true }
        ]
    },
    {
        id: 7,
        titel: "Wet bescherming klokkenluiders (wijziging)",
        beschrijving: "Versterking van de rechtsbescherming van klokkenluiders en uitbreiding naar ZZP'ers en vrijwilligers. Werkgevers worden verplicht een onafhankelijk meldpunt in te richten. Klokkenluiders krijgen recht op juridische bijstand op kosten van de overheid als zij benadeeld worden.",
        kamer: "eerste-kamer",
        status: "behandeling",
        fase: "plenair",
        tags: ["Arbeid", "Integriteit"],
        datum: "2026-03-15",
        indiener: "Minister van Binnenlandse Zaken en Koninkrijksrelaties",
        dossier: "36.401",
        tijdlijn: [
            { label: "Ingediend bij Tweede Kamer", datum: "2025-04-20", done: true },
            { label: "Aangenomen door Tweede Kamer", datum: "2025-10-08", done: true },
            { label: "Commissiebehandeling Eerste Kamer", datum: "2026-01-22", done: true },
            { label: "Plenair debat Eerste Kamer", datum: "2026-03-15", active: true }
        ]
    },

    // ===== AANGENOMEN (afgelopen 6 maanden) =====
    {
        id: 10,
        titel: "Wet hersteloperatie toeslagen",
        beschrijving: "Uitbreiding van de compensatieregeling voor gedupeerden van de toeslagenaffaire, inclusief versnelde afhandeling. De maximale compensatie wordt verhoogd naar €50.000 per gedupeerde. Er komt een speciale commissie die complexe gevallen binnen 3 maanden moet afhandelen. Kinderen van gedupeerden krijgen ook recht op immateriële schadevergoeding.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Toeslagen", "Compensatie"],
        datum: "2026-01-28",
        stemmenVoor: 128,
        stemmenTegen: 22,
        indiener: "Staatssecretaris van Financiën",
        dossier: "36.352",
        partijStemmen: {
            voor: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "PvdD", "CU", "SGP", "DENK", "Volt", "BIJ1"],
            tegen: ["FvD", "JA21"]
        }
    },
    {
        id: 11,
        titel: "Wet versterking regie volkshuisvesting",
        beschrijving: "Geeft het Rijk en provincies meer sturingsmogelijkheden voor woningbouw, met verplichte bouwprogramma's voor gemeenten. Provincies kunnen gemeenten die onvoldoende bouwen een aanwijzing geven. De wet schrijft voor dat minimaal 30% sociale huur en 30% middenhuur moet worden gebouwd in elk nieuwbouwproject van meer dan 50 woningen.",
        kamer: "eerste-kamer",
        status: "aangenomen",
        tags: ["Wonen", "Bouw"],
        datum: "2025-12-17",
        stemmenVoor: 52,
        stemmenTegen: 23,
        indiener: "Minister van Binnenlandse Zaken en Koninkrijksrelaties",
        dossier: "36.288",
        partijStemmen: {
            voor: ["GL-PvdA", "VVD", "CDA", "PVV", "D66", "CU", "Volt", "50PLUS", "OPNL"],
            tegen: ["BBB", "SP", "PvdD", "FvD", "SGP", "JA21"]
        }
    },
    {
        id: 12,
        titel: "Wet minimum CO₂-prijs industrie",
        beschrijving: "Invoering van een nationale minimumprijs voor CO₂-uitstoot door de industrie, als aanvulling op het Europese ETS-systeem. De minimumprijs wordt vastgesteld op €50 per ton CO₂ en stijgt jaarlijks met €5. Opbrengsten worden gestort in een klimaatfonds dat bedrijven helpt bij verduurzaming.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Klimaat", "Industrie"],
        datum: "2025-11-14",
        stemmenVoor: 89,
        stemmenTegen: 61,
        indiener: "Minister van Klimaat en Energie",
        dossier: "36.410",
        partijStemmen: {
            voor: ["GL-PvdA", "D66", "VVD", "NSC", "CDA", "PvdD", "CU", "Volt", "BIJ1"],
            tegen: ["PVV", "BBB", "SP", "FvD", "SGP", "DENK", "JA21"]
        }
    },
    {
        id: 13,
        titel: "Wet veiligheidsregio's modernisering",
        beschrijving: "Herziening van de organisatie van veiligheidsregio's en verbetering van de crisisbeheersing op regionaal niveau. De 25 veiligheidsregio's krijgen een wettelijke taak op het gebied van cyberveiligheid. Er komt een nationaal crisiscentrum dat de coördinatie tussen regio's verbetert bij grootschalige rampen.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Veiligheid", "Bestuur"],
        datum: "2026-02-06",
        stemmenVoor: 112,
        stemmenTegen: 38,
        indiener: "Minister van Justitie en Veiligheid",
        dossier: "36.445",
        partijStemmen: {
            voor: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "CU", "SGP", "Volt"],
            tegen: ["SP", "PvdD", "FvD", "DENK", "JA21", "BIJ1"]
        }
    },
    {
        id: 14,
        titel: "Wet langdurige zorg (wijziging)",
        beschrijving: "Hervorming van de Wlz met focus op persoonsvolgende bekostiging en meer keuzevrijheid voor cliënten in de langdurige zorg. Cliënten krijgen meer zeggenschap over welke zorgaanbieder zij kiezen. Het budget volgt de cliënt, waardoor aanbieders worden gestimuleerd om betere kwaliteit te leveren. De wachtlijstproblematiek wordt aangepakt met extra capaciteitseisen.",
        kamer: "eerste-kamer",
        status: "aangenomen",
        tags: ["Zorg", "Ouderen"],
        datum: "2025-10-22",
        stemmenVoor: 58,
        stemmenTegen: 17,
        indiener: "Minister van Volksgezondheid, Welzijn en Sport",
        dossier: "36.378",
        partijStemmen: {
            voor: ["BBB", "GL-PvdA", "VVD", "CDA", "PVV", "D66", "CU", "Volt", "50PLUS", "SGP", "OPNL"],
            tegen: ["SP", "PvdD", "FvD", "JA21"]
        }
    },
    {
        id: 15,
        titel: "Cyberveiligheidswet",
        beschrijving: "Implementatie van de EU NIS2-richtlijn in Nederlandse wetgeving, met strengere eisen voor digitale weerbaarheid van vitale sectoren. Organisaties in vitale sectoren (energie, zorg, financiën, transport) moeten voldoen aan minimale beveiligingsstandaarden en incidenten binnen 24 uur melden bij het NCSC.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Digitalisering", "Veiligheid"],
        datum: "2026-01-09",
        stemmenVoor: 134,
        stemmenTegen: 16,
        indiener: "Minister van Justitie en Veiligheid",
        dossier: "36.501",
        partijStemmen: {
            voor: ["PVV", "GL-PvdA", "VVD", "NSC", "D66", "BBB", "CDA", "SP", "CU", "SGP", "DENK", "Volt", "BIJ1"],
            tegen: ["PvdD", "FvD", "JA21"]
        }
    },
    {
        id: 16,
        titel: "Wet uitbreiding ouderschapsverlof",
        beschrijving: "Verlenging van het betaald ouderschapsverlof van 9 naar 12 weken tegen 70% van het dagloon. De wet geldt voor beide ouders en is bedoeld om de combinatie van werk en zorg makkelijker te maken. Werkgevers worden gecompenseerd via het UWV. De kosten worden geraamd op €400 miljoen per jaar.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Arbeid", "Gezin"],
        datum: "2025-12-05",
        stemmenVoor: 95,
        stemmenTegen: 55,
        indiener: "Minister van Sociale Zaken en Werkgelegenheid",
        dossier: "36.322",
        partijStemmen: {
            voor: ["GL-PvdA", "D66", "VVD", "NSC", "CDA", "PvdD", "CU", "DENK", "Volt", "BIJ1"],
            tegen: ["PVV", "BBB", "SP", "FvD", "SGP", "JA21"]
        }
    },

    // ===== VERWORPEN (afgelopen 6 maanden) =====
    {
        id: 20,
        titel: "Wet verplicht thuiswerken",
        beschrijving: "Voorstel om werknemers het recht te geven minimaal 50% van de werktijd thuis te werken, tenzij de aard van het werk dit niet toelaat. De werkgever zou moeten aantonen waarom thuiswerken niet mogelijk is. Het voorstel stuitte op weerstand vanwege vergaande inmenging in de arbeidsrelatie.",
        kamer: "tweede-kamer",
        status: "verworpen",
        tags: ["Arbeid", "Thuiswerken"],
        datum: "2026-02-13",
        stemmenVoor: 58,
        stemmenTegen: 92,
        indiener: "GroenLinks-PvdA (initiatiefwet)",
        dossier: "36.455",
        partijStemmen: {
            voor: ["GL-PvdA", "D66", "PvdD", "Volt", "BIJ1", "DENK"],
            tegen: ["PVV", "VVD", "NSC", "BBB", "CDA", "SP", "FvD", "CU", "SGP", "JA21"]
        }
    },
    {
        id: 21,
        titel: "Wet afschaffing eigen risico zorg",
        beschrijving: "Volledige afschaffing van het eigen risico in de zorgverzekering, gefinancierd door hogere inkomensafhankelijke premies. De kosten werden geschat op €4,5 miljard per jaar. Tegenstanders vreesden hogere zorgconsumptie en onbetaalbare premies voor hogere inkomens.",
        kamer: "tweede-kamer",
        status: "verworpen",
        tags: ["Zorg", "Financiën"],
        datum: "2025-11-28",
        stemmenVoor: 63,
        stemmenTegen: 87,
        indiener: "SP (initiatiefwet)",
        dossier: "36.199",
        partijStemmen: {
            voor: ["SP", "GL-PvdA", "PVV", "PvdD", "DENK", "BIJ1"],
            tegen: ["VVD", "NSC", "D66", "BBB", "CDA", "FvD", "CU", "SGP", "Volt", "JA21"]
        }
    },
    {
        id: 22,
        titel: "Wet verhoging AOW-leeftijd naar 69",
        beschrijving: "Versnelde verhoging van de AOW-leeftijd naar 69 jaar in 2030 vanwege stijgende levensverwachting en houdbaarheid van het stelsel. Het voorstel was impopulair bij vrijwel alle oppositiepartijen en ook binnen de coalitie was er onvoldoende steun.",
        kamer: "tweede-kamer",
        status: "verworpen",
        tags: ["Pensioenen", "AOW"],
        datum: "2026-01-16",
        stemmenVoor: 42,
        stemmenTegen: 108,
        indiener: "VVD (initiatiefwet)",
        dossier: "36.478",
        partijStemmen: {
            voor: ["VVD", "D66", "JA21"],
            tegen: ["PVV", "GL-PvdA", "NSC", "BBB", "CDA", "SP", "PvdD", "FvD", "CU", "SGP", "DENK", "Volt", "BIJ1"]
        }
    },
    {
        id: 23,
        titel: "Wet verbod gezichtsbedekkende kleding (uitbreiding)",
        beschrijving: "Uitbreiding van het verbod op gezichtsbedekkende kleding naar alle openbare ruimten, inclusief straten en parken. Critici noemden het een disproportionele inbreuk op de godsdienstvrijheid. De Raad van State adviseerde eerder al negatief over soortgelijke voorstellen.",
        kamer: "eerste-kamer",
        status: "verworpen",
        tags: ["Grondrechten", "Veiligheid"],
        datum: "2025-10-09",
        stemmenVoor: 28,
        stemmenTegen: 47,
        indiener: "PVV (initiatiefwet)",
        dossier: "36.102",
        partijStemmen: {
            voor: ["PVV", "BBB", "JA21", "FvD"],
            tegen: ["GL-PvdA", "VVD", "CDA", "D66", "SP", "CU", "PvdD", "SGP", "Volt", "50PLUS", "OPNL"]
        }
    },

    // ===== VERWACHT =====
    {
        id: 30,
        titel: "Wet regulering kunstmatige intelligentie",
        beschrijving: "Nederlandse implementatie van de EU AI Act met aanvullende nationale regels voor AI-toepassingen in de publieke sector. De wet zal verboden toepassingen definiëren (zoals social scoring), hoog-risico AI-systemen reguleren (zoals bij sollicitaties en rechtspraak), en een Nederlands AI-toezichthouder aanwijzen.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["AI", "Digitalisering"],
        datum: "2026-04",
        indiener: "Staatssecretaris van Binnenlandse Zaken en Koninkrijksrelaties",
        verwacht: "Q2 2026",
        dossier: "Nog niet toegekend"
    },
    {
        id: 31,
        titel: "Wet hervorming box 3",
        beschrijving: "Invoering van belasting op werkelijk rendement in box 3, ter vervanging van het huidige forfaitaire stelsel na arresten van de Hoge Raad. De belasting zal worden geheven over daadwerkelijke inkomsten uit sparen en beleggen, met een vrijstelling voor vermogens tot €57.000.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Belastingen", "Financiën"],
        datum: "2026-05",
        indiener: "Staatssecretaris van Financiën",
        verwacht: "Q2 2026",
        dossier: "Nog niet toegekend"
    },
    {
        id: 32,
        titel: "Wet brede basisbeurs hoger onderwijs",
        beschrijving: "Herinvoering van een brede basisbeurs voor alle studenten in het hoger onderwijs, inclusief compensatie voor de leenstelsel-generatie. Studenten ontvangen €300 per maand, uitwonend €450. De leenstelsel-generatie krijgt een eenmalige tegemoetkoming van €1.500.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Onderwijs", "Studenten"],
        datum: "2026-06",
        indiener: "Minister van Onderwijs, Cultuur en Wetenschap",
        verwacht: "Q3 2026",
        dossier: "Nog niet toegekend"
    },
    {
        id: 33,
        titel: "Wet duurzame landbouwtransitie",
        beschrijving: "Wettelijk kader voor de transitie naar kringlooplandbouw, met uitkoopregeling voor piekbelasters en steun voor omschakeling. De wet biedt boeren drie routes: extensiveren met subsidie, omschakelen naar biologisch, of vrijwillige uitkoop tegen marktwaarde plus 25%.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Landbouw", "Stikstof"],
        datum: "2026-05",
        indiener: "Minister van Landbouw, Natuur en Voedselkwaliteit",
        verwacht: "Q2 2026",
        dossier: "Nog niet toegekend"
    },
    {
        id: 34,
        titel: "Wet herziening Gemeentewet",
        beschrijving: "Modernisering van de Gemeentewet met meer bevoegdheden voor lokaal bestuur en versterking van de positie van de gemeenteraad. Gemeenten krijgen meer ruimte voor eigen belastingheffing en de mogelijkheid om lokale referenda bindend te maken.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Bestuur", "Gemeenten"],
        datum: "2026-07",
        indiener: "Minister van Binnenlandse Zaken en Koninkrijksrelaties",
        verwacht: "Q3 2026",
        dossier: "Nog niet toegekend"
    }
];
