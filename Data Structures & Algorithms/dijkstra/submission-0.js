class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        // Build adjacency list
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v, w] of edges) {
            adj[u].push([v, w]);
        }

        const dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        // Min-heap: [distance, node]
        const pq = new PriorityQueue((a, b) => a[0] - b[0]);
        pq.enqueue([0, src]);

        const visited = new Set();

        while (!pq.isEmpty()) {
            const [d, node] = pq.dequeue();
            if (visited.has(node)) continue;
            visited.add(node);

            for (const [neighbor, weight] of adj[node]) {
                const newDist = d + weight;
                if (newDist < dist[neighbor]) {
                    dist[neighbor] = newDist;
                    pq.enqueue([newDist, neighbor]);
                }
            }
        }

        const result = {};
        for (let i = 0; i < n; i++) {
            result[i] = dist[i] === Infinity ? -1 : dist[i];
        }
        return result;
    }
}