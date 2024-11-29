/**
 * création d'un tableau pour stocker les tâches
 */
let taches = [
    {
        nom:'Lecture de livres',
        dateEcheance: moment("2024-09-24").format("YYYY-MM-DD"),
        priorite:'Haute',
        estTerminee:true
    },

    {
        nom:'Conduire la voiture',
        dateEcheance: moment("2023-05-22").format("YYYY-MM-DD"),
        priorite:'Moyenne',
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
        estTerminee:false
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
        dateEcheance: new moment("2024-12-06").format("YYYY-MM-DD"),
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

const priorites = ['Haute', 'Moyenne', 'Faible'];
function ajouterTacher(nom, dateEcheance, estTerminee){

    if(nom !=='' && dateEcheance !=='' && estTerminee !== undefined){
        let nombreAleatoire = Math.floor(Math.random() * 3);
        const tache = {
            nom : nom,
            dateEcheance: new moment(dateEcheance).format("YYYY-MM-DD"),
            priorite:priorites[nombreAleatoire],
            estTerminee: estTerminee
        }
        taches.push(tache);
        console.log('La tâche est ajoutée avec succès');
    }else{
        console.log('Veuillez compléter les valeurs');
    }
}
//ajouterTacher('Joueur la guitare', '2024-02-30', true);
//ajouterTacher('Manger le riz', '2024-11-15', false);
//ajouterTacher('Se coiffer', '2024-10-23', false);
//ajouterTacher('Ecouter la misique', '2023-09-20', true);
//console.table(taches);
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
//console.table(filtrerTachesParStatut('non complétée'));


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


/***
 * Crée une fonction marquerTacheCommeTerminee(nom) 
 * qui marque une tâche comme terminée 
 * (modifie la propriété estTerminee à true).
 */
function marquerTacheCommeTerminee(nom){
    const tache = taches.find((tache) => tache.nom === nom);
    if(tache !== undefined){
        tache.estTerminee = true
    }else{
        console.log('La tache n\'est pas trouvé')
    }
    return taches;
}
//console.table(marquerTacheCommeTerminee('Joueur au foot'))


/**
 * Crée une fonction supprimerTache(nom) qui supprime 
 * une tâche du tableau en fonction de 
 * son nom en utilisant la méthode filter().
 */
function supprimerTache(nom){
    if(nom !==''){
        taches = taches.filter((tache) => tache.nom !== nom);
        console.log('La tâche supprimée avec succès');
        return taches
    }else{
        console.log('Veuillez entrer une valeur');
    }
}
//console.table(supprimerTache('Joueur au foot'))


/**
 * Crée une fonction modifierTache(nom, nouvelleTache) 
 * qui permet de modifier le nom, la date d’échéance 
 * et la priorité d’une tâche existante.
 */
function modifierTache(nom, nouvelleTache){
    const tache = taches.find((tache) => tache.nom === nom);
    if (tache !== undefined){
        tache.nom = nouvelleTache.nom;
        tache.dateEcheance = nouvelleTache.dateEcheance;
        tache.priorite = nouvelleTache.priorite;
        tache.estTerminee = nouvelleTache.estTerminee;
    }else{
        console.log('La tâche n\'est pas trouvée');
    }

    return taches;
}

const nouvelleTache = {
    nom: "Cuisiner",
    dateEcheance: new moment("2012-12-12").format("YYYY-MM-DD"),
    priorite: "Haute",
    estTerminee: true
};
//console.table(taches)
//console.table(modifierTache('Aller au cinéma', nouvelleTache));

/**
 * Crée une fonction supprimerTacheSiExiste(nom) 
 * qui vérifie si une tâche existe avant de tenter 
 * de la supprimer. Si la tâche n'existe pas, 
 * affiche un message d'erreur.
 */
function supprimerTacheSiExiste(nom){
    const tacheExiste = taches.some((tache) => tache.nom === nom);
    if(tacheExiste){
        taches = taches.filter((tache) => tache.nom !== nom);
        return taches;
    }else{
        console.log('La tâche n\'existe pas');
    }
}
//console.table(taches)
//console.table(supprimerTacheSiExiste('Aller au cinéma'));


/**
 * Crée une fonction tachesDansLes7ProchainsJours() 
 * qui affiche toutes les tâches dont la date 
 * d’échéance est dans les 7 prochains jours 
 * à partir de la date actuelle.
 */

function tachesDansLes7ProchainsJours(){
    const now = moment();
    const date7prochainsJours = moment().add(7, 'days').format("YYYY-MM-DD");
    taches.map((tache) =>{
        if (tache.dateEcheance === date7prochainsJours) {
            console.log(`${tache.nom} ${tache.dateEcheance} ${tache.priorite} ${tache.estTerminee}`);
        }
    });
}
//tachesDansLes7ProchainsJours();


/**
 * Crée une fonction nombreDeTachesEnRetard() 
 * qui calcule et affiche le nombre de tâches dont 
 * la date d’échéance est passée mais qui 
 * ne sont pas encore terminées.
 */
function nombreDeTachesEnRetard(){
    const dateJour = moment().format("YYYY-MM-DD");
    const nouvellesTaches = taches.filter((tache)=> tache.dateEcheance < dateJour && !tache.estTerminee);
    return nouvellesTaches.length;
}

//console.table(taches);
//console.log(nombreDeTachesEnRetard());

/**
 * Crée une fonction afficherTachesTerminees() 
 * qui affiche toutes les tâches dont la 
 * propriété estTerminee est true.
 */

function afficherTachesTerminees(){
    const nouvellesTaches = taches.filter((tache) => tache.estTerminee);
    nouvellesTaches.map((tache)=>{
        console.log(`${tache.nom} ${tache.dateEcheance} ${tache.priorite} Complète`)
    });
} 
//afficherTachesTerminees();


/**
 * Calculer le nombre total de tâches
 */

function nombreTotalDeTaches(){
    return  taches.length;
}

//console.table(taches);
//console.log(nombreTotalDeTaches());

/**
 * Crée une fonction calculerProgression() 
 * qui calcule et affiche le pourcentage 
 * de tâches terminées par rapport 
 * au nombre total de tâches.
 */
function nombreTotalDeTachesTerminees(){
    const nouvellesTaches = taches.filter((tache) => tache.estTerminee);
    return nouvellesTaches.length;
}

function calculerProgression(){
    const nombre_total_de_taches_terminees = nombreTotalDeTachesTerminees();
    const nombre_total_de_taches = nombreTotalDeTaches();
    const pourcentage = (nombre_total_de_taches_terminees/nombre_total_de_taches)* 100;
    console.log(`Le pourcentage de tâches terminées est : ${pourcentage.toFixed(3)}`);
}

//console.table(taches);
//calculerProgression();

/**
 * Crée une fonction trierTachesParStatut() 
 * qui trie les tâches par leur statut, 
 * de manière à ce que les tâches terminées 
 * apparaissent en premier.
 */

function trierTachesParStatut(){
    taches.sort((tache, tache2)=> tache2.estTerminee - tache.estTerminee)
    return taches;
}

//console.table(trierTachesParStatut());

/**
 * Crée une fonction nombreDeTachesParPriorite() 
 * qui affiche le nombre de tâches pour chaque 
 * priorité (faible, moyenne, haute).
 */

function nombreDeTachesParPriorite(){
    let nombreDeTachesFaible = 0;
    let nombreDeTachesMoyenne = 0;
    let nombreDeTachesHaute = 0;

    taches.map(tache => {
        switch(tache.priorite){
            case 'Faible':
                nombreDeTachesFaible +=1;
            break;
            case'Moyenne': 
                nombreDeTachesMoyenne +=1;
            break;
            case 'Haute':
                nombreDeTachesHaute +=1;
            break;
        }
    });

    console.log(`Le nombre de tâches faible :${nombreDeTachesFaible} \nLe nombre de tâches moyenne :${nombreDeTachesMoyenne}\nLe nombre de tâches haute :${nombreDeTachesHaute}`)
}

console.table(taches);
nombreDeTachesParPriorite();

/**
 * Crée une fonction afficherTacheFormattee(tache) 
 * qui prend une tâche et l'affiche dans un format lisible comme : 
 * "Tâche : [nom] | Date : [date] | Priorité : [priorité] | Statut : [statut]".
 */

function afficherTacheFormattee(tache){
    let statut='';
    if(tache.estTerminee){
        statut = 'Complète';
    }else{
        statut = 'Non complétée'
    }
    console.log(`Tâche : ${tache.nom} | Date : ${tache.dateEcheance} | Priorité : ${tache.priorite} | Statut : ${statut}`)
}

taches.map(tache =>{
    afficherTacheFormattee(tache);
})