'use client';

import * as React from "react";
import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(MuiButton)`
    border-radius: 10px;
    border: ${(props) => props.$border || "none"};
    font-size: 16px;
    padding: 10px 25px;
    text-transform: none;
    font-weight: 600;
    background-color: ${(props) => props.$bgColor || "var(--color-primary)"};
    color: ${(props) => props.$textColor || "var(--background)"};

    &:hover {
        background-color: ${(props) => props.$bgHover || "var(--color-primary-focus)"};
    }
`;

export default function CustomButton({
    border, 
    bgColor,
    bgHover,
    textColor,
    label,
    variant = "contained",
    size = "medium",
    ...props
}) {
    return (
        <StyledButton
            variant={variant}
            size={size}
            $border={border}
            $bgColor={bgColor}
            $bgHover={bgHover}
            $textColor={textColor}
            {...props}
        >
            {label}
        </StyledButton>
    );
}
