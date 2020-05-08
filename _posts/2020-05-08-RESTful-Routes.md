---
title: "RESTful Routes Reminder"
header:
categories:
  - tips
tags:
  - RESTful-Routes  
  - reminder
---

| **URL** | **HTTP Verb** |  **Action**|**Mongoose**|
|------------|-------------|------------|-----------|
| /blogs/         | GET       | index  | Dog.find() |
| /blogs/new         | GET       | new   | N/A |
| /blogs          | POST      | create   | Dog.create() |
| /blogs/:id      | GET       | show     | Dog.findById() |
| /blogs/:id/edit | GET       | edit     | Dog.findById() |
| /blogs/:id      | PATCH/PUT | update   | Dog.findByIdAndUpdate() |
| /blogs/:id      | DELETE    | destroy  | Dog.findByIdAndRemove() |