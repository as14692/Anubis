import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';

import {useStyles} from './AssignmentCardV2.styles';

const AssignmentCardV2 = ({
  id,
  name,
  due_date,
  course,
}) => {
  const classes = useStyles();
  let due_days = Math.round((new Date(due_date) - new Date())/(1000*3600*24));
  due_days = due_days > 0 ?due_days:0;
  const days = due_days<=1?'Day':'Days';
  
  const num_days = due_days + ' '+ days + ' remaining';
  return (
    <Badge badgeContent = {num_days} color="error" anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
      <Box className={classes.asignmentContainer}>
        <Typography className={classes.assignmentName}>{name}</Typography>
        <Typography className={classes.courseName}>{course.name}</Typography>
        <Box className={classes.courseActionsContainer}>
          <Button
            onClick = {() => {
              history.push(`/courses/assignments?courseId=${id}`);
            }}
            className={classes.openCourseButton}
          >
            Open Assignment
          </Button>
          <Button
            onClick = {() => {
              history.push(`/courses/assignments?courseId=${id}`);
            }}
            className={classes.viewRepoButon}
          >
          View Repo
          </Button>
        </Box>

      </Box>
    </Badge>
  );
};

export default AssignmentCardV2;
