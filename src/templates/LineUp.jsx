import React, { useState, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function LineUp() {
  return (
    <div className="container">
      <div class="football-pitch formation-4-3-3">
        <div class="attack-row row-players-3">
          <div id="player-1" class="player">
            1
          </div>
          <div id="player-2" class="player">
            2
          </div>
          <div id="player-3" class="player">
            3
          </div>
        </div>
        <div class="mid-row row-players-3">
          <div id="player-4" class="player">
            4
          </div>
          <div id="player-5" class="player">
            5
          </div>
          <div id="player-6" class="player">
            6
          </div>
        </div>
        <div class="defence-row row-players-4">
          <div id="player-7" class="player">
            7
          </div>
          <div id="player-8" class="player">
            8
          </div>
          <div id="player-9" class="player">
            9
          </div>
          <div id="player-10" class="player">
            10
          </div>
        </div>
        <div class="gk-row row-players-1">
          <div id="player-11" class="player">
            11
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineUp;
