'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Grid, Box, Button, Divider, IconButton, Typography, Icon } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const FooterContainer = styled.footer`
    background-color: var(--background);
    color: var(--foreground);
    padding: 20px;
    text-align: center;

    a {
        text-decoration: none;
    }

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const FooterContent = styled.div`
    margin: 0 auto;
`;

const ImageStyled = styled(Image)`
    @media (max-width: 768px) {
        display: none;
    }
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: var(--foreground);
    padding-bottom: 50px;

    &:hover {
        text-decoration: underline;
    }
`;

const DividerStyled = styled(Divider)`
    background-color: var(--color-primary);
    width: 100%;
    margin: 16px 0px;
`;

const BoxStyled = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Grid container spacing={2}>
            <DividerStyled />
            <Grid item size={{ xs: 12, md: 3 }}>
                <ImageStyled src="/images/logoFooter.svg" alt="Lacrei Saúde Logo" width={150} height={50} />
                <Box sx={{ gap: 1 }}>
                    <IconButton href="https://www.facebook.com/lacrei.saude/" target="_blank" rel="noopener noreferrer" color="inherit">
                        <FacebookIcon color="success"/>
                    </IconButton>
                    <IconButton href="https://www.instagram.com/lacrei.saude" target="_blank" rel="noopener noreferrer" color="red">
                        <InstagramIcon color="success" />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/company/lacrei" target="_blank" rel="noopener noreferrer" color="var(--color-primary)">
                        <LinkedInIcon color="success" />
                    </IconButton>
                    <IconButton href="contato@lacreisaude.com.br" target="_blank" rel="noopener noreferrer" color="var(--color-primary)">
                        <MailOutlineIcon color="success" />
                    </IconButton>
                </Box>
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Lacrei Saúde
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/about">Quem somos</LinkStyled><br />
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Nosso propósito</LinkStyled><br />
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Missão, visão e valor</LinkStyled><br />
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Acessibilidade</LinkStyled>
                </Typography>       
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Saúde
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Buscar atendimento</LinkStyled><br />
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Oferecer atendimento</LinkStyled>
                </Typography>
               
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                    Segurança e privacidade
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Política de privacidade</LinkStyled><br />
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Termos de uso</LinkStyled><br />
                </Typography>
                <Typography variant="body2" component="a" gutterBottom>
                    <LinkStyled href="/">Direitos do titular</LinkStyled>
                </Typography>
            </Grid>
        </Grid>
        <DividerStyled />
        <BoxStyled>
            <Typography variant="body2" color="textSecondary">
                A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.            
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site www.cvv.org.br
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65
            </Typography>
        </BoxStyled>
      </FooterContent>
    </FooterContainer>
  );
}


