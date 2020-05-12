# COVID-19 Outil d'auto-évaluation v2.8

**REMARQUE:** Cet outil n'est pas destiné à fournir des conseils médicaux. Si vous avez des questions médicales, consultez votre autorité sanitaire locale.

L'outil amène le public à travers une série de questions pour informer ceux qui sont concernés qu'ils peuvent avoir contracté COVID-19. Si les réponses de l'utilisateur le justifient de parler à un professionnel de la santé, il a la possibilité de remplir ses informations personnelles et de les soumettre afin d'obtenir un rappel. L'outil est implémenté à l'aide de [Gatsby](https://www.gatsbyjs.org/), qui est un générateur de site statique basé sur React et alimenté par GraphQL. Étant donné que Gatsby compile en HTML / CSS / JS statique, il permet des performances fulgurantes et des déploiements simples.

Journal des modifications:

- Liste des symptômes révisée pour supprimer les symptômes redondants et obsolètes
- Ajout d'un formulaire pour recueillir une estimation de la date d'apparition des symptômes auprès de l'utilisateur
- Ajout d'un formulaire pour recueillir une estimation de la date d'exposition à COVID-19 et à une personne présentant des symptômes respiratoires
- Ajout d'un formulaire pour obtenir la date exacte de retour au Canada (si au cours des 14 derniers jours)
- Ajout d'un formulaire où l'utilisateur pourrait remplir ses coordonnées et demander un rappel de Santé Ontario
- Résolution d'un problème avec les liens "passer au contenu" sur les pages pour améliorer l'accessibilité
- Nombreux petits ajustements de conception et de contenu

Le travail sur l'outil est en cours et en raison de sa nature sensible au temps, nous privilégions la vitesse à tout le reste. Ce n'est pas parfait, mais nous travaillons 24 heures sur 24 pour l'améliorer pour une meilleure facilité d'utilisation et précision en fonction des dernières informations médicales dont nous disposons.

## FONCTIONNEMENT

** REMARQUE: ** Vous devez disposer d'une version à jour de NodeJS pour l'exécuter. J'ai utilisé 13.3.0 pour le développement, mais toute version supérieure à 12.0.0 devrait fonctionner. Vous devrez installer `yarn` globalement en utilisant`npm i -g yarn` avant de pouvoir exécuter ce projet.

Pour exécuter pendant le développement, utilisez simplement la commande `yarn develop`.

Pour construire la version de production, utilisez `yarn build`. La construction de la production peut être servie localement en utilisant `yarn serve`.

Le formulaire utilisé dans cette version de l'outil soumet les données à une URL API définie via la variable d'environnement `GATSBY_OAG_API_URL`. En cours de développement, cette valeur est définie sur http://localhost:3000/api/sat-data.
