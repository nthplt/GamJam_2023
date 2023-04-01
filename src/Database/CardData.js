const cardList = [
    {
        title: "Poisson Pané",
        img: "./assets/images/monster.png",
        attacks: {
            type: "attack",
            manaCost : 3,
            damage: 4,
        }
    },
    {
        title: "Bain d'eau douce",
        img: "./assets/images/monster.png",
        attacks: {
            manaCost : 4,
            type: "support",
            heal: 6,
        }
    },
    {
        title: "Huile",
        img: "./assets/images/monster.png",
        attacks: {
            manaCost : 2,
            type: "support",
            cleaning: true,
        }
    },
    {
        title: "Bouclier Divin",
        img: "./assets/images/monster.png",
        attacks: {
            manaCost : 9,
            type: "support",
            immunity: true,
        }
    },
    {
        title: "Coup de crâne chauve",
        img: "./assets/images/monster.png",
        attacks: {
            manaCost : 7,
            type: "attack",
            damage: 3,
            bleeding: 3,
        }
    },
    {
        title: "Oui",
        img: "./assets/images/monster.png",
        attacks: {
            manaCost : 4,
            type: "attack",
            damage: 0,
            stun: 1,
        }
    },
    {
        title: "Roulette russe",
        img: "./assets/images/monster.png",
        attacks: {
            manaCost : 8,
            type: "attack",
            damage: 15,
            random: true,
        }
    },
];

export default cardList