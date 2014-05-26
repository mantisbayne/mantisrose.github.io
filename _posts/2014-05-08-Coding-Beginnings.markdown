---
layout: post
title:  "Coding Beginnings"
category: coding
---

It has been about a year since I first decided to learn to program, and I've already had great success.  I have a real tech job now, doing QA Engineering, so I get to work with developers every day.   I'm trying to learn more and more in the hopes of moving to dev one day.  Today, I'm remembering my beginnings.

When I first learned to program, I started with Ruby, which might be a little different from most people.  Most people probably start with HTML/CSS and web fundamentals.   I think doing this top-down approach helped me, because it taught me not to be afraid of not understanding something fully right away, which I think is important when learning to code.

I also started learning how to write SQL queries using PostgreSQL.   PostgreSQL was a great object-relational database management system for me to start with, because the queries are done on the command line.   My friend gave me a practice database of cities and states.  I also built a table of my friends and their ages.   From just that, I learned how to build a new table that linked my friends with the cities they lived in or were from.

Here was the query I used:

<div class="query" style="color:#9370DB">
<p>select</p> 
	<p>first_name, </p>
	<p>last_name, </p>
	<p>cities.name, </p>
	<p>states.name </p>
<p>from states </p>
<p>INNER JOIN cities </p>
<p>ON states.id = cities.state_id </p>
<p>INNER JOIN cities_friends </p>
<p>ON cities.id = cities_friends.city_id </p>
<p>INNER JOIN friends </p>
<p>ON cities_friends.friend_id = friends.id;</p>
</div>

The table I made looked like this:

<img src="images/friendstable.png">

After that, I became pretty obsessed with Ruby.  I practiced it on Codecademy and a few other sites every day.  Then, I started trying to actually put it to use.   For my first Ruby program, I created a program that chose a random city from my database and returned the name of the city and "... is where I'm going for spring break, baby!" Here is my code:

<div style="color:#9370DB;">
<p>require 'pg'</p>

<p>connection = PG.connect dbname: 'meredithbayne', host: 'localhost'</p>
<p>random_place = connection.exec 'select c.name, s.name from states as s inner join cities as c on s.id = c.state_id order by random() limit 10'</p>
<p>first_random_place = random_place[0]</p>

<p>puts first_random_place['name'] + ' is where I am going for spring break baby!'</p>
</div>

In order to make this work, I had to download and install a PG gem so that I could connect to PostgreSQL.   I learned all of this simply by Google-ing things and reading Ruby docs.   It was so fun to see it finally working!

Now, I'm focusing more on front-end, but I've been thinking about Ruby a lot and hope to get back into it soon.
