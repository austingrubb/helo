insert into post(id, title, img, content, auther_id) values($1,$2,$3,$4,$5)
RETURNING *;