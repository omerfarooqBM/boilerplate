import MenuAppBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
function Chat(props) {
    const location = useLocation()
    console.log("props===>", location)
    
    return (
        <div>
            <MenuAppBar title="Chat" />
            ِ<Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} lg={6} md={12}>
                        <MyCard>
                            <h1>Chat</h1> 
                            
                            <Link  to={'/Profile'}><Button variant="contained">Profile</Button></Link>
                            <Link to={'/chat'}><Button className="selected" variant="contained">Chat</Button></Link>
                            <Link to={'/Page1'}><Button variant="contained">Page 1</Button></Link>
                            <Link to={'/Page2'}><Button variant="contained">Page 2</Button></Link>
                            <Link to={'/Page3'}><Button variant="contained">Page 3</Button></Link>                         
                        </MyCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Chat;