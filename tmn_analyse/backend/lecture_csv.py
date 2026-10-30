
"""

LIGNE PAR LIGNE SELON TITRE DE COLONNE

import csv

with open("resultats.csv", "r", encoding="utf-8", newline="") as fichier:
    lecteur = csv.DictReader(fichier)

    for ligne in lecteur:
        espece = ligne["nom_espece"]
        confiance = float(ligne["confiance"])

        print(espece, confiance)

"""
"""
        import csv

with open("resultats.csv", "r", encoding="utf-8", newline="") as fichier:
    lecteur = csv.DictReader(fichier)

    for ligne in lecteur:
        print(ligne)

"""
"""

AFFICHER LE NOM DES FICHIERS

from pathlib import Path

dossier = Path("resultats")

for fichier in dossier.glob("*.csv"):
    print(fichier.name)
"""

import csv
from pathlib import Path

dossier = Path(r"C:\BirdNET-Test")
observations = []

for fichier in dossier.glob("*.csv"):
    print("Fichier :", fichier.name)

    with open(fichier, "r", encoding="utf-8") as contenu:
        lecteur = csv.DictReader(contenu)

        if "Common name" not in lecteur.fieldnames:
            continue

        for ligne in lecteur:
            espece = ligne["Common name"]
            scientifique = ligne["Scientific name"]
            confiance = float(ligne["Confidence"])

            if(confiance >= 0.8):
                print(espece, scientifique, confiance)
                observations.append({
                    "espece":espece,
                    "nom scientifique":scientifique,
                    "indice de confiance":confiance
                })
print(observations)
print("Il y a :",len(observations),"avec un indice de confiance supérieur ou égal à 0.8")
