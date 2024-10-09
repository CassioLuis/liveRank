const ranking = `
  select
    *
  from (
    SELECT 
      k.kid,
      k.kname AS name,
      COUNT(k.kname) AS n_kills,
      COALESCE(b.n_death, 0) AS n_death,
      ROW_NUMBER() OVER (ORDER BY COUNT(k.kname) DESC) AS rank_pos
    FROM pw.rankPvp AS k
    LEFT JOIN (
      SELECT
          k.did,
          COUNT(k.dname) AS n_death
      FROM pw.rankPvp AS k
      GROUP BY k.did
    ) AS b ON k.kid = b.did
    GROUP BY 
      k.kid,
      k.kname
    order by
      n_kills desc
  ) as a
  where
    a.kid = ?;
`

export default ranking