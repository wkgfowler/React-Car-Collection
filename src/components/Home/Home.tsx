import React from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import hero_image from '../../assets/images/hero.jpg';

import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'grey',
        fontSize: '175%',
    },
    pagename:{
        margin: '0 0 0 0.45em',
    },
    logo_navigation: {
        listStyle: 'none',
        textDecoration: 'none',
        color: 'white',
        WebkitTextStroke: '0.75px black'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'white',
        WebkitTextStroke: '0.65px black',
        textDecoration: 'none'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero_image});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '45%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '175%',
        WebkitTextStroke: '0.55px black'
    },
    title_text:{
        paddingRight: '70%',
        paddingBottom: '25%'
    },
})

export const Home = (props:Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={classes.pagename}>
                        <Link to='/' className={classes.logo_navigation}>{props.title}</Link>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1 className={classes.title_text}>{ props.title }</h1>
                    <p>Enjoy browsing the best of the best</p><br></br>
                    <Link to='/signin/'>
                        <Button color='primary' variant="contained">Sign In</Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}