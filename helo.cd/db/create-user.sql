insert into users(id, username, password, profile_pic) values($1,$2,$3,$4)
RETURNING *;