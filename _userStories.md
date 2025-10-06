#FACTURATION-US-1: Création de client
 En tant qu’admin
Je veux créer un client (nom, siret, adresse, mail)
Pour pouvoir créer des factures pour ce client

Scénarios :

#FACTURATION-US-1-AC-1 : création client validée
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau client :
— nom : Arkeys
— siret 12345678912345
— adresse 28 avenue des alouettes 33950 Petit Piquey
— mail contact@arkeys.com
- Alors le client doit être créé

#FACTURATION-US-1-AC-2 : création client échouée : pas de nom
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau client :
— siret 12345678912345
— adresse 28 avenue des alouettes 33950 Petit Piquey
— mail contact@arkeys.com
- Alors le client ne doit pas être créé

#FACTURATION-US-1-AC-3 : création client échouée : pas de siret conforme
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau client :
— nom : Arkeys
— siret 12345678912
— adresse 28 avenue des alouettes 33950 Petit Piquey
— mail contact@arkeys.com
- Alors le client ne doit pas être créé

#FACTURATION-US-1-AC-4 : création client échouée : pas d'adresse
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau client :
— nom : Arkeys
— siret 12345678912345
— mail contact@arkeys.com
- Alors le client ne doit pas être créé

#FACTURATION-US-1-AC-5 : création client échouée : structure mail non conforme
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau client :
— nom : Arkeys
— siret 12345678912345
— adresse 28 avenue des alouettes 33950 Petit Piquey
— mail contact@arkeys
- Alors le client ne doit pas être créé


––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


#FACTURATION-US-2: Création d’un devis
En tant qu’admin
Je veux créer un devis ( numéro, date, client, nom, liste de prestations, statut )
Pour pouvoir l’envoyer au client

Scénarios :

#FACTURATION-US-2-AC1: Création d’un devis en attente
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau devis en attente :
— Numéro : ARK120925 ( 3 premières lettre du client + date format JJMMAA )
— Client : Arkeys
— date : 12 septembre 2025
— Nom du devis : Création d’un site eCommerce sur base prestashop
— Statut : En attente ( défaut )
- Alors le devis doit être créé “en attente”

#FACTURATION-US-2-AC2: Création d’un devis échoué : pas de client donc pas de numéro également
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau devis :
— Numéro :
— Client :
— date : 12 septembre 2025
— Nom du devis : Création d’un site eCommerce sur base prestashop
— Statut : En attente ( défaut )
- Alors le devis ne doit pas être créé


#FACTURATION-US-2-AC3: Création d’un devis échoué : pas de date donc pas de numéro également
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau devis :
— Numéro :
— Client : Arkeys
— date :
— Nom du devis : Création d’un site eCommerce sur base prestashop
— Statut : En attente ( défaut )
- Alors le devis ne doit pas être créé



#FACTURATION-US-2-AC4: Création d’un devis échoué : pas de nom
- Etant donné que je suis identifié en tant qu’admin
- Quand je veux enregistrer un nouveau devis :
— Numéro : ARK120925 ( 3 premières lettre du client + date format JJMMAA )
— Client : Arkeys
— date : 12 septembre 2025
— Nom du devis :
— Statut : En attente ( défaut )
- Alors le devis ne doit pas être créé


––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


#FACTURATION-US-3: Création d’une prestation
En tant qu’admin
Je veux créer une prestation
Pour pouvoir l’ajouter au  devis en cours


Scénarios :

#FACTURATION-US-3-AC1: Création d’une prestation
- Etant donné que je suis en train de créer un devis en tant qu’admin
- Quand je veux ajouter une nouvelle prestation au devis :
— Nom : Développement d’une wishlist
— Nature / Description : Développement typescript / React / Node d’une whislist avec les fonctionnalités suivantes : Enregistrement des produits, groupes, envoie à un ami
— Quantité : 5 jours
— Prix Unitaire : 500€
– Alors la prestation peut être ajoutée au devis

#FACTURATION-US-3-AC2: Création d’une prestation
– Etant donné que je suis en train de créer un devis en tant qu’admin
– Quand je veux ajouter une nouvelle prestation au devis :
— Nom :
— Nature / Description : Développement typescript / React / Node d’une whislist avec les fonctionnalités suivantes : Enregistrement des produits, groupes, envoie à un ami
— Quantité : 5 jours
— Prix Unitaire : 500€
– Alors la prestation ne peut pas  être ajoutée au devis

#FACTURATION-US-3-AC3: Création d’une prestation
– Etant donné que je suis en train de créer un devis en tant qu’admin
– Quand je veux ajouter une nouvelle prestation au devis :
— Nom : Développement d’une wishlist
— Nature / Description :
— Quantité : 5 jours
— Prix Unitaire : 500€
– Alors la prestation peut être ajoutée au devis

#FACTURATION-US-3-AC4: Création d’une prestation
– Etant donné que je suis en train de créer un devis en tant qu’admin
– Quand je veux ajouter une nouvelle prestation au devis :
— Nom : Développement d’une wishlist
— Nature / Description : Développement typescript / React / Node d’une whislist avec les fonctionnalités suivantes : Enregistrement des produits, groupes, envoie à un ami
— Quantité :
— Prix Unitaire : 500€
– Alors la prestation ne peut pas être ajoutée au devis

#FACTURATION-US-3-AC5: Création d’une prestation
– Etant donné que je suis en train de créer un devis en tant qu’admin
– Quand je veux ajouter une nouvelle prestation au devis :
— Nom : Développement d’une wishlist
— Nature / Description : Développement typescript / React / Node d’une whislist avec les fonctionnalités suivantes : Enregistrement des produits, groupes, envoie à un ami
— Quantité : 5 jours
— Prix Unitaire :
– Alors la prestation ne peut pas être ajoutée au devis
