import {
  ContracteventAddDistributorProduct as ContracteventAddDistributorProductEvent,
  ContracteventDeleteDistributorProduct as ContracteventDeleteDistributorProductEvent,
  ContracteventUpdateDistributorProductUints as ContracteventUpdateDistributorProductUintsEvent
} from "../generated/Contract/Contract"
import {
  ContracteventAddDistributorProduct,
  ContracteventDeleteDistributorProduct,
  ContracteventUpdateDistributorProductUints
} from "../generated/schema"

export function handleContracteventAddDistributorProduct(
  event: ContracteventAddDistributorProductEvent
): void {
  let entity = new ContracteventAddDistributorProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._dpId = event.params._dpId
  entity._manufacturerAddress = event.params._manufacturerAddress
  entity._mdId = event.params._mdId
  entity._name = event.params._name
  entity._description = event.params._description
  entity._unit = event.params._unit
  entity._price = event.params._price
  entity._date = event.params._date
  entity._expiryDate = event.params._expiryDate
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContracteventDeleteDistributorProduct(
  event: ContracteventDeleteDistributorProductEvent
): void {
  let entity = new ContracteventDeleteDistributorProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContracteventUpdateDistributorProductUints(
  event: ContracteventUpdateDistributorProductUintsEvent
): void {
  let entity = new ContracteventUpdateDistributorProductUints(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._dpId = event.params._dpId
  entity._quantity = event.params._quantity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
