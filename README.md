# ①課題番号-プロダクト名

課題3-AI Diary

## ②課題内容（どんな作品か）

- 一言を記入して確定すると、AI(Gemini AI)が相槌を打ってくれます。

## ③DEMO
https://yuna-18.github.io/gs03-aidiary/

## ⑤工夫した点・こだわった点

- リロードしてもリセットしないようにした
- AIの出力と入力データを一体化させて、一括管理できるようにした
- 前回できなかった、コンポーネントの分割やモジュールcssの利用

## ⑥難しかった点・次回トライしたいこと(又は機能)

### 難しかった点
- APIの利用。JSが基本だったのでReactに書き換えるのに苦戦した

### 次回トライしたいこと
- 画像をつけたり、AIに感情を表す言葉を設定させて相槌にあった絵文字を表示させるなどのデザイン面


## ⑦質問・疑問・感想、シェアしたいこと等なんでも
 - ローカルストレージにオブジェクトも保存できることに思い至らず、かなりの時間苦戦しました。
 - APIキーの.envファイルの書き方はReactとViteとで別物らしく、環境構築によっても注意しなければならないらしい(よく考えれば当たり前だけどすごい詰まりました)