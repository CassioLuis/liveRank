CREATE TABLE rankPvp (
  id INT AUTO_INCREMENT PRIMARY KEY,
  data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  kname VARCHAR(40),
  kid INT,
  krace INT,
  kcls INT,
  dname VARCHAR(40),
  did INT,
  drace INT,
  dcls INT
);

CREATE INDEX idx_rankpvp_kid ON pw.rankPvp (kid);
CREATE INDEX idx_rankpvp_did ON pw.rankPvp (did);
CREATE INDEX idx_rankpvp_group ON pw.rankPvp (kid, kname);
CREATE INDEX idx_rankpvp_composite ON pw.rankPvp (kid, kname, dname);
