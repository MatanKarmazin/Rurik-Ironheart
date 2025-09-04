// Weapon data: name, attack bonus, damage dice (e.g., 1d8+3)
const weapons = {
    warhammer: { name: "Warhammer", attackBonus: 5, damage: { dice: 1, sides: 8, bonus: 3 } },
    longsword: { name: "Longsword", attackBonus: 4, damage: { dice: 1, sides: 8, bonus: 2 } },
    mace: { name: "Mace", attackBonus: 3, damage: { dice: 1, sides: 6, bonus: 2 } },
    greatsword: { name: "Greatsword", attackBonus: 5, damage: { dice: 2, sides: 6, bonus: 3 } }
};

function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollDice(num, sides) {
    let total = 0;
    let rolls = [];
    for (let i = 0; i < num; i++) {
        let roll = rollDie(sides);
        rolls.push(roll);
        total += roll;
    }
    return { total, rolls };
}

function simulateAttack(weaponKey) {
    const weapon = weapons[weaponKey];
    // Attack roll: d20 + attack bonus
    const attackRoll = rollDie(20);
    const attackTotal = attackRoll + weapon.attackBonus;
    // Damage roll: weapon dice + bonus
    const dmg = rollDice(weapon.damage.dice, weapon.damage.sides);
    const damageTotal = dmg.total + weapon.damage.bonus;
    return {
        weapon: weapon.name,
        attackRoll,
        attackBonus: weapon.attackBonus,
        attackTotal,
        damageRolls: dmg.rolls,
        damageBonus: weapon.damage.bonus,
        damageTotal
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const attackBtn = document.getElementById("attack-btn");
    const weaponSelect = document.getElementById("weapon-select");
    const resultDiv = document.getElementById("sim-result");
    if (!attackBtn) return;
    attackBtn.addEventListener("click", function () {
        const weaponKey = weaponSelect.value;
        const result = simulateAttack(weaponKey);
        resultDiv.innerHTML = `
			<strong>Weapon:</strong> ${result.weapon}<br>
			<strong>Attack Roll:</strong> d20 (${result.attackRoll}) + ${result.attackBonus} = <span style="color:blue;">${result.attackTotal}</span><br>
			<strong>Damage Roll:</strong> ${result.damageRolls.length}d${weapons[weaponKey].damage.sides} (${result.damageRolls.join(", ")}) + ${result.damageBonus} = <span style="color:red;">${result.damageTotal}</span>
		`;
    });
});
