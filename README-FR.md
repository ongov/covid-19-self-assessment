# COVID-19 Outil d'auto-évaluation v2.8

**REMARQUE:** Cet outil n'est pas destiné à fournir des conseils médicaux. Si vous avez des questions médicales, consultez votre autorité sanitaire locale.

L'outil amène le public à travers une série de questions pour informer ceux qui sont concernés qu'ils peuvent avoir contracté COVID-19. Il est implémenté à l'aide de [Gatsby](https://www.gatsbyjs.org/), qui est un générateur de site statique basé sur React et alimenté par GraphQL. Parce que Gatsby compile en HTML / CSS / JS statique, il permet des performances de cloquage et des déploiements simples.

Par rapport aux deux premières versions de l'outil, cette version contient de nombreuses améliorations. Voici les points saillants des améliorations:

- Les symptômes sont regroupés sur une seule page et sont désormais sélectionnés via des cases à cocher
- Chaque symptôme porte un "poids" qui est ensuite combiné en un score symtpom
- La plupart du contenu a été séparé du balisage et peut être géré séparément
- La gestion de l'état est améliorée et les boutons Précédent / Suivant fonctionnent correctement et se souviennent de l'état précédent
- Analytics est considérablement amélioré en ajoutant des symptômes et des scores de symptômes à la couche de données pour Google Tag Manager

Le travail sur l'outil est en cours et en raison de sa nature sensible au temps, nous privilégions la vitesse à tout le reste. Ce n'est pas parfait, mais nous travaillons 24 heures sur 24 pour l'améliorer pour une meilleure facilité d'utilisation et une meilleure précision sur la base des dernières informations médicales dont nous disposons.

## FONCTIONNEMENT

**REMARQUE:** Vous devez disposer d'une version à jour de NodeJS pour l'exécuter. J'ai utilisé 13.3.0 pour le développement, mais toute version supérieure à 12.0.0 devrait fonctionner. Vous devrez installer `yarn` globalement en utilisant `npm i -g yarn` avant de pouvoir exécuter ce projet.

Pour exécuter pendant le développement, utilisez simplement la commande `yarn develop`.

Pour construire la version de production, utilisez `yarn build`. La construction de la production peut être servie localement en utilisant `yarn serve`.
