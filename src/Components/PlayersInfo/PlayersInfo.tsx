import React, { useState } from "react";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import { useForm, SubmitHandler } from "react-hook-form";
import DefaultPlayer from "../PlayerDetails/DefaultPlayer";

type Inputs = {
  name: string;
  age: number;
  playAs: string;
  description?: string;
};

interface IPlayerType {
  name: string;
  age: number;
  playAs: string;
  description?: string;
}

const players: IPlayerType[] = [
  {
    name: "Masrafee(C)",
    playAs: "Bowler",
    age: 36,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eligendi error.",
  },
  {
    name: "Sakib(VC)",
    playAs: "Alrounder",
    age: 32,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eligendi error.",
  },
  {
    name: "Musfiqur(WC)",
    playAs: "Batsman",
    age: 34,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eligendi error.",
  },
  {
    name: "Mahmudullah",
    playAs: "Allrounder",
    age: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eligendi error.",
  },
];

const PlayersInfo = () => {
  const [restPlayer, setRestPlayer] = useState<IPlayerType[]>([]);
  const handleRemove = (name: string) => {
    const newPlayer = restPlayer.filter((rest) => rest.name !== name);
    setRestPlayer(newPlayer);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    if (data) {
      setRestPlayer([...restPlayer, data]);
      e?.target.reset();
    }
  };
  return (
    <div className="container ">
      <h3 className="text-center py-5">Make Your Cricket XI of Bangladesh</h3>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {players.map((player) => (
              <DefaultPlayer key={player.name} player={player} />
            ))}
            {restPlayer.map((player) => (
              <PlayerDetails
                key={player.name}
                player={player}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-4 p-5">
          <h5>Add rest players</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register("name", { required: true })}
                className="form-control mt-4"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div>
              <input
                {...register("age", { required: true })}
                className="form-control mt-2"
                placeholder="Age"
              />
              {errors.age && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div>
              <input
                {...register("playAs", { required: true })}
                className="form-control mt-2"
                placeholder="Play as"
              />
              {errors.playAs && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div>
              <textarea
                {...register("description")}
                className="form-control mt-2"
                placeholder="Description"
              />
            </div>

            <input type="submit" className="btn btn-primary w-100 mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayersInfo;
