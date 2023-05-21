// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('note');

// Create a new document in the collection.
db.getCollection("javascript_note").insertOne({
  articleid: "100000",
  "content ": "今天天气真好，阳光明媚",
  userid: "1001",
  nickname: "Rose",
  "create date time": newDate(),
  Likenum: NumberInt(10),
  state: null,
});
