import React from "react";
interface IPlayer {
  player: { name: string; playAs?: string; age: number; description?: string };
}

interface IRemove {
  handleRemove: (name: string) => void;
}

const PlayerDetails = (props: IPlayer & IRemove) => {
  const { name, playAs, age, description } = props.player;
  const handleRemove = props.handleRemove;
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
      <div
        className="card border-dark"
        style={{ height: "12rem", overflow: "auto" }}
      >
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5>{name}</h5>
          <h6 className="text-muted">{age}Years Old</h6>
        </div>

        <div className="card-body text-dark">
          <h5 className="card-title text-center">{playAs}</h5>
          <p className="card-text text-muted text-justify">{description}</p>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleRemove(name);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default PlayerDetails;
