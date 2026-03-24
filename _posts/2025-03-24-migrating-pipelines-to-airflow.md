---
layout: post
title: "How I migrated our data pipelines from cron to Airflow"
date: 2025-03-24
tags: [airflow, gcp, data-engineering]
excerpt: "Moving from cron jobs on a VM to Cloud Composer was one of the best decisions we made as a data team — here's what I learned along the way."
---

> **Note:** This is a sample draft post to show how writing works on this site.
> Replace or delete this file when you're ready to publish your first real post.

When I joined REV Media Group in 2021, the data team's pipelines were all running
as cron jobs on a single Google Compute Engine VM. It worked — until it didn't.

## The problem with cron

The issue isn't that cron is bad. It's that cron tells you nothing. A job either
ran or it didn't, and if it failed halfway through, you'd find out the next morning
when someone noticed the dashboard hadn't updated.

...

## Why Airflow changes everything

With Airflow, every pipeline is a DAG — a Directed Acyclic Graph of tasks with
explicit dependencies between them. You can see at a glance what ran, what failed,
and exactly where it broke.

...

## What the migration looked like

The approach we took was incremental rather than a big bang cutover...

---

*To write your next post, create a new file in `_posts/` following the format
`YYYY-MM-DD-your-title.md` and it will appear here automatically.*