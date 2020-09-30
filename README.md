# schedule
## お勉強用

### DBに登録したりするAPI
node.js
　Express
postgresql
- [x] POST:予定を登録　　
- [x] GET：予定を取得　
- [x] PUT:予定を修正(ID指定あり)　いったんおいとく
- [x] DELETE：予定を削除　(ID指定あり)
- [ ] 時間を入力していなくても、空で登録できるようにする
- [ ] 終了時間も入れられるようにする


### フロント
vue.js　
nuxt.js
vuetify
- [x] API呼び出し　
- [x] プロキシを設定する（しないと、画面をリロードしたときしかAPI呼び出せない）
- [x] カレンダーから予定登録　
- [x] getで予定をとってきて表示 
- [x] 予定一覧画面から削除
- [x] 削除したとき同時に一覧から消えるようにしたい=>削除した予定がある配列の場所を取得する
- [x] 予定一覧画面から編集（更新)
- [x] 日付けと内容を入力しなければ登録不可にする（赤文字で入力して下さいって出す）
- [ ] （出欠をとれるようにする（○とか×とか））
- [ ] （イベント一覧からそのイベントの出欠を見れるようにする）
- [ ] （参加率のグラフ？）
- [ ] （名前入力するのめんどいから、LINEの認証でできたりしないかな）
