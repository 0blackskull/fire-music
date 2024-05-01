class Queue {

	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
    this.playIndex = 0
	}

	enqueue(item) {
		this.items[this.backIndex] = item
    this.playIndex = this.backIndex
		this.backIndex++
 
    console.log(`Insertion ${item.id}\n
    Front: ${this.frontIndex}\n
    Play: ${this.playIndex}\n
    Back: ${this.backIndex}`)

		return item + ' inserted'
	}

	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}

	peek() {
		return this.items[this.frontIndex]
	}

  next() {
    if (this.playIndex < this.backIndex - 1) {
      this.playIndex++;
    } else {
      this.playIndex = this.frontIndex;
    }

    console.log(`Next\n
    Front: ${this.frontIndex}\n
    Play: ${this.playIndex}\n
    Back: ${this.backIndex}`)

    return this.items[this.playIndex];
  }

  last() {
    if (this.playIndex > this.frontIndex) {
      this.playIndex--;
    } else {
      this.playIndex = this.backIndex - 1;
    }

    console.log(`Last\n
    Front: ${this.frontIndex}\n
    Play: ${this.playIndex}\n
    Back: ${this.backIndex}`)

    return this.items[this.playIndex];
  }

  play() {
    if (this.backIndex - this.frontIndex > 0) {
      return this.items[this.playIndex].id;
    } else {
      return '1';
    }
  }

	get printQueue() {
		return this.items;
	}
}

export const songQueue = new Queue();
