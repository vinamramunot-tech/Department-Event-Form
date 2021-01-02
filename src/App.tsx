import React, { FormEvent, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      color: 'white',
    },
  })
);

function Form() {
  const [whoPaysForFood, setWhoPaysForFood] = useState('');
  const [whereIsFoodComingFrom, setWhereIsFoodComingFrom] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfTeams, setNumberOfTeams] = useState(0);
  const [rulesForEntry, setRulesForEntry] = useState('');
  const [deadline, setDeadline] = useState('');
  const [advertisement, setAdvertisementPlan] = useState('');
  const [coach, setCoach] = useState('');
  const [numberOfCoaches, setNumberOfCoaches] = useState('');
  const [workshops, setWorkshops] = useState('');
  const [training, setTraining] = useState('');
  const [clubSponsoredLectures, setClubSponsoredLectures] = useState('');

  const classes = useStyles();

  const downloadReport = (event: FormEvent) => {
    event.preventDefault();
    
    // const data = null;
    // const filename = 'export.json';
    // const contentType = 'application/json;charset=utf-8;';
    // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //   const blob = new Blob(
    //     [decodeURIComponent(encodeURI(JSON.stringify(data)))],
    //     { type: contentType }
    //   );
    //   navigator.msSaveOrOpenBlob(blob, filename);
    // } else {
    //   const a = document.createElement('a');
    //   a.download = filename;
    //   a.href = `data:${contentType},${encodeURIComponent(
    //     JSON.stringify(data, null, 1)
    //   )}`;
    //   a.target = '_blank';
    //   a.click();
    // }
  };

  return (
    <form className={classes.root} onSubmit={downloadReport}>
      <div>
        <TextField
          id="whereIsFoodComingFrom"
          label="Where is Food Coming From?"
          onChange={(e) => setWhereIsFoodComingFrom(e.target.value)}
        />
        <TextField
          id="whoPaying"
          label="Who Pays"
          onChange={(e) => setWhoPaysForFood(e.target.value)}
        />
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
