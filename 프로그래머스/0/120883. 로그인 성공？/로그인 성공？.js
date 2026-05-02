function solution(id_pw, db) {
  let res = "fail";
  db.map((v) => {
    if (v[0] == id_pw[0])
      v[1] == id_pw[1] ? res = "login" : res = "wrong pw";
  });
  return res;
}