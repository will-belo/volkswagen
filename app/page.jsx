"use client"

import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material"
import Cards from "./components/card"
import Hero from "./components/hero"
import Title from "./components/title"
import Pieces from "./components/pieces"
import Cover from "./components/cover"
import CoverBox from "./components/coverBox"
import SubBanner from "./components/subBanner"
import Videos from "./components/videos"
import Video from "./components/video"
import HeroCard from "./components/heroCard"

export default function Home() {

  return (
    <div>
      <Hero title="T-Cross Tecnologias em motores turbo" subtitle="2º Treinamento" dateTime="Dia 16 de Abril | às 00:00" background="https://t.ctcdn.com.br/n5EmxtRS2sDQHvi-JFF9C_im8Lk=/4320x2430/smart/i558323.jpeg">
        <HeroCard title="Motor V6 - Amarok" subtitle="2º Treinamento" date="16/04" image="https://placehold.co/250" status={false} />
        <HeroCard title="Motor V6 - Amarok" subtitle="2º Treinamento" date="16/04" image="https://placehold.co/250" status={false} />
        <HeroCard title="Motor V6 - Amarok" subtitle="2º Treinamento" date="16/04" image="https://placehold.co/250" status={false} />
      </Hero>

      <main className="flex flex-col gap-5 my-20 px-20">
        <Videos>
          <Video url="https://placehold.co/1360x768" />
        </Videos>

        <Box>
          <Title title="Últimas edições" />
        </Box>

        <Cover>
          <CoverBox image="https://placehold.co/50" />
          <CoverBox image="https://placehold.co/50" />
          <CoverBox image="https://placehold.co/50" />
          <CoverBox image="https://placehold.co/50" />
        </Cover>

        <SubBanner title="Economy" subtitle="Catálogo" image="https://placehold.co/1920x1080">
          A eficiência de manutenção da
          Volkswagen não se discute. Um
          serviço para veículos com mais de 3
          anos que garante a mesma segurança
          das peças aplicadas em veículos zero
          quilômetro. Acesse o guia gratuito do
          Catálogo Economy e saiba mais.
        </SubBanner>

        <Box>
          <Title title="Peças VW" />
        </Box>

        <Pieces>
          <Cards title="Óleo Hidráulico" code="GASEADS" image="https://placehold.co/250">
            Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta,
            New Beetle, Passat, Polo, Santana, Saveiro,
            SpaceFox, Tourareg
          </Cards>
          <Cards title="Óleo Hidráulico" code="GASEADS" image="https://placehold.co/250">
            Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta,
            New Beetle, Passat, Polo, Santana, Saveiro,
            SpaceFox, Tourareg
          </Cards>
          <Cards title="Óleo Hidráulico" code="GASEADS" image="https://placehold.co/250">
            Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta,
            New Beetle, Passat, Polo, Santana, Saveiro,
            SpaceFox, Tourareg
          </Cards>
          <Cards title="Óleo Hidráulico" code="GASEADS" image="https://placehold.co/250">
            Amarok, Bora, Fox, Fusca, Gol, Golf, Jetta,
            New Beetle, Passat, Polo, Santana, Saveiro,
            SpaceFox, Tourareg
          </Cards>
        </Pieces>
      </main>
      
    </div>
  )
}
