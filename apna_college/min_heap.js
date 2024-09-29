class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    // Function to insert a new value into the heap
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    
    // Function to remove and return the smallest value (root) from the heap
    remove() {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return root;
    }
    
    // Maintain heap property from bottom to top
    bubbleUp() {
        let index = this.heap.length - 1;
        const current = this.heap[index];
        
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            
            if (parent <= current) break;
            
            this.heap[index] = parent;
            this.heap[parentIndex] = current;
            index = parentIndex;
        }
    }
    
    // Maintain heap property from top to bottom
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const current = this.heap[0];
        
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swapIndex = null;
            
            if (leftIndex < length) {
                leftChild = this.heap[leftIndex];
                if (leftChild < current) {
                    swapIndex = leftIndex;
                }
            }
            
            if (rightIndex < length) {
                rightChild = this.heap[rightIndex];
                if (
                    (swapIndex === null && rightChild < current) || 
                    (swapIndex !== null && rightChild < leftChild)
                ) {
                    swapIndex = rightIndex;
                }
            }
            
            if (swapIndex === null) break;
            
            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = current;
            index = swapIndex;
        }
    }
    
    // Function to return the smallest value in the heap without removing it
    peek() {
        return this.heap[0];
    }
    
    // Function to return the size of the heap
    size() {
        return this.heap.length;
    }
}

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();
    
    // Add elements to the min heap, maintaining size <= k
    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.remove();  // Remove the smallest element to maintain k size
        }
    }
    
    // The top of the min heap is the kth largest element
    return minHeap.peek();
}

// Example usage
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k));  // Output: 5
