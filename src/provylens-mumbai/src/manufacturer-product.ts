import { Bytes, BigInt } from "@graphprotocol/graph-ts";
import {
  eventAddManufacturerProduct as eventAddManufacturerProductEvent,
  eventDeleteManufacturerProduct as eventDeleteManufacturerProductEvent,
  manufacturerProducteventUpdateDistributorProductUints as manufacturerProducteventUpdateDistributorProductUintsEvent,
} from "../generated/manufacturerProduct/manufacturerProduct";
import {
  eventAddManufacturerProduct,
  eventDeleteManufacturerProduct,
  manufacturerProducteventUpdateDistributorProductUints,
} from "../generated/schema";

export function handleeventAddManufacturerProduct(
  event: eventAddManufacturerProductEvent
): void {
  let entity = new eventAddManufacturerProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._mpId = event.params._mpId;
  // entity._supplierAddress = event.params._supplierAddress
  // entity._smId = event.params._smId
  entity._supplierAddress = changetype<Bytes[]>(event.params._supplierAddress);
  entity._smId = changetype<BigInt[]>(event.params._smId);
  entity._name = event.params._name;
  entity._description = event.params._description;
  entity._unit = event.params._unit;
  entity._price = event.params._price;
  entity._date = event.params._date;
  entity._expiryDate = event.params._expiryDate;
  entity.status = event.params.status;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleeventDeleteManufacturerProduct(
  event: eventDeleteManufacturerProductEvent
): void {
  let entity = new eventDeleteManufacturerProduct(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._Id = event.params._Id;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlemanufacturerProducteventUpdateDistributorProductUints(
  event: manufacturerProducteventUpdateDistributorProductUintsEvent
): void {
  let entity = new manufacturerProducteventUpdateDistributorProductUints(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._dpId = event.params._dpId;
  entity._quantity = event.params._quantity;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
