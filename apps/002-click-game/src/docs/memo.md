# ここには作業に必要であろうことを記載

## コードを書く前にどう考えるのか(AI より)

1. 「状態（state）」を洗い出す
2. ゲームの「状態遷移」を言葉で整理する

### 「状態（state）」を洗い出す

- phase
  - start: スタート画面
  - playing: ゲーム中画面
  - result: 結果表示画面
- timeLeft
  - 残り時間（秒）
- count
  - クリック数

### ゲームの「状態遷移」を言葉で整理する

- 初期状態
  - phase = "start"
  - timeLeft = 10
  - count = 0
- スタートを押す
  - phase = "playing"
  - （ゲーム開始状態になる）
- ゲーム中
  - クリックするたびに count + 1
  - 1 秒ごとに timeLeft - 1
- timeLeft が 0 になる
  - phase = "result"
  - ゲーム終了（結果画面へ）
- リセット
  - phase = "start"
  - timeLeft = 10
  - count = 0

実装手順については UI（ロジックなし）から実装する
state の phase はそれぞれコンポーネント化する
