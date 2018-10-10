import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      width: 200,
      minHeight: 290,
      textAlign: 'left',
      backgroundColor: 'inherit',
      boxShadow: 'none',
    },
    media: {
        width: 200,
        height: 200,
        backgroundPosition: 'center center',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 1px 3px -2px rgba(0,0,0,0.3), 0 1px 5px 0 rgba(0,0,0,0.3)'
    },
    title: {
        color: 'rgb(250, 250, 250)',
        fontWeight: 300,
        letterSpacing: 1
    },
    artist: {
        color: '#aaa',
        fontWeight: 300,
        letterSpacing: 1
    }
  };


const AlbumItem = props => {
    const { classes } = props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            height="140"
            image={props.songs.artwork}
            title="Album image"
          />
          <CardContent>
            <Typography className={classes.title} gutterBottom variant="body1" component="h2">
              {props.songs.title}
            </Typography>
            <Typography className={classes.artist} component="p" variant="caption">
              {props.songs.artist.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

AlbumItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumItem);