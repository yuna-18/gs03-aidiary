const CreateElement = ({createContent}) => {
  if (createContent.length !== 0) {

    return (
      <>
        {createContent.map((item, index) => (
          <div key={index} className="output__item"> {/* title をキーにする */}
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </>
    );
  }
};

export default CreateElement;
