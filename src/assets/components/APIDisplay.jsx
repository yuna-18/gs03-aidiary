import React, {useState, useEffect} from 'react';


const APIDisplay = ({reply, loading, error}) => {

  return (
    <>
      <div className='api__item'>
        <p>
        {loading ? <p>AIの返信を生成中...</p> : error ? <p>{error}</p> : reply && <p>GeminiAI: {reply}</p>}
        </p>
      </div>
    </>
  );

};

export default APIDisplay;