const bienvenu = {
    entete: "Qui sommes-nous?",
    description: "Nous sommes des jeunes développeurs passionnés de la technologie et aussi de l'informatique. nous sommes ravie de vous voir parmi nous!"
};

const fact = {
    entete: "Fact",
    description: "Nous sommes des jeunes développeurs passionnés de la technologie et aussi de l'informatique. nous sommes ravie de vous voir parmi nous!",
    activies: [
        {
            emojie: "fas fa-smile",
            point: 50,
            note: "Happy client"
        },
        {
            emojie: "fas fa-heart",
            point: 3,
            note: "Projects"
        },
        {
            emojie: "fas fa-award",
            point: 2,
            note: "Awards"
        },
        {
            emojie: "fas fa-server",
            point: 4,
            note: "Services"
        },
    ]
};

const apropos = {
    entete: "A propos de moi",
    description: "Je suis un jeune homme passionnée de la technologie surtout de l'informatique et la programmation. Ca fait 5 ans maintenant que je me suis trouver dans cette filière et je tiens à toujours améliorer mes capacités grace à des divers exercices et de recherches continuellement.",
    content: [
        {
            titre: "Nom",
            data: "RAZAFINDRANAIVO"
        },
        {
            titre: "Prénoms",
            data: "Hermann Christian"
        },
        {
            titre: "Née le",
            data: "16 Octobre 1999"
        },
        {
            titre: "Habite à",
            data: "Ankadiivo Alasora"
        },
        {
            titre: "Code postal",
            data: "Antananarivo 101"
        },
    ],
    contact: [
        {
            titre: "Mail",
            icon: "fas fa-envelope",
            data: "hermanrazafinbdranaivo@gmail.com"
        },
        {
            titre: "Téléphone",
            icon: "fas fa-phone",
            data: "+123 33 31 570 63"
        },
        {
            titre: "Adresse",
            icon: "fas fa-map",
            data: "Lot G 129 Bis Ankadiaivo Alasora Antananarivo"
        },
        {
            titre: "Facebook",
            icon: "fab fa-facebook",
            data: "Hermann Riah Christian"
        },
        {
            titre: "Instagram",
            icon: "fab fa-instagram",
            data: "Herman Riah christian"
        },
        {
            titre: "Twitter",
            icon: "fab fa-twitter",
            data: "@riah19"
        },
    ],
    skill: {
        theme: [
            {
               title: "Développement Web",
               content: [
                   {
                       matiere: "HTML/CSS",
                       point: 80
                   },
                   {
                       matiere: "Javascript",
                       point: 75
                   },
                   {
                       matiere: "Python",
                       point: 60
                   },
                   {
                       matiere: "PHP/MySQL",
                       point: 40
                   }
               ]  
            },
            {
                title: "Développement Logiciel",
                content: [
                    {
                        matiere: "C/C++",
                        point: 80
                    },
                    {
                        matiere: ".Net",
                        point: 75
                    },
                    {
                        matiere: "Dart",
                        point: 50
                    },
                    {
                        matiere: "Java",
                        point: 35
                    }
                ]  
            },
        ]
    }
};

export { bienvenu, fact, apropos };