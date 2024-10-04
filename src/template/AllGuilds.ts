
const guildListMembers = [
  ['length', 'CUInt'],
  ['roleid', 'UInt32'],
  ['cls', 'UByte']
]

const guildList = [
  ['length', 'CUInt'],
  ['unknown1', 'UInt32'],
  ['unknown2', 'UByte'],
  ['unknown3', 'UByte'],
  ['id', 'UInt32'],
  ['name', 'String'],
  ['level', 'UByte'],
  ['masterid', 'UInt32'],
  ['masterrole', 'UByte'],
  ['members', ['Array', guildListMembers]],
  ['slogan', 'String'],
  ['unknown4', 'UByte']
]

const AllGuilds = {
  protocol: {
    wait: true,
    port: 29400,
    request: 0x0bef,
    response: '8bef'
  },
  misc: [
    ['retcode', 'UInt32'],
    ['unknown4', 'UByte']
  ],
  data: ['Array', guildList]
}

export default AllGuilds
