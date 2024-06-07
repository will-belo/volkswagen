"use client";
// @refresh reset

import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Title from "../components/title";
import SubscribeModal from "../components/subscribe";
import moment from "moment";
import DescriptionIcon from "@mui/icons-material/Description";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import UserContext from "@/src/contexts/UserContext";
import { DialerSip } from "@mui/icons-material";
import Image from "next/image";
import kombiHeader from "@/images/kombi.png";

export default function Training() {
  const [trainings, setTrainings] = React.useState([]);
  const [training, setTraining] = React.useState([]);
  const { isAuthenticated, userData, logout } = React.useContext(UserContext);

  React.useEffect(() => {
    const getTrainings = async () => {
      const request = await fetch("/api/trainings", {
        method: "GET",
      });

      const response = await request.json();
      setTrainings(response);

      if (request.ok) {
        response.map((training, index) => {
          if (training.active == 1) {
            setTraining(training);
            console.log(training);
          }
        });
      } else {
        setTrainings(response);
      }
    };

    getTrainings();
  }, []);

  return (
    <main className="flex flex-col gap-5 px-5">
      <div className="relative lg:h-80 bg-blue-900 flex justify-center items-center lg:py-28 py-20 rounded-3xl">
        <Image
          src={kombiHeader}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
          className="z-0 rounded-3xl"
        />
        <div className="relative z-10 text-white font-bold lg:text-6xl text-4xl">
          Treinamento
        </div>
      </div>

      <div className="lg:px-40">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-5">
          <div className="col-span-1">
            <div className="flex flex-col items-center gap-5">
              <div className="bg-slate-200 rounded-xl font-bold text-blue-900 py-1 px-3 shadow shadow-slate-500">
                Todos os treinamentos
              </div>
              <div className=" hidden bg-slate-200 shadow shadow-slate-500 rounded-xl w-full font-bold text-blue-900 py-1 px-5 mx-10 max-h-32 overflow-y-auto">
                {trainings.map((training, key) => (
                  <div key={key} className="my-3">
                    <span className="">
                      Data: {moment(training.date).format("DD/MM/YYYY")} -
                    </span>
                    <span className="font-normal"> {training.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900 flex flex-col gap-y-5 w-full rounded-xl py-10 px-5 shadow shadow-slate-500">
                <div className="text-white text-center font-bold text-2xl lg:text-4xl">
                  Treinamento - Volkswagen
                </div>
                <div className="text-center text-white font-semibold lg:text-3xl">
                  {training.name}
                </div>
                <div className="text-center text-white font-thin lg:text-3xl text-xl">
                  {moment(training.date).format("DD/MM/YYYY")} - às 19:30
                </div>

                <div className="w-full flex justify-center">
                  <SubscribeModal content={training} type={"insert"}>
                    Fazer Inscrição
                  </SubscribeModal>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-center gap-5">
              <div className="bg-slate-200 rounded-xl font-bold text-blue-900 py-1 px-3 shadow shadow-slate-500">
                Cronograma
              </div>

              <div className="bg-slate-200 shadow shadow-slate-500 rounded-tr-3xl rounded-bl-3xl flex flex-col gap-y-5 justify-center text-blue-900 w-full lg:px-32 px-4 py-10">
                <div className="w-full flex items-center justify-between text-2xl">
                  <div className="font-bold ">19h30</div>
                  <div className="font-extralight flex flex-col items-center">
                    Em breve
                  </div>

                  <div className="font-bold">30 min</div>
                </div>
                <hr className="border-blue-900" />

                <div className="w-full flex items-center justify-between text-2xl">
                  <div className="font-bold ">20h00</div>
                  <div className="font-extralight flex flex-col items-center">
                    Em breve
                  </div>

                  <div className="font-bold">30 min</div>
                </div>
                <hr className="border-blue-900" />
                <div className="w-full flex items-center justify-between text-2xl">
                  <div className="font-bold ">20h30</div>
                  <div className="font-extralight">Em breve</div>
                  <div className="font-bold">30 min</div>
                </div>
                <hr className="border-blue-900" />
                <div className="w-full flex items-center justify-between text-2xl">
                  <div className="font-bold ">21h00</div>
                  <div className="font-extralight">Em breve</div>
                  <div className="font-bold">30 min</div>
                </div>
                <hr className="border-blue-900" />
                <div className="w-full flex items-center justify-between text-2xl">
                  <div className="font-bold ">21h30</div>
                  <div className="font-extralight">Em breve</div>
                  <div className="font-bold">30 min</div>
                </div>
                <hr className="border-blue-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function DescriptionCard(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#023489",
        color: "white",
        borderRadius: 3,
        py: 2,
        px: 3,
      }}
    >
      <Typography
        variant="h5"
        className="flex items-center gap-x-2 font-semibold"
      >
        {props.icon} {props.description}
      </Typography>
      <Typography variant="body1" className="font-thin">
        {props.content}
      </Typography>
    </Box>
  );
}
