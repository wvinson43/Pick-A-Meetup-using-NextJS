import NewMeetupFrom from './NewMeetupForm';
import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <div className={classes.actions}>
        <button>Delete Meetup</button>
      </div>
    </section>
  );
};
export default MeetupDetail;
