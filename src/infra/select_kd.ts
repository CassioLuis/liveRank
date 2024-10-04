const selectKills = `
  select
    count(kid) as kills
  from rankPvp a
  where a.kid = ?
`
const selectDeaths = `
  select
    count(did)  as deaths
  from rankPvp a
  where a.did = ?
`

export {
  selectKills,
  selectDeaths
}
