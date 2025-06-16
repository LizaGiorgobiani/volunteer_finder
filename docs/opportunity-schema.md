# Opportunity Schema

## TypeScript Interface

```ts
export interface Opportunity {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;   // Format: YYYY-MM-DD
  type: string;
}

| Field       | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| id          | string | Unique identifier                   |
| title       | string | Name of opportunity                 |
| description | string | What the volunteer will do          |
| location    | string | Where the opportunity is located    |
| date        | string | Date of the event                   |
| type        | string | Category (e.g. environment, health) |

#Sample json

{
  "id": "1",
  "title": "Beach Cleanup",
  "description": "Clean litter from the coastline.",
  "date": "2024-08-01",
  "location": "San Diego, CA",
  "type": "environment"
}
```
