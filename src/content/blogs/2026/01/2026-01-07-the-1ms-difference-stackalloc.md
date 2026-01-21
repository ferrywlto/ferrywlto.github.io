---
title: 'The 1ms difference - stackalloc'
description: 'A new csharp keyword learned for high performance computing and other options'
pubDate: '2026-01-07'
heroImage: 'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?q=80&w=2298&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
tags: ['csharp', 'leetcode']
---

During a recent leetcode exercise, I was struggling why my already optimal solution is still having ~1ms~ time behind the top solvers. 
When I inspect their code, it's a shame for me that I didn't realize this keyword exists after writing C# for more than a decade.
Documenting it here because I have learned something new. 😀

The keyword `stackalloc` is for creating small, short‑lived buffers without heap allocation. 

It's alternative to `new`, which allocate memory on heap instead. 

## Typical use cases:

- Temporary scratch buffers in hot paths (parsers, encoders, algorithms) to avoid GC pressure.
- Interop scenarios where you need a fixed buffer for native calls.
- High‑performance code where you want to avoid allocating a new array on each call.

## Limits / Notes:

- Size should be small; stack is limited and too‑large allocations can cause stack overflow.
- Lifetime is the current method scope only.
- Works with `Span<T>/ReadOnlySpan<T>` in safe code; no need for unsafe in many cases now.
- Stack should be small, rule of thumb: A few K bytes maximum.

## Alternatives

- Other choice of high performance data structure: `ArrayPool<T>`
  - Have to be careful on not accessing memory outside of rent boundary
  - Have to be careful on explicit requesting array clean up on return, otherwise it is not guaranteed to be cleared. 

```csharp
var pool = ArrayPool<byte>.Shared;
byte[] buffer = pool.Rent(4096);
try
{
    // use buffer
}
finally
{
    pool.Return(buffer, clearArray: true);
}
```

Next time when you need to frequently create a small data structure for your algorithm, try `stackalloc` or `ArrayPool<T>`. Happy coding. 👋
