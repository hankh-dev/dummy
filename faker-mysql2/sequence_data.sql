
SELECT * 
  FROM village3.sequence
 where id not in (
	select user_idx
      from village3.user
 )
 order by 1 desc