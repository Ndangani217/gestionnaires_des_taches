
/**
 * création d'un tableau pour stocker les tâches
 */
let taches = [
    {
        nom:'Lecture de livres',
        dateEcheance:'',
        priorite:'Haute',
        estTerminee:false,
        description:'Primordiale'
    },

    {
        nom:'Conduire la voiture',
        dateEcheance: moment("2024-12-09").format("YYYY-MM-DD"),
        priorite:'Moyenne',
        estTerminee:false,
        description:''
    },

    {
        nom:'Aller au cinéma',
        dateEcheance: moment("2024-12-04").format("YYYY-MM-DD"),
        priorite:'Moyenne',
        estTerminee:false,
        description:''
    },

    {
        nom:'S\'exèrcé avec javascript',
        dateEcheance: '',
        priorite:'Haute',
        estTerminee:false,
        description:''
    },
    {
        nom:'Aller à la prière',
        dateEcheance: '',
        priorite:'Haute',
        estTerminee:false,
        description:''
    }
    ,{
        nom:'Joueur au foot',
        dateEcheance: '',
        priorite:'Faible',
        estTerminee:false,
        description:''
    },

    {
        nom:'Suivre le match de la RDC',
        dateEcheance: '',
        priorite:'Haute',
        estTerminee:false,
        description:''
    },
    {
        nom:'Achat de jeux vidéos',
        dateEcheance: '',
        priorite:'Faible',
        estTerminee:false,
        description:''
    }
]
/**
 *  Crée une fonction ajouterTacher(nom, dateEcheance, priorite)
 *  qui permet d'ajouter une nouvelle tâche avec son nom, 
 * sa date d'écheance et une priorité (faible, moyenne ou haute)
 * dans le tableau des tâches
 */

function ajouterTacher(nom, dateEcheance, priorite){
    if(nom !=='' && dateEcheance !=='' && priorite !==''){
        const tache = {
            nom,
            dateEcheance: new moment(dateEcheance).format("YYYY-MM-DD"),
            priorite,
            estTerminee: false,
            description:''
        }
        taches.push(tache);
        console.log('La tâche est ajoutée avec succès');
    }else{
        console.log('Veuillez compléter les valeurs');
    }
}
//ajouterTacher('Joueur la guitare', '2024-02-17', 'Moyenne');
//ajouterTacher('Manger le riz', '2024-11-15', 'Moyenne', false);
//ajouterTacher('Se coiffer', '2024-10-23', 'Haute' false);
//ajouterTacher('Ecouter la misique', '2023-09-20', 'Moyenne', true);
//console.table(taches);
/**
 * crée une fonction afficherTaches() qui 
 * affiche toutes les tâches,
 * y compris leur nom, date d'écheance, 
 * pririoté et statut (complète ou non)
 * 
 */
function afficherTaches(){
    taches.forEach((tache) =>{
        let statut = (tache.estTerminee) ?'Complète' :'Non complétée';
        console.log(`${tache.nom} ${tache.dateEcheance} ${tache.priorite} ${statut} ${tache.description}`)
    })
}
//afficherTaches();

/**
 * Crée une fonction filtrerTachesParStatut(statut) 
 * qui permet de filtrer les tâches selon 
 * leur statut : "complète" ou "non complétée".
 */
function filtrerTachesParStatut(statut){
    return taches.filter((tache) => tache.estTerminee === statut);
}
//console.table(filtrerTachesParStatut(false));


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
        const indexTache = taches.findIndex((tache) => tache.nom === nom);
        if(indexTache > -1) {
            return taches.splice(indexTache, 1);
        }
    }
}
//supprimerTache('Lecture de livres')


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
        tache.priorite = nouvelleTache.priorite || tache.priorite;
        tache.estTerminee = nouvelleTache.estTerminee;
        tache.description = nouvelleTache.description
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
    const date7prochainsJours = now.add(7, 'days').format("YYYY-MM-DD");
    const tachesFiltrees = taches.filter((tache)=> moment(tache.dateEcheance).isBefore(date7prochainsJours));
    tachesFiltrees.forEach((tache) =>{
        console.log(`${tache.nom} ${tache.dateEcheance} ${tache.priorite} ${tache.estTerminee}`);
    })
}
tachesDansLes7ProchainsJours();

/**
 * Crée une fonction nombreDeTachesEnRetard() 
 * qui calcule et affiche le nombre de tâches dont 
 * la date d’échéance est passée mais qui 
 * ne sont pas encore terminées.
 */
function nombreDeTachesEnRetard(){
    const dateJour = moment().format("YYYY-MM-DD");
    const tachesFiltrees = taches.filter((tache)=> tache.dateEcheance < dateJour && !tache.estTerminee);
    return tachesFiltrees.length;
}

//console.table(taches);
//console.log(nombreDeTachesEnRetard());

/**
 * Crée une fonction afficherTachesTerminees() 
 * qui affiche toutes les tâches dont la 
 * propriété estTerminee est true.
 */

function afficherTachesTerminees(){
    const tachesFiltrees = taches.filter((tache) => tache.estTerminee);
    tachesFiltrees.forEach((tache)=>{
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

    const tachesParPriorite = {
        nombreDeTachesFaible : 0,
        nombreDeTachesMoyenne : 0,
        nombreDeTachesHaute : 0
    }

    taches.forEach(tache => {
        switch(tache.priorite){
            case 'Faible':
                tachesParPriorite.nombreDeTachesFaible ++;
            break;
            case'Moyenne': 
                tachesParPriorite.nombreDeTachesMoyenne ++;
            break;
            case 'Haute':
                tachesParPriorite.nombreDeTachesHaute ++;
            break;
        }
    });

    return tachesParPriorite;
}

//console.table(taches);
//console.log(nombreDeTachesParPriorite());

/**
 * Crée une fonction afficherTacheFormattee(tache) 
 * qui prend une tâche et l'affiche dans un format lisible comme : 
 * "Tâche : [nom] | Date : [date] | Priorité : [priorité] | Statut : [statut]".
 */

function afficherTacheFormattee(tache){
    let statut = (tache.estTerminee) ? 'Complète' : 'Non complétée';
    console.log(`Tâche : ${tache.nom} | Date : ${tache.dateEcheance} | Priorité : ${tache.priorite} 
        | Statut : ${statut} | Description : ${tache.description}`)
}

/*taches.map(tache =>{
    afficherTacheFormattee(tache);
})*/

/*
 * Crée une fonction joursRestantsAvantEcheance(tache) 
 * qui calcule et retourne le nombre de jours restants 
 * avant la date d'échéance d’une tâche.
 */
function joursRestantsAvantEcheance(tache) {
    const now = moment();
    const dateEcheance = moment(tache.dateEcheance);

    if (dateEcheance.isAfter(now)) {
        const differenceMs = dateEcheance.diff(now);
        const differencesJours = differenceMs / (1000 * 60 * 60 * 24);
        console.log(`Le nombre de jours restants avant l'echéance est : ${Math.ceil(differencesJours)}`); 
    }else{
        console.log(`Il n'y a pas, le nombre de jours restants avant l'echéance`); 
    }
}
//joursRestantsAvantEcheance(tache);

const tache = {
    nom: 'Faire le sport',
    dateEcheance: moment("2024-11-29").format("YYYY-MM-DD"),
    priorite: 'Moyenne',
    estTerminee: false
}



/**
 * Crée une fonction tacheEnRetard(tache) 
 * qui vérifie si la date d’échéance d’une 
 * tâche est dépassée et si elle n’est pas terminée.
 */

function tacheEnRetard(tache){
    const now = moment().format("YYYY-MM-DD");
    const dateEcheance = moment(tache.dateEcheance);

    if (dateEcheance.isBefore(now) && ! tache.estTerminee) {
        console.log('Oui, La date d’échéance d’une tâche est dépassée et elle n’est pas terminée');
    }else{
        console.log('Non, La date d\'écheance n\'est pas depassée ou elle est déjà compléte');
    }
}
//tacheEnRetard(tache);

/**
 * Crée une fonction filtrerTachesParPrioriteEtStatut(priorite, statut) 
 * qui permet de filtrer les tâches à la fois 
 * par priorité et statut (complète ou non).
 */

function filtrerTachesParPrioriteEtStatut(priorite, statut){
    const verifierStatut = (statut === 'Complète') ? true : false;
    const tachesFiltre = taches.filter((tache) => tache.priorite === priorite && tache.estTerminee === verifierStatut);
    console.table(tachesFiltre)
}

//filtrerTachesParPrioriteEtStatut('Faible', 'Non complétée')

/**
 * Crée une fonction archiverTaches() qui déplace 
 * toutes les tâches terminées dans un tableau tachesArchivees. 
 * Affiche un message confirmant le déplacement 
 * des tâches terminées dans l'archive.
 */
let tachesArchivees = [];
function archiverTaches(){
    tachesArchivees = taches.filter((tache) => tache.estTerminee);
    console.log('Les tâches sont archivées')
    return tachesArchivees;
}

//archiverTaches()
//console.table(tachesArchivees)