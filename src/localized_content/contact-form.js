import React from "react"

const contactForm = {
  en: {
    validation_error_main: {
      title: "There is a problem",
      list_heading: "Errors were found on this page",
      name_error: "First and last name must be valid",
      dob_error: "Date of birth must be valid ",
      postal_code_error: "Postal code must be valid",
      phone_number_error: "Phone number must be valid",
      email_error: "Email must be valid",
    },
    submit_error_server: {
      title: "Server Issue",
      content: "We’re sorry, our servers may be temporarily overloaded.",
    },
    form: {
      heading: "Sign up for an optional follow-up call about this self-assessment result",
      instructions: (
        <>
          <p>Enter your contact information and details below to discuss this self-assessment result and next steps.</p>

          <p><strong>This is optional. You do not need to fill out your details every time you take a self-assessment.</strong></p>

          <p>
            A volunteer representing the Ministry of Health will call you over the phone in the next few
            days to:
          </p>
          <ul>
            <li>review your current health and symptoms</li>
            <li>give advice on self-isolation or self-monitoring</li>
            <li>provide guidance on how to protect the health of other people</li>
          </ul>
          <p>
            <strong>Note:</strong> no medical advice will be given.
          </p>
          <p>
            The ministry may use some of your information to better understand and inform measures to stop the spread of
            COVID-19. The data will be made anonymous.
          </p>
          <p>
            <strong>All fields are mandatory unless marked optional.</strong>
          </p>
        </>
      ),
      name: {
        heading: "Name",
        first_name: {
          label: "First name",
          empty_message: "Enter your first name.",
          invalid_message:
            "Enter your first name as it appears on government identification. Make sure there are no spaces, dashes, or periods when you first start typing.",
        },
        last_name: {
          label: "Last name",
          empty_message: "Enter your last name.",
          invalid_message:
            "Enter your last name as it appears on government identification. Make sure there are no spaces, dashes, or periods when you first start typing.",
        },
      },
      dob: {
        heading: "Date of birth",
        accordion_heading: "Why am I being asked this?",
        accordion_content:
          "This is to help the volunteer confirm it is you when they call on the phone.",
        day: {
          label: "Day (dd)",
          empty_message: "Enter the day you were born (use only numbers). ",
          invalid_message: "Enter a number between 1 and 31.",
        },
        month: { label: "Month", select_title: "Select", empty_message: "Select the month you were born." },
        year: {
          label: "Year (yyyy)",
          empty_message: "Enter the year you were born (use only numbers).",
          invalid_message: "Enter a valid year.",
        },
      },
      sex: {
        heading: "Sex assigned at birth (optional)",
        accordion_heading: "Why am I being asked this?",
        accordion_content:
          "It is important for public health to understand how COVID-19 might be affecting men and women differently.",
        label: "Sex assigned at birth",
        options: [
          { value: "", label: "Select" },
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
        ],
      },
      postal_code: {
        heading: "Postal code (all 6 characters)",
        accordion_heading: "Why am I being asked this?",
        accordion_content:
          "This is to help the volunteer confirm it is you when they call on the phone. ",
        label: "Postal code",
        empty_message: "Enter your postal code.",
        invalid_message: "Enter a valid postal code in a letter-number format like M7A 1A2.",
      },
      phone_number: {
        heading: "Phone number",
        label: "Phone number",
        empty_message: "Enter your phone number.",
        invalid_message:
          "Enter only numbers, spaces, hyphens, brackets, or periods (no letters or special characters).",
      },
      email: {
        heading: "Email (optional)",
        label: "Email",
        invalid_message: `Enter a valid address in the format email@email.com.`,
      },
      term_of_use: {
        heading: "Your information and privacy",
        info: (
          <>
            <p>
              The Ministry of Health (and Ontario public health units) will only use your details, contact information
              and your answers to the previous questions to follow up with you about your self-assessment result. Your
              phone number is for the follow-up call. Your email is for sending updates related to the follow-up call.
            </p>
            <p>
              They may make your information into anonymous data to improve their services in response to COVID-19. This
              is for public health purposes. They will not use it for anything else or give it to third parties.
            </p>
            <p>
              <a href="/self-assessment/terms-of-use" target="_blank" rel="noopener">
                Read the full terms of use.
              </a>
            </p>
          </>
        ),
        toi_checkbox_label: "I have read and understood the terms of use",
        contact_consent_label: "I consent to being contacted over the phone and receiving updates by email",
      },
      submit_button: {
        label: "Submit",
      },
    },
  },
  fr: {
    validation_error_main: {
      title: "Un problème est survenu",
      list_heading: "Des erreurs ont été trouvées sur cette page :",
      name_error: "Le prénom et le nom de famille doivent être valides",
      dob_error: "La date de naissance doit être valide",
      postal_code_error: "Le code postal doit être valide",
      phone_number_error: "Le numéro de téléphone doit être valide",
      email_error: "Le courriel doit être valide",
    },
    submit_error_server: {
      title: "Problème de serveur",
      content:
        "Nous sommes désolés, nos serveurs peuvent être temporairement surchargés.",
    },
    form: {
      heading: "Inscrivez-vous pour recevoir un appel de suivi facultatif concernant le résultat de cette auto-évaluation",
      instructions: (
        <>
          <p>Saisissez vos coordonnées et renseignements ci-dessous pour discuter du résultat de cette auto-évaluation et des prochaines étapes.</p>

          <p><strong>Cela est facultatif. Vous n’avez pas besoin de donner vos coordonnées chaque fois que vous faites une auto-évaluation.</strong></p>

          <p>
            Un bénévole représentant le ministère de la Santé vous téléphonera au cours des
            prochains jours pour :
          </p>
          <ul>
            <li>examiner votre état de santé et vos symptômes actuels </li>
            <li>donner des conseils sur l’auto-isolement ou l’auto-surveillance</li>
            <li>vous donner des conseils sur la façon de protéger la santé des autres personnes </li>
          </ul>
          <p>
            <strong>Remarque :</strong> vous ne recevrez aucun avis médical.
          </p>
          <p>
            Le ministère pourrait se servir d’une partie de vos renseignements afin de mieux comprendre et éclairer les
            mesures prises pour freiner la propagation de la COVID-19. Les données seront anonymisées.
          </p>
          <p>
            <strong>Tous les champs sont obligatoires, sauf s’ils sont indiqués comme étant facultatifs.</strong>
          </p>
        </>
      ),
      name: {
        heading: "Nom",
        first_name: {
          label: "Prénom",
          empty_message: "Saisissez votre prénom.",
          invalid_message:
            "Saisissez votre prénom tels qu’ils apparaissent sur vos pièces d’identité émises par le gouvernement. Assurez-vous qu’il n’y a pas d’espace, de tiret ou de point lorsque vous commencez à taper.",
        },
        last_name: {
          label: "Nom de famille",
          empty_message: "Saisissez votre nom de famille.",
          invalid_message:
            "Saisissez votre nom de famille tels qu’ils apparaissent sur vos pièces d’identité émises par le gouvernement. Assurez-vous qu’il n’y a pas d’espace, de tiret ou de point lorsque vous commencez à taper.",
        },
      },
      dob: {
        heading: "Date de naissance",
        accordion_heading: "Pourquoi me demande-t-on ce renseignement?",
        accordion_content:
          "Cela aidera le bénévole à confirmer votre identité lorsqu’il vous appellera au téléphone.",
        day: {
          label: "Jour (jj)",
          empty_message: "Saisissez votre jour de naissance (utilisez uniquement des chiffres).",
          invalid_message: "Saisissez un chiffre entre 1 et 31.",
        },
        month: { label: "Mois", select_title: "Sélectionnez", empty_message: "Sélectionnez votre mois de naissance." },
        year: {
          label: "Année (aaaa)",
          empty_message: "Saisissez votre année de naissance (utilisez uniquement des chiffres).",
          invalid_message: "Saisissez une année valide.",
        },
      },
      sex: {
        heading: "Sexe attribué à la naissance (facultatif) ",
        accordion_heading: "Pourquoi me demande-t-on ce renseignement?",
        accordion_content:
          "Il est important pour la santé publique de comprendre toute différence dans la façon dont la COVID-19 pourrait toucher les hommes et les femmes. ",
        label: "Sex assigned at birth",
        options: [
          { value: "", label: "Sélectionnez" },
          { value: "male", label: "Homme" },
          { value: "female", label: "Femme" },
          { value: "other", label: "Autre" },
        ],
      },
      postal_code: {
        heading: "Code postal (les 6 caractères)",
        accordion_heading: "Pourquoi me demande-t-on ce renseignement?",
        accordion_content:
          "Cela aidera le bénévole à confirmer votre identité lorsqu’il vous appellera au téléphone. ",
        label: "Postal code",
        empty_message: "Saisissez votre code postal.",
        invalid_message: "Saisissez un code postal valide dans le format alphanumérique M7A 1A2.",
      },
      phone_number: {
        heading: "Numéro de téléphone",
        label: "Phone number",
        empty_message: "Saisissez votre numéro de téléphone.",
        invalid_message:
          "Saisissez uniquement des chiffres, espaces, traits d’union, parenthèses ou points (pas de lettre ou de caractère spécial).",
      },
      email: {
        heading: "Courriel (facultatif)",
        label: "Email",
        invalid_message: "Saisissez une adresse valide dans le format email@email.com.",
      },
      term_of_use: {
        heading: "Vos renseignements et la protection de votre vie privée",
        info: (
          <>
            <p>
              Le ministère de la Santé (et les bureaux de santé publique de l'Ontario) utiliseront vos renseignements,
              vos coordonnées et vos réponses aux questions précédentes uniquement pour faire un suivi avec vous à
              propos du résultat de votre auto-évaluation. Votre numéro de téléphone servira à effectuer l’appel de
              suivi. Votre courriel servira à vous envoyer des mises à jour se rapportant à l’appel de suivi.
            </p>
            <p>
              Le ministère et les bureaux de santé publique pourraient convertir vos renseignements en données anonymes
              afin d’améliorer leurs services en réponse à la COVID-19. Cette mesure est à des fins de santé publique.
              Ils ne se serviront pas de ces renseignements à d’autres fins ni ne les divulgueront à des tiers.
            </p>
            <p>
              <a href="/autoevaluation/conditions-dutilisation" target="_blank" rel="noopener">
                Lisez les conditions d'utilisation complètes.
              </a>
            </p>
          </>
        ),
        toi_checkbox_label: "J’ai lu et compris les conditions d'utilisation ",
        contact_consent_label:
          "Je consens à ce que l’on communique avec moi par téléphone et à recevoir des mises à jour par courriel",
      },
      submit_button: {
        label: "Transmettre",
      },
    },
  },
}

export default contactForm
