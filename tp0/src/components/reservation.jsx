import { userstate } from "react";
import styles from "./reservation.module.css";

function reservation(){

    const {nom,setNom}=useState("");
    const {email,setEmail}= userState ("");
    const {telephone, setTelephone}= userState("");

    const {reeservation,setReesevation}=userstate("");
    const {erreurs,setErreurs}=userstate("");
    const {showPopup,setShowpopup}=userstate("");



    return(

        <section className={styles.container}>
        <h2>Reserver votre voyage</h2>
        <form onSubmit={handleSubmit} >
            < className={styles.formGroup}>
            <label htmlFor=""> nom et prenom</label>
            <input
                type="text"
                className={erreurs.nom ? styles.imputError : "";}
                value={nom}
                onChange={(e) => {
                    setNom(e.target.value);
                    effacerErreur("nom");
                }}
                placeholder="votre nom et prenom"
                />
        </form>
    )


}export default reservation;
