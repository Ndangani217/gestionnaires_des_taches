
/**
 * création d'un tableau pour stocker les tâches
 */
const taches = [
    {
        nom:'Lecture de livres',
        dateEcheance: moment("2024-09-24").format("YYYY-MM-DD"),
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
        dateEcheance: moment("2023-10-26").format("YYYY-MM-DD"),
        priorite:'Haute',
        estTerminee:true
    },
    {
        nom:'Aller à la prière',
        dateEcheance: new moment("2022-12-05").format("YYYY-MM-DD"),
        priorite:'Haute',
        estTerminee:true
    }
    ,{
        nom:'Joueur au foot',
        dateEcheance: moment("2023-08-27").format("YYYY-MM-DD"),
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
        priorite:'Faible',
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
//afficherTaches();

/**
 * Crée une fonction filtrerTachesParStatut(statut) 
 * qui permet de filtrer les tâches selon 
 * leur statut : "complète" ou "non complétée".
 */
function filtrerTachesParStatut(statut){
    let estTerminee = false;
    if(statut ==='complète'){
        estTerminee = true;
    }
    const nouvellesTaches = taches.filter((tache) => tache.estTerminee === estTerminee);
    return nouvellesTaches;
}
//console.table(filtrerTachesParStatut('complète'));


/**
 * Crée une fonction filtrerTachesParPriorite(priorite) 
 * qui permet de filtrer les tâches en fonction de leur 
 * priorité (faible, moyenne ou haute).
 */
function filtrerTachesParPriorite(priorite){
    if(priorite !==''){
        const nouvellesTaches = taches.filter((tache) => tache.priorite === priorite);
        return nouvellesTaches ;
    }else{
        console.log('veuillez entrer une valeur exacte (haute, moyenne, faible)')
    } 
}
//console.table(filtrerTachesParPriorite('Haute'))


/**
 * Crée une fonction trierTachesParPriorite() 
 * qui trie les tâches dans le tableau par priorité, 
 * de la plus haute à la plus basse. Utilise la 
 * méthode sort() pour le faire.
 */

function trierTachesParPriorite(){
    const priorites = {
        'Haute': 1,
        'Moyenne': 2,
        'Faible': 3
    };
    taches.sort((tache, tache2) => priorites[tache.priorite] - priorites[tache2.priorite]);
    return taches;
}
//console.table(trierTachesParPriorite())


/**
 * Crée une fonction trierTachesParDateEcheance() 
 * qui trie les tâches par leur date d’échéance, 
 * de la plus proche à la plus éloignée.
 */
function trierTachesParDateEcheance(){
    taches.sort((tache, tache2) => new moment(tache.dateEcheance) - new moment(tache2.dateEcheance));
    return taches;
}

//console.table(trierTachesParDateEcheance());