# api-response-kit

**api-response-kit** provides reusable TypeScript interfaces and utilities for handling API responses. It helps standardize and simplify API response structures across backend and frontend applications.

## Features

- Strongly typed interfaces for API responses.
- Reusable across multiple projects.
- Supports pagination, notifications, and validations in responses.

## Installation

To install the package via npm:

```typescript
npm install api-response-kit

Usage

After installation, you can import the interfaces in your TypeScript code like this:

import { IResponseJson } from 'api-response-kit';

const response: IResponseJson = {
  okay: true,
  statusCode: 200,
  result: { data: 'sample data' },
  meta: { page: 1, totalPages: 5, count: 100, perPage: 20, totalCount: 500 },
  notification: { text: 'Operation successful', type: 'success' },
  validation: { field1: 'Error message' }
};
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests to improve the package.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
