# Chat with PDF 📄🤖

**Chat with PDF** is an interactive web app that allows users to upload PDFs and engage in conversations with the document. Whether you want to ask questions, summarize content, or get insights from your PDFs, this app transforms static documents into dynamic, conversational experiences, enhancing productivity effortlessly.

## Live Demo 🌐

You can view the live demo at: [chat-with-pdf.app](https://chat-with-pdf-wdpaschetto-gmailcom-warren-paschettos-projects.vercel.app/)

## Features 🚀

- **PDF Upload**: Upload any PDF and immediately start interacting with its content.
- **Chatbot Integration**: The app's AI-powered chatbot can:
  - Answer specific questions about the document.
  - Summarize the content.
  - Extract key information for quick review.
- **Effortless Productivity**: Designed to save time by making complex document analysis simpler.
- **Responsive Design**: Optimized for various screen sizes, ensuring a smooth experience on mobile and desktop.

## Technologies Used 🛠️

- **Next.js**: React framework for building server-rendered applications.
- **React**: Core library for building interactive UI components.
- **Tailwind CSS**: Utility-first CSS framework for efficient and responsive design.
- **TypeScript**: Ensures type safety across the project.
- **Clerk**: User authentication service used for handling sign-up, sign-in, and user sessions.
- **Pinecone**: Vector database service used for advanced semantic search and similarity matching of document content.
- **Firebase**: Backend service used for storing and syncing data in real-time, as well as handling user data securely.
- **OpenAI API**: Provides the intelligence behind the chatbot’s ability to parse and interact with PDFs.

## Setting Up Environment Variables 🔑

To run this project locally and connect to the external services, you'll need to set up the following environment variables. Add them to your `.env.local` file in the root of the project.

### Clerk Authentication
Clerk is used for sign-in and user management. You'll need an API key from Clerk.

```bash
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api_key
CLERK_API_KEY=your_clerk_api_key
```

### Pinecone
Pinecone is used for vector-based semantic search on the PDF content. You need to provide your API key and environment from the Pinecone console.

```bash
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=your_pinecone_environment
```

### Firebase
Firebase is used for backend services, such as user data storage. Set up your Firebase project and add the following environment variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
```

### OpenAI API
To interact with PDFs and provide intelligent responses, the OpenAI API is used. Set up your OpenAI API key:

```bash
OPENAI_API_KEY=your_openai_api_key
```

## Installation 💻

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/WarrenPaschetto/chat-with-pdf.git
    cd chat-with-pdf
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open the app in your browser at `http://localhost:3000`.

## Usage 🎮

1. **Upload a PDF**: Click the "Get Started" button to upload your document.
2. **Ask Questions**: Interact with the document by asking questions in the chatbot interface.
3. **View Summaries**: Get a concise summary of the document’s key sections.
4. **Enhance Productivity**: Use the app to analyze documents faster, extract important points, and work more efficiently.


## License 📄

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

