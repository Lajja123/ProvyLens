import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ContracteventAddDistributorProduct,
  ContracteventDeleteDistributorProduct,
  ContracteventUpdateDistributorProductUints
} from "../generated/Contract/Contract"

export function createContracteventAddDistributorProductEvent(
  _dpId: BigInt,
  _manufacturerAddress: Array<Address>,
  _mdId: Array<BigInt>,
  _name: Bytes,
  _description: Bytes,
  _unit: BigInt,
  _price: BigInt,
  _date: BigInt,
  _expiryDate: BigInt,
  status: boolean
): ContracteventAddDistributorProduct {
  let contracteventAddDistributorProductEvent = changetype<
    ContracteventAddDistributorProduct
  >(newMockEvent())

  contracteventAddDistributorProductEvent.parameters = new Array()

  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_dpId", ethereum.Value.fromUnsignedBigInt(_dpId))
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_manufacturerAddress",
      ethereum.Value.fromAddressArray(_manufacturerAddress)
    )
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_mdId",
      ethereum.Value.fromUnsignedBigIntArray(_mdId)
    )
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromBytes(_name))
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromBytes(_description)
    )
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_unit", ethereum.Value.fromUnsignedBigInt(_unit))
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_date", ethereum.Value.fromUnsignedBigInt(_date))
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam(
      "_expiryDate",
      ethereum.Value.fromUnsignedBigInt(_expiryDate)
    )
  )
  contracteventAddDistributorProductEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return contracteventAddDistributorProductEvent
}

export function createContracteventDeleteDistributorProductEvent(
  _id: BigInt
): ContracteventDeleteDistributorProduct {
  let contracteventDeleteDistributorProductEvent = changetype<
    ContracteventDeleteDistributorProduct
  >(newMockEvent())

  contracteventDeleteDistributorProductEvent.parameters = new Array()

  contracteventDeleteDistributorProductEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return contracteventDeleteDistributorProductEvent
}

export function createContracteventUpdateDistributorProductUintsEvent(
  _dpId: BigInt,
  _quantity: BigInt
): ContracteventUpdateDistributorProductUints {
  let contracteventUpdateDistributorProductUintsEvent = changetype<
    ContracteventUpdateDistributorProductUints
  >(newMockEvent())

  contracteventUpdateDistributorProductUintsEvent.parameters = new Array()

  contracteventUpdateDistributorProductUintsEvent.parameters.push(
    new ethereum.EventParam("_dpId", ethereum.Value.fromUnsignedBigInt(_dpId))
  )
  contracteventUpdateDistributorProductUintsEvent.parameters.push(
    new ethereum.EventParam(
      "_quantity",
      ethereum.Value.fromUnsignedBigInt(_quantity)
    )
  )

  return contracteventUpdateDistributorProductUintsEvent
}
