---
layout: ../../../layouts/Leetcode.astro
---

# Graphs
There are two main methods of searching a graph:
1. **Breadth-first search (BFS).** The graph is searched across the breadth of the frontier between discovered and undiscovered nodes uniformly; encountered nodes are prioritised.
2. **Depth-first search (DFS).** The graph searches the connections to a node deeply and fully before moving onto another node.
# BFS
The defining characteristic of BFS is that breadth is prioritised. To simulate this, we can use a **queue**: discovered neighbours are explored first, and newer undiscovered nodes are explored later due to the FIFO structure. We also need a way to indicate whether a node has been visited already or not—otherwise, if the graph has a cycle, BFS would never terminate.

```
BFS(G: graph, s: source node)
	Q = []
	s.time = 0
	s.visited = true
	
	ENQUEUE(Q, s)
	while Q is not empty:
		u = DEQUEUE(Q)
		for each neighbour v of u:
			// any other problem-specific conditions can be checked here too
			if not v.visited:  
				v.time = 1
				v.visited = true
				ENQUEUE(Q, v)

```

Notice that not all nodes will be visited at the end of `BFS`—only the ones reachable from s will be searched.
### Time Complexity
At every node, we do some constant time operations, and for every adjacent edge to that node, we do some constant time operations. Thus the worst-case time complexity is that every node and edge is accessed and constant time operations done on them, giving us a complexity of $\mathcal{O}(V + E)$.
# DFS
On the other hand, DFS prioritises depth: a node must be fully explored (i.e. all reachable nodes from that node must be reached) before we explore another one. Thus, newer nodes are searched first—we can use a *stack* instead of a queue to do so. Luckily, the recursive nature of function calling also serves as a stack!

```
DFS(G: graph):
	time = 0
	for each v in G.V:
		if not v.visited:
			DFSVisit(G, v)

DFSVisit(G: graph, s: source node):
	time += 1
	s.d = time                  // time of arrival
	s.visited = true
	for each neighbour t of s:
		// any other problem-specific conditions can be checked here too
		if not t.visited:
			DFSVisit(G, t)      // recursive call acts as pushing onto stack
	time += 1
	s.f = time                  // time of completion
```

Just like `BFS`, `DFS` tracks visited nodes as to prevent cycles stopping the algorithm from terminating.
### Time Complexity
At every node, we do some constant time operations, and for every adjacent edge to that node, we do some constant time operations. Thus the worst-case time complexity is that every node and edge is accessed and constant time operations done on them, giving us a complexity of $\mathcal{O}(V + E)$.