// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Coffee extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Coffee entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Coffee must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Coffee", id.toString(), this);
    }
  }

  static load(id: string): Coffee | null {
    return changetype<Coffee | null>(store.get("Coffee", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    return value!.toBytes();
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get message(): string {
    let value = this.get("message");
    return value!.toString();
  }

  set message(value: string) {
    this.set("message", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Confession extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Confession entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Confession must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Confession", id.toString(), this);
    }
  }

  static load(id: string): Confession | null {
    return changetype<Confession | null>(store.get("Confession", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get message(): string {
    let value = this.get("message");
    return value!.toString();
  }

  set message(value: string) {
    this.set("message", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value!.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    return value!.toBytes();
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
