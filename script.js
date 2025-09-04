// Weapon data: name, attack bonus, damage dice (e.g., 1d8+3)
const weapons = {
    Heartwood Crossbow: { name: "Heartwood Crossbow", attackBonus: 6, damage: { dice: 1, sides: 6, bonus: 3 } },
    Fire Bolt: { name: "Fire Bolt", attackBonus: 6, damage: { dice: 2, sides: 10, bonus: 0 } },
    Produce Flame: { name: "Produce Flame", attackBonus: 6, damage: { dice: 2, sides: 8, bonus: 0 } },
    Chromatic Orb: { name: "Chromatic Orb", attackBonus: 6, damage: { dice: 3, sides: 8, bonus: 0 } },
    Guiding Bolt: { name: "Guiding Bolt", attackBonus: 6, damage: { dice: 4, sides: 6, bonus: 0 } },
    }

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
