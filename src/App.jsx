import {useState} from 'react';
import appStyles from './assets/css/App.module.css';
import {Title, Input, CreateElement, InputDisplay, APIDisplay} from './assets/components/index';

function App () {
  // 新規作成
  const [createContent, setCreateContent] = useState([]);
  // リロード表示
  const [displayItems, setDisplayItems] = useState([]);
  //API出力テキスト
  const [reply, setReply] = useState('');
  // フォーム入力データ
  const [inputValue, setInputValue] = useState('');

  // API管理
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className={appStyles.contents__wrapper}>
      <div className={appStyles.input__container}>
        <Title />
        <Input setCreateContent={setCreateContent} setDisplayItems={setDisplayItems} setInputValue={setInputValue} inputValue={inputValue} setReply={setReply} setLoading={setLoading} setError={setError} />
      </div>
      <div className={appStyles.output__container}>
        <div className={appStyles.user__outer}>
          <CreateElement createContent={createContent} />
          <InputDisplay setDisplayItems={setDisplayItems} displayItems={displayItems} />
        </div>
        <APIDisplay reply={reply} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;
