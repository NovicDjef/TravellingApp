const carousselData = [
    {
        id: 1,
        image: require("../assets/images/")
    },
    {
        id: 1,
        image: require("../assets/images/")
    },
    {
        id: 1,
        image: require("../assets/images/")
    },
    {
        id: 1,
        image: require("../assets/images/")
    }
]

const destinarions = [
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
        Lieu: ["Bependa tonaire", "Bonaberie"],
        prix: [3500, 4000, 5000, 6000 ],
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
        destinarion: destinarions,
        status: ["classique", "VIP"]

    }
]

export default {
    destinarions,
    agenceVoyage,
    carousselData
}