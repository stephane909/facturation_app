
Contexte Authentification / Connexion
- Admin Créé


Contexte Facturation (Invoice)
- Client Créé (createCustomer)

Règles métiers :
- Nom / siret / adresse / email  obligatoire
- Mail : doit contenir un arobase et un point
- Siret : 14 caractères obligatoire


—-------


- Devis Créée

Règles métiers :
chaque devis doit contenir au minimum une prestation
client obligatoire
titre obligatoire
date obligatoire
identifiant obligatoire
devis est par défaut “en attente”


—-------


- Prestation modifiée

Règles métiers :
- Nom de la prestation obligatoire
- Description de la prestation optionnel
- Heures obligatoire
- Prix heure obligatoire
- Si status devis autre que “en attente” : erreur

—-------


- Prestation supprimée

Règles métiers :
 - Si status devis autre que “en attente” : erreur


—-------


- Prestation ajoutée

Règles métiers :
Nom de la prestation obligatoire
Description de la prestation optionnel
heures obligatoire
prix heure obligatoire
 Si status devis autre que “en attente” : erreur

—-------

- Devis modifié

Règles métiers :
- Si status autre que “en attente” : erreur
- Prestations modifiables : supprimer / ajouter / modifier
- Date modifiable

—-------


- Devis refusé

Règles métiers :
 - Si status autre que “en attente” : erreur

—-------

- Devis validé

Règles métiers :
 - Si status autre que “en attente” : erreur

—-------

- Devis annulé

Règles métiers :
 - Si status autre que “en attente” : erreur


—-------


- Facture Créée

Règles métiers :
chaque facture doit contenir au minimum une prestation
une facture ne peut être créée si le devis initial a le statut en attente
client obligatoire
titre obligatoire
date obligatoire
identifiant obligatoire
