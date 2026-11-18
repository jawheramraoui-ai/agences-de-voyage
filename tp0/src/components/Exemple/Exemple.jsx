import { useState } from "react";
function Formulaire() {
    const [nom, setNom] = useState("");
    const [age, setAge] = useState("");

    function handlesubmit(e) {
        e.preventDefault();
        console.log(e);
        alert("Bonjour " + nom +  ",vous avez" + age +"ans" );
        setNom("");
        setAge("");

    }
    return(
        <div>
            <h2>formulaire d'inscription</h2>
            <form onSubmit={handlesubmit}>
                <label>Nom: </label>
                <input
                    type="text"
                    value={nom}
                    onChange={{e} => {setNom(e.target.value); console.log(e)} }
                    required
                />
                <br/><br/>
                <label ></label>
            </form>
        </div>
    )
}export default Formulaire;