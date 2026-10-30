from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from batdetect2 import BatDetect2API
import subprocess
import csv
from pathlib import Path

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Dossier(BaseModel):
    chemin: str


@app.get("/")
def accueil():
    return {"message": "FastAPI fonctionne !"}

#Batdetect2
# If you don't specify a checkpoint the default model will be loaded
api = BatDetect2API.from_checkpoint()


def analyser_fichier(chemin: str):
    prediction = api.process_file(chemin)

    for detection in prediction.detections:
        top_class = api.get_top_class_name(detection)
        score = detection.detection_score

        if(score > 0.5):
            print(top_class, score)


@app.post("/analyserChauvesouris")
def analyser_chauvesouris(demande: Dossier):
    dossier = Path(demande.chemin)
    for fichier in dossier.glob("*.wav"):
        print(fichier)
        analyser_fichier(fichier)
    return {"message": "Analyse terminée"}

#Birdnet
@app.post("/analyser")
def analyser(dossier: Dossier):

    print("CHEMIN REÇU :", repr(dossier.chemin))

    commande = [
        r"C:\Users\Grand\AppData\Local\Programs\BirdNET-Analyzer\BirdNET-Analyzer.exe",
        dossier.chemin,
        "--rtype", "csv",
        "-o", dossier.chemin,
    ]

    print("COMMANDE :", commande)

    resultat = subprocess.run(
        commande,
        capture_output=True,
        text=True
    )

    return {
        "message": "Analyse terminée",
        "code": resultat.returncode,
        "stdout": resultat.stdout,
        "stderr": resultat.stderr
    }

