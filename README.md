# Daily News App

This is a simple news application that fetches and displays the latest news articles from various categories using the News API.

## Features

- Displays top headlines from different categories.
- Responsive design for different screen sizes.
- Error handling for API requests.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Easysoul1/Daily-News-App.git
    ```

2. Navigate to the project directory:

    ```bash
    cd news-app
    ```

3. Open the `index.html` file in your web browser to view the application.

### Usage

- The application will display the top headlines for the default category (general) on load.
- Click on any category button to view news articles for that category.
- Click on the "Read More" button to view the full article on the news website.

## API Key

This project uses the News API to fetch news articles. You need to provide your own API key in the `api_keys.js` file.

1. Sign up at [News API](https://newsapi.org/) to get your API key.
2. Replace the placeholder API key in `api_keys.js` with your own API key:

    ```javascript
    // filepath: /C:/Users/user/OneDrive/Desktop/news-app/api_keys.js
    // API keys
    export const apiKey = 'your-api-key-here';
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
