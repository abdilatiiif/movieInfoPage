-// hands on project - no code completions & use of AI assistanse to write the code

# MovieInfoPage

## Dependencies

### Core Dependencies

- `react` - UI library
- `react-dom` - React DOM renderer
- `lucide-react` - Beautiful and consistent icon set

### Development Dependencies

- `vite` - Build tool and dev server
- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS transformation tool
- `autoprefixer` - Vendor prefix automation
- `eslint` - Code linting

## Project Structure

```
src/
├── components/     # Reusable UI components
├── icons/         # Centralized icon exports
├── App.jsx        # Main application component
└── main.jsx       # Application entry point
```

## Features to Implement

1. Movie Grid

   - Display movie cards with images
   - Show title, rating, and basic info
   - Implement hover effects

2. Movie Details Modal

   - Show full movie information
   - Display cast and crew
   - Add to watchlist functionality

3. Watchlist

   - Save movies to watch later
   - Persist data in localStorage
   - Remove movies from watchlist

4. Search Functionality
   - Filter movies by title
   - Real-time search results

## Styling

The project uses Tailwind CSS for styling. Key style patterns:

- Color scheme: Purple accent with dark mode design
- Consistent spacing using Tailwind's spacing scale
- Responsive design breakpoints
- Smooth transitions and hover effects

5. ## API

data:
https://www.omdbapi.com/
