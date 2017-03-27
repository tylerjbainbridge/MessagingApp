import React from 'react';
import { Link } from 'react-router';


const TopicItem = ({ topic }) => {
  return (
      <div className="topic">
        <Link to={`/room/${topic.room_name}/topic/${topic.ref}`}><h4>{topic.title}</h4></Link>
        <span>
          <Link to={'/user/' + (topic.user ? topic.user.username : '')}>
            {topic.user ? topic.user.username : ''}
          </Link>
        </span>
        <p>{topic.description}</p>
        <Link to={`/room/${topic.room_name}/topic/${topic.ref}`}>
        {
          topic.messages_count != 1 ?
          <p>{topic.messages_count} messages</p> : 
          <p>{topic.messages_count} message</p>
        }
        </Link>
      </div>
  );
}


const TopicList = ({ topics }) => (
  <div className="sharedContainer">
    {topics.map((topic, key) =>
      <TopicItem topic={topic} key={key} />
    )}
  </div>
);

export default TopicList;