import * as React from 'react';
import {
  Accordion as MuiAccordion,
  AccordionProps,
  SxProps,
  Theme,
} from '@mui/material';
import AccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import AccordionDetails, {
  AccordionDetailsProps,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styles } from './styles';

const { accordionContainer, accordionTitle } = styles;

interface IAccordion extends AccordionProps {
  summaryProps?: AccordionSummaryProps;
  detailsProps?: AccordionDetailsProps;
  titleStyles?: SxProps<Theme>;
}

export default function Accordion({
  children,
  summaryProps,
  detailsProps,
  title,
  titleStyles = {},
  sx,
  ...props
}: IAccordion) {
  const [expanded, setIsExpanded] = React.useState(
    props.defaultExpanded || false
  );
  return (
    <MuiAccordion
      {...props}
      sx={accordionContainer}
      onChange={(_, value) => setIsExpanded(value)}
    >
      <AccordionSummary
        {...summaryProps}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography sx={{ ...accordionTitle, ...titleStyles }}>
          {title} &nbsp;{' '}
          <ExpandMoreIcon
            sx={{
              transform: `rotate(${expanded ? '180deg' : '0'})`,
            }}
          />
        </Typography>
      </AccordionSummary>
      <AccordionDetails {...detailsProps}>{children}</AccordionDetails>
    </MuiAccordion>
  );
}
