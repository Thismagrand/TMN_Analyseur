from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess

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


@app.post("/analyser")
def analyser(dossier: Dossier):

    print("CHEMIN REÇU :", repr(dossier.chemin))

    commande = [
        r"C:\Users\Grand\AppData\Local\Programs\BirdNET-Analyzer\BirdNET-Analyzer.exe",
        dossier.chemin
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