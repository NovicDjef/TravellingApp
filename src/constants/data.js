const carousselData = [
    {
        id: 1,
        image: require("../assets/images/1.jpg")
    },
    {
        id: 2,
        image: require("../assets/images/2.jpg")
    },
    {
        id: 3,
        image: require("../assets/images/3.jpg")
    },
    {
        id: 4,
        image: require("../assets/images/4.jpg")
    },
    {
        id: 5,
        image: require("../assets/images/5.jpeg")
    }
]

const destinations = [
    {
        id: 1,
        name: "Mbouda"
    },
    {
        id: 2,
        name: "Dechang"
    },
    {
        id: 3,
        name: "Douala"
    },
    {
        id: 4,
        name: "Yaoundé"
    },
    {
        id: 5,
        name: "Bafoussam"
    },

    {
        id: 6,
        name: "Edea"
    },
    {
        id: 7,
        name: "Balesing"
    },
    {
        id: 8,
        name: "Balevin"
    },

    {
        id: 9,
        name: "Kribi"
    },
]


const agenceVoyage = [
    {
        id: 1,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [ 5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 2,
        name: "Garantie Express",
        imageurl: require("../assets/images/fitness.jpg"),
        logoAgence: require("../assets/logo/tresor.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: false,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 3,
        name: "Finess Voyage",
        imageurl: require("../assets/images/global.jpg"),
        logoAgence: require("../assets/logo/global.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 4,
        name: "Tresor Voyage",
        imageurl: require("../assets/images/men.jpg"),
        logoAgence: require("../assets/logo/men.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", "PK 14", " A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 5,
        name: "Buca Voyage",
        imageurl: require("../assets/images/touristique.jpg"),
        logoAgence: require("../assets/logo/touristique.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 6,
        name: "Touristique Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/touristique.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 7,
        name: "United Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/fint.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 8,
        name: "Avenir Voyage",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/fint.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },

     {
        id: 9,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 10,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 11,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },

    {
        id: 12,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 13,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 14,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },

    {
        id: 15,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 16,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 17,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 18,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 19,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },
    {
        id: 20,
        name: "Generale Express",
        imageurl: require("../assets/images/generale.jpg"),
        logoAgence: require("../assets/logo/general.jpg"),
        description: " Nous vous garantisons le voyage de vos reves car votre vie est notre priorité ",
        Lieu: [" A douala nous somme situé a Bependa tonaire", 
        "A Bafoussam nous sommes situé Binam entrer de la ville", 
        "A Dschang nous somme situé juste pres de l'université de Dschang", 
        "A Mbouda nous sommes situé a Balessing, au marché de bagang, Batcham chefferie"],
        prix: [5000, 6500 ],
        horaire: [
            "05h00",
            "06h00",
            "07h00",
            "08h00",
            "09h00",
            "10h00",
            "11h00",
            "12h100",
            "13h00",
            "14h00",
            "15h00",
            "16h00",
            "17h00"
        ],
        destination: ["Bafoussam", "Dschang", "Douala", "Mbouda", "Balessing", "Kribi", "Balevin", "Batcham", "Badjoun", "Yaoundé"],
        status: ["classique", "VIP"],
        reservation: true,
        place: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    },

]

export default {
    destinations,
    agenceVoyage,
    carousselData
}