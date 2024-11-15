import OutputStyles from '../css/Output.module.css';

const CreateElement = ({textElement, loading, error}) => {
  return (
    <>
      {textElement
        .filter((item) => item.reply) // Only display items that have an API reply
        .map((item) => (
          <div key={item.id} className={OutputStyles.output__item}>
            <p>{item.text}</p>
            {error ? (
              <p>{error}</p>
            ) : (
              <p>GeminiAI:<br />{item.reply}</p>
            )}
          </div>
        ))}
    </>
  );
};


export default CreateElement;
