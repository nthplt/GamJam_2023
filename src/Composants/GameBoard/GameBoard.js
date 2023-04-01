import React, { useState, useEffect } from "react";
import Boss from "../Boss/Boss";
import enemyList from "../../Database/EnemyData";
import Deck from "../Deck/Deck";
import Player from "../Player/Player";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./GameBoard.css";
const GameBoard = () => {
  /**
   * Propriétés concernant le déroulement du jeu
   * turn = 1 // Tour du joueur
   * turn = 2 // Tour du monstre
   */

  const [turn, setTurn] = useState(1);
  let promisedSetState = (newState) =>
    new Promise((resolve) => setTurn(newState, resolve));

  /**
   * Propriétés concernant le boss
   */

  const boss = enemyList[0];

  const [lifeBoss, setLifeBoss] = useState(boss.life);
  const initialLifeBoss = boss.life;

  const [immunityBoss, setImmunityBoss] = useState(false);
  const [bleedingBoss, setBleedingBoss] = useState(false);
  const [stunBoss, setStunBoss] = useState(false);

  /**
   * Fonction permettant d'infliger des dégâts au boss
   * @param damage Dégâts infligés par le joueur
   * @param random Si les dégâts sont aléatoires, passe par Math.random
   */
  const attackBoss = (damage, random) => {
    if (random) {
      damage = Math.floor(Math.random() * damage);
    }
    if (lifeBoss - damage > 0) {
      setLifeBoss(lifeBoss - damage);
    } else {
      setLifeBoss(0);
    }
  };

  const bossTurn = () => {
    console.log(turn);
    if (turn % 2 === 0) {
      let attacks = boss.attacks;
      if (lifeBoss === initialLifeBoss) {
        attacks = attacks.filter((attack) => !attack.heal);
      }
      const index = Math.floor(Math.random() * attacks.length);
      let attack = attacks[index];
      if (attack.type === "attack") {
        bossAttack(attack);
      } else if (attack.type === "support") {
        bossEffect(attack);
      }
    }
  };

  const bossAttack = (attack) => {
    let damage = attack.damage;
    if (attack.random) {
      damage = Math.floor(Math.random() * damage);
    }
    if (lifePlayer - damage > 0) {
      setLifePlayer(lifePlayer - damage);
    } else {
      setLifePlayer(0);
    }
  };

  const bossEffect = (attack) => {
    if (attack.heal && lifeBoss + attack.heal <= initialLifeBoss) {
      setLifeBoss(lifeBoss + attack.heal);
    }
    if (attack.cleaning) {
      setBleedingBoss(false);
      setStunBoss(false);
    }
    if (attack.immunity) {
      setImmunityBoss(true);
    }
  };

  /**
   * Propriétés concernant le joueur
   */

  const [lifePlayer, setLifePlayer] = useState(100);
  const initialLifePlayer = 100;
  const [immunityPlayer, setImmunityPlayer] = useState(false);
  const [bleedingPlayer, setBleedingPlayer] = useState(false);
  const [stunPlayer, setStunPlayer] = useState(false);

  const playerTurn = async (props) => {
    async function nextTurn() {
      await setTurn(turn + 1);
    }

    await nextTurn();

    console.log(turn);

    if (props.type === "support") {
      selfEffect(props.heal, props.cleaning, props.immunity);
    } else if (props.type === "attack") {
      attackBoss(props.damage, props.random);
    }
  };

  const selfEffect = (heal, cleaning, immunity) => {
    if (heal && lifePlayer + heal <= initialLifePlayer) {
      setLifePlayer(lifePlayer + heal);
    }
    if (cleaning) {
      setBleedingPlayer(false);
      setStunPlayer(false);
    }
    if (immunity) {
      setImmunityPlayer(true);
    }
  };

  // useEffect(() => {
  //     setTurn(turn + 1);
  // }, [turn]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div>
          {turn % 2 !== 0 ? "À vous de jouer" : "C'est à l'adversaire de jouer"}
        </div>
        <Boss life={lifeBoss} initialLifeBoss={initialLifeBoss} />
        <Player
          life={lifePlayer}
          initialLifePlayer={initialLifePlayer}
          bleedingPlayer={bleedingPlayer}
          immunityPlayer={immunityPlayer}
          stunPlayer={stunPlayer}
        />
        <Deck playerTurn={playerTurn} />
      </DndProvider>
    </>
  );
};

export default GameBoard;
