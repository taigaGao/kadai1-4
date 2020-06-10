const taskList = [
    {"[内容]":"机を片付ける","[ジャンル]":"掃除"},
    {"[内容]":"牛乳を買う","[ジャンル]":"買い物"},
    {"[内容]":"散歩する","[ジャンル]":"運動"}
];

const printTask = () => {
    console.log("========================");
    console.log("現在持っているタスクの一覧");
    console.log("========================");
    for (let i = 0; i < taskList.length; i++) {
        console.log( i + " : " + "[内容]" + taskList[i]["[内容]"] + ",[ジャンル]" +taskList[i]["[ジャンル]"] );
    };
}

const addTask = () => {
    const taskName = prompt("タスクを入力してください");
    const genreName = prompt("ジャンルを入力してください");
    taskList.push( {"[内容]":taskName,"[ジャンル]":genreName} );
    alert("新しいタスクを追加しました。");
    printTask();
}

const editTask = () => {
    const name = prompt("「確認、追加、削除、終了」の4つのいずれかを入力してください");
}

printTask();
addTask();
editTask();