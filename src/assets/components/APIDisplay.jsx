import React, {useState, useEffect} from 'react';
import OutputStyles from '../css/Output.module.css';

const APIDisplay = ({reply, loading, error}) => {

  return (
    <>
      <div className={OutputStyles.api__item}>
        {loading ? <p>AIの返信を生成中...</p> : error ? <p>{error}</p> : reply && <p>GeminiAI:<br /> {reply}</p>}
      </div>
    </>
  );

};

export default APIDisplay;