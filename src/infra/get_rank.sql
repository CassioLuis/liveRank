SELECT
  *,
  gain_points - penality_points as rank_points
FROM (
  SELECT 
    k.kid,
    k.kname AS name,
    COUNT(k.kname) AS n_kills,
    COALESCE(b.n_deaths, 0) AS n_deaths,
    COALESCE(COUNT(k.kname) * 2, 0) AS gain_points,
    COALESCE(b.penality_points, 0) AS penality_points,
    ROW_NUMBER() OVER (ORDER BY ((COALESCE(COUNT(k.kname) * 2, 0)) - (COALESCE(b.penality_points, 0))) DESC) AS rank_pos
  FROM pw.rankPvp AS k
  LEFT JOIN (
    SELECT
        k.did,
        COUNT(k.dname) AS n_deaths,
        COUNT(k.dname) * 1 AS penality_points
    FROM pw.rankPvp AS k
    GROUP BY k.did
  ) AS b ON k.kid = b.did
  GROUP BY 
    k.kid,
    k.kname
  ORDER BY
    n_kills DESC
) AS a
-- WHERE
--   a.kid = 1136
ORDER BY rank_points DESC
