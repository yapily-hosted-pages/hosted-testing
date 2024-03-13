const countries = {
  fr: {
    request: {
      language: "fr",
      location: "FR",
      institutionCountryCode: "FR",
    },
    charities: [
      {
        name: "UNICEF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-unicef.258749b.png",
        IBAN: "FR7617515900000852379628548",
      },
      {
        name: "Le Secours Populaire",
        logo: "https://demo.yapily.com/_nuxt/img/charity-fr-secours-populaire.5ab7b8d.png",
        IBAN: "FR4620041000012029874R02026",
      },
    ],
    text: {
      title:
        "Testez notre méthode de paiement en faisant un don de 1€ à une association caritative",
      subtitle:
        "Sélectionnez votre organisation caritative préférée ci-dessous pour lancer le processus de paiement et faire un don de 1€",
      details: "Voice les détails de votre paiement",
      success: "Merci! Votre paiment a bien été effectué",
      error: "Oops, une erreur est survenue",
    },
  },
  be: {
    request: {
      language: "fr",
      location: "BE",
      institutionCountryCode: "BE",
    },
    charities: [
      {
        name: "UNICEF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-unicef.258749b.png",
        IBAN: "BE31000000005555",
      },
    ],
    text: {
      title:
        "Testez notre méthode de paiement en faisant un don de 1€ à une association caritative",
      subtitle:
        "Sélectionnez votre organisation caritative préférée ci-dessous pour lancer le processus de paiement et faire un don de 1€",
      details: "Voice les détails de votre paiement",
      success: "Merci! Votre paiment a bien été effectué",
      error: "Oops, une erreur est survenue",
    },
  },
  es: {
    request: {
      language: "es",
      location: "ES",
      institutionCountryCode: "ES",
    },
    charities: [
      {
        name: "UNICEF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-unicef.258749b.png",
        IBAN: "ES6501822370410010033337",
      },
      {
        name: "WWF Espana",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-wwf.7421ff8.png",
        IBAN: "ES4200490001582910020010",
      },
      {
        name: "Red Cross Espana",
        logo: "https://demo.yapily.com/_nuxt/img/charity-es-cruz-roja.62aff5b.png",
        IBAN: "ES9201822370460010022227",
      },
    ],
    text: {
      title:
        "Pruebe nuestro sistema de pago donando 1 euro a una organización benéfica",
      subtitle:
        "Seleccione a continuación su organización benéfica favorita para iniciar el pago de pago y proceder con una donación",
      details: "Sus datos de pago",
      success: "Gracias. Su pago se ha realizado correctamente",
      error: "Oops, algo salió mal...",
    },
  },
  de: {
    request: {
      language: "de",
      location: "DE",
      institutionCountryCode: "DE",
    },
    charities: [
      {
        name: "UNICEF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-unicef.258749b.png",
        IBAN: "DE57370205000000300000",
      },
      {
        name: "WWF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-wwf.7421ff8.png",
        IBAN: "DE06550205000222222222",
      },
      {
        name: "DRK e.V.",
        logo: "https://demo.yapily.com/_nuxt/img/charity-de-drk.729f84d.png",
        IBAN: "DE63370205000005023307",
      },
    ],
    text: {
      title:
        "Testen Sie unsere Payment Journey, indem Sie 1 € an eine Wohltätigkeitsorganisation spenden",
      subtitle:
        "Wählen Sie unten Ihre bevorzugte Wohltätigkeitsorganisation aus, um die Zahlung einzuleiten und mit einer Spende von 1 € fortzufahren",
      details: "Ihre Zahlungsdaten",
      success: "Dankeschön! Ihre Zahlung war erfolgreich",
      error: "Ups, da ist etwas schief gelaufen...",
    },
  },
  nl: {
    request: {
      language: "nl",
      location: "NL",
      institutionCountryCode: "NL",
    },
    charities: [
      {
        name: "UNICEF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-unicef.258749b.png",
        IBAN: "NL86INGB0000000121",
      },
      {
        name: "WWF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-wwf.7421ff8.png",
        IBAN: "NL31RABO0300000030",
      },
    ],
    text: {
      title: "Test onze betaalreis door €1 te doneren aan een goed doel",
      subtitle:
        "Selecteer hieronder je favoriete goede doel om te beginnen met betalen reis en ga verder met een €1 donatie",
      details: "Uw betalingsgegevens",
      success: "Hartelijk dank! Je betaling is gelukt",
      error: "Oeps, er ging iets mis...",
    },
  },
  at: {
    request: {
      language: "de",
      location: "AT",
      institutionCountryCode: "AT",
    },
    charities: [
      {
        name: "UNICEF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-unicef.258749b.png",
        IBAN: " AT466000000001516500",
      },
      {
        name: "WWF",
        logo: "https://demo.yapily.com/_nuxt/img/charity-generic-wwf.7421ff8.png",
        IBAN: "AT262011129112683901",
      },
    ],
    text: {
      title:
        "Testen Sie unsere Payment Journey, indem Sie 1 € an eine Wohltätigkeitsorganisation spenden",
      subtitle:
        "Wählen Sie unten Ihre bevorzugte Wohltätigkeitsorganisation aus, um die Zahlung einzuleiten und mit einer Spende von 1 € fortzufahren",
      details: "Ihre Zahlungsdaten",
      success: "Dankeschön! Ihre Zahlung war erfolgreich",
      error: "Ups, da ist etwas schief gelaufen...",
    },
  },
};

function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

function createDataRequest({ language, location, institutionCountryCode }) {
  fetch("https://demo-backend.yapily.com/hosted/consent-requests", {
    method: "POST",
    body: JSON.stringify({
      institutionIdentifiers: {
        institutionCountryCode,
      },
      userSettings: { language, location },
      redirectUrl: "https://display-parameters.com/",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "access-control-allow-origin": "*",
    },
  })
    .then((response) => response.json())
    .then(
      (json) =>
        (window.location.href = `${json.data.hostedUrl}&merchantId=Green`)
    );
}

function payByBank({ language, location, institutionCountryCode }, name, iban) {
  fetch("https://demo-backend.yapily.com/hosted/payment-requests", {
    method: "POST",
    body: JSON.stringify({
      userSettings: {
        language,
        location,
      },
      institutionIdentifiers: {
        institutionCountryCode,
      },
      redirectUrl: "https://display-parameters.com/",
      paymentRequestDetails: {
        paymentIdempotencyId: `${uniqueID()}`,
        amountDetails: {
          amountToPay: "1",
          currency: "EUR",
        },
        reference: "Donation",
        type: "DOMESTIC_PAYMENT",
        payee: {
          name: name,
          accountIdentifications: [
            {
              type: "IBAN",
              identification: iban,
            },
          ],
        },
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "access-control-allow-origin": "*",
    },
  })
    .then((response) => response.json())
    .then(
      (json) =>
        (window.location.href = `${json.data.hostedUrl}&merchantId=Green`)
    );
}
