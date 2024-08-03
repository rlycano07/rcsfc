import React, { useState, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function LineUp() {
  return (
    <div className="container">
      <div class="football-pitch pitch-grid">
        <div id="player-1" class="player lcf">1</div>
        <div id="player-2" class="player rcf">2</div>
        <div id="player-3" class="player cam">3</div>
        <div id="player-4" class="player lm">4</div>
        <div id="player-5" class="player cdm">5</div>
        <div id="player-6" class="player rm">6</div>
        <div id="player-7" class="player lb">7</div>
        <div id="player-8" class="player lcb">8</div>
        <div id="player-9" class="player rcb">9</div>
        <div id="player-10" class="player rb">10</div>
        <div id="player-11" class="player gk">11</div>
      </div>
    </div>
  );
}

export default LineUp;
