# ClarityPulse

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/wellcast/generated-app-20250924-115336)

A modern landing page for a smart employee engagement platform that helps you understand team sentiment, build targeted surveys, and drive meaningful action.

ClarityPulse is a modern, minimalist landing page for a SaaS product designed to help organizations understand employee sentiment. The platform enables companies to first gauge willingness to provide open feedback, then build and deploy targeted surveys with approval workflows. It provides actionable insights and facilitates follow-ups to track progress.

## Key Features

-   **Sentiment Analysis:** Gauge employee willingness to provide open and continuous feedback.
-   **Dynamic Surveys:** Build and deploy targeted surveys on-the-go with built-in approval workflows.
-   **Actionable Insights:** The platform suggests actions based on survey results to drive meaningful change.
-   **Progress Tracking:** Follow up with employees to monitor how things are progressing after actions are taken.
-   **Modern & Responsive:** A visually stunning, minimalist design that works flawlessly on all devices.
-   **Interactive UI:** Smooth animations and micro-interactions for a delightful user experience.

## Technology Stack

-   **Frontend:**
    -   [React](https://react.dev/)
    -   [Vite](https://vitejs.dev/)
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [shadcn/ui](https://ui.shadcn.com/)
    -   [Framer Motion](https://www.framer.com/motion/)
    -   [Lucide React](https://lucide.dev/)
-   **Backend:**
    -   [Cloudflare Workers](https://workers.cloudflare.com/)
    -   [Hono](https://hono.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Package Manager:** [Bun](https://bun.sh/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) for Cloudflare Workers development.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/claritypulse-saas-landing.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd claritypulse-saas-landing
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To run the development server, which includes both the Vite frontend and the Hono backend on Cloudflare Workers, use the following command:

```sh
bun dev
```

This will start the application, typically available at `http://localhost:3000`. The frontend will hot-reload on changes, and the worker will restart automatically.

## Deployment

This project is configured for seamless deployment to Cloudflare Pages.

1.  **Build the project for production:**
    ```sh
    bun build
    ```
2.  **Deploy to Cloudflare:**
    ```sh
    bun deploy
    ```

This command will build the frontend application and deploy it along with the worker to your Cloudflare account.

Alternatively, you can deploy directly from your GitHub repository using the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/wellcast/generated-app-20250924-115336)

## Project Structure

-   `src/`: Contains the React frontend application source code.
    -   `pages/`: Main page components.
    -   `components/`: Reusable UI components, including sections and layouts.
    -   `lib/`: Utility functions and libraries.
-   `worker/`: Contains the Cloudflare Worker (Hono backend) source code.
-   `shared/`: Contains TypeScript types and data shared between the frontend and the worker.
-   `public/`: Static assets that are served directly.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.