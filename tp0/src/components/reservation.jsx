
import { useState } from "react";
import styles from "./reservation.module.css";

function Reservation() {
  // États du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const [reservation, setReservation] = useState({
    destination: "",
    date: "",
    voyageurs: "1"
  });

  const [erreurs, setErreurs] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Gestion des changements
  function handleReservationChange(e) {
    const { name, value } = e.target;

    setReservation({
      ...reservation,
      [name]: value
    });

    setErreurs({
      ...erreurs,
      [name]: ""
    });
  }

  // Validation du formulaire
  function handleSubmit(e) {
    e.preventDefault();

    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Le nom est obligatoire.";
    }

    if (!email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nouvellesErreurs.email = "Email invalide.";
    }

    if (!telephone.trim()) {
      nouvellesErreurs.telephone = "Le téléphone est obligatoire.";
    }

    if (!reservation.destination) {
      nouvellesErreurs.destination = "Choisissez une destination.";
    }

    if (!reservation.date) {
      nouvellesErreurs.date = "Choisissez une date.";
    } else if (
      new Date(reservation.date + "T00:00:00") <
      new Date(new Date().toDateString())
    ) {
      nouvellesErreurs.date = "La date doit être dans le futur.";
    }

    if (Number(reservation.voyageurs) < 1) {
      nouvellesErreurs.voyageurs = "Minimum 1 voyageur.";
    }

    setErreurs(nouvellesErreurs);

    // Vérification des erreurs
    if (Object.keys(nouvellesErreurs).length === 0) {
      setShowPopup(true);
    }
  }

  // Réinitialisation
  function handleReset() {
    setNom("");
    setEmail("");
    setTelephone("");

    setReservation({
      destination: "",
      date: "",
      voyageurs: "1"
    });

    setErreurs({});
    setShowPopup(false);
  }

  return (
    <section className={styles.container}>

      <h2>Réserver votre voyage</h2>

      <p className={styles.description}>
        Remplissez le formulaire pour effectuer votre réservation.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Nom et prénom */}
        <div className={styles.formGroup}>
          <label htmlFor="nom">Nom et prénom</label>

          <input
            id="nom"
            type="text"
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
              setErreurs({ ...erreurs, nom: "" });
            }}
            placeholder="Entrez votre nom et prénom"
            className={erreurs.nom ? styles.inputError : ""}
            required
          />

          {erreurs.nom && (
            <span className={styles.error}>
              {erreurs.nom}
            </span>
          )}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Adresse email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErreurs({ ...erreurs, email: "" });
            }}
            placeholder="exemple@gmail.com"
            className={erreurs.email ? styles.inputError : ""}
            required
          />

          {erreurs.email && (
            <span className={styles.error}>
              {erreurs.email}
            </span>
          )}
        </div>

        {/* Téléphone */}
        <div className={styles.formGroup}>
          <label htmlFor="telephone">Numéro de téléphone</label>

          <input
            id="telephone"
            type="tel"
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
              setErreurs({ ...erreurs, telephone: "" });
            }}
            placeholder="Votre numéro de téléphone"
            className={erreurs.telephone ? styles.inputError : ""}
            required
          />

          {erreurs.telephone && (
            <span className={styles.error}>
              {erreurs.telephone}
            </span>
          )}
        </div>

        {/* Destination */}
        <div className={styles.formGroup}>
          <label htmlFor="destination">Destination</label>

          <select
            id="destination"
            name="destination"
            value={reservation.destination}
            onChange={handleReservationChange}
            className={
              erreurs.destination ? styles.inputError : ""
            }
            required
          >
            <option value="">Choisir une destination</option>
            <option value="Djerba">Djerba</option>
            <option value="Sousse">Sousse</option>
            <option value="Hammamet">Hammamet</option>
            <option value="Tozeur">Tozeur</option>
            <option value="Tabarka">Tabarka</option>
          </select>

          {erreurs.destination && (
            <span className={styles.error}>
              {erreurs.destination}
            </span>
          )}
        </div>

        {/* Date */}
        <div className={styles.formGroup}>
          <label htmlFor="date">Date du voyage</label>

          <input
            id="date"
            type="date"
            name="date"
            value={reservation.date}
            onChange={handleReservationChange}
            className={erreurs.date ? styles.inputError : ""}
            required
          />

          {erreurs.date && (
            <span className={styles.error}>
              {erreurs.date}
            </span>
          )}
        </div>

        {/* Nombre de voyageurs */}
        <div className={styles.formGroup}>
          <label htmlFor="voyageurs">Nombre de voyageurs</label>

          <input
            id="voyageurs"
            type="number"
            name="voyageurs"
            min="1"
            max="20"
            value={reservation.voyageurs}
            onChange={handleReservationChange}
            className={
              erreurs.voyageurs ? styles.inputError : ""
            }
            required
          />

          {erreurs.voyageurs && (
            <span className={styles.error}>
              {erreurs.voyageurs}
            </span>
          )}
        </div>

        {/* Boutons */}
        <div className={styles.buttons}>
          <button type="submit" className={styles.submitBtn}>
            Confirmer la réservation
          </button>

          <button
            type="button"
            onClick={handleReset}
            className={styles.resetBtn}
          >
            Réinitialiser
          </button>
        </div>

      </form>

      {/* Popup de confirmation */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>

            <h3>Réservation confirmée !</h3>

            <p>Merci {nom}, votre demande a été validée.</p>

            <p><strong>Email :</strong> {email}</p>
            <p><strong>Téléphone :</strong> {telephone}</p>
            <p>
              <strong>Destination :</strong>{" "}
              {reservation.destination}
            </p>
            <p><strong>Date :</strong> {reservation.date}</p>
            <p>
              <strong>Voyageurs :</strong>{" "}
              {reservation.voyageurs}
            </p>

            <button
              type="button"
              onClick={handleReset}
              className={styles.submitBtn}
            >
              Fermer
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default Reservation;
