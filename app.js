/** @format */
'use strict';

{
  let tasks = [
    { do: '部屋を片付ける', genre: '掃除' },
    { do: '牛乳を買う', genre: '買い物' },
    { do: '散歩する', genre: '運動' },
  ];

  const title = function () {
    console.log('==================');
    console.log('現在持っているタスク');
    console.log('==================');
  };
  function lists() {
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i} : [内容]${tasks[i].do}、[ジャンル]${tasks[i].genre}`);
    }
  }
  title();
  lists();
  const newTask = prompt('タスクを入力してください');
  const newGenre = prompt('ジャンルを入力してください');
  function addList() {
    tasks.push({ do: newTask, genre: newGenre });
    alert('新しいタスクを追加しました。');
    title();
    lists();
    prompt('「確認、追加、削除、終了」のいずれかを入力してください');
  }
  addList();
}
