import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, Typography, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./InfoComm.css"

const InfoComm = ({ text, title }) => {
  return (
    <div className="root">
      <Accordion
        sx={{
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            border: '1px solid #ccc'
          }
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className="accordion-heading"
            sx={{
              fontSize: '14px',
              color: 'black',
              fontWeight: 'bold'
            }}>
              {title}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-text"
            sx={{
              fontSize: '14px',
              color: 'black', 
            }}
          >
            {text}
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};


InfoComm.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
};

export default InfoComm;
