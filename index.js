/**
 * création d'un tableau pour stocker les tâches
 */
let taches = [
    {
        nom:'Lecture de livres',
        dateEcheance: moment("2024-11-24").format("YYYY-MM-DD"),
        priorite:'Haute',
        estTerminee:true
    },

    {
        nom:'Aller au cinéma',
        dateEcheance: moment("2024-11-25").format("YYYY-MM-DD"),
        priorite:'Moyenne',
        estTerminee:false
    },

    {
        nom:'S\'exèrcé avec javascript',
        dateEcheance: moment("2023-11-26").format("YYYY-MM-DD"),
        priorite:'Haute',
        estTerminee:true
    },

    {
        nom:'Joueur au foot',
        dateEcheance: moment("2023-11-27").format("YYYY-MM-DD"),
        priorite:'Faible',
        estTerminee:false
    },

    {
        nom:'Suivre le match de la RDC',
        dateEcheance: moment("2023-11-22").format("YYYY-MM-DD"),
        priorite:'Haute',
        estTerminee:true
    },
    {
        nom:'Achat de jeux vidéos',
        dateEcheance: new moment("2024-12-05").format("YYYY-MM-DD"),
        priorite:'Moyenne',
        estTerminee:false
    }
]
/**
 *  Crée une fonction ajouterTacher(nom, dateEcheance, priorite)
 *  qui permet d'ajouter une nouvelle tâche avec son nom, 
 * sa date d'écheance et une priorité (faible, moyenne ou haute)
 * dans le tableau des tâches
 */
function ajouterTacher(nom, dateEcheance, priorite, estTerminee){
    if(nom !=='' && dateEcheance !=='' && priorite !== '' && estTerminee !== undefined){
        const tache = {
            nom,
            dateEcheance: new moment(dateEcheance).format("YYYY-MM-DD"),
            priorite,
            estTerminee,
        }
        taches.push(tache);
        console.log('La tâche est ajoutée avec succès');
    }else{
        console.log('Veuillez compléter les valeurs');
    }
}
ajouterTacher('Joueur la guitare', '2024-02-15', 'Moyenne', true);


/**
 * crée une fonction afficherTaches() qui 
 * affiche toutes les tâches,
 * y compris leur nom, date d'écheance, 
 * pririoté et statut (complète ou non)
 * 
 */
function afficherTaches(){
    taches.map((tache) =>{
        let statut = '';
        if(tache.estTerminee){
            statut = 'Complète'
        }else{
            statut = 'Non complétée'
        }
        console.log(`${tache.nom} ${tache.dateEcheance} ${tache.priorite} ${statut}`)
    })
}
afficherTaches();
