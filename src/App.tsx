import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Form() {
  const {register, handleSubmit} = useForm(); 

  const onSubmit = data => {
    console.log(data)

    let filename = "export.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(data)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(data, null, 1));
      a.target = '_blank';
      a.click();
    }
    
  }

  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      
      <fieldset> 
      <legend>Food Plans</legend>  
      <label htmlFor = "food_plan">Food Plans </label>
      <input name = 'food_plan' id = "food_plan" type = 'Text' ref = {register}/> <br></br>

      <label htmlFor = "who_pays">Who Pays </label>
      <input name = "who_pays" id = "who_pays" type = 'Text' ref = {register}/><br></br>
      </fieldset>

      <fieldset> 
      <legend>Event Costs</legend> 
      <label htmlFor = "event_costs">Event Costs </label>
      <input name = "event_costs"  id = "event_costs" type = 'Number' ref = {register}/><br></br>

      <label htmlFor = "many_students">How Many Students </label>
      <input name = "many_students" id = "many_students" type = 'Number' ref = {register}/><br></br>

      <label htmlFor = "team_decision">What Decides The Teams </label>
      <input name = "team_decision" id = "team_decision" type = 'Text' ref = {register}/><br></br>

      <label htmlFor = "many_teams">How Many Teams </label>
      <input name = "many_teams" id = "many_teams" type = 'Number' ref = {register}/><br></br>

      <label htmlFor = "entry_rules">What Are The Rules For Entry </label>
      <input name = "entry_rules" id = "entry_rules" type = 'Text' ref = {register}/><br></br>
      </fieldset>

      <fieldset> 
      <legend>Timelines</legend> 
      <label htmlFor = "timeline">Timelines </label>
      <input name = "timeline" id = "timeline" type = 'Text' ref = {register}/> <br></br>

      <label htmlFor = "when_handled">When Should Things Be Handled </label>
      <input name = "when_handled" id = "when_handled" type = 'Text' ref = {register}/><br></br>

      <label htmlFor = "deadline">Deadlines </label>
      <input name = "deadline" id = "deadline" type = 'Text' ref = {register}/><br></br>

      <label htmlFor = "fundraise">Fundraising </label>
      <input name = "fundraise" id = "fundraise" type = 'Text' ref = {register}/><br></br>
      </fieldset>

      <fieldset> 
      <legend>Advertising</legend> 
      <label htmlFor = "advert">Advertising </label>
      <input name = "advert" id = "advert" type = 'Text' ref = {register}/> <br></br>

      <label htmlFor = "how_advert">How To Advertise </label>
      <input name = "how_advert" id = "how_advert" type = 'Text' ref = {register}/><br></br>

      <label htmlFor = "pro_photos">Getting Professional Photos </label>
      <input name = "pro_photos" id = "pro_photos" type = 'Text' ref = {register}/><br></br>
      </fieldset>

      <fieldset> 
      <legend>Coaching</legend> 
      <label htmlFor = "coach">Coaching </label>
      <input name = "coach" id = "coach" type = 'Text' ref = {register}/> <br></br>

      <label htmlFor = "who_coach">Who Coaches </label>
      <input name = "who_coach" id = "who_coach" type = 'Text' ref = {register}/><br></br>

      <label htmlFor = "coach_num">How Many Coaches </label>
      <input name = "coach_num" id = "coach_num" type = 'Number' ref = {register}/><br></br>
      </fieldset>

      <fieldset> 
      <legend>Pre-Competition</legend> 
      <label htmlFor = "pre_comp">Pre-Competition </label>
      <input name = "pre_comp" id = "pre_comp" type = 'Text' ref = {register}/> <br></br>

      <label htmlFor = "workshop">Workshops </label>
      <input name = "workshop" id = "workshop" type = 'Text' ref = {register}/><br></br>

      <label htmlFor = "training">Training </label>
      <input name = "training" id = "training" type = 'Text' ref = {register}/><br></br>

      <label htmlFor = "club_lectures">Club Sponsored Lectures </label>
      <input name = "club_lectures" id = "club_lectures" type = 'Text' ref = {register}/><br></br>
      </fieldset>


      <input type = 'button' value = 'Download' id = 'bttn' />

    </form>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Form} />
      </Switch>
    </Router>
  );
}
