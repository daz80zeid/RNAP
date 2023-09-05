import React from 'react';
import { Drawer, List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { sideBarWidth } from '../../../constants/UiConstants';
import { PrimaryColor } from '../../../constants/Colors';
import { useHistory } from 'react-router-dom';
import InlineSVG from 'react-inlinesvg';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import SubjectIcon from '@material-ui/icons/Subject';
import Logo from '../../../assets/images/logo.svg';
import classnames from 'classnames';
import { useCurrentMenuSection } from '../../../hooks';

const useStyles = makeStyles(() => ( {
    drawer: {
        width: sideBarWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: sideBarWidth,
        background: PrimaryColor
    },
    logo: {
        margin: '10px auto',
        cursor: 'pointer'
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
        borderRight: '2px solid transparent',
        '&:hover': {
            background: '#FFFFFF25',
        },
    },
    selectedItem: {
        background: '#FFFFFF15',
        borderRight: '2px solid red'
    },
    itemText: {
        fontSize: '13px'
    }
} ));

const SireBar: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const section = useCurrentMenuSection();

    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
            <InlineSVG src={Logo} height={60} className={classes.logo} onClick={() => history.push('/')}/>
            <List>
                <ListItem button
                          className={classnames(classes.listItem, { [classes.selectedItem]: section === 'fighters' })}
                          onClick={() => history.push('/fighters')}>
                    <GroupRoundedIcon/>
                    <Typography className={classes.itemText}>Бойцы</Typography>
                </ListItem>
                <ListItem button className={classnames(classes.listItem, { [classes.selectedItem]: section === 'statistic' })} onClick={() => history.push('/statistic')}>
                    <TrendingUpRoundedIcon/>
                    <Typography className={classes.itemText}>Статистика</Typography>
                </ListItem>
                <ListItem button className={classnames(classes.listItem, { [classes.selectedItem]: section === 'news' })} onClick={() => history.push('/news')}>
                    <SubjectIcon/>
                    <Typography className={classes.itemText}>Новости</Typography>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SireBar;
