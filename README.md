
Aperçu
Pour compléter cette évaluation, vous devrez écrire une simple application Web  et nous fournir les fichiers sources à construire.

Le but de cette évaluation est d'évaluer vos compétences et votre approche pour composer une application Web simple à partir d' un flux d'API. Nous évaluerons également la sortie HTML, CSS et JS générée.

Cette évaluation devrait prendre environ 1 à 2 heures.

Ce qu'il faut faire?
Votre objectif est de mettre en œuvre une application  simple, où les utilisateurs pourront voir les réponses vidéo d'un candidat, commenter les réponses et enregistrer les données. L'UX/UI dépend entièrement de vous.

Bien qu'il s'agisse d'un exercice très basique, nous rechercherons un code simple, bien conçu, bien commenté et testé dans la soumission.

Veuillez inclure un README avec les instructions de configuration et toute autre documentation que vous avez créée dans le cadre de votre solution.

Ajoutez également des informations très courtes pour les éléments suivants à votre README :

Comment avez-vous décidé des technologies à utiliser dans le cadre de votre solution ?
Y a-t-il des améliorations que vous pourriez apporter à votre soumission ?
Que feriez-vous différemment si vous disposiez de plus de temps ?
Une fois l'implémentation terminée, veuillez créer votre branche, mettre la resolution et faire une pull request

Comment l'application doit-elle fonctionner ?
L'utilisateur de cette application de réaction devrait pouvoir voir la ou les réponses vidéo des candidats à un emploi postulant pour un emploi dans leur entreprise. L'application doit avoir le flux de travail suivant,

Choisissez un candidat dans une liste.
En fonction de la sélection à la première étape, si le candidat sélectionné a une candidature, affichez la ou les réponses vidéo du candidat avec la question pertinente affichée en texte. Si le candidat sélectionné n'a pas de candidature, affichez le message approprié.
Pour chaque réponse vidéo d'un candidat, offrez une option pour saisir des commentaires.
Fournissez un bouton "Enregistrer" qui enregistre les commentaires dans le fichier api.json.
Exigences
Seule l'étape 1 doit être visible lorsqu'aucun candidat n'est sélectionné. Les étapes 1, 2, 3 et 4 doivent être visibles lorsqu'un candidat est sélectionné.

L'utilisateur doit pouvoir modifier la sélection des candidats à tout moment.

Vous pouvez utiliser les bibliothèques, les exécuteurs de tâches et les processus de construction que vous aimez. React et JavaScript simple sont les seules exigences (ES6 encouragé, mais pas de TypeScript, CoffeeScript, etc.). Redux est fortement encouragé si vous en voyez le besoin.

Utilisation de l'API
L'API peut être lancée à l'aide de npm start. Vous devrez exécuter npm install une fois que vous aurez commencé à travailler sur le projet pour installer les dépendances.

Point final	Résultat

/candidates	Répertorie tous les candidats disponibles

/questions	Répertorie toutes les questions disponibles

/applications	Répertorie toutes les applications disponibles
