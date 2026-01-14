export type Locale = 'sv' | 'en'

export const defaultLocale: Locale = 'sv'

export const locales: Locale[] = ['sv', 'en']

export const translations = {
  sv: {
    // Navigation
    nav: {
      language: 'EN',
    },
    // Hero
    hero: {
      headline: 'Folkets Matsvinn',
      tagline: 'Från överflöd till omtanke',
      cta1: 'Stöd vårt arbete',
      cta2: 'Hämta mat hos oss',
      cta3: 'Skänk ditt överskott',
    },
    // Sections
    sections: {
      origin: {
        title: 'Hur det började',
        intro: 'Jag älskar att rädda mat',
        content: `För drygt 22 månader sedan fick jag en förfrågan om jag hade matsvinn att bli av med (jag jobbar med livsmedel). Ja, sa jag, och skickade ner pallvis till Malmö där de delade ut vidare till behövande. Jag följde deras Facebook sida och såg att han kommer få in massvis med kräm. Jag blev överlycklig, då min lilla dotter (2.5år då) älskade Kiviks frukt och bär BOWL (utgått ur sortimentet nu). Jag frågade honom om jag kunde få 1 kart, då jag inte kunde hitta den längre i butikerna. Då sa han: du kan få flera pallar om du vill om du kan dela ut? Det var då idén kom till: jag ska också hjälpa behövande.`,
      },
      impact: {
        title: 'Vad vi gör idag',
        content: `Idag, nästan två år senare, delar jag ut pallvis med mat till ukrainska människor, organisationer, sopkök, tempel, volontärer och behövande. Som max jag har delat ut är drygt 30 pallar i veckan.

Igår delade jag ut 18 pallar frukt och grönt, varav 12 försvann och kvar blev 6. Idag ska jag fortsätta att dela ut det sista och sen ska jag på två dagars julledighet med min lilla familj och på fredag ska jag rädda mat igen.

Jag får även matsvinn från Costco i Arninge som vi (min bror hjälper mig med logistiken) räddar tre dagar i veckan. Det är otroligt mycket fika, chips, frukt och grönt. Jag har även fått pall av läsglasögon från dem.`,
        stats: {
          pallets: '30+',
          palletsLabel: 'pallar/vecka',
          orgs: '20+',
          orgsLabel: 'organisationer',
          months: '22',
          monthsLabel: 'månader',
        },
      },
      partners: {
        title: 'Vilka vi samarbetar med',
        content: `Röda korset är stammisar hos mig. Matmissionen har hämtat hos mig också. Vid din sida hämtar hos mig 1-2 gånger i veckan. Jag har även kontakt med ukrainska folket. Olio volontärer hämtar också ofta hos mig.

Idag har jag kontakt med drygt 20 organisationer som hämtar mat hos mig. Men jag behöver fler att ge till. Det finns alldeles för mycket mat att rädda och organisationerna har oftast bara små personbilar.`,
      },
      challenge: {
        title: 'Varför vi behöver din hjälp',
        content: `Jag brinner för att hjälpa andra och jag vet att jag gör ett bra arbete för utsatta/behövande. Jag har varken instagram eller Facebook till min hobby. Allt sker via whatsapp mellan mig och organisationen. Så jag syns inte i sociala media (än).

Mitt arbete syns mycket bakom kulisserna och folk är enorm tacksamma. Jag har t.o.m fått erbjudande om att få en gala där all insamling går till mitt arbete. Tyvärr krävde de att jag måste göra matkassar till behövande mammor en gång i veckan. Detta har jag tyvärr inte tid för. Att packa i kassar. Jag samlar ihop pallvis med räddad mat, ställer fram, och alla tar vad dem vill. Ju mer de tar ju gladare blir jag.

Nu funderar jag på att öppna, antingen en stiftelse eller en ideell organisation, för att kunna fortsätta med min 'lilla hobby'.

Jag behöver också hjälp. Jag har mycket kontakter med leverantörer. Jag får sponsring av lokal. Tyvärr måste jag lägga ut bensin och lastbil att åka runt och rädda mat. Många vill inte köra ut matsvinn till oss. Och min plånbok bara skriker. Jag får inget stöd, varken av någon som hämtar mat eller myndighet. Vart vänder man sig för att få hjälp?`,
      },
      future: {
        title: 'Vad som händer härnäst',
        content: `Jag har t.o.m fått förfrågan att rädda matsvinn hos 7 olika Willys i Stockholm. Detta kommer ske tidigast runt mars 2026.

En fabrik i Örebro har över 50 pallar kladdkaka/morotskaka att skänka. Tyvärr har jag ingen möjlighet att hämta från så långt bort.

Inom kort kommer jag få saft. Jag väntar på att någon åkeri ska hjälpa mig att frakta till Årsta. Bara sisådär 30 pallar.

Mycket spännande saker händer. Men jag behöver hjälp.`,
      },
      cta: {
        title: 'Bli en del av lösningen',
        content: `Skicka ett pm till mig om du känner till någon organisation som kan rädda mat hos mig. Eller ring mig på 0737762818 om du har något att skänka.

Jag föredrar att ge till organisationer bara, då de kan ta stora volymer. Jag vill inte ha privat personer, som inte är i utsatt situation, som kommer till mig och plockar 1kg här och där. Bil är ett krav. Kan du rädda pallvis blir jag ännu gladare.`,
        phone: '0737762818',
      },
    },
    // Form
    form: {
      title: 'Kontakta oss',
      name: 'Namn',
      email: 'E-post',
      phone: 'Telefon',
      category: 'Kategori',
      categories: {
        donor: 'Donator',
        organization: 'Organisation',
        supplier: 'Leverantör',
        other: 'Annat',
      },
      message: 'Meddelande',
      submit: 'Skicka',
      sending: 'Skickar...',
      success: 'Tack! Vi återkommer snart.',
      error: 'Något gick fel. Försök igen.',
      back: 'Tillbaka',
    },
    // Footer
    footer: {
      copyright: '© 2026 Folkets Matsvinn. Alla rättigheter förbehållna.',
      phone: 'Telefon',
    },
  },
  en: {
    // Navigation
    nav: {
      language: 'SV',
    },
    // Hero
    hero: {
      headline: 'Folkets Matsvinn',
      tagline: 'From surplus to care',
      cta1: 'Support Our Work',
      cta2: 'Pick Up Food From Us',
      cta3: 'Donate Your Surplus',
    },
    // Sections
    sections: {
      origin: {
        title: 'How It Started',
        intro: 'I love rescuing food',
        content: `About 22 months ago, I received a request asking if I had any food waste to give away (I work with food products). I said yes and sent pallets down to Malmö where they distributed it to people in need. I followed their Facebook page and saw they were going to receive loads of cream products. I was overjoyed because my little daughter (2.5 years old at the time) loved Kiviks Fruit & Berry BOWL (now discontinued). I asked if I could get one carton since I couldn't find it in stores anymore. He said: "You can have several pallets if you want, if you can distribute them?" That's when the idea came: I'm going to help people in need too.`,
      },
      impact: {
        title: 'What We Do Today',
        content: `Today, almost two years later, I distribute pallets of food to Ukrainian refugees, organizations, soup kitchens, temples, volunteers, and those in need. At peak, I've distributed over 30 pallets in a single week.

Yesterday I distributed 18 pallets of fruits and vegetables. 12 were taken and 6 remain. Today I'll continue distributing the rest, then take a two-day Christmas break with my little family, and on Friday I'll be back rescuing food again.

I also receive food waste from Costco in Arninge, which my brother helps me with logistics for, three days a week. It's an incredible amount of snacks, chips, fruits, and vegetables. I've even received a pallet of reading glasses from them.`,
        stats: {
          pallets: '30+',
          palletsLabel: 'pallets/week',
          orgs: '20+',
          orgsLabel: 'organizations',
          months: '22',
          monthsLabel: 'months',
        },
      },
      partners: {
        title: 'Who We Work With',
        content: `The Red Cross are regulars with me. Matmissionen (Food Mission) has also picked up from me. Vid Din Sida (By Your Side) picks up 1-2 times per week. I also have contact with the Ukrainian community. OLIO volunteers also often pick up from me.

Today I'm in contact with over 20 organizations who pick up food from me. But I need more to give to. There's far too much food to rescue and the organizations usually only have small cars.`,
      },
      challenge: {
        title: 'Why We Need Your Help',
        content: `I'm passionate about helping others and I know I'm doing good work for vulnerable/needy people. I don't have Instagram or Facebook for this hobby. Everything happens via WhatsApp between me and the organizations. So I'm not visible on social media (yet).

My work happens mostly behind the scenes and people are enormously grateful. I've even been offered to have a gala where all proceeds go to my work. Unfortunately, they required me to make food bags for needy mothers once a week. I don't have time for that. Packing bags. I collect pallets of rescued food, set them out, and everyone takes what they want. The more they take, the happier I am.

Now I'm considering opening either a foundation or a nonprofit organization to continue my "little hobby."

I also need help. I have many contacts with suppliers. I get sponsorship for the location. Unfortunately, I have to pay for gas and the truck to drive around rescuing food. Many won't deliver food waste to us. And my wallet is screaming. I receive no support from anyone who picks up food or from authorities. Where does one turn for help?`,
      },
      future: {
        title: "What's Happening Next",
        content: `I've even received a request to rescue food waste from 7 different Willys supermarkets in Stockholm. This will happen starting around March 2026.

A factory in Örebro has over 50 pallets of chocolate cake/carrot cake to donate. Unfortunately, I have no way to pick up from that far away.

Soon I'll be receiving juice. I'm waiting for a trucking company to help me transport it to Årsta. Just about 30 pallets.

A lot of exciting things are happening. But I need help.`,
      },
      cta: {
        title: 'Be Part of the Solution',
        content: `Send me a message if you know any organization that can rescue food from me. Or call me at 0737762818 if you have something to donate.

I prefer giving to organizations only, as they can handle large volumes. I don't want private individuals who aren't in vulnerable situations coming to pick up 1kg here and there. A car is required. If you can rescue pallets, I'm even happier.`,
        phone: '0737762818',
      },
    },
    // Form
    form: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      category: 'Category',
      categories: {
        donor: 'Donor',
        organization: 'Organization',
        supplier: 'Supplier',
        other: 'Other',
      },
      message: 'Message',
      submit: 'Submit',
      sending: 'Sending...',
      success: 'Thank you! We will get back to you soon.',
      error: 'Something went wrong. Please try again.',
      back: 'Back',
    },
    // Footer
    footer: {
      copyright: '© 2026 Folkets Matsvinn. All rights reserved.',
      phone: 'Phone',
    },
  },
}

// Derive a more flexible type that works for both locales
export type Translations = {
  nav: { language: string }
  hero: {
    headline: string
    tagline: string
    cta1: string
    cta2: string
    cta3: string
  }
  sections: {
    origin: {
      title: string
      intro: string
      content: string
    }
    impact: {
      title: string
      content: string
      stats: {
        pallets: string
        palletsLabel: string
        orgs: string
        orgsLabel: string
        months: string
        monthsLabel: string
      }
    }
    partners: {
      title: string
      content: string
    }
    challenge: {
      title: string
      content: string
    }
    future: {
      title: string
      content: string
    }
    cta: {
      title: string
      content: string
      phone: string
    }
  }
  form: {
    title: string
    name: string
    email: string
    phone: string
    category: string
    categories: {
      donor: string
      organization: string
      supplier: string
      other: string
    }
    message: string
    submit: string
    sending: string
    success: string
    error: string
    back: string
  }
  footer: {
    copyright: string
    phone: string
  }
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] as Translations
}
