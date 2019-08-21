import React from 'react';
import {
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './Home';
import Projects from './Projects';
import Qualifications from './Qualifications';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Qualifications" to='/' component={Link} />
                    <Tab label="Projects" to='/projects' component={Link} />
                    <Tab label="About" to='/about' component={Link} />
                </Tabs>
            </Paper>
            <div>
                <Switch>
                    <Route exact path='/'><Qualifications /></Route>
                    <Route exact path='/projects'><Projects /></Route>
                    <Route exact path='/about'><Home /></Route>
                </Switch>
            </div>
        </div>
    );
}