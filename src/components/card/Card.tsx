//@ts-nocheck
import React, { useState, useId } from 'react';
import { Box, Card as MuiCard, CardContent, CardProps } from '@mui/material';
import Image from 'next/image';
import { style } from './styles';

import CheckboxLabels from '../checkbox/Checkbox';

const { cardContainer, contentContainer } = style;

interface ICard extends CardProps {
  image?: string;
  label?: string;
  onValueChecked?: (goal: boolean) => void;
  checked?: boolean;
}

function Card({ onValueChecked, checked, image, label, sx, ...props }: ICard) {
  const [value, setValue] = useState(checked || false);
  const id = `${useId()} ${value}`;
  return (
    <MuiCard {...props} sx={{ ...cardContainer, ...sx }}>
      <CardContent sx={contentContainer}>
        <label htmlFor={id}>
          <Box>
            {image && (
              <Image
                src={image}
                alt='PlanWell saving type'
                width={125}
                height={120}
                loading='lazy'
                style={{ cursor: 'pointer' }}
              />
            )}

            {label && (
              <CheckboxLabels
                label={label}
                id={id}
                checked={value}
                onValueChange={(val) => {
                  onValueChecked(val);
                  setValue(val);
                }}
              />
            )}
          </Box>
        </label>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
