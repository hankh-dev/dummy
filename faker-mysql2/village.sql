UPDATE rental A 
 INNER JOIN user B ON A.user_idx=B.user_idx
   SET A.lead_town=B.lead_town
     , A.town_1=B.town_1
     , A.town_2=B.town_2
     , A.town_3=B.town_3
     , A.town_4=B.town_4
 WHERE A.rental_idx>=33


