import React, { useState, useEffect } from 'react';

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    console.log(expanded);
  }, [expanded]);
  return (
    <div>
      <Accordion
        expanded={expanded === 'panel-1'}
        onChange={(event, isExpanded) => {
          handleChange(isExpanded, 'panel-1');
        }}
      >
        <AccordionSummary id='panel-1' expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi esse
            repellendus ullam eum voluptatum ipsam incidunt harum labore, ipsa
            in nostrum architecto, alias sed repellat voluptatem placeat
            cupiditate explicabo dolorum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel-2'}
        onChange={(event, isExpanded) => {
          handleChange(isExpanded, 'panel-2');
        }}
      >
        <AccordionSummary id='panel-2' expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi esse
            repellendus ullam eum voluptatum ipsam incidunt harum labore, ipsa
            in nostrum architecto, alias sed repellat voluptatem placeat
            cupiditate explicabo dolorum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel-3'}
        onChange={(event, isExpanded) => {
          handleChange(isExpanded, 'panel-3');
        }}
      >
        <AccordionSummary id='panel-3' expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi esse
            repellendus ullam eum voluptatum ipsam incidunt harum labore, ipsa
            in nostrum architecto, alias sed repellat voluptatem placeat
            cupiditate explicabo dolorum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
