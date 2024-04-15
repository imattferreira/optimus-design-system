class Queue<T> {
  #store: T[] = [];

  pop(): void {
    this.#store.shift();
  }

  iter() {
    return {
      map: this.#store.map,
      forEach: this.#store.forEach
    }
  }

  queue(data: T): void {
    this.#store.push(data);
  }

  size(): number {
    return this.#store.length;
  }
}

export default Queue;
