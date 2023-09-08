import http from "k6/http";
import { check, sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: "10s",
};

export default function () {
  const params = {
    // cookies: { my_cookie: 'value' },
    headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYW5raC5kZXZAZ21haWwuY29tIiwiYXV0aCI6IjIiLCJleHAiOjE2OTQxODk5Nzd9.lvM9Wti3Cy7lgDH4x6TlS3YiqKtGJJ5f9CwQWu1PHtA' },
    // redirects: 5,
    // tags: { k6test: 'yes' },
  };

  const urls = [
    // 'http://billige-alb-359597768.ap-northeast-2.elb.amazonaws.com:8080/api/getRental?rentalIdx=83',
    'http://billige-alb-359597768.ap-northeast-2.elb.amazonaws.com:8080/api/getEtcRentals?page=0&rentalIdx=83&size=30',
  ];

  for (const url of urls) {
    const response = http.get(url, params);
    check(response, {
      'status is 200 OK': (r) => r.status === 200,
    });
  }
  sleep(1);
}
