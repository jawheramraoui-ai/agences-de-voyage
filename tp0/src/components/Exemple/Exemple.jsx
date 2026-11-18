
import { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Bonjour ${nom}, vous avez ${age} ans.`);

    // Réinitialiser le formulaire
    setNom("");
    setAge("");
  }

  return (
    <div>
      <h2>Formulaire d'inscription</h2>

      <form onSubmit={handleSubmit}>

        {/* Champ Nom */}
        <label>Nom :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Entrez votre nom"
          required
        />

        <br /><br />

        {/* Champ Age */}
        <label>Age :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Entrez votre âge"
          min="1"
          required
        />

        <br /><br />

        <button type="submit">
          Envoyer
        </button>

        <button
          type="reset"
          onClick={() => {
            setNom("");
            setAge("");
          }}
        >
          Annuler
        </button>

      </form>
    </div>
  );
}

export default Formulaire;
