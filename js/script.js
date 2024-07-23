// console.log("Bonjour");
// alert("Vous avez gagné un iphone 16 !") // A NE JAMAIS faire car c'est agressif !

/** variable js : var, let, const
    var : à proscrire depuis ES6 (2015)
    let : voué à changer au cours du programme
    const : doit être initialisée à la déclaration et ne peut pas être modifiée
**/

function displayAge(){
    // Stocker de l'information
    // 1. récupération de l'infomation
    /* let age = document.getElementById("age").value | Nous mettons const car la valeur d'âge ne change pas
       pendant dans la fonction  */
    const age = document.getElementById("age").value

    // 2. traitement
    const textAge = `Vous avez <bold><i>${age}</i></bold> ans`
    /* const otherTextAge = "Vous avez <i>" + age + "</i> ans."*/

    // 3. affichage
    document.getElementById("textAge").innerHTML = textAge
}
