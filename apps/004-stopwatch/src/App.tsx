export default function App() {
  return (
    <div>
      <div>
        <header>
          <div>
            <h1>ストップウォッチ</h1>
            <p>ラップ計測付きのシンプルなストップウォッチ</p>
          </div>
          <div>
            <span>待機中</span>
          </div>
        </header>

        <main>
          <section>
            <div>
              <div>
                <h2>Elapsed Time</h2>
                <span>HH : MM : SS . ms</span>
              </div>

              <div>
                <div>
                  <span>00:00:00.000</span>
                </div>
              </div>

              <div>
                <button>スタート</button>

                <button>ラップ</button>
              </div>

              <div>
                <button>リセット</button>
              </div>
            </div>
          </section>

          <section>
            <div>
              <div>
                <h2>Laps</h2>
                <div>ラップはここに表示されます</div>
              </div>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>Lap</th>
                    <th>Lap Time</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>00:00:00.000</td>
                    <td>00:00:00.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <footer>
          ヒント：
          「スタート」→「ラップ」で記録、「一時停止」→「再開」で続きから計測できます。
        </footer>
      </div>
    </div>
  );
}
