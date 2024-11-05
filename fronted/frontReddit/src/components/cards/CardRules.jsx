import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import InfoComm from '../others/InfoComm';
import './CardRules.css';

const CardRules = () => {
  return (
    <Card className="my-card">
      <CardHeader className="my-card-header" 
        title={
          <Typography className="my-card-header-title">
            r/programming Rules
          </Typography>
        }
      />

      <CardContent>
        <div className="item-box">
          <InfoComm title='1.Keep submissions on topic and high quality' text='texto 1' />
        </div>
        <div className="item-box">
          <InfoComm title='2.No surveys' text='texto 1' />
        </div>
        <div className="item-box">
          <InfoComm title='3.No résumés/job listings' text='texto 2' />
        </div>
        <div className="item-box">
          <InfoComm title='4./r/programming is not a support forum' text='texto 3' />
        </div>
        <div className="item-box">
          <InfoComm title='5.Spam' text='texto 1' />
        </div>
      </CardContent>
    </Card>
  );
}

export default CardRules;
