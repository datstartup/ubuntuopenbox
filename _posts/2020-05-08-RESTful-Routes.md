---
title: "RESTful Routes Reminder"
header:
categories:
  - tips
tags:
  - RESTful-Routes  
  - reminder
---

I get this table from a course by Colt Steele (best teacher ever!). Put here just as an easy to reach reference.

| **URL** | **HTTP Verb** |  **Action**|**Mongoose**| **Purpose**|
|------------|-------------|------------|-----------|------------|
| /blogs/         | GET       | index  | Dog.find() | List all dogs|
| /blogs/new         | GET       | new   | N/A | Show a form to add dog|
| /blogs          | POST      | create   | Dog.create() | Create a new dog, then redirect somewhere |
| /blogs/:id      | GET       | show     | Dog.findById() | Show info about one specific dog |
| /blogs/:id/edit | GET       | edit     | Dog.findById() | Show edit form for one dog |
| /blogs/:id      | PATCH/PUT | update   | Dog.findByIdAndUpdate() | Update a specific dog then redirect somewhere |
| /blogs/:id      | DELETE    | destroy  | Dog.findByIdAndRemove() | Delete a specific dog then  redirect somewhere |