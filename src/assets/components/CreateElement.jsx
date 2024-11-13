const CreateElement = ({createContent}) => {
  if (createContent.length !== 0) {
    return (
      <div className="output__wrapper">
        {createContent.map((item, index) => (
          <div key={index} className="output__item">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div className="output__wrapper"></div>;
  }
};

export default CreateElement;
