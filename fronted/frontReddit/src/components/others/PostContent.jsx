import { Typography, Box, Divider} from "@mui/material";
import BtnLink from "../buttons/BtnLink";
import rIcon from './rIcon.jpg';
import BtnUpDown from "../buttons/BtnUpDown";
import BtnNotify from "../buttons/BtnNotify";
import BtnGrouPost from "../buttons/BtnGrouPost";
import DropMenuTwo from "../drops/DropMenuTwo";
import InpSearch from "../inputs/InpSearch";
import Comments from "../others/Comments";
import InptText from "../inputs/InpText";
import './PostContent.css'

const PostContent = () => {
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-custom">
              <div className='icon-pack'>
								<BtnUpDown orientation="column"/>
              </div>
            </div>
            <div className="col">
              <div className="header">
                <div className="start-content">
                  <img 
                    src={rIcon}
                    className="icon"
                  />
                  <Typography sx={{
										fontSize: '12px'
									}}
									 	color="text.primary"
									>
                    r/programming
                  </Typography>
                  <Typography sx={{ 
										mx: 0.5,
										fontSize: '12px'
									}} 
										color="text.secondary">
                    • Posted by u/stronghup 14 hours ago
                  </Typography>
                </div>
                <div className="end-content">
									<BtnNotify/>
                </div>
              </div>
              <div className="header-sec">
                <div className="text-post">
									<Typography variant="h6" color="text.primary">
                    What AI wont replace in your programming
                  </Typography>
									<Box display="flex" alignItems="center">
      							<a href="#" className="link-out">
											<Typography
												variant="body1"
												sx={{
													marginRight: 0.3,
													fontSize: '12px',
												}}
											>
												inforworld.com/articl...
											</Typography>
											<i className="fi fi-rr-arrow-up-right-from-square btn2"></i>
										</a>
    							</Box>
								</div>
                <div className="bnt-container">
                  <BtnLink />
                </div>
              </div>
              <div className="mt-3"> 
								<BtnGrouPost/>
							</div>
              <div className="mt-3">
								<Box sx={{ display: 'flex'}}>
									<Typography sx={{ fontSize: '13px', marginRight: '8px'}}>
										Comment as
									</Typography>
									<Typography sx={{ fontSize: '13px', color:'#ff4800'}}>
									  Wonderfull-External 22
									</Typography>
								</Box>
							</div>
              <div className="mt-0">
								<InptText/>
							</div>
              <div className="mt-3">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DropMenuTwo />
                  <InpSearch />
                </Box>
                <Divider sx={{ mt: 0.5, mx: 2 }} />
                <Box sx={{ 
                  mt: 1.2,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '95%'
                }}>
                  <Typography sx={{
                    fontSize: '12px',
                    fontWeight: 'Bold',
                    color: '#ff4800',
                    cursor: 'pointer'
                  }}>
                    View discussions in 1 other community
                  </Typography>
                </Box>
              </div>
            </div>
            <Box sx={{ width: '100%', mt: 2, ml: '-13.5px' }}>
              <Comments />
            </Box>
          </div>
        </div>
      </div>
    );
};

export default PostContent;
