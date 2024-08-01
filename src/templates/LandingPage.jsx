import React, { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

// Define constants for player dimensions and pitch layout
const PLAYER_WIDTH = 60;
const PLAYER_HEIGHT = 80;
const PITCH_WIDTH = 500;
const PITCH_HEIGHT = 700;
const ROW_GAP = 10; // Gap between rows
const COLUMN_GAP = 10; // Gap between columns

// Function to calculate initial positions for players
const getInitialPositions = () => {
  const positions = [];
  // Row 1: 3 players
  for (let i = 0; i < 3; i++) {
    positions.push({
      id: i,
      left: i * (PLAYER_WIDTH + COLUMN_GAP),
      top: 0,
    });
  }
  // Row 2: 3 players
  for (let i = 0; i < 3; i++) {
    positions.push({
      id: i + 3,
      left: i * (PLAYER_WIDTH + COLUMN_GAP),
      top: PLAYER_HEIGHT + ROW_GAP,
    });
  }
  // Row 3: 4 players
  for (let i = 0; i < 4; i++) {
    positions.push({
      id: i + 6,
      left: i * (PLAYER_WIDTH + COLUMN_GAP),
      top: 2 * (PLAYER_HEIGHT + ROW_GAP),
    });
  }
  // Row 4: 1 player (centered)
  positions.push({
    id: 10,
    left: (PITCH_WIDTH - PLAYER_WIDTH) / 2,
    top: 3 * (PLAYER_HEIGHT + ROW_GAP),
  });
  return positions;
};

function LandingPage() {
  const [players, setPlayers] = useState(getInitialPositions());
  const [draggingPlayerId, setDraggingPlayerId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((event, playerId) => {
    setDraggingPlayerId(playerId);
    const playerElement = document.getElementById(`player-${playerId}`);
    const rect = playerElement.getBoundingClientRect();
    setOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (draggingPlayerId !== null) {
        setPlayers((prevPlayers) =>
          prevPlayers.map((player) => {
            if (player.id === draggingPlayerId) {
              const container = document.querySelector(".football-pitch");
              const containerRect = container.getBoundingClientRect();
              const newLeft = Math.max(
                0,
                Math.min(
                  event.clientX - containerRect.left - offset.x,
                  containerRect.width - PLAYER_WIDTH
                )
              );
              const newTop = Math.max(
                0,
                Math.min(
                  event.clientY - containerRect.top - offset.y,
                  containerRect.height - PLAYER_HEIGHT
                )
              );
              return { ...player, left: newLeft, top: newTop };
            }
            return player;
          })
        );
      }
    },
    [draggingPlayerId, offset]
  );

  const handleMouseUp = useCallback(() => {
    setDraggingPlayerId(null);
  }, []);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="container">
      <div className="football-pitch">
        {players.map((player) => (
          <div
            key={player.id}
            id={`player-${player.id}`}
            className="player"
            style={{ left: `${player.left}px`, top: `${player.top}px` }}
            onMouseDown={(event) => handleMouseDown(event, player.id)}
          >
            {player.id + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
