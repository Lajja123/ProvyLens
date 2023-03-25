-- query to get perticular user' data
{
  eventUserDatas(where: {_address: "0xe57f4c84539a6414C4Cf48f135210e01c477EFE0"}) {
    _image
    _name
    _physicalAddress
    _timeUpdated
    _type
    blockNumber
    blockTimestamp
    id
    transactionHash
    _address
  }
}

-- query to check which users are deleted
{
  eventDeleteUsers {
    id
    _address
    blockNumber
    blockTimestamp
    transactionHash
  }
}