import http from "k6/http";
import { check, sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: "10s",
};

export default function () {
  const params = {
    // cookies: { my_cookie: 'value' },
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW5raC5kZXZAZ21haWwuY29tIiwiYXV0aCI6IjIiLCJleHAiOjE2OTQxOTgxNDZ9.9uzr_6gt-qkyB7gKycWLC2J4Mhw0sqgWh1LDFKzco3M' },
    // redirects: 5,
    // tags: { k6test: 'yes' },
  };

  const res = http.get("http://43.201.183.140:8083/greeting", params);
  // const res = http.get("http://localhost:8080/greeting", params);


  sleep(1);
  check(res, { 'status was 200': (r) => r.status == 200 });
  // console.log(res);
}
