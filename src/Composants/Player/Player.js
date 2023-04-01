import React from "react";
import LifeBar from "../LifeBar/LifeBar";

const Player = ({
  life,
  initialLifePlayer,
  bleedingPlayer,
  stunPlayer,
  immunityPlayer,
}) => {
  return (
    <div className="player-container">
      {bleedingPlayer && <div>"Saignement en cours"</div>}
      {stunPlayer && <div>"Stun en cours"</div>}
      {immunityPlayer && <div>"Immunité"</div>}
      <LifeBar life={life} initialLifeBoss={initialLifePlayer} />
    </div>
  );
};

export default Player;
