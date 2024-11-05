import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import './CardInfoP.css';


const CardInfoP = () => {
  return (
    <Card className="my-card">
      <CardHeader 
        className="my-card-header" 
        title={
          <Typography className="my-card-header-title">
            Info
          </Typography>
        }
      />

      <CardContent>
        <div className='item-box-list'>
          <ul>
            <li>
              <Typography component="span" className='text-list'>
                Do you have a questions? Check Out
              </Typography>
              <span className='text-list'> </span>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  Learn Programming
                </Typography>
              </a>
              <span className='text-list'>, </span>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  Career Questions
                </Typography>
              </a>
              <span className='text-list'>, or </span>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  Stack Overflow
                </Typography>
              </a>
            </li>
            <li>
              <Typography component="span" className='text-list'>
                Do you have something funny to share with fellow programmers? Please it to
              </Typography>
              <span className='text-list'> </span>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  /r/ProgrammerHumor/
                </Typography>
              </a>
            </li>
            <li>
              <Typography component="span" className='text-list'>
                For posting job listings, please visit 
              </Typography>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  /r/forhire
                </Typography>
              </a>
              <span className='text-list'> or </span>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  /r/jobbit
                </Typography>
              </a>
            </li>
            <li>
              <Typography component="span" className='text-list'>
                Check out our 
              </Typography>
              <span className='text-list'> </span>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  fag
                </Typography>
              </a>
              <Typography component="span" className='text-list'>
                . It could use some uploading.
              </Typography>
            </li>
            <li>
              <Typography component="span" className='text-list'>
                Are you interested in promoting your own content? STOP!
              </Typography>
              <span className='text-list'> </span>
              <a href="#" className="link">
                <Typography component="span" className='text-list'>
                  Read this first
                </Typography>
              </a>
            </li>
          </ul>
        </div>
        <div className='item-box-list'>
          <Typography 
            sx={{ 
              fontWeight: 'bold',
              marginBottom: '10px',
              color: 'black'
            }}
          >
            Related reddits
          </Typography>
          <ul>
            <li>
              <a href="/technologv" className="link">Ir/technologv</a>
            </li>
            <li>
              <a href="/leprogrammgr" className="link">Ir/lE/rpgrammgr</a>
            </li>
            <li>
              <a href="/coding" className="link">Ir/cod•ng</a>
            </li>
            <li>
              <a href="/dailyprogrammer" className="link">nda!lyprogrammer</a>
            </li>
            <li>
              <a href="/webdev" className="link">Ir/webdev</a>
            </li>
            <li>
              <a href="/web-design" className="link">Irmveb design</a>
            </li>
            <li>
              <a href="/cscareercuestons" className="link">jr/cscareercuestons</a>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardInfoP;
