/** @format */
'use strict';

{
  const tasks = ['掃除', '買い物', '散歩'];

  const title = function () {
    console.log('==================');
    console.log('現在持っているタスク');
    console.log('==================');
  };
  function lists() {
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i} : ${tasks[i]}`);
    }
  }
  title();
  lists();
  const task = prompt('タスクを入力してください');
  function addList() {
    tasks.push(task);
    title();
    lists();
    alert('新しいタスクを追加しました。');
    prompt('「確認、追加、削除、終了」のいずれかを入力してください');
  }
  addList();
}
