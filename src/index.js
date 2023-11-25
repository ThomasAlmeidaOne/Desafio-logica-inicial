let nomeHeroi = "MitoOne"
let xp = 11000;

console.log("🛡️🌟 A bravura de "+ nomeHeroi+ " é lendária! 🌟🛡️")

if(xp > 0 && xp <= 1000){

    console.log("✨💫 Nivel de Herói: Ferro🔗 💫✨");

}else if(xp > 1000 && xp <= 2000){

    console.log("✨💫 Nivel de Herói: Bronze🥉 💫✨");

}else if(xp > 2000 && xp <= 5000){

    console.log("✨💫 Nivel de Herói: Prata🥈 💫✨");

}else if(xp > 5000 && xp <= 6000){

    console.log("✨💫 Nivel de Herói: Ouro🏆 💫✨");

}else if(xp > 6000 && xp <= 8000){

    console.log("✨💫 Nivel de Herói: Platina💎 💫✨");

}else if(xp > 8000 && xp <= 9000){

    console.log("✨💫 Nivel de Herói: Ascedente⭐️ 💫✨");

}else if(xp > 9000 && xp <= 10000){

    console.log("✨💫 Nivel de Herói: Imortal⚔️ 💫✨");

}else if(xp > 10000){

    console.log("✨💫 Nivel de Herói: Radiante🔱 💫✨");

}else if(xp < 0){

    console.log("⚠️ O XP digitado é inválido. Por favor, insira um valor válido.");

}
