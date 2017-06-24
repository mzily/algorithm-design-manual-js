var assert = require('../../../_vendor/chai').assert;
var LinkedList = require('../../../src/ch3-DataStructureExercises/stacksQueuesAndLists/reverseLinkedList');

describe("2. Reverse a Singly-Linked List", function() {
  describe("Linked List", function() {
    var head = new LinkedList(1);

    it("has data at its head node", function() {
      assert.equal(head.data, 1);
    });

    it("has a pointer to the next node at its head node", function() {
      assert.equal(head.next, null);
    });

    it("tracks its total length", function() {
      assert.equal(head.length, 1);
    });

    it("correctly assigns a new node to its next pointer", function() {
      head.append(2);

      assert.equal(head.next.data, 2);
    });

    it("tracks how many nodes there are in a list", function() {
      assert.equal(head.length, 2);

      head.append(3);

      assert.equal(head.length, 3);
    });
  });

  describe("Reverse Linked List", function() {
    it("there is no change if there is only one node", function() {
      var singleNode = new LinkedList(0);
      singleNode.reverse();

      assert.equal(singleNode.data, 0);
      assert.equal(singleNode.next, null);
    });

    it("reverses a singly-linked list", function() {
      var list = new LinkedList(1);
      list.append(2);
      list.append(3);
      var reversedList = list.reverse(list);

      assert.equal(reversedList.data, 3);
      assert.equal(reversedList.next.data, 2);
      assert.equal(reversedList.next.next.data, 1);
    });
  });
});
