var assert = require('../../../_vendor/chai').assert;
var LinkedList = require('../../../src/ch3-data-structures/hash-table/doubly-linked-list');

describe("Doubly Linked List", function() {
  describe("Basic Attributes", function() {
    var emptyList = new LinkedList();

    it("has a head", function() {
      assert.isDefined(emptyList.head);
    });

    it("has a tail", function() {
      assert.isDefined(emptyList.tail);
    });
  });

  var list = new LinkedList()
  describe("append", function() {
    it("lets you append a node", function() {
      list.append("key1", 1);

      assert.equal(list.head.key, "key1");
      assert.equal(list.head.value, 1);
      assert.isNull(list.head.prev);
      assert.isNull(list.head.next);
    });

    it("updates its tail when a node is appended", function() {
      assert.equal(list.tail.value, 1);
      assert.isNull(list.tail.prev);
      assert.isNull(list.tail.next);
    });

    it("correctly appends multiple nodes", function () {
      list.append("key2", 2);
      list.append("key3", 3);

      assert.equal(list.head.value, 1);

      var secondNode = list.head.next;
      assert.equal(secondNode.value, 2);
      assert.equal(secondNode.prev.value, list.head.value);
      assert.equal(secondNode.next.value, 3)

      var thirdNode = list.head.next.next;
      assert.equal(thirdNode.value, 3);
      assert.isNull(thirdNode.next);
      assert.equal(thirdNode.value, list.tail.value);
    });
  });

  describe("search", function() {
    it("returns the node that contains the data", function() {
      var node = list.get("key2")

      assert.equal(node.value, 2);
    });

    it("returns null if data is not in list", function() {
      var node = list.get(5)

      assert.isNull(node);
    });
  });

  describe("delete", function() {
    it("correctly updates links when deleting a node", function() {
      list.delete("key2");

      assert.equal(list.head.value, 1);
      assert.equal(list.head.next.value, 3);
      assert.isNull(list.head.next.next);
    });

    it("updates its head if the head is deleted", function() {
      list.delete("key1");

      assert.equal(list.head.value, 3);
      assert.isNull(list.head.next);
    });

    it("updates its tail if the tail is deleted", function() {
      list.delete("key3");

      assert.isNull(list.head);
      assert.isNull(list.tail);
    });
  });
});
