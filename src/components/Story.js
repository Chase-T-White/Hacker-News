const Story = ({
  title,
  url,
  points,
  num_comments,
  author,
  objectID,
  removeStory,
}) => {
  return (
    <div className='wrapper-box'>
      <div className='story-card'>
        <h4 className='story__title'>{title}</h4>
        <p>
          {points} points by <em>{author}</em> | {num_comments} comments
        </p>
        <div className='story__options flex'>
          <a
            href={url}
            className='story__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read More
          </a>
          <button
            className='btn btn--remove'
            onClick={() => removeStory(objectID)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
