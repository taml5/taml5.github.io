---
category: review
order: 0
title: Dynamic Programming
---

# Dynamic Programming

Dynamic programming (DP) problems have 2 key properties:
1. **Optimal substructure**: the optimal solution can be obtained by breaking the problem down into smaller subproblems and solving those optimally.
2. **Overlapping subproblems**: these subproblems are not necessarily only used once—some solutions of subproblems might require the solutions of others.
DP solutions exploit these properties to solve the problems, by identifying the optimal substructure, and **memoising** sub-solutions.
### Example
> You are climbing a staircase. It takes `n` steps to reach the top.
> 
> Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

The above problem possesses the optimal substructure property: for any `n`, we can calculate the optimal ways to climb `n` steps by calculating the optimal ways to reach `n - 1` steps and `n - 2` steps.
# Bellman Equation
A **Bellman equation** relates an instance of the problem to the solutions of the subproblems. Let $OPT(n)$ be the optimal solution for input size $n$: the Bellman equation is a relation describing $OPT(n)$ in terms of smaller $OPT(f(n))$, thus taking on a recursive structure.
### Example
Notice we can only take 1 step or 2 steps, so we can work our way backwards by considering the last step. If our last action is to take 1 step, how many ways can we climb $n$ steps? We only need to know the distinct ways to reach the $n-1$th step, $OPT(n-1)$, to calculate that: take all the distinct ways and then take one more 1-step. The case for the last action being 2 steps is identical: we only need to know the distinct ways to reach the $n-2$th step, $OPT(n-2)$. 
- Notice that we are *not* counting ways to reach the $n$th step from the $n-1$th or $n-2$th step. On the $n-2$th step, we could take two 1 steps to reach the $n$th step, but we should not count that way, since we would be double counting: the last action is to take 1 step, so it should already be included when calculating $OPT(n-1)$.
The only thing left to do is to sum the distinct ways up: $OPT(n) = OPT(n - 1) + OPT(n - 2)$.

Like other recursive relations, we also need to calculate the base cases: in this case, there is 1 way to climb 0 steps (by doing nothing!), and 1 to climb 1 step. We now have the full Bellman equation:
$$ 
OPT(n) = \begin{cases}
1 & n = 0 \\
1 & n = 1 \\
OPT(n - 1) + OPT(n - 2) & \text{otherwise}
\end{cases}
$$
Notice that subproblems overlap in our relation. In calculating $OPT(n-1)$ when $n > 1$, we also need the solution for $OPT(n - 2)$. If we write the code for the Bellman equation without any optimisation, we will calculate the same solutions multiple times.
# Memoisation
To address this, we simply need to store the solution for a sub-problem somewhere once we have calculated it. Typically, this takes the form of an array if there is one input variable, or a matrix if there are two or more input variables. The next time the sub-problem is encountered, we can then look up the solution (if it exists) in constant time—in effect only calculating the sub-solution only once.
# Top-down v. Bottom-up
Now that we have our general approach, we have two ways to approach it.
- **Top-down**. We simply implement the Bellman equation as written, memoising the solutions as we go.
- **Bottom-up**. We can calculate each sub-problem first starting from the base cases, and work upwards until we reach the original problem.
## Top-down
```python
solutions = []  # array or hash table of size n

def stairs(n):
	if n in solutions: return solutions[n]
	if n == 0: return 1
	if n == 1: return 1
	
	return stairs(n - 1) + stairs(n - 2)

```
## Bottom-up
```python
def stairs(n):
	solutions = []  # array or hash table of size n
	
	for n in range(0, n + 1):
		if n == 1: solutions[n] = 1
		elif n == 1: solutions[n] = 1
		else: solutions[n] = solutions[n - 1] + solutions[n - 2]
		
	
	return solutions[n]
```

Notice in the top-down approach, the Bellman equation is expressed as a recursive function:
```
stairs(n - 1) + stairs(n - 2)
```
whereas in the bottom-up approach, it is not:
```
solutions[n] = solutions[n - 1] + solutions[n - 2]
```
This is the main difference between the two. 
- The top-down approach uses more computational overhead to calculate each step, but crucially *it does not necessarily calculate all instances of sub-problems*. 
- The bottom-up approach does not have any recursive overhead as it uses a simple loop, but must work its way up from the base case to the problem, calculating all intermediate sub-problems.
# Time Complexity
The complexity depends on the nature of the problem, but is usually a polynomial of the input array or matrix.

In the above example, consider the complexity of the bottom-up approach. There is a for loop of complexity $\mathcal{O}(n)$, and each iteration is constant time. The top-down approach is the same: each recursive call is constant time, and in the worst case we reach all inputs from 0 to n, only once due to memoisation.