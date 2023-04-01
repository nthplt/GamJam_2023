const enemyList = [
    {
        name: "Adam",
        img: "./assets/images/monster.png",
        description: 'Le troll des océans',
        life: 100,
        attacks: [
            {
                type: 'attack',
                damage: 6,
            },
            {
                type: 'support',
                heal: 5,
            },
            {
                type: 'attack',
                bleeding: 3,
                damage: 5,
            }
        ],
    },
]

export default enemyList