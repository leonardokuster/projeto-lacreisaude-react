'use client';

import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import styled from "styled-components";
import CustomButton from "./Button.js";

const StyledCard = styled(Card)`
    background-color: ${(props) => props.$bgColor || "var(--color-primary)"};
    color: ${(props) => props.$textColor || "var(--background)"};
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    justify-content: ${(props) => props.$justifyContent || "space-between"};
    padding: 10px;
    border-radius: ${(props) => props.$borderRadius || "auto"};;
    width: ${(props) => props.$width || "50%"};
    height: ${(props) => props.$height || "100%"};

    @media (min-width: 768px) {
        align-items: ${(props) => props.$alignItems || "center"};
        text-align: ${(props) => props.$textAlign || "center"};
    }
`;

const StyledCardMedia = styled(CardMedia)`
    width: ${(props) => props.$width || "50px"};
    height: ${(props) => props.$height || "50px"};
    max-width: 400px;
    margin: 0 auto;
`;

const Description = styled(Typography)`
    color: text.secondary;
    white-space: pre-line;
    line-height: 1.8;
    border-top: ${(props) => (props.$borderTop ? "2px solid var(--color-primary)" : "none")};
    border-left: ${(props) => (props.$borderLeft ? "2px solid var(--color-primary)" : "none")};
    padding-left: ${(props) => (props.$paddingLeft ? "10px" : "none")};
`;

export default function CustomCard({
    bgColor,
    textColor,
    alignItems,
    textAlign,
    borderRadius,
    title,
    borderTop,
    borderLeft,
    paddingLeft,
    justifyContent,
    width,
    height,
    description,
    mediaProps = {},
    buttonLabel,
    buttonProps = {},
    buttonLink,
}) {
    return (
        <StyledCard
            $bgColor={bgColor}
            $textColor={textColor}
            $alignItems={alignItems}
            $textAlign={textAlign}
            $width={width}
            $height={height}
            $borderRadius={borderRadius}
            $justifyContent={justifyContent}
        >
            {mediaProps?.image && (
                <StyledCardMedia 
                    {...mediaProps} 
                    $width={mediaProps.width}
                    $height={mediaProps.height}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                {title}
                </Typography>
                <Description variant="body2" $borderTop={borderTop} $borderLeft={borderLeft} $paddingLeft={paddingLeft}>
                {description}
                </Description>
            </CardContent>
            {buttonLabel && (
                <CardActions>
                    <CustomButton
                        label={buttonLabel}
                        {...buttonProps}
                    />
                </CardActions>
            )}
        </StyledCard>
    );
}   