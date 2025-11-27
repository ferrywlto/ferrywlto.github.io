---
title: 'Your automation buddies in C#'
description: 'Learn to automate tasks in C# using Polly to handle retries and **Hangfire** for scheduling and queuing jobs'
pubDate: '2022-03-19'
tags: ['csharp', 'automation', 'polly', 'hangfire', 'scheduling']
heroImage: 'https://miro.medium.com/v2/resize:fit:508/format:webp/0*pAzO-cChcxzLG3JL.png'
---

Hello everyone! Welcome to my **#Everything in CSharp** series. This time we write fewer code than before because we want our computer work for us. One of the programmers’ task is to automate things and to reduce human workload. Let’s say you want to monitor some website data, but implementing a useful scheduler is not an easy task. Unix/Linux power users may probably know cron jobs, today we will learn how to do it in C#.

## Getting started

Let’s start by creating a C# project and a simulated job:

```bash
dotnet new console
touch SimulatedJob.cs
```

The job simply returns an integer on every 5th call; otherwise it will throw an exception. This simulates some remote, lengthy process under poor network connection.

Handling retry and recovery when calling such a service could be tedious work. Luckily we have our first buddy today: [[**Polly**]](https://github.com/App-vNext/Polly).

> **Polly** is a .NET resilience and transient-fault-handling library that allows developers to express policies such as Retry, Circuit Breaker, Timeout, Bulkhead Isolation, and Fallback in a fluent and thread-safe manner.

Polly is open-source, under active development and popular (more than 10K stars) among .NET developers. To add Polly into our project:
```bash
dotnet add package polly
```

Now we can write the code to consume our not-that-reliable job. First we need to create a retry policy to handle when the service we call throws exceptions. In our example we simply print the exception message and then continue. We also set how many times we will retry and how long to wait before the next retry in the chaining method `WaitAndRetry()`.

## Introducing **Hangfire**

To build a simple automation system, we need not only a scheduler — ideally it should be able to manage multiple scheduled tasks. If you want to implement these by your own it will take a long period of time. The good news is the second buddy I introduce today has you covered!

[[**Hangfire**]](https://www.hangfire.io/) is a free, open-source, lightweight library that not only runs scheduled jobs for you; it also handles queuing and can resume your queued jobs from persistent storage.

> An easy way to perform background job processing in your .NET and .NET Core applications. No Windows Service or separate process required.
To add **Hangfire** to our project:

```bash
dotnet add package **Hangfire**
```

We will also use in-memory storage instead of a real database for demo purposes:

```bash
dotnet add package Hangfire.InMemory
```

To demonstrate how simple it is to integrate **Hangfire**, open `Program.cs` and edit it as shown below:

<script src="https://gist.github.com/ferrywlto/ef1edf7b371d646778778436932af4ba.js"></script>

At line 5 we configure **Hangfire** with an in-memory storage instead of a persistent datastore like SQL Server; then at line 7 we set up a recurring job to execute once per minute. If you are familiar with [[cron job syntax]](https://crontab.guru/) you can pass `* * * * *` instead of `Cron.Minutely`.

We need to instantiate a `BackgroundJobServer` object to kick-start all our scheduled jobs. Finally, since this is a console program, we need a way to keep the program up and running in order to see the job executions. The line `Console.ReadLine()` at the end is for this purpose. In an ASP.NET project it is not needed.

Now run the program:

```bash
dotnet run
```

Wait a couple of minutes and you will see the job running:

![Hangfire Job Running](https://miro.medium.com/v2/resize:fit:442/format:webp/1*qUrCGR6J3mNamuUzdTCqsw.png)

 On each minute **Hangfire** executes the job we wrapped in Polly. The job will fail four times and then return a multiple of 5 on the 5th attempt.

## Conclusion

In this post we learned how to combine ****Hangfire**** and **Polly** to create a minimal automation system. By mixing various job types, scheduling options, queuing and recovery policies you can build a complex system to fit your automation needs. The sky’s the limit!

That’s it for today and hope you enjoyed it. As always, you can access the source code in my [[GitHub repository]](https://github.com/ferrywlto/Polly**Hangfire**) and stay tuned for my next **#Everything in CSharp** series. Have a good day and see you next time.

This post was originally published on [[Medium]](https://medium.com/@ferrywlto/your-automation-buddies-in-c-cbfbe77c29cb).
