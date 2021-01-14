/*
let identite = {
    nom: 'Tararuj',
    prenom: 'Dawid',
    age: 23, 
    taille: '1m80'
}

console.log(identite);
console.log(identite.age);

let identite2 = {
    nom: 'nompers2',
    prenom: 'prenompers2',
    age: 112, 
    taille: '1m50'
}

let identite3 = { 
    nom: "",
    prenom: "",
    age: "", 
    taille: ""
}


identite3.nom = identite.nom; 
identite3.age = identite2.age;
identite3.taille = "1.50"; 

let personnage4 = {

    saluer(personne){
        console.log(`Coucou ${personne.prenom}`);
    }
}


personnage4.saluer(identite2); 


let pers5 = {
    nom: "Connaispas", 
    prenom: "Jean", 
    age: 499, 
    taille: "1m67",

    sepresenter(){
        return `Je m'appelle ${pers5.prenom} ${pers5.nom}`; 
    }
}

console.log( pers5.sepresenter() );

let tel = {
    marque: "Apple",

    changeMarque(){
        x=prompt("a quel nom veux tu changer le nom de la marque? "); 
        this.marque = x; 
        alert(this.marque); 
        return this.marque; 
    }
}


console.log(tel.marque);

console.log( tel.changeMarque() );

console.log(tel.marque);


let personne1 = {
    nom: "Jean",
    age: 90
}

let personne2 = {
    nom: "saispas",
    age: 50
}

let voleur = {
    usurpation(){
        this.nom = personne1.nom,
        this.age = personne2.age 
    }
}




let pers = []; 

let personnages = {
    nom: this.nom, 

    prenom: this.prenom, 

    panier: [],

    createPers(nom,prenom,articles){
        let patt = /([A-Za-z])+\w/g; 
        let panier = articles.match(patt); 
        this.nom = nom, 
        this.prenom = prenom, 
        this.panier = panier; 

        pers.push({nom, prenom, panier}),

        result = `Voici ${personnages.nom} ${personnages.prenom}, ses achats: ${personnages.panier}`;
        return result;
    },

    voleArticle(quiVol, aQui, nomart){
        quiVol = this.prenom; 
        pers.forEach( (e,i) => {
            let perscheck = pers[i];
            if(perscheck.prenom == aQui){
                if(perscheck.panier.includes(nomart)){
                    console.log("il ya le truc ds panier");
                    this.panier.push(nomart);
                    perscheck.panier.splice( perscheck.panier.indexOf(nomart) ,1);
                }else{
                    console.log("i l y a pasle truc dsd panier");
                }
            }
        });
        return `${quiVol} qui vole [ ${nomart} ]  à ${aQui}`;
    }

}

console.log(pers); 


personnages.createPers("Steam", "François","huile iphone tomate pain");

console.log(pers); 

personnages.createPers("Origin", "Sergio","banane fraises");

console.log(pers); 

console.log(personnages.voleArticle("Sergio", "François", "tomate")); 


console.log(pers);




*/