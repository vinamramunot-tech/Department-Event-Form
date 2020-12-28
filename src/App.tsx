import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStyles, makeStyles, TextField, Theme, borders } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

function Form() {
  const classes = useStyles();

  const downloadReport = (data: JSON) => {
    const filename = 'export.json';
    const contentType = 'application/json;charset=utf-8;';
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      const blob = new Blob(
        [decodeURIComponent(encodeURI(JSON.stringify(data)))],
        { type: contentType }
      );
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      a.download = filename;
      a.href = `data:${contentType},${encodeURIComponent(
        JSON.stringify(data, null, 1)
      )}`;
      a.target = '_blank';
      a.click();
    }
  };

  return (
    <form className={classes.root} onSubmit={downloadReport}>
      <div>
        <TextField id="foodPlan" label="Food Plan" />
        <TextField id="whoPaying" label="Who Pays" />
      </div>
      <div>
        <TextField id="eventCosts" label="Event costs" type="Number" />
        <TextField id="numOfStudents" label="How many students" type="Number" />
        <TextField id="teamDecision" label="What decides the teams" />
        <TextField id="numOfTeams" label="How many teams" type="Number" />
        <TextField id="entryRules" label="What are the rules for entry" />
      </div>
      <div>
        <TextField id="timeline" label="Timelines" />
        <TextField id="whenHandled" label="When Should Things Be Handled" />
        <TextField id="deadline" label="Deadline" />
        <TextField id="fundraise" label="Fundraising" />
      </div>
      <div>
        <TextField id="advertising" label="Advertising" />
        <TextField id="howToAdvert" label="How to Advertise" />
        <TextField id="proPhotos" label="Getting professional photos" />
      </div>
      <div>
        <TextField id="coach" label="Coaching" />
        <TextField id="whoCoaches" label="Who Coaches" />
        <TextField
          id="numberOfCoaches"
          label="How many Coaches"
          type="Number"
        />
      </div>
      <div>
        <TextField id="preComp" label="Pre Competition" />
        <TextField id="workshop" label="Workshops" />
        <TextField id="training" label="Training" />
        <TextField id="clubLectures" label="Club Sponsored Lectures" />
      </div>
      <input type="submit" value="Download" id="bttn" />
    </form>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Form} />
      </Switch>
    </Router>
  );
}
