"use client"

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Cards from "./components/card";
import Hero from "./components/hero";
import Title from "./components/title";
import Pieces from "./components/pieces";
import Cover from "./components/cover";
import CoverBox from "./components/coverBox";
import SubBanner from "./components/subBanner";
import Videos from "./components/videos";
import Video from "./components/video";
import HeroCard from "./components/heroCard";
import useWindowSize from "@/app/hooks/useWindowsSize";
import { useEffect, useState } from "react";
import HeroMobile from "./components/heroMobile";
import SubBannerMobile from "./components/subBannerMobile";
import HeroCardMobile from "./components/heroCardMobile";
import CoverBoxMobile from "./components/coverBoxMobile";
import CoverMobile from "./components/coverMobile";
import PiecesMobile from "./components/piecesMobile";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 1080) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);
  const className = mobile
    ? "flex flex-col gap-5 my-20 px-5"
    : "flex flex-col gap-5 my-20 px-20";

  return (
    <div>
      {!mobile && (
        <Hero
          title="T-Cross Tecnologias em motores turbo"
          subtitle="2º Treinamento"
          dateTime="Dia 16 de Abril | às 00:00"
          background="https://t.ctcdn.com.br/n5EmxtRS2sDQHvi-JFF9C_im8Lk=/4320x2430/smart/i558323.jpeg"
        >
          <HeroCard
            title="Motor V6 - Amarok"
            subtitle="2º Treinamento"
            date="16/04"
            image="https://placehold.co/250"
            status={false}
          />
          <HeroCard
            title="Motor V6 - Amarok"
            subtitle="2º Treinamento"
            date="16/04"
            image="https://placehold.co/250"
            status={false}
          />
          <HeroCard
            title="Motor V6 - Amarok"
            subtitle="2º Treinamento"
            date="16/04"
            image="https://placehold.co/250"
            status={false}
          />
        </Hero>
      )}

      {mobile && (
        <>
          <HeroMobile
            title="T-Cross Tecnologias em motores turbo"
            subtitle="2º Treinamento"
            dateTime="Dia 16 de Abril | às 00:00"
            background="https://t.ctcdn.com.br/n5EmxtRS2sDQHvi-JFF9C_im8Lk=/4320x2430/smart/i558323.jpeg"
          ></HeroMobile>
          <div
            style={{
              height: 30,
            }}
          ></div>
          <div className="px-5">
            <HeroCardMobile
              title="Motor V6 - Amarok"
              subtitle="2º Treinamento"
              date="16/04"
              image="https://placehold.co/250"
              status={false}
            />
            <HeroCardMobile
              title="Motor V6 - Amarok"
              subtitle="2º Treinamento"
              date="16/04"
              image="https://placehold.co/250"
              status={false}
            />
            <HeroCardMobile
              title="Motor V6 - Amarok"
              subtitle="2º Treinamento"
              date="16/04"
              image="https://placehold.co/250"
              status={false}
            />
          </div>
        </>
      )}

      <main className={className}>
        <Videos>
          <Video url="https://placehold.co/1360x768" />
          <Video url="https://placehold.co/1360x768" />
          <Video url="https://placehold.co/1360x768" />
        </Videos>

        <Box>
          <Title title="Últimas edições" />
        </Box>
        {mobile ? (
          <CoverMobile>
            <CoverBoxMobile image="https://placehold.co/50" />
            <CoverBoxMobile image="https://placehold.co/50" />
            <CoverBoxMobile image="https://placehold.co/50" />
            <CoverBoxMobile image="https://placehold.co/50" />
          </CoverMobile>
        ) : (
          <Cover>
            <CoverBox image="https://placehold.co/50" />
            <CoverBox image="https://placehold.co/50" />
            <CoverBox image="https://placehold.co/50" />
            <CoverBox image="https://placehold.co/50" />
          </Cover>
        )}
        {/* <Cover>
          <CoverBox image="https://placehold.co/50" />
          <CoverBox image="https://placehold.co/50" />
          <CoverBox image="https://placehold.co/50" />
          <CoverBox image="https://placehold.co/50" />
        </Cover> */}

        {mobile ? (
          <SubBannerMobile
            title="Economy"
            subtitle="Catálogo"
            image="https://placehold.co/1920x1080"
          >
            A eficiência de manutenção da Volkswagen não se discute. Um serviço
            para veículos com mais de 3 anos que garante a mesma segurança das
            peças aplicadas em veículos zero quilômetro. Acesse o guia gratuito
            do Catálogo Economy e saiba mais.
          </SubBannerMobile>
        ) : (
          <SubBanner
            title="Economy"
            subtitle="Catálogo"
            image="https://placehold.co/1920x1080"
          >
            A eficiência de manutenção da Volkswagen não se discute. Um serviço
            para veículos com mais de 3 anos que garante a mesma segurança das
            peças aplicadas em veículos zero quilômetro. Acesse o guia gratuito
            do Catálogo Economy e saiba mais.
          </SubBanner>
        )}

        <Box>
          <Title title="Peças VW" />
        </Box>
        {mobile ? (
          <PiecesMobile>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
          </PiecesMobile>
        ) : (
          <Pieces>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
            <Cards
              title="Óleo Hidráulico"
              code="GASEADS"
              image="https://placehold.co/250"
            >
              Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta, New Beetle, Passat,
              Polo, Santana, Saveiro, SpaceFox, Tourareg
            </Cards>
          </Pieces>
        )}
      </main>
    </div>
  );
}
