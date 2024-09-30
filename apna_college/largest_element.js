class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
        this.heap[idx] = element;
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min;
    }

    sinkDown(idx) {
        const length = this.heap.length;
        const element = this.heap[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = this.heap[leftIdx];
                if (left < element) swap = leftIdx;
            }
            if (rightIdx < length) {
                right = this.heap[rightIdx];
                if (
                    (swap === null && right < element) ||
                    (swap !== null && right < left)
                ) {
                    swap = rightIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            idx = swap;
        }
        this.heap[idx] = element;
    }
}

function findKthLargest(nums, k) {
    const heap = new MinHeap();

    for (let num of nums) {
        heap.insert(num);
        if (heap.heap.length > k) {
            heap.extractMin();
        }
    }

    return heap.extractMin();
}

// Example usage
let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;
console.log(findKthLargest(nums, k)); // Output: 4
