// Wetsvoorstellen data
// Laatste update: maart 2026

const wetsvoorstellen = [
    // ===== IN BEHANDELING =====
    {
        id: 1,
        titel: "Wet toekomst pensioenen (invoeringswet)",
        beschrijving: "Aanvullende regels voor de overgang naar het nieuwe pensioenstelsel, inclusief transitieplan-eisen voor pensioenfondsen.",
        kamer: "eerste-kamer",
        status: "behandeling",
        fase: "commissie",
        tags: ["Pensioenen", "Financiën"],
        datum: "2026-03-10",
        indiener: "Minister van SZW"
    },
    {
        id: 2,
        titel: "Spreidingswet asielopvang",
        beschrijving: "Wet die gemeenten verplicht om asielzoekers op te vangen, met een verdeelsleutel op basis van inwoneraantal en sociaaleconomische factoren.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "plenair",
        tags: ["Migratie", "Gemeenten"],
        datum: "2026-03-18",
        indiener: "Staatssecretaris van J&V"
    },
    {
        id: 3,
        titel: "Wet betaalbare huur",
        beschrijving: "Regulering van de middenhuur door het woningwaarderingsstelsel uit te breiden naar huurwoningen tot €1.100 per maand.",
        kamer: "eerste-kamer",
        status: "behandeling",
        fase: "commissie",
        tags: ["Wonen", "Huur"],
        datum: "2026-02-25",
        indiener: "Minister van BZK"
    },
    {
        id: 4,
        titel: "Wet digitale overheidsdiensten",
        beschrijving: "Modernisering van digitale overheidscommunicatie en het recht op digitale toegang tot overheidsdiensten voor alle burgers.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "commissie",
        tags: ["Digitalisering", "Overheid"],
        datum: "2026-03-05",
        indiener: "Staatssecretaris van BZK"
    },
    {
        id: 5,
        titel: "Klimaatwet herziening 2026",
        beschrijving: "Aanscherping van de klimaatdoelen: CO₂-reductie van 60% in 2030 ten opzichte van 1990 en klimaatneutraliteit in 2045.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "plenair",
        tags: ["Klimaat", "Milieu"],
        datum: "2026-03-20",
        indiener: "Minister van KE"
    },
    {
        id: 6,
        titel: "Wet aanpak ondermijning",
        beschrijving: "Uitbreiding van bevoegdheden voor burgemeesters en het OM om ondermijnende criminaliteit tegen te gaan, inclusief preventief sluiten van panden.",
        kamer: "tweede-kamer",
        status: "behandeling",
        fase: "stemming",
        tags: ["Veiligheid", "Justitie"],
        datum: "2026-03-22",
        indiener: "Minister van J&V"
    },
    {
        id: 7,
        titel: "Wet bescherming klokkenluiders (wijziging)",
        beschrijving: "Versterking van de rechtsbescherming van klokkenluiders en uitbreiding naar ZZP'ers en vrijwilligers.",
        kamer: "eerste-kamer",
        status: "behandeling",
        fase: "plenair",
        tags: ["Arbeid", "Integriteit"],
        datum: "2026-03-15",
        indiener: "Minister van BZK"
    },

    // ===== AANGENOMEN (afgelopen 6 maanden) =====
    {
        id: 10,
        titel: "Wet hersteloperatie toeslagen",
        beschrijving: "Uitbreiding van de compensatieregeling voor gedupeerden van de toeslagenaffaire, inclusief versnelde afhandeling.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Toeslagen", "Compensatie"],
        datum: "2026-01-28",
        stemmenVoor: 128,
        stemmenTegen: 22,
        indiener: "Staatssecretaris van Financiën"
    },
    {
        id: 11,
        titel: "Wet versterking regie volkshuisvesting",
        beschrijving: "Geeft het Rijk en provincies meer sturingsmogelijkheden voor woningbouw, met verplichte bouwprogramma's voor gemeenten.",
        kamer: "eerste-kamer",
        status: "aangenomen",
        tags: ["Wonen", "Bouw"],
        datum: "2025-12-17",
        stemmenVoor: 52,
        stemmenTegen: 23,
        indiener: "Minister van BZK"
    },
    {
        id: 12,
        titel: "Wet minimum CO₂-prijs industrie",
        beschrijving: "Invoering van een nationale minimumprijs voor CO₂-uitstoot door de industrie, als aanvulling op het Europese ETS-systeem.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Klimaat", "Industrie"],
        datum: "2025-11-14",
        stemmenVoor: 89,
        stemmenTegen: 61,
        indiener: "Minister van KE"
    },
    {
        id: 13,
        titel: "Wet veiligheidsregio's modernisering",
        beschrijving: "Herziening van de organisatie van veiligheidsregio's en verbetering van de crisisbeheersing op regionaal niveau.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Veiligheid", "Bestuur"],
        datum: "2026-02-06",
        stemmenVoor: 112,
        stemmenTegen: 38,
        indiener: "Minister van J&V"
    },
    {
        id: 14,
        titel: "Wet langdurige zorg (wijziging)",
        beschrijving: "Hervorming van de Wlz met focus op persoonsvolgende bekostiging en meer keuzevrijheid voor cliënten in de langdurige zorg.",
        kamer: "eerste-kamer",
        status: "aangenomen",
        tags: ["Zorg", "Ouderen"],
        datum: "2025-10-22",
        stemmenVoor: 58,
        stemmenTegen: 17,
        indiener: "Minister van VWS"
    },
    {
        id: 15,
        titel: "Cyberveiligheidswet",
        beschrijving: "Implementatie van de EU NIS2-richtlijn in Nederlandse wetgeving, met strengere eisen voor digitale weerbaarheid van vitale sectoren.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Digitalisering", "Veiligheid"],
        datum: "2026-01-09",
        stemmenVoor: 134,
        stemmenTegen: 16,
        indiener: "Minister van J&V"
    },
    {
        id: 16,
        titel: "Wet uitbreiding ouderschapsverlof",
        beschrijving: "Verlenging van het betaald ouderschapsverlof van 9 naar 12 weken tegen 70% van het dagloon.",
        kamer: "tweede-kamer",
        status: "aangenomen",
        tags: ["Arbeid", "Gezin"],
        datum: "2025-12-05",
        stemmenVoor: 95,
        stemmenTegen: 55,
        indiener: "Minister van SZW"
    },

    // ===== VERWORPEN (afgelopen 6 maanden) =====
    {
        id: 20,
        titel: "Wet verplicht thuiswerken",
        beschrijving: "Voorstel om werknemers het recht te geven minimaal 50% van de werktijd thuis te werken, tenzij de aard van het werk dit niet toelaat.",
        kamer: "tweede-kamer",
        status: "verworpen",
        tags: ["Arbeid", "Thuiswerken"],
        datum: "2026-02-13",
        stemmenVoor: 58,
        stemmenTegen: 92,
        indiener: "GroenLinks-PvdA"
    },
    {
        id: 21,
        titel: "Wet afschaffing eigen risico zorg",
        beschrijving: "Volledige afschaffing van het eigen risico in de zorgverzekering, gefinancierd door hogere inkomensafhankelijke premies.",
        kamer: "tweede-kamer",
        status: "verworpen",
        tags: ["Zorg", "Financiën"],
        datum: "2025-11-28",
        stemmenVoor: 63,
        stemmenTegen: 87,
        indiener: "SP"
    },
    {
        id: 22,
        titel: "Wet verhoging AOW-leeftijd naar 69",
        beschrijving: "Versnelde verhoging van de AOW-leeftijd naar 69 jaar in 2030 vanwege stijgende levensverwachting en houdbaarheid van het stelsel.",
        kamer: "tweede-kamer",
        status: "verworpen",
        tags: ["Pensioenen", "AOW"],
        datum: "2026-01-16",
        stemmenVoor: 42,
        stemmenTegen: 108,
        indiener: "VVD"
    },
    {
        id: 23,
        titel: "Wet verbod gezichtsbedekkende kleding (uitbreiding)",
        beschrijving: "Uitbreiding van het verbod op gezichtsbedekkende kleding naar alle openbare ruimten, inclusief straten en parken.",
        kamer: "eerste-kamer",
        status: "verworpen",
        tags: ["Grondrechten", "Veiligheid"],
        datum: "2025-10-09",
        stemmenVoor: 28,
        stemmenTegen: 47,
        indiener: "PVV"
    },

    // ===== VERWACHT =====
    {
        id: 30,
        titel: "Wet regulering kunstmatige intelligentie",
        beschrijving: "Nederlandse implementatie van de EU AI Act met aanvullende nationale regels voor AI-toepassingen in de publieke sector.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["AI", "Digitalisering"],
        datum: "2026-04",
        indiener: "Staatssecretaris van BZK",
        verwacht: "Q2 2026"
    },
    {
        id: 31,
        titel: "Wet hervorming box 3",
        beschrijving: "Invoering van belasting op werkelijk rendement in box 3, ter vervanging van het huidige forfaitaire stelsel na arresten van de Hoge Raad.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Belastingen", "Financiën"],
        datum: "2026-05",
        indiener: "Staatssecretaris van Financiën",
        verwacht: "Q2 2026"
    },
    {
        id: 32,
        titel: "Wet brede basisbeurs hoger onderwijs",
        beschrijving: "Herinvoering van een brede basisbeurs voor alle studenten in het hoger onderwijs, inclusief compensatie voor leenstelsel-generatie.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Onderwijs", "Studenten"],
        datum: "2026-06",
        indiener: "Minister van OCW",
        verwacht: "Q3 2026"
    },
    {
        id: 33,
        titel: "Wet duurzame landbouwtransitie",
        beschrijving: "Wettelijk kader voor de transitie naar kringlooplandbouw, met uitkoopregeling voor piekbelasters en steun voor omschakeling.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Landbouw", "Stikstof"],
        datum: "2026-05",
        indiener: "Minister van LNV",
        verwacht: "Q2 2026"
    },
    {
        id: 34,
        titel: "Wet herziening Gemeentewet",
        beschrijving: "Modernisering van de Gemeentewet met meer bevoegdheden voor lokaal bestuur en versterking van de positie van de gemeenteraad.",
        kamer: "tweede-kamer",
        status: "verwacht",
        tags: ["Bestuur", "Gemeenten"],
        datum: "2026-07",
        indiener: "Minister van BZK",
        verwacht: "Q3 2026"
    }
];
