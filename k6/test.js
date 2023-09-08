import http from "k6/http";
import { check, sleep } from 'k6';

export const options = {
  vus: 100,
  duration: "10s",
};

export default function () {
  const params = {
    // cookies: { my_cookie: 'value' },
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW5raC5kZXZAZ21haWwuY29tIiwiYXV0aCI6IjIiLCJleHAiOjE2OTQxOTgxNDZ9.9uzr_6gt-qkyB7gKycWLC2J4Mhw0sqgWh1LDFKzco3M' },
    // redirects: 5,
    // tags: { k6test: 'yes' },
  };

  // const res = http.get("http://localhost:8080/api/v4/getMainList?status=0&filter=0&categories=&towns=&keyword=&page=0&size=10", params);
  // const res = http.get("http://localhost:8080/api/v4/getMainList?status=0&filter=0&categories=1&categories=10&towns=1&towns=2&page=0&size=10", params);


  // const res = http.get("http://43.200.58.37:8080/api/v6/getMainList?status=0&filter=0&size=10&page=0&categories=9&categories=2&towns=1&towns=2", params);
  // const res = http.get("http://43.200.58.37:8080/api/v4/getMainList?status=0&filter=0&categories=1&categories=10&towns=1&towns=2&page=0&size=10", params);


  // const res = http.get("http://52.78.28.64:8080/api/v4/getMainList?status=0&filter=0&categories=&towns=&keyword=&page=0&size=10", params);
  // const res = http.get("http://52.78.28.64:8080/api/v4/getMainList?status=0&filter=0&categories=1&categories=10&towns=1&towns=2&page=0&size=10", params);


  const res = http.get("http://billige-alb-359597768.ap-northeast-2.elb.amazonaws.com:8080/api/v6/getMainList?status=0&filter=0&size=10&page=0&categories=9&categories=2&towns=1&towns=2", params);
  // const res = http.get("http://billige-alb-359597768.ap-northeast-2.elb.amazonaws.com:8080/api/v4/getMainList?status=0&filter=0&categories=&towns=&keyword=&page=0&size=10", params);


  sleep(1);
  check(res, { 'status was 200': (r) => r.status == 200 });
  // console.log(res);
}
