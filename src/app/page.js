'use client';

import { Grid, Box, Typography, Divider, useMediaQuery, useTheme } from "@mui/material";
import CustomCard from "./components/Card.js";
import CustomButton from "./components/Button.js";
import styled from "styled-components";

const BgGrid = styled(Grid)`
    position: relative;
    background-image: url('/images/heroImage.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background); 
    opacity: 0.2; 
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2; 
  }
`;

const HeroBox = styled(Box)`
  color: var(--color-primary);
  width: 50%; 

  @media (max-width: 768px) {
      width: 100%; 
  }
`;

const ButtonBox = styled(Box)`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const DividerStyled = styled(Divider)`
  background-color: var(--color-primary);
  width: 20%;
  height: 2px;
  margin-bottom: 16px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  text-align: center;
`;

const StyledGridCard = styled(Grid)`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px;
`;

const BoxSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 40px;
  background-color: #FDF6FF;
`;

const HeroSection = styled(Box)`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  margin-bottom: 50px;
`;

const HeroSectionImage = styled("div")`
  width: 60%;
  height: 100%;
  background-image: url('/images/girlsImage.png');
  background-size: cover;
  background-position: left center;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 30px;
  z-index: 1;

  @media (max-width: 768px) {
        display: none;
    }
`;

const HeroSectionCard = styled(Box)`
  width: 50%;
  height: auto;
  position: relative;
  margin-left: auto;
  margin-right: 30px;
  top: 10%;
  z-index: 2;

  @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-left: 30px;
    }
`;

export default function Home() {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2} component="main">
      <BgGrid item xs={12} md={6}>
        <HeroBox>
          <Typography variant="h3" component="h1" gutterBottom>
            Olá, você está na Lacrei Saúde!
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary" gutterBottom>
            Conectamos pessoas LGBTQIAPN+ com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.
          </Typography>
          <ButtonBox>
            <CustomButton
              label="Para pacientes"
              variant="contained"
              bgColor="var(--color-primary)"
              bgHover="var(--color-primary-focus)"
              textColor="var(--background)"
            />
            <CustomButton
              label="Para profissionais"
              variant="contained"
              bgColor="var(--color-primary)"
              bgHover="var(--color-primary-focus)"
              textColor="var(--background)"
            />
          </ButtonBox>
        </HeroBox>   
      </BgGrid>

      <StyledBox>
        <Typography variant="h4" component="h2" gutterBottom>
          Conheça o jeito Lacrei Saúde de cuidar
        </Typography>
        <DividerStyled />
        <Typography variant="h6" component="p" color="textSecondary" gutterBottom>
          Atendimento de qualidade e inclusivo
        </Typography>
        <StyledGridCard container spacing={2}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <CustomCard
              description="Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+."
              bgColor="#FDF6FF"
              textColor="var(--foreground)"
              width="100%"
              justifyContent="flex-start"
              height={isMobile ? "auto" : "300px"}
              mediaProps={{
                component: "img",
                width: isMobile ? "auto" : "auto",
                height: isMobile ? "100px" : "50%",
                image: isMobile ? "/images/card1Mobile.svg" : "/images/card1Desktop.svg",
                alt: "Mãos unidas representando inclusão",
              }}
            />  
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <CustomCard
              description="As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+."
              bgColor="#FDF6FF"
              textColor="var(--foreground)"
              width="100%"
              justifyContent="flex-start"
              height={isMobile ? "auto" : "300px"}
              mediaProps={{
                component: "img",
                width: isMobile ? "auto" : "auto",
                height: isMobile ? "100px" : "50%",
                image: isMobile ? "/images/card2Mobile.svg" : "/images/card2Desktop.svg",
                alt: "Coração representando acolhimento",
              }}
            />  
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <CustomCard
              description="Protegemos seus dados e validamos pacientes e profissionais da saúde."
              bgColor="#FDF6FF"
              textColor="var(--foreground)"
              width="100%"
              justifyContent="flex-start"
              height={isMobile ? "auto" : "300px"}
              mediaProps={{
                component: "img",
                width: isMobile ? "auto" : "auto",
                height: isMobile ? "100px" : "50%",
                image: isMobile ? "/images/card3Mobile.svg" : "/images/card3Desktop.svg",
                alt: "Escudo de proteção representando segurança",
              }}
            />  
          </Grid>
        </StyledGridCard>
      </StyledBox>

      <HeroSection>
        <HeroSectionImage />
        <HeroSectionCard>
          <CustomCard
            title="O que é a Lacrei Saúde?"
            description={`O nosso papel é construir a conexão entre as pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico com profissionais da saúde.
              Tudo isso com segurança, inclusão e representatividade.
              Surgimos da esperança de ter um atendimento clínico qualificado, seguro e empático para todas as pessoas.
            `}
            bgColor="var(--background)"
            textColor="var(--foreground)"
            width="100%"
            borderTop
            alignItems="left"
            textAlign="left"
            buttonLabel="Conhecer"
            buttonProps={{
              variant: "outlined",
              border: "2px solid var(--color-primary)",
              bgColor: "var(--background)",
              textColor: "var(--color-primary)",
            }}
          />
        </HeroSectionCard>
      </HeroSection>

      <StyledBox>
        <Typography variant="h4" component="h2" gutterBottom>
          Encontre profissionais da saúde com facilidade e segurança
        </Typography>
        <DividerStyled />
        <StyledGridCard container spacing={2}>
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <CustomCard
              description="Cadastre-se gratuitamente em nossa plataforma."
              bgColor="var(--background)"
              textColor="var(--foreground)"
              width="100%"
              height="350px"
              alignItems="center"
              textAlign="center"
              justifyContent="flex-start"
              mediaProps={{
                component: "img",
                width: "auto",
                height: "50%",
                image: "/images/image1.svg",
                alt: "Ícone de mensagem",
              }}
            />  
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <CustomCard
              description="Encontre profissionais da saúde qualificados através de uma busca descomplicada."
              bgColor="var(--background)"
              textColor="var(--foreground)"
              width="100%"
              height="350px"
              justifyContent="flex-start"
              mediaProps={{
                component: "img",
                width: "auto",
                height: "50%",
                image: "/images/image2.svg",
                alt: "Ícone de lupa",
              }}
            />  
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <CustomCard
              description="Valide seu contato por SMS, para segurança no atendimento."
              bgColor="var(--background)"
              textColor="var(--foreground)"
              width="100%"
              height="350px"
              justifyContent="flex-start"
              mediaProps={{
                component: "img",
                width: "auto",
                height: "50%",
                image: "/images/image3.svg",
                alt: "Ícone de check",
              }}
            />  
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <CustomCard
              description="Entre em contato com a pessoa profissional escolhida e marque sua consulta."
              bgColor="var(--background)"
              textColor="var(--foreground)"
              width="100%"
              height="350px"
              alignItems="center"
              textAlign="center"
              justifyContent="flex-start"
              mediaProps={{
                component: "img",
                width: "auto",
                height: "50%",
                image: "/images/image4.svg",
                alt: "Ícone de telefone",
              }}
            />  
          </Grid>
        </StyledGridCard>
      </StyledBox>

      <BoxSection>
        <CustomCard
          title="Pacientes"
          description={`Conecte-se a profissionais da saúde que estudam as necessidades da comunidade LGBTQIAPN+.`}
          bgColor="var(--background)"
          textColor="var(--foreground)"
          width="80%"
          height="auto"
          borderRadius="30px"
          borderLeft
          paddingLeft
          alignItems="left"
          textAlign="left"
          buttonLabel="Buscar atendimento"
          buttonProps={{
            variant: "contained",
            bgColor: "var(--color-primary)",
            textColor: "var(--background)",
          }}
        />
        <CustomCard
          title="Profissionais da saúde"
          description={`Buscamos profissionais da saúde qualificados que priorizam o bem-estar físico e mental de pessoas LGBTQIAPN+.`}
          bgColor="var(--background)"
          textColor="var(--foreground)"
          width="80%"
          height="auto"
          borderRadius="30px"
          borderLeft
          paddingLeft
          alignItems="left"
          textAlign="left"
          buttonLabel="Oferecer atendimento"
          buttonProps={{
            variant: "contained",
            bgColor: "var(--color-primary)",
            textColor: "var(--background)",
          }}
        />
      </BoxSection>

      <StyledBox>
        <Typography variant="h4" component="h2" gutterBottom>
          Nos preocupamos com cada detalhe de sua experiência
        </Typography>
        <DividerStyled />
        <StyledGridCard container spacing={2}>
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
                variant: "outlined",
                border: "2px solid var(--color-primary)",
                bgColor: "var(--background)",
                textColor: "var(--color-primary)",
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
                variant: "outlined",
                border: "2px solid var(--color-primary)",
                bgColor: "var(--background)",
                textColor: "var(--color-primary)",
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
                variant: "outlined",
                border: "2px solid var(--color-primary)",
                bgColor: "var(--background)",
                textColor: "var(--color-primary)",
              }}
            />  
          </Grid>
        </StyledGridCard>
      </StyledBox>
    </Grid>
  );
}