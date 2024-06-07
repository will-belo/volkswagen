"use client";

import { Box, Grid, Typography } from "@mui/material";

export default function HeroMobile(props) {
  return (
    <Box sx={{ position: "relative", height: "40vh" }}>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          // backgroundImage: `url(${props.background})`,
          backgroundImage: `linear-gradient(to bottom, transparent 90%, white 100%), url(${props.background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          backgroundSize: "cover",
          // borderTopRightRadius: 20,
          // borderBottomRightRadius: 20,
          textAlign: "left",
          display: "flex",
          height: "100%",
          color: "white",
          border: "none",
          padding: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            // backgroundImage: "url(" + props.background + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "cover",
            // borderTopRightRadius: 20,
            // borderBottomRightRadius: 20,
            zIndex: 5,
            textAlign: "left",
            display: "flex",
            height: "100%",
            color: "white",
            background:
              "linear-gradient(to top, rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.5))",
            padding: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              paddingLeft: 2,
              paddingRight: 10,
              zIndex: 3,
              height: "100%",
              overflow: "hidden",
              color: "white",
            }}
          >
            <Grid container sx={{ height: "100%" }}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  marginBottom: 5,
                }}
              >
                <Typography
                  variant="h4"
                  className="uppercase text-amber-500 font-bold font"
                  fontSize={20}
                >
                  {props.subtitle}
                </Typography>
                <Typography
                  variant="h4"
                  className="uppercase font-bold"
                  fontSize={20}
                  gutterBottom
                >
                  {props.title}
                </Typography>
                <Typography variant="subtitle1">
                  {props.dateTime} {/* Formatar date time vindo do banco */}
                </Typography>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "end",
                }}
              >
                {props.children}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
