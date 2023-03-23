import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ContracteventAddDistributorProduct } from "../generated/schema"
import { ContracteventAddDistributorProduct as ContracteventAddDistributorProductEvent } from "../generated/Contract/Contract"
import { handleContracteventAddDistributorProduct } from "../src/contract"
import { createContracteventAddDistributorProductEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _dpId = BigInt.fromI32(234)
    let _manufacturerAddress = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let _mdId = [BigInt.fromI32(234)]
    let _name = Bytes.fromI32(1234567890)
    let _description = Bytes.fromI32(1234567890)
    let _unit = BigInt.fromI32(234)
    let _price = BigInt.fromI32(234)
    let _date = BigInt.fromI32(234)
    let _expiryDate = BigInt.fromI32(234)
    let status = "boolean Not implemented"
    let newContracteventAddDistributorProductEvent = createContracteventAddDistributorProductEvent(
      _dpId,
      _manufacturerAddress,
      _mdId,
      _name,
      _description,
      _unit,
      _price,
      _date,
      _expiryDate,
      status
    )
    handleContracteventAddDistributorProduct(
      newContracteventAddDistributorProductEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ContracteventAddDistributorProduct created and stored", () => {
    assert.entityCount("ContracteventAddDistributorProduct", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_dpId",
      "234"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_manufacturerAddress",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_mdId",
      "[234]"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_name",
      "1234567890"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_description",
      "1234567890"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_unit",
      "234"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_price",
      "234"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_date",
      "234"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_expiryDate",
      "234"
    )
    assert.fieldEquals(
      "ContracteventAddDistributorProduct",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "status",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
