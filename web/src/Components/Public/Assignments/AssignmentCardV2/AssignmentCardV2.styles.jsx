import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  asignmentContainer: {
    color: theme.palette.white,
    flexGrow: 1,
    minWidth: 275,
    maxWidth: 280,
    backgroundColor: theme.palette.dark.blue['200'],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    borderRadius: '10px',
    margin: theme.spacing(5),
  },
  dueBadge: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1.5)}px ${theme.spacing(0.5)}px ${theme.spacing(0.5)}px`,
    borderRadius: '3px',
    top: -theme.spacing(5),
    right: -theme.spacing(16),
    flexGrow: 1,
    minWidth: 100,
    maxWidth: 150,
    display: 'flex',

  },
  dueDate: {
    color: 'black',
  },
  greenBadge: {
    backgroundColor: theme.palette.color.green,
  },
  redBadge: {
    backgroundColor: theme.palette.color.red,
  },
  orangeBadge: {
    backgroundColor: theme.palette.color.orange,
  },
  assignmentName: {
    fontSize: '20px',
  },
  courseName: {
    fontSize: '16px',
    color: theme.palette.gray['200'],
  },
  courseActionsContainer: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  openCourseButton: {
    fontSize: '14px',
    borderRadius: '3px',
    backgroundColor: theme.palette.primary.main,
    padding: '5px 10px 5px',
  },
  viewRepoButon: {
    fontSize: '.8rem',
    backgroundColor: theme.palette.dark.blue['0'],
    marginLeft: '10px;',
    color: theme.palette.gray['200'],
  },
}));
