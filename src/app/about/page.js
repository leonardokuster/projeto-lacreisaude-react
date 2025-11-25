'use client';

import Image from "next/image";
import Link from "next/link";
import { Grid, Box, Typography, Divider, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import CustomCard from "../components/Card.js";

const GridContainer = styled(Grid)`
    margin: 30px;
`;

const StyledImage = styled(Image)`
    border-radius: 50px;
    width: 100%;
    height: auto;
`;

const DividerStyled = styled(Divider)`
  background-color: var(--color-primary);
  width: 20%;
  height: 2px;
  margin-bottom: 16px;
`;

const UnderlineText = styled(Divider)`
    background-color: var(--color-primary);
    width: 30%;
    height: 2px;
    margin: 16px auto;
`;

const BoxContainerCard = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 30px;
`;

const GridCard = styled(Grid)`
    border: 1px solid lightgrey;
    border-radius: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: var(--background);
`;

const BoxCard = styled(Box)`
    text-align: left;
    padding-left: 30px;
`;

const GridCardContainer = styled(Grid)`
    margin: 30px;
    height: 100%;
`;

const ImageCardWrapper = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 450px; 
    width: 80%;
  }
`;

const CardsOnImage = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  position: static;
  margin-top: 20px;

  @media (min-width: 768px) {
    position: absolute;
    right: -20%;      
    top: 50%;         
    transform: translateY(-50%);
    width: 60%;     
  }
`;


export default function About() {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="main">
        <GridContainer container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Atendimento qualificado, seguro e inclusivo
                </Typography>
                <DividerStyled />
            </Grid>
            <br/>
            <Grid item size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" component="p" gutterBottom>
                    Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+.
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.
                </Typography>
            </Grid>
            <Grid item size={6} display={{ xs: "none", md: "block"}}>
                <StyledImage 
                    src="/images/homemSorrindo.png"
                    width={530}
                    height={400}
                    alt="Homem sorrindo"
                />
            </Grid>
        </GridContainer>

        <GridCardContainer sx={{ textAlign: "center" }}>
            <Grid item size={12}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Missão, visão e valores da Lacrei Saúde
                </Typography>
                <UnderlineText />
                <Typography variant="h5" component="p" gutterBottom>
                    O que nos motiva
                </Typography>
            </Grid>

            <ImageCardWrapper>
                <StyledImage
                    src="/images/meninaSegurandoBandeira.png"
                    width={530}
                    height={400}
                    alt="Mulher segurando a bandeira LGBTQIAPN+"
                />

                <CardsOnImage>
                    <GridCard item size={{ xs: 12, md: 6 }}>
                        <Image 
                            src="/images/sunImage.svg"
                            width={120}
                            height={120}
                            alt="Ícone de sol"
                        />
                        <BoxCard>
                            <Typography gutterBottom variant="h4" component="h2" sx={{ color: "var(--color-primary)" }}>
                                Missão
                            </Typography>
                            <Typography gutterBottom variant="h6" component="p">
                                Proporcionar a inclusão da comunidade ao atendimento clínico.
                            </Typography>
                        </BoxCard>
                    </GridCard>

                    <GridCard item size={{ xs: 12, md: 6 }}>
                        <Image 
                            src="/images/eyeImage.svg"
                            width={120}
                            height={120}
                            alt="Ícone de olho grego"
                        />
                        <BoxCard>
                            <Typography gutterBottom variant="h4" component="h2" sx={{ color: "var(--color-primary)" }}>
                                Visão
                            </Typography>
                            <Typography gutterBottom variant="h6" component="p">
                                Ser a plataforma de serviços de saúde da comunidade LGBTQIAPN+ no Brasil.
                            </Typography>
                        </BoxCard>
                    </GridCard>

                    <GridCard item size={{ xs: 12, md: 6 }}>
                        <Image 
                            src="/images/handImage.svg"
                            width={120}
                            height={120}
                            alt="Ícone de mão com um coração em ciam"
                        />
                        <BoxCard>
                            <Typography gutterBottom variant="h4" component="h2" sx={{ color: "var(--color-primary)" }}>
                                Valores
                            </Typography>
                            <Typography gutterBottom variant="h6" component="p">
                                Representatividade, segurança e acessibilidade da comunidade LGBTQIAPN+.
                            </Typography>
                        </BoxCard>
                    </GridCard>
                </CardsOnImage>
            </ImageCardWrapper>
        </GridCardContainer>

        <GridContainer container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Nosso propósito
                </Typography>
                <DividerStyled />
                <Typography variant="h6" component="p" gutterBottom>
                    A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico a profissionais da saúde.
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.
                </Typography>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
                <StyledImage 
                    src="/images/propositoImage.png"
                    width={isMobile ? 440 : 530}
                    height={isMobile ? 300 : 400}
                    alt="Pessoa sentada numa cadeira com uma bandeira LGBTQIAPN+ na frente."
                />
            </Grid>
        </GridContainer>

        <GridContainer container spacing={2}>
            <Grid item size={12}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Estamos atentos a cada detalhe da sua experiência
                </Typography>
                <DividerStyled />
            </Grid>

            <Grid item size={{ xs: 12, md: 4 }}>
                <CustomCard
                    description="Entenda como validamos pacientes e profissionais da saúde."
                    bgColor="#FDF6FF"
                    textColor="var(--foreground)"
                    width="100%"
                    height= {isMobile ? "auto" : "400px"}
                    mediaProps={{
                        component: "img",
                        width: isMobile ? "auto" : "auto",
                        height: isMobile ? "100px" : "50%",
                        image: isMobile ? "/images/card4Mobile.svg" : "/images/card4Desktop.svg",
                        alt: "Escudo de proteção representando segurança",
                    }}
                    buttonLabel="Entenda"
                    buttonProps={{
                        variant: "contained",
                        bgColor: "var(--color-primary)",
                        textColor: "var(--background)",
                    }}
                />  
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
                <CustomCard
                    description="Conheça nossos recursos que tornam a plataforma Lacrei Saúde acessível."
                    bgColor="#FDF6FF"
                    textColor="var(--foreground)"
                    width="100%"
                    height= {isMobile ? "auto" : "400px"}
                    mediaProps={{
                        component: "img",
                        width: isMobile ? "auto" : "auto",
                        height: isMobile ? "100px" : "50%",
                        image: isMobile ? "/images/card5Mobile.svg" : "/images/card5Desktop.svg",
                        alt: "Mãos abanando representando acessibilidade",
                    }}
                    buttonLabel="Conheça"
                    buttonProps={{
                        variant: "contained",
                        bgColor: "var(--color-primary)",
                        textColor: "var(--background)",
                    }}
                />  
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
                <CustomCard
                    description="Acesse nossa lista de perguntas frequentes e tire suas dúvidas."
                    bgColor="#FDF6FF"
                    textColor="var(--foreground)"
                    width="100%"
                    height= {isMobile ? "auto" : "400px"}
                    mediaProps={{
                        component: "img",
                        width: isMobile ? "auto" : "auto",
                        height: isMobile ? "100px" : "50%",
                        image: isMobile ? "/images/card6Mobile.svg" : "/images/card6Desktop.svg",
                        alt: "Balões de diálogo representando dúvidas frequentes",
                    }}
                    buttonLabel="Acesse"
                    buttonProps={{
                        variant: "contained",
                        bgColor: "var(--color-primary)",
                        textColor: "var(--background)",
                    }}
                />  
            </Grid>
        </GridContainer>
    </Box>
  );
}