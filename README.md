# WebSocket Puppeteer PDF Generator

This project is a TypeScript-based WebSocket server that uses Puppeteer to generate PDFs from HTML content. Clients can connect to this WebSocket server, send HTML as a message, and receive a PDF in response.

## Features

- WebSocket server built with TypeScript.
- PDF generation from HTML using Puppeteer.
- Efficient handling of PDF generation and data transmission.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12 or higher).
- TypeScript installed globally (`npm install -g typescript`).
- Puppeteer dependencies installed on your system.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/websocket-puppeteer-pdf.git
cd websocket-puppeteer-pdf
npm install
```

## Usage

To run the server, use the following command:

```bash
npm start
```

The server will start on `localhost` with the default port `3000`. Clients can connect to the WebSocket server at `ws://localhost:3000`.

### Sending and Receiving Data

Clients should send HTML content as a string message to the WebSocket server. The server will process the HTML, generate a PDF, and send the PDF file back as a buffer.

## Development

To make changes to the project, edit the TypeScript files in the source directory. After making changes, compile the TypeScript code using:

```bash
npm run build
```

This command compiles the TypeScript files into JavaScript in the `dist` folder.

## Contributing

Contributions to the WebSocket Puppeteer PDF Generator are welcome. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please contact me at `support@promactinfo.com`.
