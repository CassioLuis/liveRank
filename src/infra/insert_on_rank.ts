const insertOnRank = `
  INSERT INTO rankPvp (kname, kid, krace, kcls, dname, did, drace, dcls)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`

export default insertOnRank
