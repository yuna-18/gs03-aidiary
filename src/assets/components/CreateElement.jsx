const CreateElement = ({createContent}) => {
  if (createContent.length !== 0) {

    return (
      <>
        {createContent.map((item, index) => (
          <div key={index} className="output__item"> {/* id をキーにする */}
            <p>{item.text}</p>
          </div>
        ))}
      </>
    );
  }
};

export default CreateElement;
