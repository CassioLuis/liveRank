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
