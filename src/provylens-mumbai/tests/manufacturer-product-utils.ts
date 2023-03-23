import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  eventAddManufacturerProduct,
  eventDeleteManufacturerProduct,
  manufacturerProducteventUpdateDistributorProductUints
} from "../generated/manufacturerProduct/manufacturerProduct"

export function createeventAddManufacturerProductEvent(
  _mpId: BigInt,
  _supplierAddress: Array<Address>,
  _smId: Array<BigInt>,
  _name: Bytes,
  _description: Bytes,
  _unit: BigInt,
  _price: BigInt,
  _date: BigInt,
  _expiryDate: BigInt,
  status: boolean
): eventAddManufacturerProduct {
  let eventAddManufacturerProductEvent = changetype<
    eventAddManufacturerProduct
  >(newMockEvent())

  eventAddManufacturerProductEvent.parameters = new Array()

  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_mpId", ethereum.Value.fromUnsignedBigInt(_mpId))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_supplierAddress",
      ethereum.Value.fromAddressArray(_supplierAddress)
    )
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_smId",
      ethereum.Value.fromUnsignedBigIntArray(_smId)
    )
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromBytes(_name))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_description",
      ethereum.Value.fromBytes(_description)
    )
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_unit", ethereum.Value.fromUnsignedBigInt(_unit))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_date", ethereum.Value.fromUnsignedBigInt(_date))
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam(
      "_expiryDate",
      ethereum.Value.fromUnsignedBigInt(_expiryDate)
    )
  )
  eventAddManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return eventAddManufacturerProductEvent
}

export function createeventDeleteManufacturerProductEvent(
  _Id: BigInt
): eventDeleteManufacturerProduct {
  let eventDeleteManufacturerProductEvent = changetype<
    eventDeleteManufacturerProduct
  >(newMockEvent())

  eventDeleteManufacturerProductEvent.parameters = new Array()

  eventDeleteManufacturerProductEvent.parameters.push(
    new ethereum.EventParam("_Id", ethereum.Value.fromUnsignedBigInt(_Id))
  )

  return eventDeleteManufacturerProductEvent
}

export function createmanufacturerProducteventUpdateDistributorProductUintsEvent(
  _dpId: BigInt,
  _quantity: BigInt
): manufacturerProducteventUpdateDistributorProductUints {
  let manufacturerProducteventUpdateDistributorProductUintsEvent = changetype<
    manufacturerProducteventUpdateDistributorProductUints
  >(newMockEvent())

  manufacturerProducteventUpdateDistributorProductUintsEvent.parameters = new Array()

  manufacturerProducteventUpdateDistributorProductUintsEvent.parameters.push(
    new ethereum.EventParam("_dpId", ethereum.Value.fromUnsignedBigInt(_dpId))
  )
  manufacturerProducteventUpdateDistributorProductUintsEvent.parameters.push(
    new ethereum.EventParam(
      "_quantity",
      ethereum.Value.fromUnsignedBigInt(_quantity)
    )
  )

  return manufacturerProducteventUpdateDistributorProductUintsEvent
}
