import "/Users/abdilatif/Desktop/MovieInfoPage/src/styles/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">MovieInfoPage</div>
      <div>
        <input type="text" placeholder="Search movies..." className="search" />
        <button className="watchlist">
          Watchlist <span>4</span>
        </button>
      </div>
    </nav>
  );
}
