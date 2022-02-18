import './CampComment.scss';

const CampComment = ({ author, content }) => {
  return (
    <div className="camp-comment">
      <div className="camp-comment__info">
        <h6 className="camp-comment__info__author">{author}</h6>
        <p className="camp-comment__info__time">13h ago</p>
      </div>
      <p className="camp-comment__content">{content}</p>
    </div>
  );
};

export default CampComment;
