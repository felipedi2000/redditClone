import { Card, CardHeader, CardContent, Typography, Box, Button } from '@mui/material';
import AddHomeIcon from '@mui/icons-material/AddHome';
import rIcon from './/rIcon.jpg';
import InfoComm from '../others/InfoComm';
import './CardInfo.css'

const CardInfo = () => {
  return (
    <Card className="my-card">
      <CardHeader className="my-card-header" />
      <CardContent>
        <div className="linea1">
          <img 
            src={rIcon}
            alt="Icono"
            className="icon-img"
          />
          <Typography variant="h7" color="text.primary" className="title">
            r/programming
          </Typography>
        </div>
        <Typography variant="body1" color="text.primary" className="description">
          Computer programming
        </Typography>
        <Typography variant="body1" color="text.primary" className="created-info">
          <AddHomeIcon className="icon" />
          <div className='text-secondary'>
            Created Feb 28, 2006
          </div>
        </Typography>
        <Box mt={2} className="stats-box">
          <div className="item-box">
            <Typography variant="h8" color="text.primary" className="stat-item">
              5.7m
              <div className='text-secondary'>
                Members
              </div>
            </Typography>
          </div>

          <div className="item-box">
            <Typography variant="h8" color="text.primary" className="stat-item">
              <span style={{ color: 'green', marginRight: '1px' }}>●</span> 3.4k
              <div className='text-secondary'>
                Online
              </div>
            </Typography>
          </div>

          <div className="item-box">
            <Typography variant="h8" color="text.primary" className="stat-item">
              Top 1%
              <div className='text-secondary'>
                Ranked by Size
              </div>
            </Typography>
          </div>
        </Box>
        <div className='item-box'>
          <Button variant="contained" className="btn">
            Join
          </Button>
        </div>
        <div>
          <InfoComm title='COMUNITY OPTIONS' text='text for options' />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardInfo;
