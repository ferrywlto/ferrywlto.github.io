---
title: 'C# Bitwise left shift and set bit'
description: 'Bitwise left shift operation in C# and set particular bit to 1'
pubDate: 2025-01-23
tags: ['leetcode', 'csharp', 'dev', 'bitwise']
---
Learned something new during leetcode. 

In the past when I need to set a bit of a number to 1, I do the below reflexively:
```csharp
// for example if I need to set the 10th bits of a 32 bits number to 1
// assuming the value is 0
result += (int)Math.Pow(2, 32-22);
```

But actually we can do it in following way:
```csharp
result |= (1 << 9);
```

Explanation:

1. First we do a right shift 9 times for `1`:
- Before 
```
(0000 0000 0000 0000 0000 0000 0000 0001)
```
- After
```
(0000 0000 0000 0000 0000 0010 0000 0000)
```

2. Use bitwise OR assignment operator `|=`:
- Such that the 10th bit of result must set to `1` 